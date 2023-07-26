import { useForm } from 'react-hook-form'

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  
  const submit = data => console.log(data)
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type='text' placeholder='User' {...register('user')}/>
      <input type='password' placeholder='Password' {...register('password')}/>
      <button>
        Login
      </button>
    </form>
  )
}

export default Login;