import {useState, useEffect, useLayoutEffect} from 'react';
import Error from './Error';

// Variables formulario 
  const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [nacimiento, setNacimiento] = useState(''); 
    const [antecedentes, setAntecedentes] = useState(''); 
    const [consulta, setConsulta] = useState(''); 
    // 
    const [error, setError] = useState(false); 
    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return random + fecha; 
    }

    useEffect (() => {
      if ( Object.keys(paciente).length > 0 ) {
        setNombre(paciente.nombre);
        setEmail(paciente.email);
        setNacimiento(paciente.nacimiento);
        setAntecedentes(paciente.antecedentes);
        setConsulta(paciente.consulta);
      } 
    }, [paciente])


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Enviando formulario'); 

      // Validacion del formulario 
        if ([nombre, email, nacimiento, antecedentes, consulta].includes('') ){
          console.log('Hay al menos un campo vacio'); 
          setError(true); 
          return;
        }
        setError(false);

      // Objeto paciente
        const objectoPaciente = {
          nombre, 
          email, 
          nacimiento, 
          antecedentes, 
          consulta
        }

        if (paciente.id) {
          // Editando el registro
          objectoPaciente.id = paciente.id; 
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState )

          setPacientes (pacientesActualizados); 
          setPaciente ({});

        } else{
          // Nuevo registro 
          objectoPaciente.id = generarId(); 
          setPacientes([...pacientes, objectoPaciente]);
        }


      // Reiniciar Formulario

        setNombre('');
        setEmail('');
        setNacimiento('');
        setAntecedentes('');
        setConsulta('');
    }
  
 
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-lime-500">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-2 px-5 mb-10"
      >
        {error &&  <Error mensaje='Todos los campos son obligatorios'/>}
        
        <div className="mb-5">
          <label htmlFor="paciente" className="font-semibold block uppercase mt-5">Nombre Paciente</label>
          <input 
            id="paciente"
            type="text"
            placeholder="Nombre Paciente"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="font-semibold block uppercase mt-5">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email Paciente"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fnacimiento" className="font-semibold block uppercase mt-5">Fecha De Nacimiento</label>
          <input 
            id="fnacimiento"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500"
            value={nacimiento}
            onChange={(e) => setNacimiento(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="deportes" className="font-semibold block uppercase mt-5">Antecedentes Deportivos</label>
          <select 
          id="deportes" 
          type="date" 
          className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500"
          value={antecedentes}
          onChange={(e) => setAntecedentes(e.target.value)}
          >
            <option value=""></option>
            <option value="Basquet">Básquet</option>
            <option value="Futbol">Fútbol</option>
            <option value="Volley">Volley</option>
            <option value="Bailes/Danzas">Bailes/Danzas</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="mconsulta" className="font-semibold block uppercase mt-5">Motivo de Consulta</label>
          <textarea 
            id="mconsulta"
            placeholder="Motivo de Consulta"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-lime-500 w-full font-bold p-3 text-gray-200 uppercase hover:bg-lime-600 cursor-pointer transition-colors mb-6"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Form;
