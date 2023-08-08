const Patient = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const { nombre, email, nacimiento, antecedentes, consulta, id} = paciente; 
  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente(id);
    }
  }
  
  return (
    <div className="m-3 bg-white shadow-md rounded-lg py-10 px-5 mb-10 md:grid-flow-row mx-5 my-10">
    <p className="font-bold mb-3 uppercase text-gray-700">Nombre: {""}
      <span className="font-normal normal-case">{nombre}</span>
    </p>
    
    <p className="font-bold mb-3 uppercase text-gray-700">Email: {""}
      <span className="font-normal normal-case">{email}</span>
    </p>
    
    <p className="font-bold mb-3 uppercase text-gray-700">Fecha Nacimiento: {""}
      <span className="font-normal normal-case">{nacimiento}</span>
    </p>
    
    <p className="font-bold mb-3 uppercase text-gray-700">Antecendentes deportivos: {""}
      <span className="font-normal normal-case">{antecedentes}</span>
    </p>
    
    <p className="font-bold mb-3 uppercase text-gray-700">Motivo de consulta: {""}
      <span className="font-normal normal-case">{consulta}</span>
    </p>

    <div className="flex justify-between mt-10">
      <button
        type="button"
        className="py-2 px-5 bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase rounded-lg"
        onClick={() => setPaciente (paciente)}>
          Editar 
      </button>

      <button
        type="button"
        className="py-2 px-5 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}>
          Eliminar 
      </button>
    </div>

    </div>
  )
}

export default Patient



