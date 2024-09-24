import './listascomponentes.css';
function Listasporhacer({tareas,setEchos,echos}){
    return(
        <div>
            <h1>
                Tareas pendientes
            </h1>
            <div className="contegeneral">
            {tareas.map((t)=>{
                return <div className='comptarea'>
                <div className="tareas"><p className="textarea">{t}</p></div> 
                <button onClick={(e) => {
          e.target.parentElement.remove(); 
        }} id='eliminar' className='botonesl'>Eliminar </button> 
        
         <button onClick={(e)=>{
             setEchos([...echos, t]);
           e.target.parentElement.remove(); }} id='completar' className='botonesl'>
            Completar</button> </div>

            }
            // material iua
            // motions 
            )}
            
            
            </div>

        </div>
    )
}

export default Listasporhacer;