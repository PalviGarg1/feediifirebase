import logo from './feediilogo.png';
import './Content/Content/login.css';
import './App.css';
import './Content/Content/headerdashboard.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Headerdashboard = () => {

    return <div>

                <div className="content-header custom-blue box-shadow-4" id="content-header">
                    <div className="navbar navbar-expand-lg" style={{ margin: "1px 60px 0", paddingBottom: "0" }}>
                        <div className="navbar-text nav-title pt-0" id="pageTitle">
                            <Link to="/">
                                <img src={logo} alt="Logo" style={{ width: "85px" }} />
                            </Link>
                        </div>
                        
                        <div className="row nvhdrhde" style={{width: "100%", textAlign: "center", justifyContent: "center"}}>
                            <div>
                                <Link to="/u/staff">
                                    <button className="dshbdhdrbtn active" id="staff">
                                        Staff
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="dshbdhdrbtn" id="srvy">
                                        Survey
                                    </button>
                                </Link>
                                <Link to="">
                                    <button className="dshbdhdrbtn" id="clsrm">
                                        Classroom
                                    </button>
                                </Link>

                            </div>
                        </div>

                        <ul className="nav flex-row order-lg-2 mt--7px">
                            <li className="dropdown d-flex align-items-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drpbtnndw">
                                        <span className="avatar w-32 brdr">
                                            A
                                        </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="drpdwnmnu">
                                        <Link to="/u/profile" className="dropdown-item btnclclclk">Profile</Link>
                                        <Link to="/u/login" className="dropdown-item btnclclclk">Sign out</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     
}