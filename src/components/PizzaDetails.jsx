import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PizzaDetails()
{
    const param = useParams();
    const [pizza, setPizza] = useState([])
    
    useEffect(() => {
        fetch(`https://pizza.kando-dev.eu/Pizza/${param.id}`)
        .then(response => response.json())
        .then(data=>
            setPizza(data)
        )
        .catch(error=>
            console.log("nincs ilyen pizza", error)
        )
    })
    return(
        <div>
            <div>
                <div key={pizza.id}>
                    <img src={pizza.kepURL} alt={pizza.name}/>
                    <div>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.isGlutenfree ? "gluténmentes" : "Glutén mentes"}</p>
                        <Link to={"/pizza-modositas/" + pizza.id}><button>módosítás</button></Link>
                        <Link to={"/pizza-torles/" + pizza.id}><button>törlés</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaDetails;