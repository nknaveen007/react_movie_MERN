import React,{useState,useRef,useContext} from 'react'
import { Wraper, Content} from './LoginView.styles'
import profileImg from '../../images/avatar.png'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import instance from '../../API/Api';
import { LoginAuth } from '../../context/LoginContext';



const toastPosition = {
    position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
}

const LoginView = () => {
    const [token,settoken] = useContext(LoginAuth)
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
            const result = await instance.post('/auth', {
                email,password
            })
              
            toast.update(toastId.current, {
                render:'Login successfully',
                type: toast.TYPE.SUCCESS,
                autoClose: 3000,
                hideProgressBar:true
            });
              settoken(result.data.token)
              localStorage.setItem('token',result.data.token)
              console.log(result.data)
              setloading(false)
              navigate('/')
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
                <h2 className='logintext'>Login</h2>
                <form className='form' onSubmit={onSubmit} >
                    <div className='inputcontainer'>
                        <input type="email" name="email" id="email" required className='inpfield' value={email} onChange={(event)=>setemail(event.target.value) }/>
                        <label htmlFor="email">Email</label>
                        <div className='underline'></div>
                   </div>
                   <div className='inputcontainer'>
                        <input type="password" name="password" id="password" required className='inpfield' value={ password} onChange={(event)=>setpassword(event.target.value) }/>
                        <label htmlFor="password">Password</label>
                        <div className='underline'></div>
                   </div>
                   <div className='bottomV'>
                        {loading ?
                            <>
                                 <p className="link">Create new account ? Sign in</p>
                                 <button type='button' className='btn'>LOGIN</button>
                            </> :
                            <>
                                <p className="link">Create new account ? <Link className='linkd' to='/Signin'> Sign In</Link></p>
                                <button type="submit" className='btn'>LOGIN</button>
                            </>
                        }
                    
                    </div>
               </form>
           </Content>
        </Wraper>
    )
}

export default LoginView
