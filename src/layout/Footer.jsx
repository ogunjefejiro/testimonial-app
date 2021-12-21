import socials from ".././assets/socials.svg"
import iphone from ".././assets/iphone.svg"

const Footer = () => {
    return (
        <footer>
            <div className="iphone">
                <img src={iphone} alt="" />
                <div className="opt-in">
                    <div>
                        <h2>Be a  member <br></br>of our community 🎉</h2>
                        <p>We’d make sure you’re always first to know what’s<br></br> happening on Vasiti—thus, the world.</p>
                        <input type="email" placeholder="enter your email"/>
                        <input type="submit" value="SUBSCRIBE" />
                    </div>
                    
                </div>
            </div>
            <div className="row-2">
                <div class="row5 container">
                <div class="footer-menu">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Term of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Press & Media</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Magazine</a></li>
                            <li><a href="#">Seller</a></li>
                            <li><a href="#">Wholesale</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Become a Campus Rep</a></li>
                            <li><a href="#">Become a Visit Influencer</a></li>
                            <li><a href="#">Become a Campus writer</a></li>
                            <li><a href="#">Become an Affiliate </a></li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h3>Get in touch</h3>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Partner with us</a></li>
                            <li><a href="#">Advertise with us</a></li>
                            <li><a href="#">Help/FAQs</a></li>
                        </ul>
                    </div>
                    <div class="footer-menu">
                        <h3>Join our community</h3>
                        <ul>
                            <li><a href="#"><img src={socials} alt="" /></a></li>
                            <li><a href="#">Email Newsletter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
