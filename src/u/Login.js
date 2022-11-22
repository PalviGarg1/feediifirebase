import '../Content/Content/login.css';
import '../App.css';
import { Headersignin } from '../headersignin';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const Login = () => {
    var actp = "";

    const tchrbtn = () => {
        actp = "Teacher";
        // ReactSession.set("acounttype", actp);
        // sessionStorage.setItem('acounttp', actp);
        sessionStorage.setItem("acntype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
        window.location.href = "/u/signin";
    }

    const studnt = () => {
        actp = "Student";
        // ReactSession.set("acounttype", actp);
        // localStorage.acntype =  actp;
        sessionStorage.setItem("acntype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
        window.location.href = "/u/signin";
    }

    const adminn = () => {
        actp = "School";
        // ReactSession.set("acounttype", actp);
        // localStorage.acntype =  actp;
        sessionStorage.setItem("acntype", actp);
        //const acounttype = ReactSession.get("acounttype");
        //alert(acounttype + " Great Shot!");
        window.location.href = "/u/signin";
    }

    return <div>
                <Headersignin />

                <div id="divLoader" style={{ display: "none" }}> </div>

                <div className="container" id="login">
                    <div className="row">
                        <div className="sgndv1 col-lg-5">
                            <div className="sgndv1-1">
                                <img src="../Images/step-1.png" />
                                <h2>
                                    Get Started <br />
                                    with Feedii
                                </h2>
                                <p>Sign in for Feedii and explore the platform yourself.</p>
                                <div className="sgndv1-2">
                                    <p>Don't have credentials?</p>
                                    <Link to="/u/signup" className="sgndv1-2a">Signup</Link>
                                </div>
                            </div>
                        </div>
                        <div className="sgndv2 col-lg-7">
                            <div className="sgndv2-1">
                                <div className="sgnd2-21">1/2</div>
                                <div className="sgndv2-2">
                                    <div className="mtb-4p">
                                        <h2 className="sgndv2-3">How you want to login?</h2>
                                    </div>
                                    <div>
                                        <div className='dv-login-category'>
                                            <div className='dv-login-category-dv1' onClick={tchrbtn}>
                                                <label className='dv-login-category-dv1-lbl'>Student</label>
                                                <i className='dv-login-category-dv1-i fa fa-arrow-right'></i>
                                            </div>
                                            <div className='dv-login-category-dv1' onClick={tchrbtn}>
                                                <label className='dv-login-category-dv1-lbl'>Teacher</label>
                                                <i className='dv-login-category-dv1-i fa fa-arrow-right'></i>
                                            </div>
                                            <div className='dv-login-category-dv1' onClick={adminn}>
                                                <label className='dv-login-category-dv1-lbl'>Admin</label>
                                                <i className='dv-login-category-dv1-i fa fa-arrow-right'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    
}


