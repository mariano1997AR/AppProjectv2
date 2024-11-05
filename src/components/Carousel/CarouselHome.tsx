import logoCarousel1 from '../../assets/carrousel/AppPress-presentacion-1Reducida.jpg';
import logoCarousel2 from '../../assets/carrousel/AppPress-presentacion-2Reducida.jpg';
import logoCarousel3 from '../../assets/carrousel/AppPress-presentacion-3Reducida.jpg';

export const CarouselHome = () => {
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={logoCarousel1} alt="foto de presentacion de apoloIXcode" className="d-block" style={{width:'100%',minHeight:'500px'}} />
                            <div className="carousel-caption"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={logoCarousel2} alt="foto de prensentacion de apoloIxcode" className="d-block" style={{width: '100%', minHeight:'500px'}} />
                            <div className="carousel-caption"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={logoCarousel3} alt="Foto de presentacion de apoloIXcode producto" className="d-block" style={{width:'100%', minHeight: '500px'}} />
                            <div className="carousel-caption"></div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}


