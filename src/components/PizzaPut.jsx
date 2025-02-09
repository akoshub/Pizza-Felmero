import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

export const PizzaPut=()=>
{
    const parameter = useParams();
    const id = parameter.id;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState({
        name: "",
        isGlutenFree: 0,
        kepURL: ""
    })

    useEffect(() => {
        const fetchPizza = async () =>{
            try {
                const response = await fetch("https://pizza.kando-dev.eu/Pizza/"+id)
                const adat = await response.json()
                setPizza(adat);
            } catch (error) {
                console.log("Hiba a lekérdezésekor! ", error);
            }
        }
        fetchPizza();
    }, [id]);

    const inputValtozasKezeles = event =>
    {
        const {name, value} = event.target;
        setPizza(allapot=>({
            // a ...allapot másolja az összes meglévő tulajdonságot, és csak azt az egy mezőt frissíti amelynek megegyezik a neve event.target.name értékével.
            ...allapot,
            [name]: value
        }))
    }

    const radioValtozasKezeles = event =>
        {
            setPizza(allapot=>({
                // a ...allapot másolja az összes meglévő tulajdonságot, és csak azt az egy mezőt frissíti amelynek megegyezik a neve event.target.name értékével.
                ...allapot,
                isGlutenFree: parseInt(event.target.value)
            }))
        }

    const valtozasMentes = event=>{
        event.preventDefault();
        try {
            fetch(`https://pizza.kando-dev.eu/Pizza/${id}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(pizza)
            })
            .then(response=>{
                return response.json
            })
            .then(()=>{
                navigate("/")
            })
        }
        catch (error)
        {
            console.log("hiba a módotítás során!", error);
        }
    }

    return(
        <div>
        <h2>Új pizza</h2>
        <form onSubmit={ valtozasMentes }>
            <div>
                    <label>Pizza neve:</label>
                    <div>
                        <input type="text" name="name" defaultValue={pizza.name} onChange={inputValtozasKezeles}/>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" name="isGlutenFree" value='0' checked={pizza.isGlutenFree===0} onChange={radioValtozasKezeles}/>
                        <label for="gluten">Gluténmentes</label>
                        <input type="radio" name="isGlutenFree" value="1" checked={pizza.isGlutenFree===1} onChange={radioValtozasKezeles}/>
                        <label for="gluten">Glutént tartalmaz</label>
                    </div>
                </div>
                <div>
                    <label>Pizza képe:</label>
                    <div>
                        <input type="text" name="kepURL" defaultValue={pizza.kepURL} onChange={inputValtozasKezeles}/>
                    </div>
                </div>
                <button type="submit">Küldés</button>
        </form>
        <div>
            <Link to="/">vissza</Link>
        </div>
        </div>
    )
}

export default PizzaPut;