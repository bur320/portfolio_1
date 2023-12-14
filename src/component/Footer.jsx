import { Link } from 'react-router-dom';
import logo from '../logo.PNG';

const Footer = () => {
    return (<div className='bg-dark home8' style={{lineHeight:"100px"}}>
        <div className="container w-100 ">
            <footer className="d-flex  justify-content-between align-items-center ">
                <p className="col-md-4 mb-0 "><img src={logo} alt="logo" /></p>

                <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <p className="bi me-2 text-light" width="40" height="32">© 2023 Burhan Rabbani. All rights reserved</p>
                </Link>

                <ul className="nav col-md-4 justify-content-end">
                  <span><i class="bi m-2 bi-instagram text-warning"></i></span>  <span><i class="bi bi-linkedin m-2 text-warning"></i></span>
                  <span><i class="bi m-2 bi-chat text-warning"></i></span>  <span><i class="bi bi-behance m-2 text-warning"></i></span>
                </ul>
            </footer>
        </div>
    </div>);
}

export default Footer;