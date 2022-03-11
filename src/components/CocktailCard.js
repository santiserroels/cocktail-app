import { useEffect, useState } from "react"
import getIngredients from "../helpers/getIngredients"


const CocktailCard = ({info}) =>{
  const id = info.idDrink
  const [ingredients,setIngredients] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const {drinks} = await response.json()
      setIngredients(getIngredients(drinks[0]))
    }
    getData()
  },[id])

    return(
      <>
        <div>
          <h3>{info.strDrink}</h3>
          <ul>
            {ingredients.map((el,i)=>{
              if(el && i < 2){
                return <li key={i}>{el}</li>
              }
              if(el && i === 2 ){
                return <p key={i}>{`and ${el} ingredients more`}</p>
              }
              return "We don't have that info"
            })}
          </ul>
        </div>
        <div>
          <div className="img-container">
            <img src={info.strDrinkThumb} alt={info.strDrink}/>
          </div>
        </div>
      </>
    )
}

export default CocktailCard