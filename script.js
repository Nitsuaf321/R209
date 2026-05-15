const CLE_API_METEO = "e7fad8474d67fe4f39ebe860eef8b2adde30f15fe739b86a832b627ea086f241"; 
const champCodePostal = document.getElementById('cp');
const boutonChercherCommunes = document.getElementById('btn-chercher-communes');
const zoneEtape2 = document.getElementById('zone-etape-2');
const listeCommunes = document.getElementById('commune');
const boutonValider = document.getElementById('btn-valider');
const formulaireMeteo = document.getElementById('formulaire-meteo');
const sectionResultats = document.getElementById('resultats');


boutonChercherCommunes.addEventListener('click', () => {
    const valeur = champCodePostal.value.trim();
    
    /
    sectionResultats.classList.add('cache');

    if(valeur.length === 5) {
        chercher_ville(valeur);
    } else {
        alert("Veuillez entrer un code postal valide à 5 chiffres.");
    }
});


champCodePostal.addEventListener('input', () => {
    zoneEtape2.classList.add('cache');
    sectionResultats.classList.add('cache');
});

function chercher_ville(codePostal) {
    const url = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`;
    
    fetch(url)
        .then(reponse => reponse.json())
        .then(donnees => {
            listeCommunes.innerHTML = ''; 

            if (donnees.length > 0) {
                const optionDefaut = document.createElement('option');
                optionDefaut.value = "";
                optionDefaut.textContent = "Sélectionnez votre commune...";
                listeCommunes.appendChild(optionDefaut);

                donnees.forEach(ville => {
                    const option = document.createElement('option');
                    option.value = ville.code; 
                    option.textContent = ville.nom;
                    listeCommunes.appendChild(option);
                });
                
                
                zoneEtape2.classList.remove('cache');

            } else {
                alert("Aucune ville trouvée pour ce code postal.");
            }
        })
        .catch(erreur => console.error("Erreur API Géo :", erreur));
}


formulaireMeteo.addEventListener('submit', function(evenement) {
    evenement.preventDefault();

    const codeInsee = listeCommunes.value;
    
    if (!codeInsee) {
        alert("Veuillez choisir une commune dans la liste !");
        return;
    }

    fetch(`https://api.meteo-concept.com/api/forecast/daily/0?token=${CLE_API_METEO}&insee=${codeInsee}`)
        .then(reponse => reponse.json())
        .then(donnees => {
            
            sectionResultats.classList.remove('cache');

            const previsions = donnees.forecast;

            document.getElementById('nom-ville').textContent = donnees.city.name;
            document.getElementById('t-min').textContent = previsions.tmin;
            document.getElementById('t-max').textContent = previsions.tmax;
            document.getElementById('proba-pluie').textContent = previsions.probarain;
            document.getElementById('soleil').textContent = previsions.sun_hours;
        })
        .catch(erreur => {
            console.error("Erreur API Météo :", erreur);
        });
});