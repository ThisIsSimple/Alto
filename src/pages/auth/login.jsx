import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { changeUsernameInput, changePasswordInput } from '../../reducers/login';
import { authUser } from '../../services/auth';
import Input from '../../components/utils/Input';
import Button from '../../components/utils/Button';

const AuthLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const username = useSelector(({ loginReducer }) => loginReducer.username);
  const password = useSelector(({ loginReducer }) => loginReducer.password);

  const handleUsername = (e) => {
    dispatch(changeUsernameInput(e.currentTarget.value));
  };

  const handlePassword = (e) => {
    dispatch(changePasswordInput(e.currentTarget.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await authUser(username, password);

    if (result) {
      history.replace('/');
    } else {
      // toast.error(result.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Alto: Login</title>
      </Helmet>

      <header className="flex justify-center mb-6">
        <img
          className="w-12 mr-3"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Logo"
        />
        <h2 className="text-4xl font-bold">Project Alto</h2>
      </header>

      <div className="card p-5">
        <header className="mb-4">
          <h3 className="font-bold">로그인</h3>
        </header>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={handleUsername}
            className="w-full focus:outline-none focus:ring-2 mb-4"
            placeholder="Username"
            required
          />
          <Input
            type="password"
            onChange={handlePassword}
            className="w-full focus:outline-none focus:ring-2 mb-4"
            placeholder="Password"
            required
          />

          <div className="flex flex-col items-center">
            <Button text="Login" type="submit" className="mb-5" />
            <div className="w-full border-t text-center pt-5">
              또는{' '}
              <Link to="/auth/register" className="text-indigo-500">
                새로운 계정 만들기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthLogin;
