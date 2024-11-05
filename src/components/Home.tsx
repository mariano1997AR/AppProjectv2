import { CarouselHome } from "./Carousel/CarouselHome"
import { useState,useEffect } from "react";
import presentacionUno from '../assets/carrousel/AppPress-presentacion-1Reducida.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWrench,faFileArrowDown,faBrain} from '@fortawesome/free-solid-svg-icons';
import './Home.css';


export const Home = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        // Función para actualizar la fecha
        const updateDate = () => {
            setCurrentDate(new Date());
        };

        // Configura el intervalo de actualización cada minuto
        const intervalId = setInterval(updateDate, 60000);

        // Llama a updateDate() inmediatamente para mostrar la hora sin esperar un minuto
        updateDate();

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <CarouselHome></CarouselHome>
            <main>
                <section className="section-contenido-presentacion">
                    <article className="article-presentacion-uno shadow-stone-50 ">
                        <div className="contenido">
                            <span className="flex-item-left">
                                <h2>Bienvenido a AppProjectAR .</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus possimus accusantium atque exercitationem. Mollitia natus voluptatum dolorem praesentium fuga repellat laudantium, aspernatur a, ipsa optio error, at ad sequi!
                                    Voluptatibus veniam, ipsam ex ipsa recusandae nostrum quis eligendi dolores mollitia id laudantium ab est praesentium cumque similique unde natus qui ipsum, placeat quo architecto maxime. Earum illo doloremque vel.
                                </p>
                            </span>
                            <span className="flex-item-right">
                                <img src={presentacionUno} alt="" />
                            </span>
                        </div>
                    </article>
                    <article className="contenido-especificacion-tecnica">
                        <div className="contenido">
                            <span className="flex-item-left">
                                <h2>Especificaciones tecnicas:</h2>
                                <CardGroup>
                                    <Card>
                                       <FontAwesomeIcon className="icons" icon={faWrench} />
                                        <Card.Body>
                                            <Card.Title>Soporte Tecnico</Card.Title>
                                            <Card.Text>
                                                Esta aplicacion tiene soporte tecnico, donde se realiza actualizaciones cada semana
                                                para que la aplicacion no presente fallos u errores durante el despliegue.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated {currentDate.getMinutes()} mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <FontAwesomeIcon className="icons" icon={faFileArrowDown} />
                                        <Card.Body>
                                            <Card.Title>Sistema de descarga de archivos </Card.Title>
                                            <Card.Text>
                                               Despues de llenar sus datos en los formularios correspondiente se realiza una descarga automatica sin 
                                               necesidad de realizar ningun otro aplicativo.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated {currentDate.getMinutes()} mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card>
                                        <FontAwesomeIcon className="icons" icon={faBrain} />
                                        <Card.Body>
                                            <Card.Title>Sistema de Red Neuronal - IA</Card.Title>
                                            <Card.Text>
                                                  Proximamente voy a integrar una red neuronal de solo 100 neuronas para que pueda
                                                  mejorar el razonamiento por medio de un sistema que clasifique archivos.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Last updated {currentDate.getMinutes()} mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </span>

                        </div>
                    </article>
                </section>
                <section className="contenido-animado">
                     <article>
                         <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione quia sapiente, optio earum libero sit totam ea, quaerat, perferendis adipisci dicta ducimus deserunt quisquam velit suscipit saepe beatae molestias.
                         Quas non cupiditate, repellat officiis illum consequuntur, ullam et vitae distinctio nemo ut ex? Labore maiores quaerat laudantium quia alias praesentium ullam, illo esse suscipit ex aliquid placeat, ut nostrum.
                         Officia, nemo quaerat similique minus corporis doloremque natus maiores possimus exercitationem, earum itaque inventore voluptate accusamus, quisquam nulla facilis necessitatibus suscipit enim rem perspiciatis nam. Veniam fugiat exercitationem maxime voluptate?
                         Facere porro, itaque necessitatibus in expedita a cum facilis sapiente temporibus nam. Repudiandae, veritatis officia quasi rem dolorum cumque commodi laudantium unde nam distinctio, fugiat nobis ipsam qui assumenda? Magnam?

                         </p>
                     </article>
                </section>
            </main>
        </>
    )
}

