import React, { useState } from 'react';
import { PostLogin } from '~/services/auth/loginService';

const LoginPage = () => {

  const [loginState, setLoginState] = useState<ILoginState>({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your authentication logic here
    PostLogin(loginState)
  };

  return (
    <div className="h-screen flex justify-center bg-slate-200 items-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        <label className="mb-2">
          Username:
          <input
            type="text"
            className="mb-4 p-2 border-slate-800 border border-solid rounded"
            name="username"
            value={loginState.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="mb-2">
          Password:
          <input
            type="password"
            className="mb-4 p-2 border-slate-800 border border-solid rounded"
            name="password"
            value={loginState.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="p-2 bg-slate-500 text-white cursor-pointer w-10/12 rounded hover:bg-slate-900">Login</button>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
};

export default Login;
