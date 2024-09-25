import './navbar.css'; 
function Navbar(){
return(
    <div id='navbar'>
        <button id='Blist' className='Bnav'><a href="/" className='textboton'>Listas de tareas</a>
        </button>
    <button id='Bcont' className='Bnav'><a href="/contactos" className='textboton' >Contactos</a>
           </button>
                
    </div>
)
}
export default Navbar;