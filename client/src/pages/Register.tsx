import axios from 'axios'
import React from 'react'

const Register = () => {

    const [input, setInput] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirm: '',
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(input)
        })
        .then(res => {
            console.log(res);
        })

    }

  return (
    <div className="container p-3 justify-center" >
        <form className='col-lg-6 col-sm-12' onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input type="text" 
                  className="form-control"
                  value={input.first_name}
                  onChange={(e) => setInput({...input, first_name: e.target.value})}
                  id="floatingInput" placeholder="First name"/>
                <label htmlFor="floatingInput">First name</label>
            </div>
            <div className="form-floating">
                <input type="text" 
                value={input.last_name}
                 onChange={(e) => setInput({...input, last_name: e.target.value})}
                className="form-control" id="floatingInput" placeholder="Last name"/>
                <label htmlFor="floatingInput">Last name</label>
            </div>
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
            <div className="form-floating">
                <input type="password" 
                value={input.password_confirm}
                onChange={(e) => setInput({...input, password_confirm: e.target.value})}
                className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingInput">Confirm Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </div>
  )
}

export default Register