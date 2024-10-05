"use client"
import { useRef, useState } from "react";
import "./register.css";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";





export default function Registration(){

  let {register,handleSubmit,formState:{errors}} = useForm();


  let move = useRouter();

// let move = useNavigate();

const signup = (meraUser)=>{
//  userArray.push(meraUser);
// dispatch(addUser(meraUser));
console.log(meraUser);


let foemdata = new FormData();
foemdata.append("Name",meraUser.Name);
foemdata.append("LastName",meraUser.LastName);
foemdata.append("Email",meraUser.Email);

foemdata.append("Password",meraUser.Password);

foemdata.append("Company",meraUser.Company);

foemdata.append("action","signup");


axios.post("/api/Signup",foemdata).then((resp)=>{

if(resp.data.success){

  move.push("/Login");
toast.success("Signup done")
}else{
  toast.error(resp.data.message);
}

})

}

  

  





return <div   style={{minHeight:"100vh"}} >

<div style={{background:"#1F272B"}} className="min-vh-100">


  <div className="min-vh-100 d-flex justify-content-center  align-items-center">
    <div id="bg" className="bg-white d-md-flex flex-column align-items-center p-4 rounded-2 w-100  ">
      <h3 className="h3 text-start w-100">
        Registration
        <hr style={{ height: "3px" }} className="gradient-hr" />
      </h3>

      <div className="d-md-flex justify-content-center align-items-center mb-5">
     
      </div>
      <form onSubmit={handleSubmit(signup)} >
      <div className="row gx-3 gy-3">
     
        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
          <h6>Enter Name</h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            placeholder="Enter your name"
            {...register("Name",{required:true})}
          />
           { errors.Name && errors.Name.type == "required" ? <div className="password text-center pt-1 " >Please Enter Name</div>:null}
        </div>

        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
          <h6>Enter Lastname</h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            placeholder="Enter your Lastname"
            {...register("LastName",{required:true})}
          />
            { errors.LastName && errors.LastName.type == "required" ? <div className="password text-center pt-1 " >Please Enter Last Name</div>:null}
        </div>
      

        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
          <h6>Enter Your Email</h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            placeholder="Enter Your Email"
            {...register("Email",{required:true})}
          />
          { errors.Email && errors.Email.type == "required" ? <div className="password text-center pt-1 " >Please Enter Email</div>:null}
        </div>
        
        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
          <h6>Enter Your Password  </h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            placeholder="Enter Your Password "
            type="password"
            {...register("Password",{required:true})}
            
          />
 { errors.Password && errors.Password.type == "required" ? <div className="password text-center pt-1 " >Please Enter Password</div>:null}
      
        </div>

        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
        <h6>Enter Your Confirm Password  </h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            type="password"
            placeholder="Enter Your Confirm Password "
          />
        </div>
  

        <div className="col-md-6 rounded-2" style={{ height: "75px" }}>
        <h6>Enter Your  Company Name </h6>
          <input
            className="form-control ps-1 input-placeholder"
            style={{ boxShadow: "rgb(157, 149, 149) 0.5px 0.6px 0.5px" }}
            type="text"
            placeholder="Enter Your  Company Name"
            {...register("Company",{required:true})}
          />
            { errors.Company && errors.Company.type == "required" ? <div className="password text-center pt-1 " >Please Enter Company Name</div>:null}
        </div>
      

        <div className="col-md-6">
    
          {/* <div className="d-md-flex justify-content-center">
            <div>
          
            </div>
          </div> */}
       
        </div>

        <div className="col-12">
          <h6>Gender</h6>
          <div className="d-flex flex-column flex-md-row gap-5">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="prefer-not-to-say" />
              <label className="form-check-label" htmlFor="prefer-not-to-say">Prefer not to say</label>
            </div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center mt-3">
          <button type="submit" id="btn" className="btn btn-primary w-100">
            Register
          </button>
          
        </div>
      </div>
        </form>
    </div>
  </div>
</div>









</div>




}





