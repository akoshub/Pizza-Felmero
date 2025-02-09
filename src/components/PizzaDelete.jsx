import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const PizzaDelete = ()=>{
    const parameter=useParams();
    const id = parameter.id;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState({})

    useEffect(()=>{
        fetch(`https://pizza.kando-dev.eu/Pizza/${id}`)
        .then(response=>response.json())
        .then(adat=>setPizza(adat))
        .catch(error=>console.log("Hiba", error))
    },[id])


    return(
        <article>
            <h2>Pizzák</h2>
            <div>
            <div key={pizza.id}>
                    <img src={pizza.kepURL} alt={pizza.name}/>
                    <div>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.isGlutenfree ? "gluténmentes" : "Glutén mentes"}</p>
                    </div>
                </div>
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    fetch(`https://pizza.kando-dev.eu/Pizza/${id}`,{
                        method: "DELETE"
    
                    })
                    .then(()=>navigate("/"))
                    .catch(error=>console.log("Hiba"+ error))
                }}>
                    <Link to="/">Vissza</Link>
                    <button type="submit">törlés</button>
                </form>
            </div>
        </article>
    )
}

export default PizzaDelete;