import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'


function App(){
return(

<BrowserRouter>


<Header/>
<Routes>
  <Route path= "/" element ={<Home/>}/>
  <Route path= "/add" element ={<AddProduct/>}/>
</Routes>
</BrowserRouter>
)
}
export default App;