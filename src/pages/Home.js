import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CocktailCard from "../components/CocktailCard"
import Loader from "../components/Loader";
import './Home.css'

const Home = () =>{

  const [cocktails,setCocktails] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const getData = async () =>{
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      const {drinks} = await response.json()
      setCocktails(drinks)
      setTimeout(()=>{
        setLoading(false)
      },1300)
    }
    getData()
  },[])

  if(loading){
    return (
      <Loader />
    )
  } else{
    return(
      <div className="cards">
      {cocktails.map(el => {
        return <Link to={`/cocktail/${el.idDrink}`} key={el.idDrink} className="card"><CocktailCard info={el}/></Link>
      })}
    </div>
    )
  }
}

export default Home