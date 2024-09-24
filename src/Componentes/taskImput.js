import { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import  './imputs.css';
function TaskImput({setTareas}){
    const [value,setvalur]=useState("")
    function agregar(){
      if(value!=""){
      setTareas((prevTarea)=>{
      return [...prevTarea, value] 

      }) 
      setvalur("");
        }
}

    return(
        <div className='inputs'>
        <Input className="task" type="text" id="tarea" placeholder="Ingresar una tarea" value={value}  
        onChange={
            (e)=>{setvalur(e.target.value);
            
            
            }
            
            }>

        </Input>
        <Button id="sumit" className="botondeenvio"  variant="contained" size="medium" onClick={agregar}>
          Enviar
        </Button>
        
</div>
    )
}


export default TaskImput;