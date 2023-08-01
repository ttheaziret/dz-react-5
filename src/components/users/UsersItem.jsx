import React from 'react'

const UsersItem = ({email, name, username, address}) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{username}</td>       
        <td>{email}</td>
        <td>{address.city}/ {address.street}</td>
    </tr>
  )
}

export default UsersItem