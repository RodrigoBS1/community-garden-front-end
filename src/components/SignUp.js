import { useState, setState } from 'react'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import LocalGardens from './LocalGardens'
import "../SignUp.css"




const SignUp = () => {
    let myCity = ''
    let newID
    let newUser
    // const [showGardens, setShowGardens ] = useState(['none'])
    // const [ citySel, setCitySel ] = useState('')
    // console.log(showGardens)
    const navigate = useNavigate()
    const [ userInfo, setUserInfo ] = useState ({
        firstName:'',
        lastName:'',
        userName:'',
        password:'',
        phoneNumber:'',
        city:'',
        state:'',
        zipcode:'',
        email:''
        // garden:''
})
    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name] : event.target.value})
    }

    const handleChange2 = (event) => {
        console.log('city changed')
        setUserInfo({...userInfo, [event.target.name] : event.target.value})
       
    }

    const handleSubmit = async (event) => {
        // setCitySel(userInfo.city)
      
        console.log('clicked submit')
        event.preventDefault()
        console.log(userInfo)
        console.log(userInfo.garden)
        myCity = userInfo.city
       
       
        console.log(myCity)
        
       

        try{
            const response = await fetch('https://community-garden-api.onrender.com/users',{
               method: 'POST',
               headers: {
                'Content-Type' : 'application/json',
               } ,
               body: JSON.stringify(userInfo),
            });

            if (response.ok){
                const responseData = await response.json();
                console.log('Data submitted successfully:',responseData);
                newID = responseData.id 
                console.log(newID)
                newUser = responseData.userName
                console.log(newUser)
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
     
        console.log(newID)
        setUserInfo({ 
            firstName:'',
            lastName:'',
            userName:'',
            password:'',
            phoneNumber:'',
            city:'',
            state:'',
            zipcode:'',
            email:''
            // garden:''
        })
    //    setShowGardens('block') 
     navigate(`/localgardens/${newID}_${myCity}_${newUser}`)

    }

   

    
    return (
        <div className="signupContainer" >
            <form onSubmit={handleSubmit} className="signupForm">
                <div className="signForm">
                    <label htmlFor="firstName" >First Name: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="firstName" name="firstName" placeholder="First Name" />
             
                    <label htmlFor="lastName" >Last Name: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="lastName" name="lastName" placeholder="Last Name" />
                </div>
                <div className="signForm">
                    <label htmlFor="userName" >Username: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="userName" name="userName" placeholder="Username" />
                
                    <label htmlFor="password" >Password: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="password" name="password" placeholder="Password" />
                </div>
                <div className="signForm">
                    <label htmlFor="city" >City: </label>
                    <input className='inputSignup' onChange={handleChange2} type="text" id="city" name="city" placeholder="City" />
             
                    <label htmlFor="state" >State: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="state" name="state" placeholder="State" />
                </div>
                <div className="signForm">
                    <label htmlFor="email" >Email: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="email" name="email" placeholder="Email" />
             
                    <label htmlFor="phoneNumber" >Phone Number: </label>
                    <input className='inputSignup' onChange={handleChange} type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                </div>
                
             
                <div className='buttonSubmitGarden'>
                <button className='buttonGarden'>Sign Up</button>
                </div>
            </form>
            {/* <Link to='/localgardens' state={{id:newID, city:myCity, user:newUser}}><button className="seeGardens">Find My Garden</button></Link> */}
            
        </div>
    )
}
export default SignUp