import { useForm } from 'react-hook-form'

const AddPublication = () => {
  const { handleSubmit, register, reset } = useForm();
  
  const submit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(submit)}>
      <select {...register('marcas')}>
        <option></option>
      </select>
      <button>
        Login
      </button>
    </form>
  )
}

export default AddPublication;