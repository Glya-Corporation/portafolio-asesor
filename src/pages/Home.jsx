import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <main>
      <ul>
        <li onClick={() => navigate('/add')}>Agregar</li>
        <li onClick={() => navigate('/show/appo')}>Ver citas</li>
        <li onClick={() => navigate('/show/clients')}>Ver clientes</li>
      </ul>
    </main>
  )
}

export default Home;