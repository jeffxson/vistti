import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Stories from './screens/Stories/Stories'
  

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path= '/stories' element= {<Stories/>}  /> 
       </Routes>
    </div>
  );
}

export default App;
