import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { accessLogin } from '../reducers/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ authenticated, location }) => {

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(accessLogin(id, pwd));
  });

  const { from } = location.state || { from: { pathname: '/'} };
  if(authenticated) return <Redirect to={from} />

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <input type="password" value={pwd} onChange={e => setPwd(e.target.value)}/>
      <button onClick={onClick}>로그인</button>
    </div>
  )
}

export default Login;