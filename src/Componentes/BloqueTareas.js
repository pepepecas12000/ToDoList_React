import TaskImput from "./taskImput";
import Listasporhacer from "./listasporhacer";
import TareasEchas from "./tareaecha";
import Header from "../Header";
import { useState } from 'react';

function BloqueTareas() {
 
     const [tareas,setTareas]=useState([]);
     const [echos,setEchos]=useState([]);
     
     return (
       <div className="App">
         
       
         <TaskImput setTareas={setTareas}></TaskImput>
         <Listasporhacer tareas={tareas} setEchos={setEchos} echos={echos}></Listasporhacer>
         <TareasEchas echos={echos}></TareasEchas>
         
       </div>
     );
   }

   export default BloqueTareas;
   
   