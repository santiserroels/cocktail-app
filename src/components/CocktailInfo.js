import { Link } from "react-router-dom"
import arrow from "../resources/arrow.png"
import './CocktailInfo.css'

const CocktailInfo = ({info,ingredients}) =>{
    return(
        <div className="cocktail-info">
            <div className="title">
                <Link to="/"><img src={arrow} width="40px" alt="arrow"/></Link>
                <h2>{info.strDrink}</h2>
            </div>
            <div className="info">
                <img src={info.strDrinkThumb} width='100%' alt={info.strDrink}/>
                <div className="text">
                    {ingredients.map(el =>{
                        return <p key={el}>{el}</p>
                    })}
                    <h3>How to prepare</h3>
                    <p>{info.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default CocktailInfo