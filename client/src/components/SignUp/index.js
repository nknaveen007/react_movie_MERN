import React,{useState,useRef} from 'react'
import { Wraper, Content} from './Signup.styles'
import profileImg from '../../images/avatar.png'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import instance from '../../API/Api';

const toastPosition = {
    position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
}


const Signup = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const toastId = useRef(null);
    const navigate = useNavigate()

    const onSubmit = async(event) => {
        event.preventDefault();
        setloading(true)
        toastId.current = toast("Request is process", toastPosition);

          try {
            const result = await instance.post('/users', {
                name,email,password
            })
              
            toast.update(toastId.current, {
                render:'Account created successfully',
                type: toast.TYPE.SUCCESS,
                autoClose: 3000,
                hideProgressBar:true
            });
              
              console.log(result)
              setloading(false)
              navigate('/Login')
          } catch (error) {
              console.log(error.response.data)

              const data = error.response.data

              toast.update(toastId.current, {
                render:data.error,
                type: toast.TYPE.ERROR,
                autoClose: 3000,
                hideProgressBar:true
              });

              setloading(false)
          }
    }

    return (
        <Wraper >
            
            <Content>
           
                <div className='imgContainer'>
                   <img src={profileImg} alt="profile" /> 
                </div>
                <h2 className='logintext'>Sign in</h2>
                <form className='form' onSubmit={onSubmit} >
                <div className='inputcontainer'>
                        <input type="text" name="name" id="name" minLength={5} required className='inpfield' value={name} onChange={(event)=>setname(event.target.value) }/>
                        <label htmlFor="name">Name</label>
                        <div className='underline'></div>
                   </div>
                    <div className='inputcontainer'>
                        <input type="email" name="email" id="email" required className='inpfield' value={email} onChange={(event)=>setemail(event.target.value) }/>
                        <label htmlFor="email">Email</label>
                        <div className='underline'></div>
                   </div>
                   <div className='inputcontainer'>
                        <input type="password" name="password" id="password" required minLength={8} className='inpfield' value={ password} onChange={(event)=>setpassword(event.target.value) }/>
                        <label htmlFor="password">Password</label>
                        <div className='underline'></div>
                    </div>
                    <div className='bottomV'>
                        {loading ?
                            <>
                                 <p className="link">Have account ? Login</p>
                                 <button type='button' className='btn'>SIGN IN</button>
                            </> :
                            <>
                                <p className="link">Have account ? <Link className='linkd' to='/Login'> Login</Link></p>
                                <button type="submit" className='btn'>SIGN IN</button>
                            </>
                        }
                    
                    </div>
                  
               </form>
           </Content>
        </Wraper>
    )
}

export default Signup
