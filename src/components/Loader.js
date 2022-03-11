import cocktail from '../resources/cocktail.png'
import './Loader.css'
const Loader = () =>{
    return(
        <div className='loader'>
            <img src={cocktail} alt="cocktail" width="70px"/>
        </div>
    )
}

export default Loader