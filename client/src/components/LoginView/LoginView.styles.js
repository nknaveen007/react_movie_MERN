import styled from 'styled-components'
import bgImage from '../../images/bg.jpg'


export const Wraper = styled.div`
   background:url(${bgImage}) no-repeat;
   height: 100vh;
   background-size: cover;
   background-position: center;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 10px;
`

export const Content = styled.div`
   width: 100%;
   height: 400px;
   max-width: 485px;
   background-color: rgba(0,0,0,0.7);
   border-radius: 10px;
   box-shadow: 0 15px 25px rgba(0,0,0,0.5) ;
   position: relative;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 20px 40px;

   @media (max-width:400px){
      padding:30px 20px;
   }

   .imgContainer{
      position: absolute;
      width: 100px;
      height: 100px;
      background-color:  rgba(255,255,255,0.8);
      top:-12%;
      left:50% -50;
      border-radius: 50%;
      overflow: hidden;
      pointer-events: none;
   }
   img{
      width: 100%;
      height: 100%;
   }

   .logintext{
      font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';
      color: #ff652f;
      margin-top: 15%;
      font-size: 1.8rem;
   }
   .form{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
   }
   .inputcontainer{
      width:100%;
      display: flex;
      flex-direction: column;
      position: relative;
      
   }

   .inpfield{
      outline: none;
      border: none;
      height: 40px;
      font-size: 18px;
      padding: 0 10px;
      background-color: transparent;
      border-bottom: 1px solid silver;
      margin-bottom: 30px;
      color: var(--white);
      font-family: 'sans-serif';
      transition: 0.3s ease-in;
      
   }
   
  .inputcontainer label{
     position: absolute;
     bottom: 40px;
     transition: 0.3s ease;
     font-size: 18px;
     color: var(--white);
     font-family: 'sans-serif';
     pointer-events: none;
  }
 
  .inputcontainer input:not([value='']) ~ label,
  .inputcontainer input:valid ~ label,
  .inputcontainer input:focus ~ label{
     transform: translateY(-23px);
     font-size: 20px;
     color: #ff652f;
  }
  

  .inputcontainer input:-webkit-autofill{
    box-shadow:0 0 0 1000px rgba(0,0,0,0.3) inset !important;
    
  }

  .inputcontainer .underline{
     position: absolute;
     bottom: 30px;
     width: 100%;
     height: 2px;
     
  }
  .inputcontainer .underline:before{
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      background-color: var(--white);
      transform: scaleX(0);
      transition:transform 0.3s ease;
  }
  .inputcontainer input:focus ~ .underline:before,
  .inputcontainer input:valid ~ .underline:before{
      

      transform: scaleX(1);
  }

  .btn{
      width: 100px;
      height: 40px;
      border: none;
      background-color: #ff652f;
      cursor: pointer;
      border-radius: 5px;
      font-family: sans-serif;
      font-size: 18px;
      font-weight: 400;
      color: var(--darkGray);
  }
  .bottomV{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     width: 100%;
     align-items: center;
  }
  .link{
      
      font-size: 20px;
      color: var(--white);
  }
  .linkd{
      color: #ff652f;
  }
 
`
