import './listascomponentes.css';
function TareasEchas({echos}){
    return (
        <div>
        <h1>Tareas Hechas :D</h1>
           <div className="contegeneral"> 
           {Array.isArray(echos) && echos.length > 0 ? (
                    echos.map((he) => (
                        <div className='comptarea'><p className="tareae">{he}</p></div>
                    ))
                ) : (
                    <p id='no'>No hay tareas hechas.</p>
                )}
            </div>

        </div>
    )
    }
    export default TareasEchas;