import React, { useState } from "react";

function App() {
    const [tirage, setTirage] = useState(0);
    const [historiqueTirage, setHistoriqueTirage] = useState([]);
    const [nombreMax, setNombreMax] = useState(90); // Ajout du nombre maximum

    const tirerAuSort = () => {
        if (historiqueTirage.length >= nombreMax) {
            alert("plus aucuns tirage dispo, arrete de cliquer");
            return;
        }
        let nouveauTirage;
        do {
            nouveauTirage = Math.floor(Math.random() * nombreMax) + 1;
        } while (historiqueTirage.includes(nouveauTirage)); // Tirer un nouveau nombre si déjà tiré
        setTirage(nouveauTirage);
        setHistoriqueTirage([...historiqueTirage, nouveauTirage]);
    };

    const handleNombreMaxChange = (event) => {
        setNombreMax(Number(event.target.value)); // Mettre à jour le nombre maximum
    };

    return (
        <div className="test">
            <h1>Tirage du Loto</h1>
            <p>Nombre tiré au sort : {tirage}</p>
            <button onClick={tirerAuSort}>Tirer au sort</button>
            <input
                id="number"
                type="number"
                placeholder="Nombre maximum"
                value={nombreMax}
                onChange={handleNombreMaxChange}
            />
            <h2 className="histo">Historique des tirages :</h2>
            <ul className="histo">
                {historiqueTirage.map((tirage, index) => (
                    <li key={index}>{tirage}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
