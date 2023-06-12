import { Link } from 'react-router-dom'
const Start = () => {
  
    return (
        <div>
            <button>Sign Up</button>
            <Link to='/Login'><button>Login</button></Link>
        </div>
    )
}
export default Start