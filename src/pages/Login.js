import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';

export default function Login() {
    return (
      <div>
        <Helmet>
        <div>Авторизуватись</div>
        </Helmet>
        <LoginForm />
      </div>
  );
}
