"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function January(){


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
<div id="sh2" className="mt-3 p-2 d-flex justify-content-center align-items-center">
  <p className="h3" style={{fontWeight: "500", lineHeight: "30px", color: "#0078A5"}}>
  January 2024
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
Sec. 179 Expensing and Bonus Depreciation: <br></br> Beware of Pitfalls
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
  >The Advantages of LLC Structure for a Small <br></br> Business </Link>
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
    }} >Appraisals Aren't Just for Businesses</Link>
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
One Reason to File Your 2023 Tax Return Early</Link>
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
    }} >Did You Get Married in 2023?</Link>
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
    }} >2024 vehicle mileage rates</Link>
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
5 Ways to Get QuickBooks Ready for 2024
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
Sec. 179 Expensing and Bonus Depreciation: Beware of Pitfalls
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If eligible, you can elect to use Section 179 expensing or bonus depreciation to deduct a large portion of the cost (and in some cases the full cost) of eligible property in the year it's placed in service. Alternatively, you may follow regular depreciation rules and spread deductions over several years or decades, depending on how the asset is classified under the tax code.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >While taking current deductions can significantly lower your company's taxable income, it isn't always the smartest move.</p>
</div>
<div className="mt-3" >
<p className="h4" style={{lineHeight:"30px",fontWeight:"400"}} >Sec. 179 and Bonus Depreciation 101</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Section 179 expensing may allow you to currently deduct the full cost of purchasing eligible new or used assets, such as equipment, furniture, off-the-shelf computer software, and qualified improvement property (QIP). An annual expensing limit applies ($1.16 million for 2023 and $1.22 million for 2024), which begins to phase out dollar for dollar when asset acquisitions for the year exceed the applicable threshold ($2.89 million for 2023 and $3.05 million for 2024). You can claim the election only to offset net income, not to reduce it below zero to create a net operating loss.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >First-year bonus depreciation is available for qualified assets, which include new tangible property with a recovery period of 20 years or less (such as office furniture and equipment), off-the-shelf computer software and water utility property. Under the TCJA, through 2026, the definition has been expanded to include used property and qualified film, television and live theatrical productions. In addition, QIP is now eligible for bonus depreciation. For 2023, bonus depreciation was 80%. It drops to 60% for 2024, to 40% for 2025 and to 20% for 2026. After that, it will be eliminated, unless Congress acts to extend it.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >When to Consider Forgoing These Breaks</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Here are two examples when it may be preferable to forgo Sec. 179 expensing and bonus depreciation:</p>
</div>
<div id="res" className="mt-3" >
<ul style={{listStyleType:"none"}} >
  <li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >1. You're planning to sell QIP. If you claim Sec. 179 expense or bonus depreciation on QIP and sell the building soon, this current write-off may be a tax trap. That's because your gain on the sale up to the amount of Sec. 179 or bonus depreciation deductions you've claimed will be treated as “recaptured” depreciation that's taxable at ordinary-income tax rates, up to 37%. But if you deduct the cost of QIP under regular depreciation rules (generally, over 15 years) and sell the building, any long-term gain attributable to the deductions will be taxable at a top rate of 25%.</li>
  <li  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >2. You're eligible for the qualified business income (QBI) deduction. This deduction allows eligible business owners to deduct up to 20% of their QBI from certain pass-through entities, such as partnerships, limited liability companies and sole proprietorships. The deduction can't exceed 20% of an owner's taxable income, excluding net capital gains. (Other restrictions apply.)</li>
  <li  id="res" className="h5 mt-3 " style={{lineHeight:"30px",fontWeight:"300"}} >Claiming Sec. 179 or bonus depreciation deductions reduces your taxable income, which may deprive you of an opportunity to maximize the QBI deduction. Because the QBI deduction is scheduled to expire after 2025, taking full advantage of it while you can will generally make sense.</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Timing Is Everything</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Keep in mind that only the timing of deductions is affected by the strategy you choose. You'll still have an opportunity to write off the full cost of eligible assets if you forgo Sec. 179 expensing and bonus depreciation; it will just be over a longer time period. Contact the office for help analyzing your company's overall tax benefit picture and determining the optimal strategy.</p>
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
The Advantages of LLC Structure for a Small Business
</p>
  </div>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you operate your small business as a sole proprietorship, you may have thought about forming a limited liability company (LLC) to protect your assets. Or maybe you're launching a new business and want to know the options for setting it up. Here are the basics of operating as an LLC and why it might be a good choice for your business.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >An LLC is a bit of a hybrid entity because it can be structured to resemble a corporation for owner liability purposes and a partnership for federal tax purposes. This duality may provide owners with the best of both worlds.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Protect Your Personal Assets</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Like the shareholders of a corporation, the owners of an LLC (called "members" rather than "shareholders" or "partners") generally aren't liable for the debts of the business except to the extent of their investment. Thus, the owners can operate the business with the security of knowing that their personal assets are generally protected from the entity's creditors.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > This protection is much greater than that afforded by partnerships. In a partnership, the general partners are personally liable for the debts of the business. Even limited partners, if they actively participate in managing their businesses, can have personal liability.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} > Enjoy Partnership Tax Benefits</p>
</div>
<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> The owners of an LLC can elect under the "check-the-box" rules to have the entity treated as a partnership for federal tax purposes. This can provide a number of benefits to owners. For example, partnership earnings aren't subject to an entity-level tax. Instead, they flow through to the owners, are reported on the owners' individual returns and are taxed only once.</p>
</div>

<div className="mt-3" >

<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >To the extent the income passed through to you is qualified business income (QBI), you'll be eligible to take the Section 199A QBI deduction, subject to various limitations. However, keep in mind that this deduction is temporary. It's available only through 2025, unless Congress acts to extend it.</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >In addition, because you're actively managing the business, you can deduct on your individual tax return your ratable shares of any losses the business generates. This, in effect, allows you to shelter other income that you (and your spouse, if you're married) may have. (Limits on the business loss deduction do apply.)</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >An LLC that's taxable as a partnership also can provide special allocations of tax benefits to specific partners. This can be a notable reason for using an LLC over an S corporation (a business structure that provides pass-through tax treatment similar to a partnership). Another reason for using an LLC rather than an S corporation is that LLCs aren't subject to the restrictions the federal tax code imposes on S corporations regarding the number of owners and the types of ownership interests that may be issued.</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Consider All Angles</p>
</div>
<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >An LLC can give you corporate-like protection from creditors while providing the benefits of taxation as a partnership. For these reasons, you may want to consider operating your business as an LLC. Contact the office to discuss in more detail how an LLC might be an appropriate choice for you and any other owners.</p>
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
Appraisals Aren't Just for Businesses
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> Whether you're in the process of making a retirement or estate plan or you intend to donate property to charity, you'll need to know the value of your assets. For many hard-to-value items, such as closely held business interests, real estate, art and collectibles, an appraisal may be necessary.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> Retirement and Estate Planning</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>To enjoy a comfortable retirement, you'll need to calculate the income that can support your lifestyle when you're no longer working. This means understanding the value of the assets you own. Once you have this information, you may decide to move your retirement date up or back.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>Knowing the value of your assets is also necessary to assess whether you'll potentially be subject to gift and estate taxes. It also allows you to identify strategies for minimizing or eliminating those taxes. In addition, without appraisals of hard-to-value assets, it's nearly impossible to divide your overall property equally among your children (if that's your wish).</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Appraisals may also be necessary to avoid running afoul of tax basis consistency rules. The rules are intended to prevent heirs from arguing that estate property was undervalued, which would raise their basis for income tax purposes. According to these rules, the income tax basis of inherited property equals the property's fair market value as finally determined for estate tax purposes. Appraisals can help ensure that your heirs receive the basis they deserve.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}}>Gifts and Charitable Giving</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}> The IRS has an unlimited amount of time to challenge the value of gifts for gift and estate tax purposes, unless they're "adequately disclosed," which generally binds the IRS to a three-year statute of limitations. A qualified professional appraisal with a timely filed gift tax return is the best way to disclose the value of a gift of a hard-to-value asset.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}}>Charitable gifts of property valued at more than $5,000 (other than publicly traded securities) must be substantiated with a qualified appraisal by a qualified appraiser. This means that the appraiser meets certain education and experience requirements.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"400"}} >Know What You Have</p>
</div>

<div className="mt-3" >

<p id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300",}} >Without appraisals of your hard-to-value assets, it's difficult to develop a realistic financial plan, to create an estate plan that will achieve your desired results and to avoid unwelcome tax liabilities. Asset values can fluctuate dramatically over time, so make sure you get updated appraisals periodically.</p>
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
One Reason to File Your 2023 Tax Return Early
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >The 2023 individual income tax return filing season will open soon. Even if you typically don't file until much closer to the April 15 deadline (or you file for an extension), consider filing earlier this year. Why? You may be able to protect yourself from tax identity theft.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} > In a tax identity theft scheme, a thief uses your personal information to file a fraudulent tax return early in the filing season and claim a bogus refund. Then when you file your return, you'll hear from the IRS that the return is being rejected because someone has already filed a return with the same Social Security number.</p>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >While you should ultimately be able to prove that your return is the legitimate one, tax identity theft can be difficult to straighten out and can significantly delay a refund. Filing early may be your best defense: If you file first, it will be the tax return filed by a potential thief that will be rejected, not yours.</p>
</div>

<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >If you have questions or would like an appointment to prepare your return and ensure you take advantage of all of the breaks available to you, please contact the office.</p>
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
Did You Get Married in 2023?
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Your filing status options for your 2023 income tax return depend on your marital status on Dec. 31. The married-filing-jointly status is typically the most beneficial way for married taxpayers to file, but it's a good idea to take a "what-if" look at the married filing separately status.</p>

</div>
<div className="mt-3" >

<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}  >For example, if one spouse has high medical expenses and a relatively lower adjusted gross income (AGI), filing separately may allow that spouse to exceed the 7.5% of AGI floor for the medical expense deduction and deduct some medical expenses that wouldn't be deductible if the couple filed jointly.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >What about your income tax rate? Fortunately, through 2025 the Tax Cuts and Jobs Act eliminated the tax-bracket marriage penalty for all but the top bracket. But middle-bracket newlyweds may be at greater risk of becoming subject to the 0.9% additional Medicare tax and the 3.8% net investment income tax than they were as singles. Why? The thresholds for these taxes for married taxpayers aren't that much higher than for singles ($250,000 vs. $200,000, respectively).</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >For instance, two singles who each have an income of $150,000 wouldn't be subject to these taxes. But if they marry, their combined $300,000 income would likely cause them to become subject to one or both taxes (depending on the mix of earned vs. investment income). Filing separately wouldn't help because the threshold is $125,000 for separate filers.</p>

</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Did your name change? The name on a person's tax return must match what is on file at the Social Security Administration. If it doesn't, it could delay any tax refund. So be sure to report your name change to the Social Security Administration before you file your return.</p>

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
2024 vehicle mileage rates
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >The IRS has issued the 2024 optional cents-per-mile rates used to calculate the tax-deductible costs of operating a vehicle:</p>

</div>
<div className="mt-3" >
<ul>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Effective Jan. 1, 2024, the standard mileage rate for the business use of a car (including vans, pickups, and panel trucks) is 67 cents per mile. (This is up from 65.5 cents per mile for 2023.)</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >The 2024 rate for medical or eligible moving purposes is 21 cents per mile. (For 2023, the rate was 22 cents per mile.)</li>
  <li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >For charitable driving, the 2024 rate is 14 cents per mile (unchanged from 2023).</li>
</ul>
</div>
<div className="mt-3" >
<p  id="res" className="h5" style={{lineHeight:"30px",fontWeight:"300"}} >Note that these rates apply to electric and hybrid-electric automobiles as well as gasoline and diesel-powered vehicles. Contact the office for more information.</p>
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
5 Ways to Get QuickBooks Ready for 2024
    </p>
  </div>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >January is tough. The holidays are over. Tax forms are starting to trickle in. You probably have a lot of things on your to-do list that you didn't get done in December because you were so busy. Now you don't know when you'll have time to catch up because the new month and new year bring their own set of fresh responsibilities.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >You probably did the accounting work that you had to in December, but you may not feel like you're starting with a clean slate this month.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >QuickBooks makes it so much easier to clean up your finances than doing your accounting manually. Consider taking these five suggestions to jump start 2024.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >1. Check If You Need to Deposit Payments</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Before you try to determine who owes you money, make sure that you don't have funds sitting in QuickBooks that should be deposited in a bank account. Click Record Deposits on the homepage. The Payments to Deposit window will open, displaying a list of payments received that haven't yet been deposited in your bank account. Select the ones you want to deposit and click OK to open the Make Deposits window. Make sure to select the correct Deposit To account and specify if you want cash back at the bottom of the screen. Save the transaction.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >2. Run These Five Critical Reports</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >It's easy for you, customers and vendors to miss invoices and bills in December. So start 2024 by finding out where you stand on both. These four critical A/R and A/P reports will tell you a lot in a hurry. If you sell products, also check in on your inventory status.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Open the Reports menu to find and create these reports:</p>
</div>
<div className="mt-3" >
  <ul>
<li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >
A/R Aging Detail. Which of your customers are behind in paying invoices and statements you've sent? How much do they owe, and how late are they?
</li>
<li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >
Open Invoices. Just what it sounds like: a list of open invoices and their due dates
</li>
<li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >
A/P Aging Detail. Which of your bills are due and overdue?
</li>
<li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >
Unpaid Bills Detail. How much do you owe each vendor? Are any payments overdue?
</li>
<li id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >
Inventory Stock Status by Item. This report shows a lot of detail about your stock status, with columns for reorder point, on hand, on PO, sales/week, etc.
</li>
</ul>
</div>

<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >TIP: QuickBooks has a special report for collections. Open the Reports menu and click Customers & Receivables | Collections Report. This shows which customers are overdue, how much they owe, and what their phone numbers are.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >3. Send Statements</p>
</div>

<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >How Are Finance Charges Billed?</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Sometimes your customers just forget to pay their bills. Or your invoices got caught up in the end-of-year paper blizzard. Or someone simply didn't get an invoice. You could just send another invoice. It might be more effective, though, to send statements. These forms display lists of financial activity between you and the customers over a specified period of time. Open the Customers menu and select Create Statements.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >4. Check Your Purchase Order Status</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Are any of your vendors behind in filling purchase orders? You don't want to find yourself running out of inventory because an expected shipment didn't arrive. Run the Open Purchase Orders Detail report. Follow up on any back orders that haven't been filled yet and ensure that delivery dates have been met.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >5. Consider Setting Up Online Financial Connections</p>
</div>

<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >If you're already well-acquainted with the Bank Feeds Center in QuickBooks, you know how online financial connections provide real-time information about your bank accounts. You can download transactions into QuickBooks so you know on a daily basis which ones have cleared.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Creating a QuickBooks Payments account and accepting credit card and bank payments from customers helps you get paid faster.</p>
</div>

<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Make It a Good Year</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >We're hoping that 2024 is a productive, profitable year for you. QuickBooks can help in so many ways - as long as you're diligent about updating it regularly and understanding how it works. Please contact the office if you want to expand your use of the software, or if you simply need to learn how unfamiliar features work.</p>
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
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> January 16</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >  Pay the fourth installment of 2023 estimated taxes (Form 1040-ES) if not</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}> paying income tax through withholding or not paying sufficient income tax through withholding.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Deposit Social Security, Medicare and withheld income taxes for</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>December 2023 if the monthly deposit rule applies.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Deposit nonpayroll withheld income tax for December 2023 if the </p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>monthly deposit rule applies.</p>
</div>
<div className="mt-3" >
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"400"}}> January 31</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals:  </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >File a 2023 income tax return (Form 1040 or Form 1040-SR) and pay tax</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>due in order to avoid penalties for underpaying the January 16 installment of estimated taxes.</p>
</div>

<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Businesses: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Provide Form 1098, Form 1099-MISC (except for those that have a</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>February 15 deadline), Form 1099-NEC and Form W-2G to recipients.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Provide 2023 Form W-2 to employees.</p>
</div>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > Report Social Security and Medicare taxes and income tax withholding</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>for fourth quarter 2023 (Form 941) if all of the associated taxes due weren't deposited on time and in full.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 return for federal unemployment taxes (Form 940) and pay</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>any tax due if all of the associated taxes due weren't deposited on time and in full.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >File 2023 Form W-2 (Copy A) and transmittal Form W-3 with the Social</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>Security Administration</p>
</div>


<div className="mt-3" >

  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >February 12</p>

</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Individuals: </p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report January tip income of $20 or more to employers (Form 4070).</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} >Report Social Security and Medicare taxes and income tax withholding</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>for fourth quarter 2023 (Form 941) if all associated taxes due were deposited on time and in full.</p>
</div>
<div className="mt-3" >
<div id="res" className="d-md-flex gap-2" >
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"400"}} >Employers:</p>
  <p className="h5  " style={{lineHeight:"30px",fontWeight:"300"}} > File a 2023 return for federal unemployment taxes (Form 940) if all</p>
</div>
<p id="res" className="h5  " style={{lineHeight:"30px",fontWeight:"300"}}>associated taxes due were deposited on time and in full.</p>
</div>
</div>


<div className="mt-5 pt-5" >
<p  id="res" className="h6 small mb-5 " style={{fontWeight:"100"}} >Copyright © 2024   All materials contained in this document are protected by U.S. and international copyright laws. All other trade names, trademarks, registered trademarks and service marks are the property of their respective owners.</p>
</div>

 </div>

</div>





</div>




}



