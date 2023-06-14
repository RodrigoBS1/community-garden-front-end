import { useState, setState } from "react";
import { useEffect } from "react";
import "../Login.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate  } from 'react-router-dom'

const Login = () => {
  let userInfo
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState([]);
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };
  const fetchUsers = async () => {
    const url = `https://community-garden-api.onrender.com/users`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginInfo);
    console.log(users);
    users.forEach(user =>{
        if((user.userName === loginInfo.userName)&&(user.password === loginInfo.password)){
            console.log('Found user!')
            userInfo = user.id+'_'+user.city+'_'+user.userName+'_'+user.garden 
            console.log(userInfo)
            navigate(`/communitylanding/${userInfo}`)
        }
        else{
            console.log('Username or password incorrect')
        }
    })
    
    setLoginInfo([])
   
    
  };

  return (
    <div className="loginContainer">
        <NavBar />
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          className="inputLogin"
          onChange={handleChange}
          type="text"
          id="userName"
          name="userName"
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="inputLogin"
          onChange={handleChange}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />

        <div className="loginButton">
          <button className="buttonGarden" onSubmit={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
