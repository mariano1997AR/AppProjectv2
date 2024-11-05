import { useEffect, useState } from 'react'
import './App.css'
import '/home/mariano/Documentos/appProject/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/home/mariano/Documentos/appProject/node_modules/bootstrap/dist/js/bootstrap.min.js';
import { MenuNav } from './components/MenuNav'
import { Loader } from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    }
    loadData();
  }, []);


  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <MenuNav></MenuNav>

        </div>
      )}
    </>
  )
}

export default App
