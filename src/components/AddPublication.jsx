import { useForm } from 'react-hook-form'

import { marcas, modelos, vga, cuotas, rango } from '../data/data.js';

const AddPublication = () => {
  const { handleSubmit, register, reset } = useForm();
  
  const submit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(submit)}>
      <ul>
        {marcas.map((marca, i) => (
          <li key={i}>{marca}</li>
        ))}
      </ul>
      <ul>
        {modelos.map((modelo, i) => (
          <li key={i}>{modelo}</li>
        ))}
      </ul>
      <select>
        {vga.map((valor, i) => (
          <option key={i} value={i}>
            {valor}
          </option>
        ))}
      </select>
      <select>
        {cuotas.map((valor, i) => (
          <option key={i} value={i}>
            {valor}
          </option>
        ))}
      </select>
      <select>
        {rango.map((valor, i) => (
          <option key={i} value={i}>
            {valor}
          </option>
        ))}
      </select>
      <button>Registrar</button>
    </form>
  );
}

export default AddPublication;