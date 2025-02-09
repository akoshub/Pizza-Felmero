import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PizzaList()
{
    const [pizzak, setPizzak] = useState([]);

    useEffect(() => {
        fetch('https://pizza.kando-dev.eu/Pizza', {
            method:"GET"
        })
        .then(response => response.json())
        .then(adat=>setPizzak(adat))
        .catch(error => {
            console.log("Hiba a pizzák lekérdezésekor:", error);
        })
    }, [])

    return(
        <div>
            <h2>Pizzák</h2>
            <div>
                {pizzak.map(pizza =>(
                    <div key={pizza.id}>
                        <img src={pizza.kepURL} alt={pizza.name}/>
                        <div>
                            <h3>{pizza.name}</h3>
                            <p>{pizza.isGlutenfree ? "gluténmentes" : "Glutén mentes"}</p>
                            <Link to={`/Pizza/${pizza.id}`}>Részletek</Link>
                            <Link to={"/pizza-modositas/" + pizza.id}><button>módosítás</button></Link>
                            <Link to={"/pizza-torles/" + pizza.id}><button>törlés</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PizzaList;