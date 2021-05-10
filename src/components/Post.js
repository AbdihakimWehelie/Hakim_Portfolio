import React,{ useState, useEffect} from "react";
import{Link} from "react-router-dom";
import sanityClient from "../client.js";
import FadeIn from 'react-fade-in';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';



init(process.env.REACT_APP_NOT_SECRET_CODE)


export default function Post(){

  const [contactNumber, setContactNumber] = useState("000000");
  const [errorMessage, setErrorMessage]=useState('');



  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }



  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
  generateContactNumber();  sendForm('default_service', process.env.REACT_APP_NOT_TEMPLATE, '#contact-form')
    .then(function(response) {
      alert("Your email has been sent");
      console.log('SUCCESS!', response.status, response.text);
      setErrorMessage('');
    }, function(error) {
      console.log('FAILED...', error);
      setErrorMessage(error);
	  console.log(errorMessage.text);
      console.log(process.env.REACT_APP_NOT_TEMPLATE);
      console.log(process.env.REACT_APP_NOT_SECRET_CODE);
    });
}



  return(
      <FadeIn>
      <h3 style={{fontFamily:"Paprika"}} className="text-lg  text-yellow-500 font-blog flex justify-center mb-12">If you have something you want to ask me, send me an email.</h3>
	  
      <form id='contact-form' class="bg-#320a8f rounded px-8 my-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' name='contact_number' value={contactNumber} />
        <input {...register("name")} name='user_name' type='text'  placeholder='Name' class="shadow my-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        <br/>
        <input {...register("email")} name='user_email' type='email'  placeholder='Email' class="shadow my-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"required/>
        <br/>
        <textarea {...register("message")} name='message' placeholder='Message'class="shadow my-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"required/>
        <br/>
        <input type='submit' value='Send' class="bg-blue-400 hover:bg-yellow-400 text-yellow-300 hover:text-blue-500 font-bold py-2 px-4 rounded w-auto"/>
      </form>
      </FadeIn>
  )
}
