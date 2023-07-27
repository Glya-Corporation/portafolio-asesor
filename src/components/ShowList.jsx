import { usePath } from 'react-router-dom';


const Showlist = ({data}) => {
  const path = usePath();
  
  let type = path.includes('clients');
  
  useEffect(() => {
    type = path.includes('clients');
  },[path])
  
    return (
    <main>
      <ul>
      {type ? (
        data.map((d, i) => (
          <li key={i}>
              <p>{d.marca} {d.modelo}</p>
              <p>{d.client}</p>
              <p>{d.urlPublication}</p>
              <p>{d.urlCart}</p>
          </li>
        ))) : (
          data.map((d, i) => (
          <li key={i}>
              <p>{d.marca} {d.modelo}</p>
              <p>{d.date}</p>
              <p>{d.urlPublication}</p>
              <p>{d.urlCart}</p>
          </li>
        ))
        )
      }
      </ul>
    </main>
  )
}

export default Showlist;


const styles = {
  main: {
    width: '100vw',
    height: '100vh',
    padding: '0.5rem'
  },
  ul: {
    display: 'grid',
    gap: '0.5rem',
    width: '100vw',
    height: '100vh',
  },
  li: {
    display: 'grid',
    width: '100vw',
    height: '2rem'
  },
  client: {
    
  }
}