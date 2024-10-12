"use client"
import Link from "next/link";
import "./April.css";
import { useRouter } from "next/navigation";




export default function April(){
  let move = useRouter();

  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com', '_blank');
  };


  const openTwitter = () => {
    window.open('https://www.twitter.com', '_blank');
  };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = [
      ['', '', '', '', '1', '2', '3'],
      ['4', '5', '6', '7', '8', '9', '10'],
      ['11', '12', '13', '14', '15', '16', '17'],
      ['18', '19', '20', '21', '22', '23', '24'],
      ['25', '26', '27', '28', '29', '30', ''],
    ];
  
    const headerStyle = {
      padding: '5px',
      backgroundColor: '#0078A5',
      color: 'white',
      fontSize: '16px', // Reduced font size for better fit
      fontWeight: 'bold',
      textAlign: 'center', // Center align header text
    };
    
    const tableStyle = {
      width: '100%',
      maxWidth: '250px', // Maintained size
      margin: '10px auto', // Center the table with margin
      borderCollapse: 'collapse',
      backgroundColor: '#0078A5',
      color: 'white',
    };
    
    const headerCellStyle = {
      backgroundColor: '#0078A5',
      color: 'white',
      padding: '5px', // Kept smaller padding
      fontSize: '12px', // Further reduced font size for day names
      textAlign: 'center', // Center align header cell text
    };
    
    const cellStyle = {
      width: '14%', // Adjusted width for better fit in 250px
      textAlign: 'center',
      padding: '5px', // Reduced padding for day cells
      border: '1px solid #0078A5',
      fontSize: '12px', // Further reduced font size for day numbers
    };





return <div>

    
<div class="background-image2">
    <div class="bottom-overlay">
    <div className="container">
    <div className="row text-center text-md-start">
        <div className="col mb-3 d-flex align-items-center">
        <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Previous Newsletters</p>

        </div>

        <div className="col mb-3 d-flex align-items-center mt-3 gap-3">
         
        </div>

        <div className="col mb-3 d-flex align-items-center mt-3  gap-3">
         
        </div>

        {/* Fourth Item with Increased Top Margin */}
        <div className="col mb-3 d-flex align-items-center gap-3 justify-content-center flex-column flex-md-row mt-4"> {/* Add mt-4 here */}
           
        <div>
                <ul className="list-unstyled pt-2 mb-0 text-center">
                    <li style={{ color: "white" }}>T: 703-953-6184</li>
                    <li style={{ color: "white" }}>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Ahashmi@live.com" target="_blank" className="text-reset text-white">Ahashmi@live.com</a>


                    </li>
                    <li style={{ color: "white" }}>
                    <div className="d-flex justify-content-center gap-2">
                        
                        <i onClick={openFacebook} className="fa-brands fa-facebook-f mt-2"></i>
                    
                      
                        <i onClick={openLinkedIn} className="fa-brands fa-linkedin-in mt-2"></i>
                  
                                              <i onClick={openTwitter}  className="fa-brands fa-twitter mt-2"></i>
                                              <i className="fa-solid fa-wifi mt-2"></i>
                                              {/* <i 
                        className="fa-solid fa-lock mt-2"
                        style={{ cursor: 'pointer' }} // To indicate the icon is clickable
                        onClick={()=>{
                          move.push("/Login2");
                        }}
                      ></i> */}
                                          </div>
                  
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </div>
    
</div>

<div style={{ padding: "20px", color: "black" }} className="d-flex flex-column flex-md-row gap-3 justify-content-center   ">
<div className="mt-3 text-center text-md-start me-md-5"> {/* Increased right margin for more gap */}
    <ul className="list-unstyled">
      <li className="h5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        IN THIS SECTION:
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      This Month's Newsletter
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      Previous Newsletters
      </li>

      <li className="h5 text-center text-md-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer" }}>
      Today's News and Weather
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
  
  <div className="mt-3 text-center text-md-start"  >
  <div>
  <p
    className="h6"
    style={{
      fontWeight: "400",
      lineHeight: "20px",
      width: "100%", // Default to full width
      maxWidth: "480px", // Maximum width for larger screens
      margin: "0 auto", // Center text
    }}
  >
    Miss last month's newsletter? No problem. We keep the last 6 months of newsletters here for you to read.
  </p>
</div>

     {/* Center text on small screens and align left on medium and larger screens */}
  <ul className="list-unstyled mt-5 ">

 <div>
 
<div style={{borderBottom: "2px solid #0078A5"}} >
<div id="sh4" className="mt-3 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  April 2024
  </p>
</div>
</div>

  <p className="h5 mt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  FEATURE ARTICLES
  </p>
<ul>
<li style={{ color: "black" }} className="mt-3">
  <Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection2').scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
Tax records: What can you toss and what should <br></br> you keep?
  </Link>
</li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection3').scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >4 ways corporate business owners can help ensure <br></br> compensation is “reasonable” </Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
    <Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection4').scrollIntoView({
        behavior: 'smooth',
      });
    }} >Is Your Business Closing? Here Are Your Final Tax <br></br>Responsibilities</Link>
    </li>
</ul>
  <p className="h5 mt-2 pt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  Tax Tips
  </p>
<ul>
<li style={{color:"black"}} className="mt-2" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection5').scrollIntoView({
        behavior: 'smooth',
      });
    }} >
Payable-on-Death Accounts: Beneficial Tools if <br></br>Used Correctly</Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection6').scrollIntoView({
        behavior: 'smooth',
      });
    }} >Avoid Misinformation About Tax-Favored Health <br></br>Accounts</Link>
    </li>
<li style={{color:"black"}} className="mt-3" >
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection7').scrollIntoView({
        behavior: 'smooth',
      });
    }} >2024 Depreciation Limits for Business Vehicles</Link>
    </li>
</ul>
  <p className="h5 mt-2 pt-2 " style={{fontWeight:"400",lineHeight:"30px"}} >
  QuickBooks Tips
  </p>
<ul>
<li style={{ color: "black" }} className="mt-3">
<Link
    href="#"
    style={{ color: "#0078A5", fontWeight: "300", lineHeight: "33px" }}
    className="h5 hover-text-gold"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('targetSection8').scrollIntoView({
        behavior: 'smooth',
      });
    }}>
How to Create Credit Memos and Give Refunds in <br></br>QuickBooks
  </Link>
</li>





</ul>




 </div>
  </ul>
</div>
<div className="mt-5" >
<div className="mt-5 text-center text-md-start d-none d-md-block" style={{borderLeft: "2px solid rgb(153, 153, 153)"}} > 
  {/* This div will be hidden on small screens and visible on medium and larger screens */}
  <ul className="list-unstyled">
  <div id="E" style={{ background: "#0078A5", maxWidth: "250px", margin: "0 auto" }} className="p-3 ms-2 d-flex flex-column align-items-center text-center">
  <div className="d-md-flex gap-2 align-items-center">
    <img src="https://www.cpasitesolutions.com/images/galleries/style/icons/new_mail-0056.png" alt="Email Icon" />
    <h6 className="h5 pt-2" style={{ color: "white" }}>Email Updates</h6>
  </div>
  <h6 className="h5 pt-2" style={{ color: "white" }}>
    Enter your email <br /> below <br /> to subscribe to our <br /> monthly newsletter.<br />Email
  </h6>
  <div className="d-flex justify-content-center" style={{ width: "100%" }}>
    <input placeholder="Email" className="form-control w-80" />
  </div>
  <div className="mt-2 d-flex justify-content-center">
    <button className="h5">Subscribe</button>
  </div>
</div>


    <div className="mt-4 d-flex justify-content-center">
  <div className="text-center">
    <img src="https://www.nybcpa.com/images/galleries/Icons/feedIcon.png" alt="RSS Feed Icon" className="mx-auto d-block" />
    <p className="mt-3" style={{color:"#0078A5"}} >RSS Feed</p>
  </div>
</div>
    <div className="mt-4 d-flex justify-content-center">
  <div className="text-center">
    <img src="https://www.cpasitesolutions.com/images/galleries/style/newsletter/images/printer.png" alt="RSS Feed Icon" className="mx-auto d-block" />
    <p className="mt-3" style={{color:"#0078A5"}} >Print This Page</p>
  </div>
</div>
<div className="d-md-flex justify-content-center ms-2">
  <div
    id="C"
    style={{
      background: "#0078A5",
      maxWidth: "250px", // Set the desired maximum width
      width: "100%", // Allow it to be responsive
      padding: "10px", // Optional: Add some padding for better aesthetics
    }}
    className="mt-4"
  >
    <div style={{ textAlign: 'center' }}>
      <div className="calendar-header" style={{ ...headerStyle, fontSize: '1.2rem' }}>
        September 2024
      </div>
      <table className="calendar" style={tableStyle}>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} style={{ ...headerCellStyle, fontSize: '0.8rem' }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysInMonth.map((week, index) => (
            <tr key={index}>
              {week.map((day, i) => (
                <td key={i} style={{ ...cellStyle, fontSize: '0.8rem' }}>
                  {day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



  </ul>
</div>
</div>


</div>

<div className="d-md-flex justify-content-center mt-4 px-3 px-sm-5">
  <div className="p-3 mb-4 mx-auto" 
       style={{
         background: "#ffc", 
         width: "fit-content", 
         borderTop: "2px solid #FC0",  // Top border
         borderBottom: "2px solid #FC0"  // Bottom border
       }}>
    <p className="h5" 
       style={{
         fontWeight: "300", 
         lineHeight: "30px"
       }}>
      Any accounting, business or tax advice contained in this <br />
      communication, including attachments and enclosures, is not <br />
      intended as a thorough, in-depth analysis of specific issues, nor a <br />
      substitute for a formal opinion, nor is it sufficient to avoid tax- <br />
      related penalties. If desired, we would be pleased to perform the <br />
      requisite research and provide you with a detailed written analysis. <br />
      Such an engagement may be the subject of a separate engagement <br />
      letter that would define the scope and limits of the desired <br />
      consultation services.
    </p>
  </div>
</div>
<div id="targetSection2" className="d-md-flex justify-content-center mt-5">
 <div >
 <div id="res" style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
  <p id="res" className="h3 text-start"
   style={{
     fontWeight: "400", 
     lineHeight: "1.2",
     color: "#0078A5", 
     textTransform: "uppercase",
     textAlign: "center",
    // Default for small screens
   }}
>
Tax records: What can you toss and what should you keep?
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Generally, the IRS has three years to audit a tax return, from the later of the due date of the return or the date you file. You can also file an amended return within this time frame if you overlooked something.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Here’s what you need to know about keeping financial records involved in your tax returns.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Federal tax records</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Despite the three-year guideline, many tax advisors recommend retaining copies of your finished tax returns indefinitely to prove that you filed. Even if you don’t keep returns indefinitely, at least keep them for six years after the returns are due or filed, whichever is later.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >It’s a good idea to keep the records that support items on your individual tax returns until the three-year statute of limitations runs out. Examples of supporting records include canceled checks, charitable contributions receipts, and documents showing your mortgage interest payments and retirement plan contributions. These documents may also support an amended tax return if you find you overlooked something.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > Also, some tax issues are still subject to scrutiny after the three years. If the IRS suspects that income has been understated by 25% or more, the statute of limitations for audit rises to six years. If no return was filed or if fraud is suspected, there’s no limit of time for the IRS to launch an inquiry.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Certain records that support figures that may affect multiple years, such as carryovers of charitable deductions, should be saved until the deductions no longer have effect. Also, don’t toss out records that support deductions for bad debts or worthless securities that could result in refund claims. You have up to seven years to claim them.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >State tax records</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The previous guidelines are geared toward complying with federal tax obligations. Contact the office for information regarding your state’s statute of limitations.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Plus, states generally have the right to resolve their own issues related to federal tax returns that have been audited. So, hold on to records related to an IRS audit for a year after it’s completed.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Real estate records</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Retain real estate records for as long as you own a property, plus three years after you dispose of it and report the transaction on your tax return. Throughout ownership, keep records of the purchase, home improvements, relevant insurance claims and refinancing documents.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >These documents help prove your adjusted basis in the home, which is needed to figure any taxable gain at the time of sale. They can also support rental property or home office deductions.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Investment account statements</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To accurately report taxable events involving stocks and bonds, you must maintain detailed records of purchases and sales. Records should include dates, quantities, prices, dividend reinvestment and related expenses. Keep these records for as long as you own the investments plus additional time until the statute of limitations for the relevant tax returns expires.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The IRS requires you to keep copies of Forms 8606, 5498 and 1099-R until all the money is withdrawn from your IRAs. It’s even more important to retain records of all transactions relating to Roth IRAs, in case you’re ever questioned.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Purge with caution</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Old tax records take up space and could lead to stolen identities if not properly disposed of. But purging too soon may leave you without a defense if the IRS has questions. When in doubt, hang on to records a little longer than you think is necessary. Contact the office with questions.</p>
</div>
 </div>

</div>
<div id="targetSection3" className="d-md-flex justify-content-center">
 <div >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
  <p id="res" className="h3 text-start"
   style={{
     fontWeight: "400", 
     lineHeight: "1.2",
     color: "#0078A5", 
     textTransform: "uppercase",
     textAlign: "center",
    // Default for small screens
   }}
>
4 ways corporate business owners can help ensure compensation is “reasonable”
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you own a C corporation, you know there’s a tax advantage to taking money out as compensation rather than as dividends. The reason: A corporation can deduct the salaries and bonuses that it pays executives, but it can’t deduct dividend payments. Therefore, if funds are paid as dividends, they’re taxed twice, once to the corporation and once to the recipient. Money paid out as compensation is taxed only once, to the recipient employee.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >However, the amount of money you can take out of the corporation this way is limited. Under tax law, only compensation deemed to be reasonable can be deducted. Any unreasonable portion isn’t deductible and may be taxed as if it were a dividend paid to a shareholder.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Steps to help protect yourself</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > There’s no simple way to determine what’s reasonable. If the IRS audits your tax return, it will examine the amount that companies in similar industries would pay for comparable services under comparable circumstances. Factors considered include the employee’s duties and the amount of time spent on those duties, as well as the employee’s skills, expertise and compensation history. Other factors that may be reviewed are the complexities of the business and its gross and net income.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > There are steps you can take to make it more likely that the compensation you earn will be considered “reasonable” and therefore deductible by your corporation. For example, you can:</p>
</div>
<div className="mt-3" >

    <ul style={{listStyleType:"none"}} >
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>1.  Keep compensation in line with what similar businesses are paying their executives. Be sure to retain whatever evidence you find about what others are paying.</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>2. Contemporaneously document the reasons for compensation paid in the minutes of your corporation’s board of directors. For example, if compensation is being increased in the current year to make up for earlier years when it was low, be sure the minutes reflect this. Cite any executive compensation or industry studies that back up your compensation amounts.</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>3. Avoid paying compensation in direct proportion to the stock owned by the corporation’s shareholders. This can look like a disguised dividend and will probably be treated as such by the IRS.</li>
        <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>4.  Pay at least some dividends if the business is profitable. This avoids giving the impression that the corporation is trying to pay out all of its profits as compensation.</li>
    </ul>

</div>
<div className="mt-3" >

<p id="res" className="h4" style={{lineHeight:"30px",fontWeight:"300"}} >Keep in mind that the IRS is generally very interested in unreasonable compensation payments made to anyone “related” to a corporation, which may include not only a shareholder-employee but also a member of a shareholder’s family.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Plan ahead</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The challenges are many, but you can avoid some problems by planning ahead. Contact the office if you have questions or concerns about your situation.</p>
</div>


 </div>

</div>
<div id="targetSection4" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
    Is Your Business Closing? Here Are Your Final Tax Responsibilities
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> Businesses shut down for many reasons. Examples include an owner’s retirement, a lease expiration, staffing shortages, partner conflicts and increased supply costs. If you’ve decided to close your business, you might need assistance with some steps in the process, including handling various tax obligations</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}>Tax Return and Forms</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> A final income tax return and related forms must be filed for the year of closing. The correct return to file depends on the type of business.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Here’s a rundown of the requirements.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Sole proprietorships. You must file the usual Schedule C, “Profit or Loss from Business,” with your individual return for the year of closing. You may also need to report self-employment tax.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Partnerships. A partnership must file Form 1065, “U.S. Return of Partnership Income,” for the year of closing and report capital gains and losses on Schedule D. Indicate that this is the final return and do the same on Schedules K-1, “Partner’s Share of Income, Deductions, Credits, etc.”</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> All corporations. Form 966, “Corporate Dissolution or Liquidation,” must be filed if you adopt a resolution or plan to dissolve a corporation or liquidate any of its stock.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >C corporations. File Form 1120, “U.S. Corporate Income Tax Return,” for the year of closing. Report capital gains and losses on Schedule D. Indicate this is the final return.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >S corporations. File Form 1120-S, “U.S. Income Tax Return for an S Corporation” for the year of closing. Report capital gains and losses on Schedule D. The “final return” box must be checked on Schedule K-1.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >All businesses. If you sell your business, other forms may need to be filed to report the sales.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >Worker-Related Duties</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Businesses with employees must pay the final wages and compensation owed, make final federal tax deposits and report employment taxes. Failure to withhold or deposit all employment taxes due can result in severe penalties.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Generally, payments of $600 or more to contractors during the calendar year of closure must be reported on Form 1099-NEC, “Nonemployee Compensation.”</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >More Tax Issues to Consider</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >The list of tax issues related to closing a business is long and often complex, and you may need to be guided through the steps. For example, a business that has an employee retirement plan will need to terminate the plan and distribute the benefits to participants. Flexible Spending Accounts and Health Savings Accounts must also be terminated.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >There may be debt cancellation issues to wrestle with. Other possibilities include dealing with net operating losses, passive activity losses, depreciation recapture and possible bankruptcy issues.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >You need to be aware of how long to retain business records. And finally, you may need to know how to navigate payment options if your business is unable to pay the remaining taxes owed.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400",}} >Final Thoughts</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Closing a business typically brings up a lot of questions. Contact the office for answers.</p>
</div>




 </div>

</div>
<div id="targetSection5" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
   Payable-on-Death Accounts: Beneficial Tools if Used Correctly
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Payable-on-death (POD) accounts can be a quick, simple and inexpensive way to transfer assets outside of probate. They can be used for bank or credit union accounts, certificates of deposit and even brokerage accounts. Setting up such an account is as easy as providing the financial institution with a signed POD beneficiary designation form. Upon your death, your beneficiaries just need to present identification to the bank, with a certified copy of a death certificate, and the money or securities will be theirs.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >  Be aware that POD accounts can backfire unless they’ve been coordinated carefully with your estate plan. For example, suppose Jack divides his assets equally among his three children in his will. He also sets up a POD account leaving $50,000 to his oldest child. That creates a conflict that may have to be resolved in court.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Another potential problem with POD accounts is that if you use them for most of your assets, the remaining assets may be insufficient to pay debts, taxes or other expenses. One way to bypass this problem is to use a POD account to hold a modest amount of funds to pay for pressing needs while your estate is administered.</p>
</div>
 </div>

</div>
<div id="targetSection6" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
Avoid Misinformation About Tax-Favored Health Accounts
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Do you have a health Flexible Spending Account, Health Savings Account or similar plan through your employer? The IRS is warning about misinformation that could lead to serious mistakes.</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Nonmedical nutrition, wellness and exercise expenses that aren’t explicitly related to a medical diagnosis or treatment aren’t reimbursable under these plans. But that hasn’t stopped certain bad actors from offering to provide a “doctor’s note” (for a price) that they claim would authorize health reimbursement plans to accept ineligible expenses, such as for nonmedical food that doesn’t satisfy normal nutritional needs.</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >To review the IRS’s related FAQs:</p>

</div>
<div id="res" className="mt-3" >
<Link  href={" https://www.irs.gov/individuals/frequently-asked-questions-about-medical-expenses-related-to-nutrition-wellness-and-general-health"} id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>  https://www.irs.gov/individuals/frequently-asked-questions-about-medical-expenses-related-to-nutrition-wellness-and-general-health</Link>

</div>




 </div>

</div>
<div id="targetSection7" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
2024 Depreciation Limits for Business Vehicles
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >IRS guidance provides the 2024 depreciation limits for “luxury” business vehicles. For vehicles placed in service in 2024, depreciation limits (including first-year bonus depreciation) are $20,400 for year one, $19,800 for year two, $11,900 for year three and $7,160 for each year after that. This includes passenger cars, as well as SUVs, trucks and vans if their gross vehicle weight (GVW) is 6,000 pounds or less. The IRS also announced lease inclusion amounts for lessees of passenger vehicles first</p>
<div id="res" className="d-md-flex gap-2" >
<p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >leased in 2024. To read Rev. Proc. 2024-13:</p>
<Link href={"https://www.irs.gov/pub/irs-drop/rp-24-13.pdf"} className="h5 " style={{lineHeight:"30px",fontWeight:"300"}} >https://www.irs.gov/pub/irs-drop/rp-24-</Link>
</div>
<Link href={"https://www.irs.gov/pub/irs-drop/rp-24-13.pdf"} className="h5 " style={{lineHeight:"30px",fontWeight:"300"}} >13.pdf</Link>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > Purchasing a heavier vehicle can offer tax advantages. New or used vehicles may be eligible for Sec. 179 expensing, which might allow you to deduct the entire cost. However, a reduced Sec. 179 limit ($30,500 for 2024) applies to vehicles (typically SUVs) with GVWs of more than 6,000 pounds but no more than 14,000 pounds.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Also keep in mind that, if a vehicle is used for both business and personal purposes, depreciation must be allocated between deductible business use and nondeductible personal use. The depreciation limit is reduced if the business use is less than 100%. If business use is 50% or less, you can’t claim any bonus depreciation or Sec. 179 expensing.</p>
</div>


<div  className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
    <p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For that Guide and more, click here:</p>
<Link className="h5" style={{lineHeight:"30px",fontWeight:"300"}} href={"https://www.irs.gov/identity-theft-fraud-scams/has-your-business-become-the-victim-of-a-data-security-breach"} >https://www.irs.gov/identity-theft-fraud-</Link>
</div>
<Link  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} href={"https://www.irs.gov/identity-theft-fraud-scams/has-your-business-become-the-victim-of-a-data-security-breach"} >scams/has-your-business-become-the-victim-of-a-data-security-breach</Link>
</div>


 </div>

</div>

<div id="targetSection8" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
How to Create Credit Memos and Give Refunds in QuickBooks
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You work hard creating the products and services you sell. So it’s disappointing when someone wants their money back. Sometimes it has nothing to do with the quality of what you sold them. Maybe you sent the wrong size or color, or someone paid for a service upfront and decided to cancel it. Customers just change their minds sometimes, too.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > When you have to go through the process of giving customers their money back, QuickBooks provides the tools you need to issue credit memos and refunds. Here’s a look at how this works.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Dealing with Customer Credits</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can’t just write checks to customers to give them refunds. You need to do the required bookkeeping in QuickBooks so there’s a record of the activity.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >There are three ways to deal with the credit:</p>

</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Retain the funds in the customer’s account as an available credit.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Issue a refund via check, credit card or cash, depending on how the purchase was originally paid for.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Apply the amount to one of the customer’s open invoices.</li>
</ul>

</div>
<div className="mt-3" >
<img  id="res"  src="https://www.cpasitesolutions.com/content/newsletter/images/042024/DESKTOP-0424-image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To issue a credit memo, click the Refunds & Credits icon on the homepage, or open the Customers menu and click Create Credit Memos/Refunds to open the Credit Memo window. Select the Customer/Job and change the Class and/or Template if desired. Select the Item(s) that the customer is returning and enter a Qty (quantity). When you’re done entering Items, click Save & Close to open the Available Credit window (pictured above). You’ll see your three options displayed there.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >1. Keep It as a Credit</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Retain as an available credit is selected by default. Leave it selected and click OK to return to the homepage. If you want to see how the credit is applied, go to the Customer Center by opening the Customers menu and clicking Customer Center. There are two ways to see the credit. Scroll down to the customer’s name under the Customers & Jobs tab and click it or click the Transactions tab and then Credit Memos.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >2. Give the Customer a Refund</p>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/042024/DESKTOP-0424-image-2.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Tip: Would you like to start accepting credit cards from customers? You’re likely to get paid faster. Contact the office for guidance.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >3. Apply It to an Existing Invoice</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The Apply to an invoice option is probably the easiest if the customer has outstanding invoices that are equal to or greater than the credit memo. When you select that and click Save and Close, a window opens containing invoices that still need payment. The Original Amt. (the amount of the credit) appears in the upper right. Put a check in front of the invoice(s) where you want the credit to be applied, and you’ll see how the payment reduces the Amt. Due. Click Done.</p>

</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Dealing with Overpayments</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Sometimes you must issue a refund because customers have overpaid, such as when they’re catching up on multiple invoices. Open the Customers menu and select Receive Payments (or click Receive Payments on the homepage). Choose the customer and enter the Payment Amount and payment method. QuickBooks will put a checkmark in front of the invoices that are being paid.</p>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",width:"auto"}} src="https://www.cpasitesolutions.com/content/newsletter/images/042024/DESKTOP-0424-image-3.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >When dealing with an overpayment, look in the lower left corner. In the Overpayment box, you’ll see the overpayment amount, as pictured above. You can choose between leaving the credit to be used later and offering a refund. If you choose the latter, the Issue a Refund window will open for processing.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}}> Make Your Return Policy Clear</p>

</div>


<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Your company should have a return policy that spells out exactly what returns will be accepted. Once you’ve created a policy, send it out as a separate email to new and existing customers. Also display the policy prominently on your website. This can help minimize uncomfortable interactions with your customers about returns.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Credit memos and refunds aren’t difficult to process, but you may have questions when, for example, you need to refund a credit card transaction. Contact the office for guidance when anything like this happens, so you don’t end up losing money or short-changing a customer. Or call the office with any other questions you might have about QuickBooks.</p>

</div>



 </div>

</div>

<div id="targetSection9" className="d-md-flex justify-content-center">
 <div  >
 <div style={{ borderBottom: "2px solid #0078A5" }}>
  <div id="sh2" className="mt-3 p-5 px-3 d-flex justify-content-center align-items-center">
    <p id="res" className="h3 text-start"
       style={{
         fontWeight: "400", 
         lineHeight: "1.2",  // Adjusted for better responsiveness
         color: "#0078A5", 
         textTransform: "uppercase",
         textAlign: "center",
         // Centered text for smaller screens
       }}>
 Upcoming Tax Due Dates
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> April 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 income tax return (Form 1040 or Form 1040-SR) or file for an</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>  automatic six-month extension (Form 4868). (Taxpayers who live outside the United States and Puerto Rico or serve in the military outside these two locations are allowed an automatic two-month extension without requesting an extension.) Pay any tax due.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Pay the first installment of 2024 estimated taxes (Form 1040-ES) if not</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >paying income tax through withholding or not paying sufficient income tax through withholding.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Make 2023 contributions to a traditional IRA or Roth IRA (even if a 2023 </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> income tax return extension is filed).</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Make 2023 contributions to a SEP or certain other retirement plans </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> i(unless a 2023 income tax return extension is filed).</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 gift tax return (Form 709) or file for an automatic six-month </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> extension (Form 8892). Pay any gift tax due. File for an automatic six-month extension (Form 4868) to extend both Form 1040 and Form 709 if no gift tax is due.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Household employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >File Schedule H, if wages paid equal $2,600 or more in 2023</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >and Form 1040 isn’t required to be filed. For those filing Form 1040, Schedule H is to be submitted with the return so is extended if the return is extended.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year trusts and estates: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 income tax return (Form 1041) or file for </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> an automatic five-and-a-half-month extension (Form 7004) (six-month extension for bankruptcy estates). Pay any income tax due.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year corporations: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 income tax return (Form 1120) or file for an </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>automatic six-month extension (Form 7004). Pay any tax due.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Calendar-year corporations: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Pay the first installment of 2024  </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> estimated income taxes, completing Form 1120-W for the corporation’s records</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for March if </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> the monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for March if the monthly deposit</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>rule applies.</p>
</div>


<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >April 30</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Report Social Security and Medicare taxes and income tax withholding</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>for first quarter 2024 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.</p>
</div>
<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >May 10</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Report April tip income of $20 or more to employers (Form 4070).</p>
</div>
</div>

<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



