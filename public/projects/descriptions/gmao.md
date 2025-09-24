Ce projet, une application web complète, a été conçue pour répondre aux besoins de plusieurs types d'utilisateurs, des techniciens sur le terrain aux administrateurs en back-office.  
En tant que développeur full-stack, j'ai été responsable de l'ensemble du cycle de vie du projet, de la conception de l'architecture à la mise en production.  

### Technologies utilisées

- **Front-end** : React, React Query  
- **Back-end** : Symfony, API Platform  
- **Base de données** : MySQL  
- **Moteur de recherche** : MeiliSearch  
- **Déploiement** : Serveur VPS (installation et configuration de Apache, PHP-FPM et MeiliSearch)
- **Outils** : Git, Github, Trello


### Rôle et responsabilités 

En tant que développeur full-stack, mon rôle a consisté à concevoir et à implémenter l'intégralité de l'application.  
Plus précisément, j'ai :  

- Développé l'interface utilisateur côté client en **React**, en intégrant des fonctionnalités dynamiques avec **React Query** pour la gestion des données.  
- Créé l'API RESTful avec **Symfony** et **API Platform** pour gérer la logique métier et les interactions avec la base de données.  
- Assuré le **déploiement de l'application sur un serveur VPS**, en configurant l'environnement (**Apache, PHP-FPM**) pour une performance optimale.

### Défis et solutions

   ###### 1. Recherche rapide et pertinente sur un grand volume de données

<u>**Défi**</u> : Le projet nécessitait une méthode de recherche ultra-rapide capable de traiter des dizaines de milliers d'enregistrements avec plusieurs champs et des relations complexes. Une recherche MySQL classique n'aurait pas été assez performante.  

<u>**Solution**</u> : J'ai mis en place un moteur de recherche **MeiliSearch**.  
J'ai indexé les données clés pour permettre une recherche instantanée et pertinente, améliorant considérablement l'expérience utilisateur.  

   ###### 2. Optimisation de la performance pour une utilisation sur le terrain

<u>**Défi**</u> : L'application était destinée à être utilisée par des techniciens sur des appareils mobiles, nécessitant une interface légère et rapide.  
L'utilisation de bundles CSS ou de frameworks de composants lourds aurait pu alourdir l'application.<br>

<u>**Solution**</u> : J'ai pris la décision de développer **manuellement la majorité des composants** et d'utiliser **SCSS** pour le style.  
Cette approche m'a permis de contrôler le poids de l'interface et de garantir une performance fluide, même sur des connexions moins stables.  
