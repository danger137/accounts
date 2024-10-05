"use client";
import { useEffect, useState } from "react"
import "./user.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import meraStore from "@/store/store";
import axios from "axios";


{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /> */}

let   user1 =  ()=>{




return <Provider store={meraStore} >
  <User></User>

</Provider>

}

export default user1;


 function User(){
let dispatch = useDispatch();

    let [users,setUsers] = useState([]);

useEffect(()=>{

axios.get("api/Signup").then((resp)=>{
  setUsers(resp.data.users);
})

},[])
// let users = useSelector((store)=>{
//   return store.users;
// })
return <div>
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
        </div>
        <div className="table-responsive">
          <table className="table no-wrap user-table mb-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-0 text-uppercase font-medium pl-4"
                >
                  #
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Name
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Last Name
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Company
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Email
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Category
                </th>
                <th scope="col" className="border-0 text-uppercase font-medium">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
            {
                users.map((user,meraIndex)=>{
return <tr key={meraIndex} >
      <td className="pl-4">1</td>
                <td>
                  <h5 className="font-medium mb-0">{user.Name}</h5>
                </td>
                <td>
                <h5 className="font-medium mb-0">{user.LastName}</h5>
              
                </td>
                <td>
                <h5 className="font-medium mb-0">{user.Company}</h5>
                
                </td>
                <td>
                <h5 className="font-medium mb-0">{user.Email}</h5>
                </td>
                <td>
                  <select
                    className="form-control category-select"
                    id="exampleFormControlSelect1"
                  >
                    <option>Modulator</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Subscriber</option>
                  </select>
                </td>
                <td>
                  <button
                  id="btn4"
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle"
                    onClick={()=>{
                        // dispatch(removeUser(meraIndex));
                        axios.delete('/api/Signup?abc='+user._id)
                        
                    }}
                  >
                     <i className="fa fa-trash" />{" "}
                 
                  </button>
                  <button
                    type="button"
                    id="btn4"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                    onClick={()=>{
                       
                      //  dispatch(updateUser({
                      //   email,
                      //   meraIndex
                      //  }))
                      user.Email = prompt("Email");
                     axios.put("/api/Signup",user).then((resp)=>{
                      
                     })
                  

                    }}
                  >
                  <i className="fa fa-edit" />{" "}
                
                   
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                  >
                  <i className="fa fa-key" />{" "}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                  >
                    <i className="fa fa-upload" />{" "}
                    
                  </button>
                </td>
</tr>
                })
            }

           
            
             
            
           
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>



 


</div>



}