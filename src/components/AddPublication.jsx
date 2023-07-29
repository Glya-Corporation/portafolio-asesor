import { useForm } from 'react-hook-form';

import data from '../data/data.js';
import { useState } from 'react';

const AddPublication = () => {
  const { handleSubmit, register, reset } = useForm();

  const { autos, vga, cuotas, rango } = data;

  const [modelos, setModelos] = useState([]);

  

  const submit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(submit)} style={styles.form}>
      <div style={styles.container}>
        <input type='text' placeholder='Marcas' style={styles.inputs} />
        <ul style={styles.ul}>
          {autos.map((auto, i) => (
            <li key={i}>{auto.marca}</li>
          ))}
        </ul>
      </div>
      <div style={styles.container}>
        <input type='text' placeholder='Modelos' style={styles.inputs} />
        <ul style={styles.ul}>
          {/* {modelos.map((modelo, i) => (
            <li key={i}>{modelo}</li>
          ))} */}
        </ul>
      </div>
      <div style={styles.container}>
        <label>VGA</label>
        <select style={styles.inputs}>
          {vga.map((valor, i) => (
            <option key={i} value={i}>
              {valor.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.container}>
        <label>Cuotas</label>
        <select style={styles.inputs}>
          {cuotas.map((valor, i) => (
            <option key={i} value={i}>
              {valor.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.container}>
        <label>Rango</label>
        <select style={styles.inputs}>
          {rango.map((valor, i) => (
            <option key={i} value={i}>
              {valor.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
      <button style={{ ...styles.inputs, ...styles.button }}>Registrar</button>
    </form>
  );
};

export default AddPublication;

const styles = {
  form: {
    width: '100vw',
    padding: '1rem',
    display: 'grid',
    gap: '1rem'
  },
  container: {
    width: '100%',
    position: 'relative',
    display: 'grid',
    gap: '.2rem',
    justifyContent: 'center'
  },
  ul: {
    width: '90%',
    position: 'absolute',
    height: 'min-content',
    padding: '.5rem',
    overflow: 'auto',
    backgroundColor: '#ffffff',
    border: '1px solid #999999',
    top: '2rem'
  },
  inputs: {
    width: '100%',
    padding: '.5rem',
    borderRadius: '.5rem',
    border: '1px solid #999999'
  },
  button: {
    backgroundColor: '#77bb77',
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: 'bold'
  }
};
