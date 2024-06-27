Dashboard React avec Visualisation de Données

Ce projet est un tableau de bord développé en React et next.js pour visualiser et filtrer des données à partir d'un fichier JSON. Il utilise des composants pour afficher des graphiques représentant différentes statistiques basées sur les filtres sélectionnés.

Fonctionnalités
1. Filtrage Dynamique : Utilisation de dropdowns pour filtrer les données par saison, niveau et type de passe.
2. Calcul du Prix Moyen : Calcul automatique du prix moyen des données filtrées.
3. Visualisation Graphique : Affichage des données filtrées sous forme de graphiques représentant la quantité moyenne par niveau, par saison et par groupe d'âge.

Composants Principaux
1. FilterBar Component : Composant contenant les dropdowns pour sélectionner les filtres de saison, niveau et passe.
2. PriceDisplay Component : Affiche le prix moyen des données filtrées.
3. BarChart Component : Graphique représentant la quantité par niveau.
4. SaisonBarChart Component : Graphique représentant la quantité par saison.
5. AgeGroupBarChart Component : Graphique représentant la quantité par groupe d'âge.

Installation
1. Clonez le repository : https://github.com/christie2901/TestCivision.git
2. Installez les dépendances : npm install

Lancez l'application : npm run dev

Données
Les données sont chargées à partir du fichier JSON database.json situé dans le dossier src/app/component/.
