import '../App.css'

const Mapa = props =>{
    return(
        <div className='holder contacto'>
        <div className="mapa">
        <h2>Donde encontrarnos</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.87679053699!2d-58.4201073!3d-34.5986183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d491805d%3A0xd6748013d82fc42a!2sUniversidad%20Tecnol%C3%B3gica%20Nacional!5e0!3m2!1ses-419!2ses!4v1700578336218!5m2!1ses-419!2ses" style={{ width:600, height:450, border:0 }}></iframe>
        </div>
        <div class="datos">
        <h2>Otras vías de contacto</h2>
        <p>También puede comunicarse con nosotros a traves de</p>
        <ul>
            <li>Telefono: 123456789</li>
            <li>Email: Contacto@xtransportes.com.ar</li>
            <li>Facebook: facebook.com/transportesx</li>
            <li>twitter: @TransportesX</li>
            <li>skype: transportesX_skype</li>
        </ul>
    </div>
    </div>
    )
}

export default Mapa;