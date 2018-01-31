export function authHeader() {
    // Renvoie l'en-tête d'autorisation avec jwt
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}