import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUserCircle, faPencilSquare, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
        {/*  //header  */}
        <header className="py-sm-3 pt-3 pb-2" id="home">
            <div className="container">
                {/*  nav  */}
                <div className="top-w3pvt d-flex">
                    <div id="logo">
                        <h1> <a href="index.html">dofllamingo</a><label className="sub-des">Online shop</label></h1>
                    </div>

                    <div className="forms ml-auto">
                        <a href="login.html" className="btn"><span><FontAwesomeIcon icon={faUserCircle} /></span> Sign In</a>
                        <a href="register.html" className="btn"><span><FontAwesomeIcon icon={faPencilSquare} /></span> Sign Up</a>
                    </div>
                </div>
                <div className="nav-top-wthree">
                    <nav>
                        <label htmlFor="drop" className="toggle"><FontAwesomeIcon icon={faBars} /></label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li>
                                {/*  First Tier Drop Down  */}
                                <label htmlFor="drop-2" className="toggle">Dropdown <span aria-hidden="true"><FontAwesomeIcon icon={faAngleDown} /></span>
                                </label>
                                <a href="#">Dropdown <span aria-hidden="true"><FontAwesomeIcon icon={faAngleDown} /></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><a href="coming.html" className="drop-text">Services</a></li>
                                    <li><a href="about.html" className="drop-text">Features</a></li>
                                    <li><a href="single.html" className="drop-text">Single Page</a></li>
                                </ul>
                            </li>

                            <li><a href="shop.html">Collections</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    {/*  //nav  */}
                    <div className="search-form ml-auto">
                        <div className="form-w3layouts-grid">
                            <form action="#" method="post" className="newsletter">
                                <input className="search" type="search" placeholder="Search here..." required="" />
                                <button className="form-control btn" value=""><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </form>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </header>
        {/*  //header  */}
    </>
  );
}

export default Header;