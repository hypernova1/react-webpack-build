import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accessLogin } from '../reducers/auth';

const Login = () => {

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin, []);

  const onClick = useCallback(() => {
    const result = dispatch(accessLogin(id, pwd));
    result.then(() => {
      console.log(isLogin);
    });
  });

  return (
    <div>
      <input name="id" type="text" value={id} onChange={e => setId(e.target.value)} />
      <input name="pwd" type="password" value={pwd} onChange={e => setPwd(e.target.value)}/>
      <button onClick={onClick}>로그인</button>
    </div>
  )
}

export default Login;