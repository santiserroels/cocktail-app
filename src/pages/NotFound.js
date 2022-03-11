import { Link } from 'react-router-dom'
import cocktail from '../resources/broken-glass.png'
import './NotFound.css'

const NotFound = () =>{
    return(
        <div className='not-found'>
            <img src={cocktail} alt="cocktail" width="70px"/>
            <h3>Page Not Found</h3>
            <Link to='/'>Back to home</Link>
        </div>
    )
}

export default NotFound