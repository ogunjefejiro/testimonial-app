import Logo from "../components/Logo"

const Navbar = () => {
    return (
        <div className="navbar">
            <header className="container">
                <Logo />
                <nav>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#" className="cta">Sign up</a></li>
                    </ul>
                </nav>
            </header>
            <nav className="second-nav">
                    <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Wholesale center</a></li>
                        <li><a href="#">Seller center</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Internships</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar
