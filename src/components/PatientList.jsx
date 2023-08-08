import Patient from "./Patient";

const PatientList = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ?(
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
          Administra tus {''}
          <span className="text-lime-500">Pacientes y citas</span>
          </p>
          {pacientes.map(paciente => (
              <Patient 
                key= {paciente.id}
                paciente= {paciente}
                setPaciente= {setPaciente}
                eliminarPaciente= {eliminarPaciente} 
              />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2><p className="text-xl mt-5 text-center mb-10">
          Comienza agregando los pacientes, {''}
          <span className="text-lime-500">Apareceran aquí</span>
          </p>
        </>
      )}

    </div>

  )
}

export default PatientList; 
