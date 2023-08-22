import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
function App() {
  const [pacientes, setpacientes] = useState([]);
  const [paciente, setpaciente] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setpacientes={setpacientes}
          paciente={paciente}
        />
        <ListadoPacientes pacientes={pacientes} setpaciente={setpaciente} />
      </div>
    </div>
  );
}

export default App;
