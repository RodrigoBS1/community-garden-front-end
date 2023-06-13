import { useState, setState } from 'react'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import LocalGardens from './LocalGardens'
=======
import "../SignUp.css"



const SignUp = () => {
    
    const [showGardens, setShowGardens ] = useState(['none'])
    const [ citySel, setCitySel ] = useState('')
    console.log(showGardens)
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
})
    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name] : event.target.value})
    }

    const handleChange2 = (event) => {
        console.log('city changed')
        setUserInfo({...userInfo, [event.target.name] : event.target.value})
       
    }

    const handleSubmit = async (event) => {
        setCitySel(userInfo.city)
        console.log(citySel)
        console.log('clicked submit')
        event.preventDefault()
        console.log(userInfo)
        
       

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
            } else{
                console.error('Error submitting data:',response.status);
                }
            }catch (error){
                console.error('Error submitting data:',error)
            
        }
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
        })
       setShowGardens('block') 

    }

    
    return (
        <div className="signupContainer" >
            <form onSubmit={handleSubmit} className="signupForm">
                <div className="signForm">
                    <label htmlFor="firstName" >First Name: </label>
                    <input onChange={handleChange} type="text" id="firstName" name="firstName" placeholder="First Name" />
             
                    <label htmlFor="lastName" >Last Name: </label>
                    <input onChange={handleChange} type="text" id="lastName" name="lastName" placeholder="Last Name" />
                </div>
                <div className="signForm">
                    <label htmlFor="userName" >Username: </label>
                    <input onChange={handleChange} type="text" id="userName" name="userName" placeholder="Username" />
                
                    <label htmlFor="password" >Password: </label>
                    <input onChange={handleChange} type="text" id="password" name="password" placeholder="Password" />
                </div>
                <div className="signForm">
                    <label htmlFor="city" >City: </label>
                    <input onChange={handleChange2} type="text" id="city" name="city" placeholder="City" />
             
                    <label htmlFor="state" >State: </label>
                    <input onChange={handleChange} type="text" id="state" name="state" placeholder="State" />
                </div>
                <div className="signForm">
                    <label htmlFor="email" >Email: </label>
                    <input onChange={handleChange} type="text" id="email" name="email" placeholder="Email" />
             
                    <label htmlFor="phoneNumber" >Phone Number: </label>
                    <input onChange={handleChange} type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                </div>
                <div className='button'>
                <button>Find My Garden</button>
                </div>
            </form>
            <div className="localGardenDisplay" style={{display:showGardens}}>
                <LocalGardens  city={citySel}/>
            </div>
        </div>
    )
}
export default SignUp