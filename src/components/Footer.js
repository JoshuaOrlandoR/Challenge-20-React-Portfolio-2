import React from "react";
// Need to get rid of placeholders!!!!!!!
function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">
              <p>A React Powered Portfolio</p>
              <p>-- Created by Joshua Orlando -- </p>
              <p>Thank you for taking a look at my page! Please feel free to reach out at any of the following</p>
            </p>
            <hr className="border-top border-white my-3" />
            <p className="text-center">
              <a href="https://github.com/JoshuaOrlandoR" className="text-white text-decoration-none me-2 github-link">
                GitHub
              </a>
              |
              <a href="https://loremipsum.io/21-of-the-best-placeholder-image-generators/" className="text-white text-decoration-none me-2 linkedin-link">
                LinkedIn (Placeholder for now!)
              </a>
              |
              <a href="mailto:placeholder@email.com" className="text-white text-decoration-none ms-2 email-link"> 
                Send an Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


