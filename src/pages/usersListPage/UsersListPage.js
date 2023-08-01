import React, { useEffect, useState } from "react";
import { getUserAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import UsersList from "../../components/users/UsersList";

function UsersListPage () {
    const dispatch = useDispatch()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const users = dispatch( getUserAction())
        users.then((res)=> res.json()).then((data) => setUsers(data))
    }, [])

    return(
        <div>
            <UsersList users={users}/>
        </div>
    )
}

export default UsersListPage