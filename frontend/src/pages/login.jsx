import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import {
 SignedIn,
 SignedOut,
 SignIn,
 SignUp,
 useUser,
} from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";


const LoginPage = () => {
 const [showSignUp, setShowSignUp] = useState(false);
 const [showLogin, setShowLogin] = useState(false);
 const [search, setSearch] = useSearchParams();
 const { isLoaded, } = useUser();


 useEffect(() => {
   if (search.get("sign-in")) {
     setShowSignUp(true);
   }
 }, [search]);


 const handleOverlayClick = (e) => {
   if (e.target === e.currentTarget) {
     setShowSignUp(false);
     setShowLogin(false);
     setSearch({});
   }
 };


 if (!isLoaded) {
   return (
     <div className="h-96 flex items-end">
       <BarLoader width={"100%"} color="#080808" />
     </div>
   );
 }


 return (
   <>
     <main className="flex">
       <section className="w-1/2 gap-10 sm:gap-20 py-10 sm:py-20 justify-center items-center">
         <div className="flex items-center justify-center h-full">
           <Card className="py-32 px-10 border-2">
             <CardHeader>
               <CardTitle> Login/sign up: </CardTitle>
             </CardHeader>
             <CardContent>Login or sign up as a student or teacher.</CardContent>
             <div className="flex justify-center pt-5">
               <div className="flex gap-10">
                 <SignedOut>
                   <Button
                     variant="outline"
                     onClick={() => setShowLogin(true)}
                   >
                     Login
                   </Button>
                   <Button
                     variant="outline"
                     onClick={() => setShowSignUp(true)}
                   >
                     Sign up
                   </Button>
                 </SignedOut>
                 <SignedIn>
                   <Navigate to="/blackboard-verification" />
                 </SignedIn>
               </div>
             </div>
           </Card>
         </div>


         {showSignUp && (
           <div
             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             onClick={handleOverlayClick}
           >
             <SignUp forceRedirectUrl="/blackboard-verification" />
           </div>
         )}


         {showLogin && (
           <div
             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             onClick={handleOverlayClick}
           >
             <SignIn forceRedirectUrl="/blackboard-verification" />
           </div>
         )}
       </section>
       <div className="w-1/2  bg-black flex items-center justify-center min-h-screen">
         <section className="text-center flex">
           <div className="flex flex-col justify-center py-3 text-white text-8xl font-black border-r-4 p-2 sm:text-5xl lg:text-7xl">
             <span className="mb-[-16px]">CU</span>
             <span>NY</span>
           </div>
           <div className="flex justify-center items-center flex-col">
             <div className="relative">
               <h1
                 className="flex items-center justify-center text-4xl sm:text-5xl lg:text-7xl
        tracking-tighter py-4 text-white pl-3 font-bold"
               >
                 Blackboard
                 <span className="absolute top-[-1%] right-[-13%]">+</span>
               </h1>
             </div>
           </div>
         </section>
       </div>
     </main>
   </>
 );
};


export default LoginPage;



