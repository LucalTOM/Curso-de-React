import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
function App() {
  const [pacientes, setpacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setpaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const elminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setpacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setpacientes={setpacientes}
          paciente={paciente}
          setpaciente={setpaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setpaciente={setpaciente}
          eliminarPaciente={elminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
