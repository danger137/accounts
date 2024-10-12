"use client"

import Link from "next/link";
import "./august.css";
import { useRouter } from "next/navigation";


export default function August(){

  
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
<div id="sh3" className="mt-3 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  August 2024
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
 Tax Considerations When Choosing a Business<br /> Entity
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
  >A Tax Break for Educators </Link>
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
    }} >How to Keep Control Over Inventory</Link>
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
Using an IRA Withdrawal for a Qualified Home <br></br>Purchase</Link>
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
    }} >Get a Jump on Tax Planning</Link>
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
    }} >How to Deduct Business Travel</Link>
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
  7 Best Practices for QuickBooks Desktop
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
Tax Considerations When Choosing a Business Entity
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Are you in the process of starting a business or contemplating changing your business entity? If so, you’ll need to decide how to organize your company. Should you operate as a C corporation or as a pass-through entity such as a partnership, limited liability company (LLC) or S corporation? Among the important factors to consider are the potential tax consequences.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Tax Treatment Basics</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Currently, the corporate federal income tax is a flat 21% rate and individual federal income tax rates begin at 10% and go up to 37%. With a pass-through entity, income the business passes through to the owners is taxed at individual rates, which currently range from 10% to 37%. So, the overall rate, if you choose to organize as a C corporation, may be lower than if you operate the business as a pass-through entity.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >But the difference in rates can be alleviated by the qualified business income (QBI) deduction, which is available to eligible pass-through entity owners who are individuals, and some estates and trusts.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >The QBI deduction will expire Dec. 31, 2025, unless Congress acts to extend it. The 21% corporate rate is permanent, but Congress could still change it by passing new legislation.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >More to Consider</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are other tax-related factors you should take into account. For example:</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Will most of the business profits be distributed to the owners?</p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > If so, it may be</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >preferable to operate as a pass-through entity because C corporation shareholders will be taxed on dividend distributions from the corporation (double taxation). Owners of a pass-through entity will be taxed only once on business income, at the personal level.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Does the business own assets that are likely to appreciate? </p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > If so, it may be better to</p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >operate as a pass-through entity because the owner’s basis is stepped up by an owner’s interest in the entity. That can result in less taxable gain for the owner when his or her interests in the entity are sold.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Is the business expected to incur tax losses for a while? </p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > If so, you may want to </p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >structure it as a pass-through entity, so that you can deduct the losses against other income. Conversely, if you have insufficient other income or the losses aren’t usable (for example, because they’re limited by the passive loss rules), it may be preferable to organize as a C corporation, because it’ll be able to offset future income with the losses.</p>
</div>
<div className="mt-3" >
  <div  id="res" className="d-md-flex gap-2 " >
<p   className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Is the business owner subject to the alternative minimum tax (AMT)? </p>
<p className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > If so,  </p>
  </div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > it might be better to organize as a C corporation, because only the very largest corporations are subject to corporate AMT. AMT rates on individuals are 26% or 28%.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Contemplate the Issues.</p>
</div>
<div className="mt-3" >
 
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Clearly, many factors are involved in determining which entity type is best for your business. This covers only a few of them. Contact the office to talk over the details in light of your situation.</p>
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
A Tax Break for Educators
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Teachers who are getting ready for a new school year often pay for some of their classroom supplies out-of-pocket. They may be able to get some of that cost back by taking advantage of a special tax break for educators.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >History of the Deduction</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Before 2018, employees who had unreimbursed out-of-pocket expenses could potentially deduct them if they were ordinary and necessary to the “business” of being an employee. A teacher’s out-of-pocket classroom expenses could qualify and be claimed as a miscellaneous deduction, subject to a 2% of adjusted gross income (AGI) floor. That meant that only taxpayers who itemized deductions could enjoy a tax benefit, and then only to the extent that their eligible expenses exceeded the 2% floor.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >For 2018 through 2025, the Tax Cuts and Jobs Act (TCJA) has suspended miscellaneous itemized deductions subject to the 2% of AGI floor. Fortunately, qualifying educators can still deduct some unreimbursed out-of-pocket classroom costs using the educator expense deduction.</p>
</div>
<div className="mt-3" >
<p id="res" className="h4" style={{lineHeight:"30px",fontWeight:"300"}} >Back in 2002, Congress created this above-the-line deduction, which means the deduction is subtracted from your gross income to determine your AGI. It can be claimed even if you don’t itemize deductions.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > For 2024, qualifying elementary and secondary school teachers and other eligible educators (such as counselors and principals) can deduct up to $300 of qualified expenses. (This limit will rise in $50 increments in future years, based on inflation adjustments.) Two eligible married educators who file a joint tax return can deduct up to $600 of unreimbursed expenses, limited to $300 each.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Qualified expenses include amounts paid or incurred during the tax year for books, supplies, computer equipment, related software, services, and other equipment and materials used in classrooms. The cost of certain professional development courses may also be deductible. However, homeschooling supplies and nonathletic supplies for health or physical education courses aren’t eligible.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Head of the Tax Class</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some additional rules apply to this deduction. If you’re an educator or you know one who might benefit from this tax break, feel free to contact the office for more details.</p>
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
     How to Keep Control Over Inventory
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Many businesses need to have some inventory available. But having too much inventory is expensive, not just to purchase but also to store, safeguard and insure. So, keeping your inventory as lean as possible is critical.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Where to Begin</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Effective inventory management starts with an accurate physical inventory count. This allows you to determine your true cost of goods sold and identify and remedy discrepancies between your physical count and perpetual inventory records.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Next, compare your inventory costs to those of other companies in your industry. Trade associations often publish benchmarks for:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Gross margin ([revenue — cost of sales] / revenue),</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Net profit margin (net income / revenue), and</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Days in inventory (annual revenue / average inventory × 365 days).</li>
</ul>

</div>
<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Try to meet or beat industry standards. For a retailer or wholesaler, inventory is simply purchased from the manufacturer. But for manufacturers and construction firms, the inventory account is more complicated. It’s a function of raw materials, labor and overhead costs.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >The composition of your company’s cost of goods will guide you on where to cut. In a tight labor market, it’s hard to reduce labor costs. But it may be possible to renegotiate prices with suppliers.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Don’t forget the carrying costs of inventory, such as storage, insurance, obsolescence and pilferage. You can also improve margins by negotiating a net lease for your warehouse, installing antitheft devices and opting for less expensive insurance coverage.</p>
</div>

<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >More Steps to Take</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Cut your days-in-inventory ratio based on individual product margins. The goal is to stock more products with high margins and high demand, and less of everything else. If possible, return excessive supplies of slow-moving materials or products to your suppliers.</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Keep product mix sufficiently broad but still in tune with the needs of your customers. Before cutting back on inventory, try to negotiate speedier delivery from suppliers or give suppliers access to your perpetual inventory system. These precautionary measures can help prevent lost sales due to lean inventory.</p>
</div>
<div className="mt-3" >
<p  className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Take Inventory of Inventory</p>
</div>
<div className="mt-3" >
<p id="res"  className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >It’s easy for inventory to get lost in the shuffle when you and your leadership team may be focused on big-picture strategic planning to grow the business. But if you don’t put some time into ensuring effective inventory management, your business likely won’t be able to achieve its strategic goals.</p>
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
   Using an IRA Withdrawal for a Qualified Home Purchase
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Purchasing a home is an expensive proposition that leaves many would-be buyers feeling cash strapped. If that’s you, you might be thinking about taking some money out of your traditional IRA to help fund the purchase. But should you? Afterall, a 10% penalty normally applies to IRA withdrawals before age 59 1/2. The good news is that there’s an exception to the penalty for certain home purchases, subject to a lifetime limit of $10,000.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To qualify, you must be purchasing an eligible “first-time” principal residence for yourself, your spouse, your child, your spouse’s child, your grandchild, or your parent or other ancestor. In addition, neither you nor your spouse, if applicable, can have owned a principal residence within the two-year period that ends on the acquisition date. The acquisition date is the date you enter a binding contract to buy the home or the date the building or rebuilding begins.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Timing is critical. The funds must be spent to pay qualified acquisition costs within 120 days of the day you receive the withdrawal. Qualified acquisition costs include the costs of buying, building or rebuilding a home, plus any usual or reasonable settlement, financing or other closing costs.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact the office with questions.</p>
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
   Get a Jump on Tax Planning
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Summer is a good time for some tax planning that could lower your 2024 tax bill. Since the passage of the Tax Cuts and Jobs Act, which increased the standard deduction, fewer people benefit from itemizing deductions. You can use this</p>
<div id="res" className="d-md-flex gap-2 " >
    <Link href={"IRS Interactive Tax Assistant"}  className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >IRS Interactive Tax Assistant</Link>
    <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >to find your 2024 standard deduction.</p>

</div>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If it’s looking like your itemized deductions for the year will be close to or exceed your standard deduction, here are some ways to increase your itemized deductions and possibly lower your tax bill:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Accelerate elective medical, dental and vision care expenses into 2024.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Beef up charitable donations to IRS-approved charities.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Make your Jan. 1, 2025, mortgage payment in 2024, and consider prepaying state and local income tax and property taxes that are due in early 2025. (But watch out for the $10,000 annual limit on the state and local tax deduction; $5,000 if you’re married and will be filing separately.)</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Contact us with questions.</p>
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
  How to Deduct Business Travel
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Before traveling for business, it’s important to know what’s tax deductible. Through 2025, employees aren’t permitted to deduct unreimbursed business expenses, including travel expenses, but self-employed people may deduct business travel expenses on Schedule C. Businesses may deduct employees’ travel expenses if they provide advances or reimbursements to employees or pay the expenses directly.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > For expenses to qualify for the deduction, travel must take someone away from his or her main place of work for business reasons, and the demands of the work must be such that the person must sleep away from home. In addition, the expense must be ordinary and necessary, not lavish or for personal purposes.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Deductible expenses include travel by plane, train, bus or car, as well as fares for work-related taxi rides or rideshares while away. Also deductible are lodging, 50% of meal expenses, business communication costs and tips paid for business-related services. Keep good records to support deductions, including the business purpose for each expense.</p>

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
    7 Best Practices for QuickBooks Desktop
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Every profession has its own set of best practices. These are simply guidelines for how employees should be doing their jobs and what steps management should take to ensure the best outcomes. They’re not set in stone. In fact, they can vary from business to business, and they tend to change over the years as technology evolves and individual industries are faced with new challenges and regulations.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Here are seven guidelines that can help make your accounting work more accurate, comprehensive, safe, and in line with what other successful small businesses do.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >1. Assign User Permissions if Multiple People Will Access QuickBooks</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you’re the only person using QuickBooks, you should still take security seriously by following the usual steps, like creating a strong password and keeping Windows and QuickBooks updated. But the safety of your data becomes doubly important when you grant access to someone else. Don’t just give them your login details. Restrict them to specific areas and tasks in the software.</p>

</div>
<div className="mt-3" >
<img  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} src="https://www.cpasitesolutions.com/content/newsletter/images/082024/DESKTOP-0824-image-1.png" ></img>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Open the Company menu and click Set Up Users and Passwords, then Set Up Users. In the window that opens, click Add User. Enter a User Name and Password for the individual. If you’re not sure whether your version of QuickBooks has enough licenses, click F2 and look in the upper left corner of the window. Click Next and continue to follow the instructions in the wizard.</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >2. Run 3 Reports on a Weekly Basis</p>

</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you’re not running reports regularly, it’s time to start. At minimum, you should be creating three reports in QuickBooks on a regular basis. Open the Reports menu and go to each of these:</p>

</div>


<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >A/R Aging Detail (Customers & Receivables) See who owes you and who is overdue. You can also look at Open Invoices.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >A/P Aging Detail (Vendors & Payables) See who you owe, and whether any payments are due. For a quicker look, see Unpaid Bills Detail.</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Profit & Loss Statement (Company & Financial) Is your income greater than your expenses? Are you making a profit?</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >3. Have Standard Financial Reports Analyzed Regularly</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >There are several reports that you could run in QuickBooks, like Balance Sheet and Statement of Cash Flows, that are difficult for nonaccountants to analyze. But they’re critical to your understanding of your company’s financial health and its future. You also need them if you apply for financing or are looking for investors. They should be prepared and analyzed on a monthly or quarterly basis. Contact the office for more information.</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >4. Reconcile Your Accounts</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >We know how you dread doing this, but it’s really, really important. QuickBooks simplifies it some, but you may still need assistance. Reconciling your accounts can help you:</p>
</div>
<div className="mt-3" >
<ul>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Learn more about your cash flow,</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Make your reports more accurate, and</li>
    <li id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}  >Discover errors and missing transactions.</li>
    </ul>
</div>

<div className="mt-3" >
<img id="res" src="https://www.cpasitesolutions.com/content/newsletter/images/082024/DESKTOP-0824-image-2.png" ></img>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >5. Make a Manual</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >What happens if you’re the only one doing your company’s accounting and you must be out for an extended time? This could cause serious problems for your business. So when you have a few minutes here and there, start writing down exactly what you do every day and week and month in terms of accounting. This will also be helpful if you take on someone to handle accounting, freeing you up to focus on other management tasks that no one else can do.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >6. Send Invoices Immediately and Follow Up</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Don’t let customers forget about their purchases. Dispatch their bills as soon as you can. Make invoices as professional-looking as possible using QuickBooks’ form customization tools.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If they’re not paying fast enough, send them a QuickBooks Statement (Customers | Create Statements). Consider accepting credit/debit cards and bank payments by signing up for QuickBooks Payments. You might also want to start adding finance charges to late payments, but be sure to notify customers in writing ahead of time.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >7. Narrow Down Your Reports and Use Classes</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Your QuickBooks company file consists of hundreds or thousands of records and transactions. Sometimes you only want to see a subset of them, for example, all customers in a specific ZIP code or all individuals and vendors that have balances over a certain dollar amount. You can do this by customizing QuickBooks reports. Open the report you want, like Customer Contact List, and click Customize Report in the upper left. Click the Filter tab to locate the search field you want.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >You can also assign Classes to transactions to isolate related invoices, for example. These can be things like New Construction and Remodel. Open the Lists menu and click Class List to create them.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Just Common Sense?</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Some best practices may seem like plain old common sense. When it comes to accounting, though, there are a lot of actions you should take that aren’t necessarily intuitive. QuickBooks can simplify your accounting tasks, but you need to know where to look for some features. As always, contact the office if you have questions about any aspect of QuickBooks.</p>
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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> August 15</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit Social Security, Medicare and withheld income taxes for July if</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> the monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for July if the monthly deposit</p>
</div>
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >rule applies.</p>
</div>
<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >September 10</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report August tip income of $20 or more to employers (Form 4070).</p>
</div>

</div>
<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>








</div>





}

