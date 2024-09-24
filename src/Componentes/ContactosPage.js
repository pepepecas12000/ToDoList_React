import { useEffect, useState } from "react";

    function ContactosPage() {
      const [contactos,setcontactos] = useState([]);

        useEffect(()=>{getContactos(); console.log("Se pudo");},[]);


        return (
          <div>
            <h1>Contactos</h1>
            <p>Esta es la página de contacto</p>
            {contactos.map((contacto)=>(
              <li key={contacto.id}>
                {contacto.name} - {contacto.phone}  </li>
            ))}
          </div>
        );
     

      function getContactos(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((data)=> {
          setcontactos(data);
        })
      }
 }

      export default ContactosPage;
