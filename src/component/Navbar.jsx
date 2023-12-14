import { Link } from "react-router-dom";
import logo from '../logo.PNG';


const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i class="bi bi-border-width text-success"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2  fw-medium ps-5 mb-lg-0">
                            <li className="nav-item ms-5 ">
                                <Link className="nav-link text-light cls_nav1  " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item  ms-3 ">
                                <Link className="nav-link text-light cls_nav " to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link text-light cls_nav" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link text-light cls_nav" to="/newapp">New</Link>
                            </li>
                        </ul>
                           <span>
                           <span className="cls_nav"><i class="bi bi-globe  text-warning p-3 fs-2"></i></span>
                        <button className="btn btn-warning  btn-medium">Contact Me</button>
                        
                           </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;