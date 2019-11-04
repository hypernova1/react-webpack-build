import React from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LogoutButton = ({ logout, history }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    history.push('/');
  }
  return (
    <button onClick={handleClick}>Logout</button>
  )
}

export default withRouter(LogoutButton);