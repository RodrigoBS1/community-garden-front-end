import { useState, setState } from 'react'
import { useEffect } from 'react'
const Login = () => {
    const [loginInfo, setLoginInfo ] = useState ([])
    const [ users, setUsers ] = useState ([])

    const handleChange = (event) => {
        setLoginInfo({...loginInfo, [event.target.name] : event.target.value})
    }
    const fetchUsers = async () => {
        
        const url = `https://community-garden-api.onrender.com/users`
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
        
    }
    useEffect( () => {
        fetchUsers()
    }, [])



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(loginInfo)
        console.log(users)

        
          
    }


    return (
        <div className="loginContainer">
            <form onSubmit = {handleSubmit}>
                <label for="userName">Username</label>
                <input onChange={handleChange} type="text" id="userName" name="userName" placeholder="Username"/>
                <label for="password">Password</label>
                <input onChange={handleChange} type="text" id="password" name="password" placeholder="Password"/>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login