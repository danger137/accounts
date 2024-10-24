"use client";
import Link from "next/link";


import "./Footer.css";


export default function Footer() {


  
  


  // Simulate fetching user info from localStorage or an API
  
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user"); // Assuming you store the user in localStorage
  //   if (storedUser) {
  //     dispatch(setUser(JSON.parse(storedUser)));
  //   }
  // }, [dispatch]);

  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <div
        style={{ background: "black" }}
        className="d-flex flex-column flex-md-row justify-content-around align-items-center py-2 px-3"
      >
        <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-md-0">
          <p className="text-white mb-0 small-text" style={{ whiteSpace: "nowrap" }}>
            Exchange place · Jersey City, JC 07305
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2 gap-md-3 align-items-center">
          {/* {someName ? (
            <Link
              className="text-decoration-none"
              onClick={() => {
                dispatch(setUser("")); // Log out user
                localStorage.removeItem("user"); // Remove user from localStorage
              }}
              href="/Login"
            >
              Logout
            </Link>
          ) : (
            <Link href="/Login" className="text-decoration-none" style={{ color: "#0078a5" }}>
              Login
            </Link>
          )} */}

          <Link href="/Policy" className="text-decoration-none" style={{ color: "#0078a5" }}>
            Privacy Policy
          </Link>
          <Link href="/Disclaimer" className="text-decoration-none" style={{ color: "#0078a5" }}>
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
