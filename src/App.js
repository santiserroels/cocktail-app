import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cocktail from './pages/Cocktail'
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

const App = () =>{

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cocktail/:id" element={<Cocktail />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
