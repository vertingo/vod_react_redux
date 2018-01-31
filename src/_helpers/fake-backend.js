// tableau dans le stockage local pour les utilisateurs enregistrés
let users = JSON.parse(localStorage.getItem('users')) || [];
    
export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // Envelopper dans timeout pour simuler l'appel api du serveur
            setTimeout(() => {

                // authentifier
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // obtenir les paramètres de la demande de publication
                    let params = JSON.parse(opts.body);

                    // Rechercher si un utilisateur correspond aux informations d'identification de connexion
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // si les détails de connexion sont valides, retournez les détails de l'utilisateur et fake jeton jwt
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, json: () => responseJson });
                    } else {
                        // sinon, erreur de retour
                        reject('Pseudo et mot de passe incorrect!');
                    }

                    return;
                }

                // obtenir des utilisateurs
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // vérifier le faux jeton d'authentification dans l'en-tête et renvoyer les utilisateurs si valide, cette sécurité est implémentée côté serveur dans une application réelle
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, json: () => users });
                    } else {
                        // return 401 non autorisé si token est nul ou invalide
                        reject('Unauthorised');
                    }

                    return;
                }

                // obtenir l'utilisateur par identifiant
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // vérifier le faux jeton d'authentification dans l'en-tête et renvoyer l'utilisateur si valide, cette sécurité est implémentée côté serveur dans une application réelle
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id dans le tableau des utilisateurs
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // répondre 200 OK avec l'utilisateur
                        resolve({ ok: true, json: () => user});
                    } else {
                        // return 401 non autorisé si token est nul ou invalide
                        reject('Unauthorised');
                    }

                    return;
                }

                // enregistrer l'utilisateur
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // Obtenir un nouvel objet utilisateur depuis le corps du message
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // enregistrer un nouvel utilisateur
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // reponse 200 OK
                    resolve({ ok: true, json: () => ({}) });

                    return;
                }

                // Supprimer l'utilisateur
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // vérifier le faux jeton d'authentification dans l'en-tête et renvoyer l'utilisateur si valide, cette sécurité est implémentée côté serveur dans une application réelle
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // trouver un utilisateur par id dans le tableau des utilisateurs
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // Supprimer l'utilisateur
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // reponse 200 OK
                        resolve({ ok: true, json: () => ({}) });
                    } else {
                        // retourne erreur 401 non autorisé si token est nul ou invalide
                        reject('Unauthorised');
                    }

                    return;
                }

                // passer par toutes les demandes non traitées ci-dessus
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}