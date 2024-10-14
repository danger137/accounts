"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import "./login.css";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check username and password
        if (username === 'admin' && password === 'password') {
            // Set the cookie for authentication
            Cookies.set('authToken', 'authenticated', { path: '/' });

            // Redirect to admin section
            console.log('Login successful, redirecting to /BlogAd');
            router.push('/BlogAd')
              
            
               
        } else {
            // Show an error message if authentication fails
            setError('Invalid username or password');
            alert('Invalid username or password');
        }
    };

    return (
        <div>
       
            <form onSubmit={handleLogin}>
            <div style={{height:"100vh"}} >
<section className="vh-100">
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div style={{background:"#1f272b"}} className="col-12 col-md-6 text-black  position-relative">
    

        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h5 style={{ color: "rgb(141 139 139)" }} className="h5 ms-2 mt-5 pt-4 ">Login to JCB</h5>
            <p style={{ color: "rgb(141 139 139)" }} className="small ms-2 text-md-start">
              Warning Only Admin Can Use
            </p>

            <div className="rounded-3 p-2 py-2">
              <p id="text1" style={{ color: "#cbcbcb" }} className="small ps-2 mb-1">
                Email
              </p>
              <input      type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
 id="form2Example18" className="form-control p-3 form-control-lg" />
            </div>

            <div className="mt-2 p-2 py-0">
              <p id="text2" style={{ color: "#cbcbcb" }} className="small ps-2 mb-1">
                Password
              </p>
              <input  type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required id="form2Example28" className="form-control p-3 form-control-lg" />
            </div>

            <div className="d-flex ms-2 flex-column flex-md-row justify-content-between align-items-center mt-3">
              <div className="d-flex gap-md-2 align-items-center">
                <input  type="checkbox" />
                <p style={{color:"blue"}} className="small mb-0">Remember me</p>
              </div>
           
           
            </div>

            <div className="mt-3 ms-2">
              <button type='submit' id="btn" href={"/pages/Profile"} className="btn btn-primary w-100 w-md-auto">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 px-0 d-none d-md-block">
        <img
          src="https://www.patriotsoftware.com/wp-content/uploads/2021/11/real-account.jpg"
          alt="Login image"
          className="w-100 vh-100"
          style={{ objectFit: "cover", objectPosition: "left" }}
        />
      </div>
    </div>
  </div>
</section>
</div>
            </form>
        </div>
    );
}


