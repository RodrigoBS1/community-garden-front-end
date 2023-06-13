const SignUp = () => {

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        
    }
    return (
        <div className="signupContainer" >
            <form className="signupForm">
                <div className="signForm">
                    <label for="firstName" >First Name: </label>
                    <input onChange={handleChange} type="text" id="firstName" name="firstName" placeholder="First Name" />
             
                    <label for="lastName" >Last Name: </label>
                    <input onChange={handleChange} type="text" id="lastName" name="lastName" placeholder="Last Name" />
                </div>
                <div className="signForm">
                    <label for="userName" >Username: </label>
                    <input onChange={handleChange} type="text" id="userName" name="userName" placeholder="Username" />
                
                    <label for="password" >Password: </label>
                    <input onChange={handleChange} type="text" id="password" name="password" placeholder="Password" />
                </div>
                <div className="signForm">
                    <label for="city" >City: </label>
                    <input onChange={handleChange} type="text" id="city" name="city" placeholder="City" />
             
                    <label for="state" >State: </label>
                    <input onChange={handleChange} type="text" id="state" name="state" placeholder="State" />
                </div>
                <div className="signForm">
                    <label for="email" >Email: </label>
                    <input onChange={handleChange} type="text" id="email" name="email" placeholder="Email" />
             
                    <label for="phoneNumber" >Phone Number: </label>
                    <input onChange={handleChange} type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                </div>
                <button onSubmit={handleSubmit}>Find My Garden</button>
            </form>
        </div>
    )
}
export default SignUp