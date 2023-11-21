
import { useEffect, useState } from 'react';

const Nosotros = (props) => {

    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos();
    }, []);

    return (
        <div className='contenedor'>
            <h2>Historia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum nihil soluta quisquam fugit harum eveniet commodi, voluptates veniam repellat, dicta porro impedit possimus fuga eos consequatur. A, est hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis voluptatum blanditiis ea consequuntur mollitia totam distinctio quasi modi vel dolores provident facilis possimus, temporibus suscipit minus autem veniam nemo?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quam nesciunt dolore eligendi recusandae ipsum dicta nemo? Amet distinctio ad consequuntur. Necessitatibus quasi quas, harum corrupti nam voluptatem eius commodi?</p>

            <h2>Staff</h2>
            {cargando ? <p>Cargando datos...</p> : (
                <div className="personajes">
                    {personajes.map(personaje => (
                        <div className='personaje' key={personaje.id}>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name} />
                                </div>
                                <div className="datos">
                                    <h6> Especie : {personaje.species==="Human" ? 'Humano' : personaje.species} </h6>
                                    <h6> Vivo : {personaje.status==="Alive" ? 'parece ser' : 'no'} </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )} 

        </div>
    )
}

export default Nosotros;