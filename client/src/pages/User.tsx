import React from 'react'
import Wrapper from '../components/Wrapper'
import UserModel from '../models/User.model'

const User = () => {

  const [users, setUsers] = React.useState<UserModel[]>([])
  
  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8000/api/users')
      const users = await res.json()
      setUsers(users)
    })()
  }, [])
  
  return (
    <Wrapper>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  {/* <td>{user.role.name}</td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
    </Wrapper>
  )
}

export default User