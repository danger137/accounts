
"use client";

import "./Security.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Security(){

  
        let move = useRouter();
    
 
        const openFacebook = () => {
                window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
              };



    return <div>
    
        
    <div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Security Measures</p>
    
            </div>
    
            <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
             
            </div>
    
            <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
             
            </div>
    
            {/* Fourth Item with Increased Top Margin */}
            <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
               
            <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
            <i className="fa-solid fa-message"></i>
            <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: 703-953-6184</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i style={{cursor:"pointer"}} onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                                            
                        <a href="https://wa.me/17039536184" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-whatsapp mt-2 " style={{ color: 'white' }}></i>
</a>

                  
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-envelope mt-2 " style={{ color: 'white',cursor:"pointer" }} ></i>
</a>

                                              <i className="fa-solid fa-wifi mt-2"></i>
               
                                          </div>
                  
                    </li>
                </ul>
            </div>
        </div>
            </div>
        </div>
    </div>
    
    
        </div>
        
    </div>
    
    <div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
    <div className="mt-3 text-center text-md-start me-md-4"> {/* Increased right margin for more gap */}
        <ul className="list-unstyled">
          <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
            IN THIS SECTION:
          </li>
    
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
          Client Portal
          </li>
    
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
          SecureSend
          </li>
    
    
     
    
          <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
            Quick Links:
          </li>
    
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Financial Calculators
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Send Us A File
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Track Your Refund
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            IRS Tax Forms
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            State Tax Forms
          </li>
          <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
            Tax Due Dates
          </li>
        </ul>
      </div>
      
      <div className=" text-center text-md-start"  >
    
    
         {/* Center text on small screens and align left on medium and larger screens */}
      <ul className="list-unstyled mt-3">
    
      <div className="container">
      <div className="d-flex flex-column align-items-center align-items-lg-start">
    
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start mt-5" style={{ width: "100%" }}>
        <div >
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center" style={{lineHeight: "30px", fontWeight: "300", width: "100%"}}>
        <p  className="h1 mb-0 text-center text-md-start" style={{lineHeight: "30px", fontWeight: "400",color:"#0078a5"}}>
      
Client Portal Security Measures
        </p>
      </div>
    </div>
    
    </div>
    
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",fontFamily:"initial"}}>
          "OUR CLIENT PORTAL IS THE MOST SECURE CLIENT PORTAL AVALIABLE ON THE MARKET."
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
  Your data is protected in extremely secure environments. Most Client Portal vendors provide 5 or 6 layers of security. <a href="https://www.cpasitesolutions.com" target="_blank" rel="noopener noreferrer">CPA Site Solutions</a>, who hosts our Client Portal, protects you with 14 full Layers of Security.
</p>

        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        1. SAS 70/SSAE 16 Certified Datacenter
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Not all datacenters are alike. You don't want your client's data hosted on a low cost "cheap" datacenter. The best datacenters are both SSAE 16 and SAS 70 Type II certified. That means a specially trained CPA Firm performed an in-depth audit attesting to the fact that the datacenter has sufficient processes, controls, and safeguards to keep your data safe from theft, corruption or mishandling.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Unlike the Type I Certification which only measures a certain point in time. The Type II Certification measures and evaluates security over time.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The Sarbanes-Oxley Act requires all publicly traded companies to use SSAE 16/SAS 70 Type II Certified datacenters. So you can protect yourself the same way publicly traded companies protect themselves, because all of CPASiteSolutions' Servers are located in high quality SSAE 16/SAS 70 Type II Certified Datacenters.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The servers are housed in a secure, 24/7, around-the-clock, guarded facility with closed-circuit motion sensitive video surveillance. Physical access to the servers is strictly limited to only authorized datacenter personnel. And all personnel are further restricted by Dual Factor Biometric Authentication Barriers.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        2. Encrypted File Storage
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Almost all Client Portal providers encrypt the data as it's transferred to the server. But what they fail to do is encrypt the data when it's on the server. Since the data spends almost all it's time on the server, we feel it's necessary to store the data in an encrypted format.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        If this were easy to do, everyone would be doing it. Storing data in an encrypted format requires a lot of programming from extremely high level security experts. All the encryption and decryption places a heavy load on the server's processors so significantly fewer accounts can be placed on each server.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        It's expensive, but worth it when you consider that encryption is considered the most effective method of securing personal and corporate information according to corporate and government security regulators. In fact, many data protection laws specifically list encryption as a "safe harbor" exception to notification rules, and some laws explicitly require the use of encryption.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        3. High Level Filename Obfuscation
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        As an additional level of security all of the filenames stored on the server are completely unrecognizable. Instead of meaningful filenames they are listed as a totally random set of characters and numbers.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        On the very unlikely event a hacker finds their way into our servers, they would find it impossible to make any sense of the files. And remember, they can't read the content of the files because all files are encrypted.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        4. Forced SSL Transfer
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Hackers have many ways to intercept data that is transferred insecurely over the web. And now it's even easier with the wider use of laptops and wireless routers.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The best way to protect your data is to transfer the data over a Secure Socket Layer (SSL). SSL encrypts the data so the data is absolutely useless to anyone who goes through the effort of capturing it.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        You are always protected because the Client Portal automatically recognizes if a user is trying to transfer information insecurely. The Portal then forces the transfer to occur under an encrypted Secure Socket Layer.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        5. SQL Injection Protection
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        SQL Injection is a method hackers use to break into databases. Once in a database, a hacker can easily wreak havoc. Millions of websites are hacked with SQL injection every year. Even the United Nations website was recently hacked using SQL injection and cost hundreds of thousands of dollars to repair.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        CPASiteSolutions' Client Portal renders SQL Injection attacks completely useless because it utilizes the "Best Practice" of parameterized data calls.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        6. Brute Force Login Protection
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Brute force attacks occur when a hacker writes a program that runs through millions of common username and password combinations to gain access to a secure system.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        You are protected from Brute Force attacks because after 3 incorrect login attempts the Client Portal uses CAPTCHA technology which requires a human to read an image that appears. This stops computer programs from guessing correct user and password combinations.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        7. Strong Password Policies
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Weak "easily cracked" passwords are unsafe. The client portal never allows weak passwords and allows firm administrators to require users to create passwords that meet certain levels of strength.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        8. State-of-the-Art Firewall
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        CPASiteSolutions uses a state-of-the-art CheckPoint UTM-1 Edge Firewall that is configured with the least number of ports open and advanced IP restrictions.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        9. Real Time Virus Scanner
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The server is continually scanned for viruses and the virus database is updated every hour.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        10. Encrypted "Cross Server" Backups
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Another common hack is to attack and gain access to backups. Backup media often is held and transferred in "less secure" environments. Hackers know this and often find ways to gain access to backup data.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        This is impossible with CPASiteSolutions' Client Portal because the backup files are encrypted and stored in extremely secure facilities. Even if a hacker got their hands on our backups they would not be able to access any information because of the high level file encryption.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        11. FireSlayer - Denial of Service Attack Protection
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The servers are additionally protected from denial of service attacks. A denial of service attack is made when a virus infects thousands of computers on the Internet. Then all those infected computers make repeated requests to a single server. The targeted server often can't handle the load and crashes. The FireSlayer system detects this kind of activity and automatically blocks the abusive traffic on-the-fly.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        12. TippingPoint - Intrusion Prevention System
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Hackers attempt to gain access to servers in many different ways. That's why we use the award-winning TippingPoint Intrusion Prevention System. This system fully inspects every packet of data coming to the servers, then instantly determines whether it's legitimate or malicious. This instantaneous form of protection is the most effective means of preventing attacks from ever reaching their targets.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        13. Detailed Audit Trails and Reporting
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        All accounting firms must comply with the Gramm-Leach-Bliley Act and are specifically accountable for the safe and verifiable delivery of sensitive information. Firms must additionally make sure the intended recipient is the only recipient.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        The Client Portal provides records of every transaction and allows you to...
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
         <ul >
         <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Reduce the time and cost of complying with privacy regulations</li>
          <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Prove that information has not been leaked</li>
          <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Eliminate the customer service costs associated with disclosure of a data breach</li>
          <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Eliminate the legal liability associated with data breach disclosure</li>
         </ul>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        14. Operating System Hardening and Patch Management
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        There is a lot more to managing secure servers than you may realize. Server Operating Systems are not secure when they come out of the box. It takes highly skilled software technicians to hone and harden the System Software to minimize exposure to current and future threats.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Our servers are continually updated with the newest OS patches, hotfixes and updates to reduce the threat of security attacks and system downtime.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        These advanced security measures are fully compliant with Sarbanes-Oxley and Gramm-Leach-Bliley
</p>
        </div>
        
  
  
       
    
      </div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    }
    
    
    
    



