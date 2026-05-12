document.getElementById("btnMeteo").addEventListener("click", () => {

    const codeInsee = document.getElementById("commune").value;

    afficherMeteo(codeInsee);

});

const apiUrl = "https://api.meteo-concept.com/api/ephemeride/0?token=e7fad8474d67fe4f39ebe860eef8b2adde30f15fe739b86a832b627ea086f241";

async function afficherMeteo(codeInsee) {

    try {

        
        const response = await fetch(`${apiUrl}&insee=${codeInsee}`);

       
        const data = await response.json();

        console.log(data);

        
        const leverSoleil = data.ephemeride.sunrise;
        const coucherSoleil = data.ephemeride.sunset;
        const dureeJour = data.ephemeride.duration_day;
        const differenceJour = data.ephemeride.diff_duration_day;

        
        document.getElementById("sunrise").textContent = leverSoleil;
        document.getElementById("sunset").textContent = coucherSoleil;
        document.getElementById("duration").textContent = dureeJour;
        document.getElementById("difference").textContent = differenceJour;

    } catch (error) {

        console.error("Erreur API :", error);

    }
}

