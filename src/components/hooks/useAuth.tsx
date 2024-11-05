import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (token) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const enviarCode = (code : string)=>{
      return code;
  }

  //funcion de inicio de sesion con redireccion
  const login = (code : string) => {;
    if (code === '$2b$10$niLItdulwcHmjc1vfoctauC0E28LMJEPiNgx4vSDh9M3CLiZ/6902') {
      enviarCode(code);
      localStorage.setItem('token', 'fake-jwt-token');
      setIsAuthenticated(true);
      setLoading(true); //activar la pantalla de carga
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 1000)
    } else {
      alert('usuario o contrasenia incorrectos');
    }
   
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/home/demo'); //redirigir al login al cerrar sesion 
  }


  return { isAuthenticated, loading, login, logout,enviarCode};

}