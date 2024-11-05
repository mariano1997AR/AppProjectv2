import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Support.css';

export const Support = () => {
   return (
      <>
           <div className="contenedor-contacto" id="contacto">
                <section className="wrapper">
                     <form id="form">
                         <p className="contacto">Contacto</p>
                         <article className="input-box">
                               <input 
                                   type="text" 
                                   placeholder="Ingresa tu nombre:"
                                   name="nombre"
                                   required
                               />
                               <FontAwesomeIcon className='icons-form-support' icon={faUser} />
                         </article>

                         <article className='input-box'>
                                <input 
                                   type="text" 
                                   placeholder="Ingresa tu email:"
                                   name="email"
                                   required
                               />
                               <FontAwesomeIcon className='icons-form-support' icon={faEnvelope} />
                         </article>

                         <article className='input-box'>
                                   <textarea name="comentario" id="comentario" ></textarea>
                         </article>
                         <input type="submit" className="btn" name="enviar" id="button" value="Enviar "/>

                     </form>
                </section>

           </div>
      </>
   )
}

