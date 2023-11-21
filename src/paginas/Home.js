import '../App.css'

const Home = (props) => {

    return (
        <>
            <div className='avion'>
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div class="columnas">
                <section class="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut libero velit deleniti corrupti minima earum repudiandae quibusdam esse consequuntur impedit, culpa, ducimus doloremque recusandae illum alias. Numquam, ut quibusdam!</p>
                </section>
                <section class="testimonios">
                    <h2>Testimonios</h2>
                    <div class="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Gomez</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;