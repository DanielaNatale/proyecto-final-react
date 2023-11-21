import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import '../App.css'

const Galeria = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true
    };

    return (
        <div className="galeria">
            <Slider {...settings}>
            <img src="../img/galeria/img01.jpg" alt="imagen 01" />
            <img src="../img/galeria/img02.jpg" alt="imagen 02" />
            <img src="../img/galeria/img03.jpg" alt="imagen 03" />
            <img src="../img/galeria/img04.jpg" alt="imagen 04" />
            <img src="../img/galeria/img05.jpg" alt="imagen 05" />

            </Slider>
        </div>
    )
}

export default Galeria;