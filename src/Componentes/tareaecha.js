import './listascomponentes.css';
function TareasEchas({echos}){
    return (
        <div>
        <h1>Esta son las tareas pendientes</h1>
           <div className="contegeneral"> 
           {Array.isArray(echos) && echos.length > 0 ? (
                    echos.map((he) => (
                        <div className='comptarea'><p className="textarea">{he}</p></div>
                    ))
                ) : (
                    <p>No hay tareas hechas.</p>
                )}
            </div>

        </div>
    )
    }
    export default TareasEchas;