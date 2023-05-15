import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import {ToastContainer} from 'react-toastify'
import Dashboard from './pages/Dashboard';
import Header from './components/Header'
;
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {

  return (<>
  

    <Router>
    <div className="conatiner">

      <Header/>
       <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element ={<Register/>}/>
          
       </Routes>
      <Footer/>
    </div>

    </Router>

  <ToastContainer/>
  
  </>
  )}


export default App;
