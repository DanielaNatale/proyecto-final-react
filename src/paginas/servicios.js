import { EjemploEstado } from "../componentes/Estado";


const Servicios = props => {
    return (
        <div className="contenedor">
            <h2>Servicios</h2>
            <section class="tipos">
                <div class="tipo1">
                    <div class="texto">
                        <h3>Transporte Aereo</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto animi explicabo et dicta totam eius porro dignissimos, doloribus sed nam harum assumenda ea! Amet nulla ducimus quo perferendis nemo.
                            Autem minima unde necessitatibus ipsa similique iusto magni, veniam dolorem vero maxime est corporis aliquam quisquam eveniet explicabo accusantium excepturi dignissimos quo sed quam animi exercitationem alias illo laudantium. Sapiente.</p>
                    </div>
                    <img src="img/servicios/aereo.jpg" alt="transporte aereo"/>
                </div>
            </section>
            <section className="tipos">
                <div class="tipo2">
                    <div class="texto">
                        <h3>Transporte Ferroviario</h3>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum architecto animi explicabo et dicta totam eius porro dignissimos, doloribus sed nam harum assumenda ea! Amet nulla ducimus quo perferendis nemo.
                            Autem minima unde necessitatibus ipsa similique iusto magni, veniam dolorem vero maxime est corporis aliquam quisquam eveniet explicabo accusantium excepturi dignissimos quo sed quam animi exercitationem alias illo laudantium. Sapiente.</p>
                    </div>
                    <img src="img/servicios/ferroviario.jpg" alt="transporte ferrioviario"/>
                </div>
            </section>
                <EjemploEstado />
        </div>
    )
}

export default Servicios;

