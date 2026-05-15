# Readme du projet R209
- username:Nitsuaf321
- adresse mail: Nitsuaf321@gmail.com
- mot de passe :\*R209météoconcept\*
# Token c'est la clé API
- e7fad8474d67fe4f39ebe860eef8b2adde30f15fe739b86a832b627ea086f241
# Lien avec la clé API
- https://api.meteo-concept.com/api/ephemeride/0?token=e7fad8474d67fe4f39ebe860eef8b2adde30f15fe739b86a832b627ea086f241
  # Lien du site Github
  -  https://nitsuaf321.github.io/R209/
##  Fonctionnement du site

Le site permet de consulter les prévisions météo du jour pour n'importe quelle commune en France. 
Pour que ça soit fluide, on a mis en place un parcours en deux étapes :
1. L'utilisateur rentre un code postal (ex: 27200) et le valide.
2. Le site interroge l'API du gouvernement pour générer une liste déroulante des communes correspondantes.
3. L'utilisateur choisit sa ville, valide, et la carte météo apparaît avec la T° min, la T° max, la probabilité de pluie et l'ensoleillement.

## Technologies utilisées

On est restés sur du code natif ("Vanilla"), sans framework compliqué :
* **HTML5** : Structure de base, formulaire.
* **CSS3** : Mise en page de type "Dashboard" avec un effet *Glassmorphism* (verre dépoli) pour un rendu moderne.
* **JavaScript** : Gestion des événements (clics, saisie) et appels réseau (`fetch`).

**Les deux APIs :**
* [API Géo du Gouvernement](https://geo.api.gouv.fr/decoupage-administratif/communes) : Essentielle pour convertir le code postal saisi en "Code INSEE", seule donnée comprise par l'API Météo.
* [API MétéoConcept](https://api.meteo-concept.com/) : Récupération des données météorologiques du jour (`daily/0`).
