import './App.css'
import { EjercicioComponent } from './components/EjercicioComponent';
import { MiPrimerEstado } from './components/MiPrimerEstado';

function App() {
  const fecha = new Date()
  const anio_actual = fecha.getFullYear()

  return (
    <div className="App">
      <h2>El estado en react - Hook useState</h2>

      <hr />
      <MiPrimerEstado />

      <hr />
      <EjercicioComponent anio={anio_actual}/>

    </div>
  );
}

export default App;
