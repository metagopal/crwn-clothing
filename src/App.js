import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from 'react-router-dom'


import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} /> 
        
      </Routes>
    </div>
  );
}

export default App;
