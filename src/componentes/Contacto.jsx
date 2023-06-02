import React from 'react'

export default function Contacto() {

    let redes =[
        "Facebook: www.facebook.com/reactwebsolutions",
        "Twitter: www.twitter.com/reactwebsolutions",
        "LinkedIn: www.linkedin.com/company/reactwebsolutions",
    ]

  return (
    <div><h2>Contáctenos</h2>
        <p>Puedes contactanos por estos medios</p>
        <p>Correo electrónico: info@reactwebsolutions.com</p>
        <p>Teléfono: +1 (555) 123-4567</p>
        <h2>Redes</h2>
        <ul>
            {
                redes.map((redes, indice) =>{return(<li key={indice}>{redes}</li>)  })
            }
        </ul>
    </div>
  )
}
