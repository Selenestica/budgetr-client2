import React, {useState} from 'react'

const Register = (props) => {

  const [registerInfo, setRegisterInfo] = useState([])

  const handleChange = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    })
  }

  const onHandleRegister = () => {
    fetch('http://localhost:3301/add-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(registerInfo)
    }).then(response => response.json())
  }

    return (<>
    
        <div className="row">
          <div className="col">
            <h1>Register</h1>
            <p><i>...and start bud getting today!</i></p>
            <input type="text" onChange={handleChange} name="first" placeholder="first name" />
            <input type="text" onChange={handleChange} name="last" placeholder="last name" />
            <input type="text" onChange={handleChange} name="display_name" placeholder="what name do you prefer to go by?" />
            <input type="email" onChange={handleChange} name="email" placeholder="email" />
            <input type="text" onChange={handleChange} name="phone_number" placeholder="phone number" />
            <input type="password" onChange={handleChange} name="password" placeholder="password" />
            <button onClick={onHandleRegister}>Register</button>
          </div>
        </div>

    </>)
}

export default Register