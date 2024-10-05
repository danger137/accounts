"use client";
import Link from "next/link";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import ProviderRedux from "../components/ProviderRedux/ProviderRedux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setUser } from "@/store/auth";
import { toast } from "react-toastify";

let login1 =  ()=>{

  return <ProviderRedux>
  <Login></Login>
  
  </ProviderRedux>
  
  
  }
  
  export default login1;

  function Login(){

  let dispatch = useDispatch()
  
  let {register,handleSubmit,formState:{errors}} = useForm();
  let users = useSelector((store)=>{
    return store.users;
  })
  let move = useRouter();

  const login = (meraUser)=>{

 

    
    
    axios.post("/api/Login2",meraUser).then((resp)=>{
      if(resp.data){
        toast.success("login done");
        move.push("/adminData");
        dispatch(setUser(resp.data.user));
        localStorage.setItem("token",resp.data.token);
      }
    })
    
    
      
     
    
    
    
 
    
    }




return <div style={{height:"100vh"}} >
<section className="vh-100">
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div style={{background:"#1F272B"}} className="col-12 col-md-6 text-black  position-relative">
      
      <form onSubmit={handleSubmit(login)}  >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h5 className="h5 ms-2 mt-5 pt-4 text-white ">Login to JCB</h5>
            <p style={{ color: "rgb(141 139 139)" }} className="small ms-2 text-md-start">
            Login For Our Best Services.
            </p>

          

            <div className="rounded-3 p-2 py-2">
              <p id="text1" style={{ color: "#cbcbcb" }} className="small ps-2 mb-1">
                Email
              </p>
              <input  {...register("Email",{required:true})} type="email" id="form2Example18" className="form-control p-3 form-control-lg" />
            </div>
            { errors.Email && errors.Email.type == "required" ? <div className="password text-center pt-2 " >Please Enter Email</div>:null}
            <div className="mt-2 p-2 py-0">
              <p id="text2" style={{ color: "#cbcbcb" }} className="small ps-2 mb-1">
                Password
              </p>
              <input {...register("Password",{required:true})} type="password" id="form2Example28" className="form-control p-3 form-control-lg" />
            </div>
            { errors.Password && errors.Password.type == "required" ? <div className="password text-center pt-2 " >Please Enter Email</div>:null}
            <div className="d-flex ms-2 flex-column flex-md-row justify-content-between align-items-center mt-3">
            <p style={{ color: "rgb(141 139 139)" }} className="small pt-3 pt-md-0 text-center text-md-end mt-2 mt-md-0">
  Not yet a member ?  
  <Link href="/Registration" className="ms-1" style={{ color: "#2193c9", textDecoration: "underline" }} >Register here</Link>.
</p>

            </div>

            <div className="mt-3 ms-2">
              <button type="submit" id="btn"  className="btn btn-primary w-100 w-md-auto">
                Log in
              </button>
            </div>
          </div>
        </div>
            </form>
      </div>

      <div className="col-12 col-md-6 px-0 d-none d-md-block">
        <img
          src="https://www.shutterstock.com/image-photo/sales-department-having-monthly-summary-600nw-2338633555.jpg"
          alt="Login image"
          className="w-100 vh-100"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
    </div>
  </div>
</section>

























</div>




}




