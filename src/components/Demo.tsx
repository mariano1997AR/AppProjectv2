import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Demo.css';


export const Demo = () => {
    const { login } = useAuth();
    const [code, setCode] = useState<string>('');
    const navigate = useNavigate();
    const [error, setError] = useState<string>('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isLoggedIn = login(code);
        if (isLoggedIn) {
            navigate('/dashboard'); // Redirige a la página protegida
        } else {
            setError('Código inválido. Inténtalo de nuevo.'); // Mensaje de error
        }
    };


    return (
        <>
            <div className='banner-image w-100 vh-100 d-flex justify-content-center align-items-center'>
                <div className='flex-contenedor'>
                    <div className='flex-left'>
                        <section>
                            <article>
                                <h1>Sobre AppProject</h1>
                                <p>
                                    Se trata de una aplicacion para olvidarse de estar creando
                                    presupuestos con archivo word o pasarlo a pdf. Ya es cosa del pasado y
                                    podes realizar todos los requerimientos en input y se descargar una vez
                                    enviado la informacion.
                                </p>
                            </article>
                        </section>
                    </div>
                    <div className='flex-right'>
                        <form onSubmit={handleLogin}>
                            <label className='label-cod'>Codigo del programa</label>
                            <input
                                type="text"
                                placeholder='Ingresa el codigo del programa'
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                         <button className='button button1' type='submit'>Ingresar</button>                   
                        </form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                    </div>

                </div>
            </div>

            {/* Area de contenido principal */}
            <main className='container my-5 d-grid gap-5'>
                <section className='p-5 border'>
                    <article>
                        <h2 className='text-center'>Mas información sobre AppProject</h2>
                        <p>AppPres se trata de una aplicación para crear documentos para emprendedores y trabajadores independientes que quieran realizar presupuestos para clientes y trabajos especificados en el formulario de entrada de la aplicación. La aplicacion esta en su versión
                            0.0.1 de desarrollo.
                        </p>
                    </article>
                </section>
            </main>







        </>
    )
}

