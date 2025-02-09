import { useNavigate, Link } from "react-router-dom";

function PizzaAdd()
{
    const navigate=useNavigate();

    return(
        <div>
        <h2>Új pizza</h2>
        <form onSubmit={
            (event) => {event.preventDefault();
                const formAdat={
                    name: event.target.name.value,
                    isGlutenFree: parseInt(event.target.isGlutenFree.value),
                    kepURL: event.target.kepURL.value,
                };
                console.log(formAdat)
                fetch("https://pizza.kando-dev.eu/Pizza", {
                    method:"POST",
                    headers: {'content-type' : 'application/json'},
                    body:JSON.stringify(formAdat)
                })
                .then(response=>response.text())
                .then(()=>navigate("/"))
                .catch(error=>{console.log("Hiba az adat felvitelekor: ", error);})
            }
        }>
            <div>
                    <label>Pizza neve:</label>
                    <div>
                        <input type="text" name="name"/>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" name="isGlutenFree" value='0'/>
                        <label for="gluten">Gluténmentes</label>
                        <input type="radio" name="isGlutenFree" value="1"/>
                        <label for="gluten">Glutént tartalmaz</label>
                    </div>
                </div>
                <div>
                    <label>Pizza képe:</label>
                    <div>
                        <input type="text" name="kepURL"/>
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

export default PizzaAdd;