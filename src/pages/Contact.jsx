import React from "react";
import SendMessage from "../components/contact/SendMessage";
import FindUs from "../components/contact/FindUs.jsx";
import PageBanner from "../components/PageBanner";

const Contact = () => {
  return (
    <div className="contact"> {/* Fixed 'class' to 'className' as well */}
      <PageBanner 
        title="Contact" 
        breadcrumb="Home /Contact us"
        image="images/contactbanner.png" // Added the leading slash and fixed extension
      />
      <SendMessage/>
      <FindUs/>
    </div>
  );
};

export default Contact;