
export const getUsers = () => async (dispatch:any) => {
    const res = await fetch('http://localhost:8000/api/users')
    const users = await res.json()
    console.log(users);
    
    dispatch({type: 'GET_USERS', payload: users.data})
}