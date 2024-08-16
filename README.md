![Image](https://raw.githubusercontent.com/vertingo/Easy_Admin_YouTube_Newsletter_Firebase/master/web/assets/images/github/vertin_go_website.jpg)
### 🌐 Apporter votre soutien au projet :heart: pour de futures évolutions!
[![GitHub stars](https://img.shields.io/github/stars/vertingo/screenshott.svg?style=social&label=Star)](https://github.com/vertingo/VOD_React_Redux) [![GitHub forks](https://img.shields.io/github/forks/vertingo/screenshott.svg?style=social&label=Fork)](https://github.com/vertingo/VOD_React_Redux/fork) [![GitHub watchers](https://img.shields.io/github/watchers/vertingo/screenshott.svg?style=social&label=Watch)](https://github.com/vertingo/VOD_React_Redux) [![GitHub followers](https://img.shields.io/github/followers/vertingo.svg?style=social&label=Follow)](https://github.com/vertingo)
[![Twitter Follow](https://img.shields.io/twitter/follow/Vertin_Go.svg?style=social)](https://twitter.com/Vertin_Go)
[![Facebook](https://img.shields.io/badge/Facebook-vertingo-blue?style=social&logo=facebook)](https://www.facebook.com/vertingo)
[![YouTube Subscribe](https://img.shields.io/youtube/channel/subscribers/UC2g_-ipVjit6ZlACPWG4JvA?style=social)](https://www.youtube.com/channel/UC2g_-ipVjit6ZlACPWG4JvA?sub_confirmation=1)

# 🌐 Projet VOD React Redux
![App Progress Status](https://img.shields.io/badge/Status-Finished-0520b7.svg?style=plastic)
[![Download](https://img.shields.io/badge/Download-Repo-brightgreen)](https://github.com/vertingo/vod_react_redux/archive/refs/heads/main.zip)

<!-- BEGIN LATEST DOWNLOAD BUTTON -->
[![Download zip](https://custom-icon-badges.demolab.com/badge/-Download-blue?style=for-the-badge&logo=download&logoColor=white "Download zip")](https://github.com/vertingo/vod_react_redux/archive/1.0.2.zip)
<!-- END LATEST DOWNLOAD BUTTON -->

# 🌐 React-redux-inscription-exemple

React + Redux - Authentification d'utilisateur + Recherche VOD

# 🌐 React-redux-installation

Pour lancer l'application:
```bash
npm install
```

puis:
```bash
npm start
```
# 🌐 React-redux-description-du-projet

Le projet possède une structure de type react-redux qui a comme spécifité
d'enregistrer sous forme d'un store l'ensemble des états émis par les actions des utilisateurs! Le dossier actions contient l'ensemble des méthodes pour la gestion de la connexion, déconnexion, enregistrement, suppression d'utilisateur, récupération des films via l'api omdbapi, qui possède tout un reducers afin d'enregistrer via la méthode dispatch leur état auprès du store qui contient l'ensemble des reducers! Enfin le dossier _services contient les services qui permettent d'utiliser le service de stockage local afin d'enregistrer les données utilisateurs le tout sécurisé grâce au JWT(Json Web Tokens) qui notamment permet de sécurisé les différents échanges entre le support de stockage local et le côté client de l'application! Le programme ne fonctionne pas complèment il manque juste la réception des données via le fetch dans le fichier movies qui n'aboutit pas:

return fetch(`http://www.omdbapi.com/?s=${s}&type=movie`)

Je ne vois pourquoi et malgrè que l'ensemble du projet compile correctement le fait de rajouter le component movies dans App/App.jsx

//import { Movies } from '../Movies';

empêche la page d'accueil de s'afficher correctement!

