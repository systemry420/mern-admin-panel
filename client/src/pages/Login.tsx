import React, { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [input, setInput] = React.useState({
        email: '', password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(input)
        })

        console.log(response);
        
        
        if (response.status === 200) {
            navigate('/')
        }
        
    }
  return (
    <div className="container p-3 justify-center" >
    <form className='col-lg-6 col-sm-12' onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>
        <div className="form-floating">
            <input type="text" 
            value={input.email}
             onChange={(e) => setInput({...input, email: e.target.value})}
             className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" 
            value={input.password}
            onChange={(e) => setInput({...input, password: e.target.value})}
            className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingInput">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
</div>

  )
}

export default Login