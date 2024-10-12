"use client";
import Link from "next/link"
import SubscriptionForm from "../checkoutForm/chechout";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from "next/navigation";

export default function Book(){

  let move = useRouter();
  const openFacebook = () => {
    window.open('https://web.facebook.com/people/Muhammad-Nadeem/pfbid0JZHDCWzRLG9VhxgkATTv1rp5yUQpEfPL9H7vz5j8fWdXFKPHtSxrUmYvt9Nuh1Zwl/?mibextid=ZbWKwL', '_blank');
  };


  const stripePromise = loadStripe("pk_test_51PycwuP0ebickvSnk2QWol9dU5s4BDsNkiUYF5KjoUnNgjcazHmbLTVz1T97SFNm14rRhFRgyeOL37J3yddbj66X00di2vs6Gq");


return <div>



<div class="background-image2">
        <div class="bottom-overlay">
        <div className="container">
        <div className="row text-center text-md-start">
            <div className="col mb-3 d-flex align-items-center">
            <p style={{ fontWeight: "100", whiteSpace: "nowrap" }} className="h1 ms-4">Book Keeping</p>
    
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


    
      <li className="h5 mt-5 text-center text-md-end" style={{ color: "black", borderBottom: "2px solid #0078A5", paddingBottom: "10px", fontSize: "300" }}>
        Quick Links:
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/FinancialCalculators"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Financial Calculators
</Link>
      </li>

      <li  className="text-lg-end mt-1 "  >
      <Link href={"/SecureSend"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Send Us A File
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/IRS"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      IRS Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/State"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      State Tax Forms
</Link>
      </li>
      <li  className="text-lg-end mt-1 "  >
      <Link href={"/TaxDueDate"} className="h5 text-center text-lg-end hover-text-gold" style={{ color: "#0078A5", fontWeight: "300", cursor: "pointer", textDecoration: "none" }}>
      Tax Due Dates
</Link>
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
    </div>
    
    </div>
    <div className="d-flex justify-content-center justify-content-lg-start mt-2 " style={{ width: "100%" }}>
          <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
      
          Bookkeeping is a professional service that helps businesses and individuals manage their financial transactions systematically and efficiently. It involves the accurate recording, organizing, and maintaining of all financial data to ensure proper financial reporting and compliance with tax laws. A bookkeeping service is essential for both small and large businesses, as it provides a clear picture of financial health and allows for informed decision-making.
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-2 " style={{ width: "100%" }}>
          <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
      
          What a Bookkeeping Service Offers:
          </p>
        </div>
       
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
       <ul style={{listStyleType:"none"}} >
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} > 1. Recording Financial Transactions: A bookkeeping service records all financial transactions that occur in a business, such as sales, purchases, income, expenses, and payments. This is done on a daily or weekly basis to ensure that all financial data is up-to-date.</li>
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} > 2. Categorizing Expenses and Income: Every transaction is categorized based on its type (e.g., income, operating expense, asset purchase). This organization helps in generating accurate financial statements and reports.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >3. Managing Accounts Payable and Receivable: Bookkeepers track the money owed to suppliers (accounts payable) and money owed to the business by customers (accounts receivable). They ensure that bills are paid on time and that outstanding invoices are followed up on.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >4. Bank Reconciliation: Bookkeeping services include reconciling a company’s bank statements with its internal financial records to ensure that the business's financial data matches actual cash balances. This helps identify any discrepancies or errors.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >5. Generating Financial Reports: Bookkeepers prepare essential financial reports such as income statements (profit and loss), balance sheets, and cash flow statements. These reports give business owners a clear understanding of their financial performance and help them make informed decisions.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >6. Payroll Management: Bookkeeping services often include payroll management, ensuring that employees are paid accurately and on time. It also involves managing deductions, taxes, and benefits, and making sure all payroll-related records are accurate.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >7. Tax Preparation Support: By keeping accurate records throughout the year, bookkeeping services make it easier to prepare and file taxes. They ensure that all income, expenses, and deductions are properly documented, reducing the risk of errors during tax season.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >8. Compliance and Regulatory Requirements: Bookkeeping services help businesses stay compliant with local, state, and federal tax regulations. They maintain records that are required for tax filings and audits, ensuring that businesses meet all regulatory requirements.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >9. Budgeting and Forecasting: Bookkeepers help businesses create budgets and forecasts by analyzing financial data. This allows business owners to plan for the future, manage expenses, and make financial projections that help guide business growth.
        </li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >10. Expense Tracking and Cost Management: A bookkeeping service helps track business expenses and ensures they are properly categorized. This allows businesses to identify areas where they can reduce costs and improve profitability.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >11. Maintaining Accurate Records: Accurate financial records are vital for the smooth running of any business. Bookkeeping services maintain these records consistently, ensuring that all financial transactions are well-documented and available for review when needed.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >12. Audit Preparation: In the event of an audit, a bookkeeping service can assist by providing organized financial records, making the process smoother and less stressful. They ensure that all documentation is available to support financial statements.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >13. Cash Flow Management: Bookkeepers help businesses monitor and manage their cash flow, ensuring that they have enough liquidity to meet their obligations. Proper cash flow management is key to the survival and growth of any business.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >14. Invoicing and Billing: A bookkeeping service can handle invoicing customers and clients, ensuring that payments are received on time. This improves cash flow and reduces the risk of bad debts.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >15. Data Security and Backup: Bookkeeping services often include secure storage and backup of financial data, ensuring that sensitive information is protected and can be restored in case of data loss.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >16. Use of Accounting Software: Many bookkeeping services utilize modern accounting software such as QuickBooks, Xero, or FreshBooks. These tools help automate many bookkeeping tasks, reduce errors, and improve the overall efficiency of managing finances.</li>
       </ul>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Why Bookkeeping Services Are Important:
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <ul  >
        <li className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} > Financial Transparency: Bookkeeping provides business owners with a clear, accurate picture of their financial situation, allowing for better decision-making.</li>
        <li className="h5 text-center text-lg-start mt-4 " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Time-Saving: By outsourcing bookkeeping, business owners can focus on their core business activities rather than spending time on managing financial records.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Tax Compliance: Proper bookkeeping ensures that all tax records are accurate and up-to-date, reducing the risk of penalties or audits.
        Improved Cash Flow: By keeping track of accounts payable and receivable, bookkeeping services help improve cash flow management and ensure timely payments.</li>
        <li className="h5 text-center text-lg-start mt-4  " style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw",color:"black"}} >Budgeting and Planning: A bookkeeping service helps businesses create realistic budgets and plan for future expenses, helping to control costs and avoid financial surprises.</li>
       </ul>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Who Needs a Bookkeeping Service?
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4  mb-5 " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        Small Businesses: Small business owners often struggle with managing finances while focusing on growing their business. A bookkeeping service can help them stay organized and compliant with tax laws.
Freelancers and Entrepreneurs: Individuals who work as freelancers or independent contractors may benefit from bookkeeping services to track income, expenses, and ensure proper tax filing.
Medium and Large Enterprises: As businesses grow, the complexity of their finances increases. A bookkeeping service can help manage payroll, taxes, and other financial tasks for larger companies.
Non-Profit Organizations: Non-profits require accurate bookkeeping to manage donations, grants, and expenses, as well as to comply with reporting requirements for tax-exempt status.
Benefits of Hiring a Bookkeeping Service:
Accuracy: Professional bookkeepers are trained to handle financial records accurately, reducing the risk of errors that could lead to financial discrepancies or tax issues.
Expertise: A bookkeeping service brings expert knowledge of financial management, tax regulations, and accounting practices, helping businesses avoid costly mistakes.
Efficiency: Bookkeepers use specialized tools and software to manage financial data efficiently, ensuring that reports and statements are generated on time.
Scalability: As your business grows, a bookkeeping service can scale with you, handling increased financial complexity without the need for additional in-house staff.
Peace of Mind: Knowing that your financial records are in good hands allows you to focus on running your business without worrying about compliance, tax filings, or audits.
</p>
        </div>
       
        <div className="d-flex justify-content-center justify-content-lg-start mt-4 " style={{ width: "100%" }}>
        <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        Conclusion:
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4  " style={{ width: "100%" }}>
        <p className="h5 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "300", width: "90vw", maxWidth: "53vw"}}>
        A professional bookkeeping service is essential for businesses and individuals looking to maintain accurate financial records, comply with tax laws, and make informed financial decisions. Whether you're a small business owner, freelancer, or large enterprise, bookkeeping services can save time, improve cash flow, and help you grow your business confidently.
</p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4" style={{ width: "100%" }}>
        <p className="h4 text-center text-lg-start" style={{lineHeight: "30px", fontWeight: "500", width: "90vw", maxWidth: "53vw"}}>
        If you want to buy this service Click below the button
</p>

        </div>
 



       
    
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
      <Link href={"/Contact"} className="form-button" style={{ textDecoration: 'none', borderBottom: 'none' }}>
  Subscribe Now
</Link>

</div>
    </div>
    
    
      </ul>
    </div>
    
    
    
    </div>


    
</div>



}

