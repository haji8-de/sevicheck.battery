import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

// Section Components
 
import Projects1 from "components/projects/Projects1.js";
import Projects2 from "components/projects/Projects2.js";
import Projects3 from "components/projects/Projects3.js";
 
function JobOffer() {
    React.useEffect(() => {
      document.body.classList.add("sections-page");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      var href = window.location.href.substring(
        window.location.href.lastIndexOf("#") + 1
      );
      if (
        window.location.href.lastIndexOf("#") > 0 &&
        document.getElementById(href)
      ) {
        document.getElementById(href).scrollIntoView();
      }
      return function cleanup() {
        document.body.classList.remove("sections-page");
      };
    });
  return (
    <>
        <DemoNavbar />
      <div className="wrapper">
        <Projects2 />
      </div>
        <DemoFooter/>
    </>
  );
}

export default JobOffer; 