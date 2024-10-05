"use client"
import { setUser } from "@/store/auth";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import ProviderRedux from "../ProviderRedux/ProviderRedux";


let session2 = ()=>{
  return <ProviderRedux>
    <Session></Session>
  </ProviderRedux>
}

export default session2;
//  function Session(){

//   let dispatch = useDispatch();


//   useEffect(()=>{
//     axios.post("/api/Signup",{
//         token : localStorage.getItem("token"),
//        action:"session-check"    
//     }).then((resp)=>{
//       if(resp.data.user){
//         dispatch(setUser(resp.data.user));
//       }
//     })

//   },[])
// return <div>

// </div>

// }



function Session(){
  let dispatch = useDispatch();

  useEffect(()=>{
    axios.post("/api/Signup",{
      token:localStorage.getItem("token"),
       action:"session-check"      
    }).then((resp)=>{
      if(resp.data.user){
        dispatch(setUser(resp.data.user));
      }
    })
  },[])

return <div>

</div>

}