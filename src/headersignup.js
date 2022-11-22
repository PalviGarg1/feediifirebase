import logo from './feediilogo.png';
import './Content/Content/login.css';
import './App.css';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Headersignup = () => {
    const hdrstyl1 = {
        opacity: ".5",
        fontSize: "15px",
        letterSpacing: ".18px",
        lineHeight: "24px"
    };

    var actp = "";

    const tchrbtn = () => {
        actp = 4;
        ReactSession.set("acounttype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
    }

    const studnt = () => {
        actp = 1;
        ReactSession.set("acounttype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
    }

    const adminn = () => {
        actp = 2;
        ReactSession.set("acounttype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
    }

    return <div>

                <div className="content-header custom-blue box-shadow-4" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "0 60px" }}>
                        <div className="navbar-text nav-title" id="pageTitle">
                            <Link to="/">
                                <img src={logo} alt="Logo" style={{ width: "85px" }} />
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse order-lg-1" id="navbarToggler" style={{ height: "2rem" }}></div>
                        <ul className="nav flex-row order-lg-2">
                            <li>
                                <div style={hdrstyl1}>
                                    Already have an account?
                                </div>
                            </li>
                            <li>
                                <Link to="/" className="sgnupcstmabtn shldr">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <nav className='navbar navbar-expand-sm bg-light navbar-dark' style={{ marginTop: "5%" }}>
                    <ul className='navbar-nav'>
                        <li className='nav-item m-1'>
                            <Link to='/admin' className='btn btn-light btn-outline-primary'>
                                Admin
                            </Link>
                            <Link to='/test' className='btn btn-light btn-outline-primary'>
                                Test
                            </Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
     
}