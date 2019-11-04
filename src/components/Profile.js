import React from 'react'

const Profile = ({ user }) => {
  const { id, name } = user;
  return (
    <dl>
      <h1>Profile</h1>
      <dt>ID</dt>
      <dd>{id}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </dl>
  )
}

export default Profile;