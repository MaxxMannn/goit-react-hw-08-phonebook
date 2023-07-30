import { useDispatch } from 'react-redux';
import { logIn } from 'redux/fetchAuth';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className='registerForm_container'>
      <form className='registerForm' onSubmit={handleSubmit} autoComplete="off">
      <label className='register_label'>
        Email
        <input className='register_input' type="email" name="email" />
      </label>
      <label className='register_label'>
        Password
        <input className='register_input' type="password" name="password" />
      </label>
      <button className='register_button' type="submit">Log In</button>
    </form>
    </div>
    
  );
};

export default LoginForm