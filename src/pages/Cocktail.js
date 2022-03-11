import { useEffect, useState, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CocktailInfo from "../components/CocktailInfo"
import Loader from "../components/Loader"
import getIngredientsWithQuantity from "../helpers/getIngredientsWithQuantity"


const Drink = () =>{
    const {id} = useParams()
    const navigate = useNavigate()
    const [ingredients,setIngredients] = useState([])
    const [drink,setDrink] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = useCallback( async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {drinks} = await response.json()
        if(drinks){
            setDrink(drinks[0])
            setTimeout(()=>{
                setLoading(false)
            },1300)
            setIngredients(getIngredientsWithQuantity(drinks[0]))
        }else{
            return navigate('/404')
        }
    },[id])

    useEffect(()=>{
        getData()
    },[getData])

    if(loading){
        return (
            <Loader />
        )
    }else{
        return (
            <CocktailInfo info={drink} ingredients={ingredients} />
        )
    }

}

export default Drink  