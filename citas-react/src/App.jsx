import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'
function App() {

    const [pacientes,setpacientes]=useState([]);
 

  return (
    <div className='container mx-auto mt-20'>
      <Header 
      numeros={1}
      />
      <div className='mt-12 md:flex'>
      <Formulario/>
      <ListadoPacientes/> 
      </div>
    </div>
  );
}

export default App