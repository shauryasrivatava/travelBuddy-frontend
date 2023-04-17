import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";

const index = ()=> {

  const router = useRouter();

  const [authState, setAuthState] = useState({
    username: '',
    password: ''
})
const [pageState, setPageState] = useState({
  error: '',
  processing: false
})

const handleFieldChange = (e) => {
  setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
}

const simplifyError = (error) => {
  const errorMap = {
      "CredentialsSignin": "Invalid username or password"
  }
  return errorMap[error] ?? "Unknown error occurred"
}

  // const [username,setUsername]=useState('');
  // const [password,setPassword]=useState('');
  // const [token,setToken]=useState('');
  // const [errorIn,setErrorIn]=useState('');


//   useEffect(
//       () => {
//           if(localStorage.getItem('user_info')){
//               router.push("/Dashboard");
//           }
//       }
//  ,[]);

const handleAuth = async () => {
  setPageState(old => ({...old, processing: true, error: ''}))
  signIn('credentials', {
      ...authState,
      redirect: false
  }).then(response => {
    // response.url="http://localhost:3000/"
    console.log(response)

      if (response.ok) {
          // Authenticate user
          router.push("/Home")
      } else {
          setPageState(old => ({ ...old, processing: false, error: response.error }))
      }
  }).catch(error => {
      console.log(error)
      setPageState(old => ({...old, processing: false, error: error.message ?? "Something went wrong!"}))
  })




  
  // let item={username,password};
  // if(username==="" || password===""){
  //     router.push("/error");
  // }

  
  //     let result=await fetch("http://localhost:8080/api/auth/authenticate",{
  //         method: 'POST',
  //         headers: {
  //             "Content-Type":"application/json",
  //             "Accept":"*/*"
  //         },
  //         body: JSON.stringify(item)
  //     });
  //     // console.log(result.token);
  //     // console.log(result.ok);
      
  //     // check for error response
      // if (!result.ok) {
      //   // get error message from body or default to response status
      //   const error = (result && result.data) || result.status;
      //   console.log("Got error");
      //   router.push("/error");
        
      // }
      
      // else{
      //   result=await result.json();
      //   console.log(result);
      //   console.log("happy")
      //   setToken(result);
      //   console.log(token);
      //   localStorage.setItem("user_info",JSON.stringify(result));
        
      //         // const myProfile=(JSON.parse(localStorage.getItem('user_info'))).result;
      //         // console.log(JSON.stringify(myProfile));
      //         router.push("/Dashboard",);
      //     }
  
  } 


//   return (
//     <div >
//         <div >
//             {/* {
//                 pageState.error !== '' && <Alert severity='error' sx={{mb: 2}}>{simplifyError(pageState.error)}</Alert>
//             } */}
//             <input onChange={handleFieldChange} value={authState.username} fullWidth  id='username' />
//             <input  onChange={handleFieldChange} value={authState.password} fullWidth  type='password' id='password' />
//             <Button  onClick={handleAuth} >Login</Button>
//         </div>
//     </div>
// )

  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Logo
            </a>
          </div>
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8" >
              {
                pageState.error !== '' && <div  sx={{mb: 2}}>{simplifyError(pageState.error)}</div>
              }
              <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="username"
                  id="username"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleFieldChange}
                  value={authState.username}
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleFieldChange}
                  value={authState.password}
                />
              </div>
              <Button onClick={handleAuth} className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" >Login</Button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link href="Signup" className="underline font-semibold">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default index;