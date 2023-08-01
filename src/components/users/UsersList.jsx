import React from 'react'
import UsersItem from './UsersItem'
import Table from 'react-bootstrap/Table';

const UsersList = ({users}) => {
    const usersElem = users.map((user) => <UsersItem {...user} key={user.email}/>)
  return (
    <Table>
        <thead>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>address</th>
            </tr>
        </thead>
        <tbody>
            {usersElem}
        </tbody>
    </Table>
  )
}

export default UsersList