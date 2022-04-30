import React from 'react'
import { connect } from 'react-redux'
import Wrapper from '../components/Wrapper'
import UserModel from '../models/User.model'

const User = (props: {users: any}) => {

  const [users, setUsers] = React.useState([])
  
  React.useEffect(() => {
    setUsers(props.users)
  }, [props])

  const deleteUser = (id: any) => {
    console.log(id);
    
    fetch(`http://localhost:8000/api/users/${parseInt(id)}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
    })
      .then(res => {
        console.log(res);
        setUsers((users) => {
          return users.filter((user: UserModel) => user.id !== id)
        })
      })
  }
  
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
            {users?.map((user: UserModel) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Del</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </Wrapper>
  )
}

export default connect(
  (state: any) => {
    return {
      users: state.users
    }
  }
)(User)