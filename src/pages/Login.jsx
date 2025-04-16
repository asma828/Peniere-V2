import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <LoginForm />
        <p className="mt-4 text-center">
          Pas encore inscrit ? <a href="/register" className="text-blue-500 hover:underline">Créer un compte</a>
        </p>
      </div>
    </div>
  );
};

export default Login;