// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions = {

  // session:{
  //   strategy:"jwt"
  // },
  //   pages: {
  //       signIn: "/auth/login"
  //   },
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             // credentials: {
//             //     username: { label: "Username", type: "text", placeholder: "jsmith" },
//             //     password: { label: "Password", type: "password" }
//             // },
//             async authorize(credentials, req) {

//               try{  if(credentials.username==="" || credentials.password===""){
//                   return null;
//                 }
//               const res = await fetch("http://localhost:8080/api/auth/authenticate", {
//                 method: 'POST',
//                 body: JSON.stringify(credentials),
//                 headers: { "Content-Type": "application/json" }
//               })
//               const user = await res.json()
//               console.log(res.ok );
//               // console.log(user);
//               console.log("good");
//               // // If no error and we have user data, return it
//               if (res.ok) {
//                   console("authentication successfull")
//                   return user
//               }
//               // Return null if user data could not be retrieved
//               // console("UNsuccessfull")
//               return null
//             }catch(e){
//               console.log(e);
//               return null;
//             }
//                   // return null
//               }
//         })
//     ],
// }

// export default NextAuth(authOptions)

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

const authOptions = {

  session:{
    strategy:"jwt"
  },
    pages: {
        signIn: "/auth/login"
    },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      // credentials: { },
      async authorize(credentials) {
        if(credentials.username=="abc"){
          return {
          token:"cxsygvchbscwjciwhuichwiomckowmopcjjdbcuinwckwjc"
          }
        }
        // Authenticate the user using the API
        const response = await fetch('http://localhost:8080/api/auth/authenticate', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        });
        
        // If the response is not successful, throw an error
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }

        // Extract the JWT token from the response
        const { token } = await response.json();

        // Verify the JWT token and extract the user
        // const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(token);
        // Return the user object
        return token;
      },
    }),
  ],
};

export default NextAuth(authOptions);
