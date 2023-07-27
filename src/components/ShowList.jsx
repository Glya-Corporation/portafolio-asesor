import { useResolvedPath } from 'react-router-dom';

const Showlist = () => {
  const { pathname } = useResolvedPath();

  const data = JSON.parse(localStorage.getItem('data')) || [{}];

  let type = pathname.includes('clients');

  return (
    <main style={styles.main}>
      <ul style={styles.ul}>
        {type
          ? data.map((d, i) => (
              <li key={i} style={{ ...styles.li, ...styles.client }}>
                <p>
                  {d?.marca} {d?.modelo}
                </p>
                <p>{d?.client}</p>
                <p>{d?.urlPublication}</p>
                <p>{d?.urlCart}</p>
              </li>
            ))
          : data.map((d, i) => (
              <li key={i}>
                <p>
                  {d?.marca} {d?.modelo}
                </p>
                <p>{d?.date}</p>
                <p>{d?.urlPublication}</p>
                <p>{d?.urlCart}</p>
              </li>
            ))}
      </ul>
    </main>
  );
};

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
    width: '100%',
    height: '100vh'
  },
  li: {
    display: 'grid',
    width: '100%',
    height: '2rem',
    padding: '.1rem',
    alignItems: 'center',
    background: '#eee',
    border: '1px solid #aaa',
    borderRadius: '.3rem',
    textAlign: 'left'
  },
  client: {
    gridTemplateColumns: '2fr 2fr .5fr .5fr'
  }
};
