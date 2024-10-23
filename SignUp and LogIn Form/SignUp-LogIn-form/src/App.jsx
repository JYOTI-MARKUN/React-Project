import './App.css'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignIn from './Component/SignIn'
import Newpassword from './Component/Newpassword';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element ={  <SignIn />} />
        <Route path='/Newpassword' element ={  <Newpassword />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
