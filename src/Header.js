import './Header.css';// IMportar librerias, archivos, locales, componentes, estilos, etc.

//Datos funciones, estructuras, clases, etc.

function Header(props){// props para regresar varios argumentos,en caso de solo ser uno se coloca entre parentesis
  // {mensaje}

  //HOOKS, metodos especificos de react para menejar el estado del componente. 
  // Tiene que ir dentro de la fucion componente
    
    // Declaracion del retorno , debe de ser jsx con un elemento padre... por lo regular 
  return(
<header>
  <h1 id='todo'>To Do List</h1>
</header> 

)
  }
  // exportaciones, comunmente se exporta el componente acutal, o`podemos
  // exportar multiples componentes, funciones , etc
  export default Header;