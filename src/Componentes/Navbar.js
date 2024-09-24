import './navbar.css'; 
function Navbar(){
return(
    <div id='navbar'>
        <button id='Blist' className='Bnav'><a href="/"><h1>Listas de tareas</h1></a>
        </button>
    <button id='Bcont' className='Bnav'><a href="/contactos" >Contactos</a>
           </button>
                
    </div>
)
}
export default Navbar;