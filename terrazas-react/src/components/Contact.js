import React from "react";

function Contact() {
  return (
    <div className="form-container">
      <style>
        {
        `
        
                .form-container {
                    min-height:100vh;
                    flex-direction:column;
                    min-width:100vw;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: center;                    
                    align-self:center;
                }
                input, textarea{
                    margin-bottom:25px;
                }

                label{
                    
                    text-transform:uppercase;
                }
        
        
                `
                }
      </style>
      <br/>
      <h1 style={{ fontSize: "40px" }}>Contact Us</h1>
      <div >
        

        <form action="/contact_response">
          <br />
          <div className="row">
            <label htmlFor="fname" className="form_text">
              First Name
            </label>
            <br />
            <input
              type="text"
              id="fname"
              placeholder="Your Name"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <label htmlFor="fname" className="form_text">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="lname"
              placeholder="Your last name"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <label htmlFor="email" className="form_text">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Your e-mail address"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <br />
            <label htmlFor="fname" className="form_text">
              Your Query
            </label>
            <br />
            <textarea
              type="text"
              id="query"
              placeholder="Write something"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
          <br />
          <div>
            <button className="btn btn-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Contact;
