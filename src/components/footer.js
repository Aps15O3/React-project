import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render(){
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
        <h4> company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">phone</a></li>
            <li><a href="#">laptop</a></li>
            <li><a href="#">computers</a></li>
          </ul>
        </div>
      
      </div>
    </div>
 </footer>
  );
}
}

export default Footer;