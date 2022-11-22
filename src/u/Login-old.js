import '../Content/Content/login.css';
import '../App.css';
import { Headersignin } from '../headersignin';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const Loginold = () => {
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

                <div className="cntanerr" id="login" style={{ display: "block" }}>
                    <div className="roww jc-cntr">
                        <div className="colcs">
                            <div className="dv1">
                                <h6>Choose One!</h6>
                                <h3>Log in to Feedii as a...</h3>
                            </div>
                            <div className="dv2 roww">
                                <div className="col-sm-4">
                                    <div className="dv2cstma" onClick={tchrbtn} id="techr">
                                        <div className="cstmdv01">
                                            <img src="https://www.classdojo.com/static/4550dccbbab891e3074e409442729d66/f8671/teacher_badge.png" className="cstmdv01-img" height="104" width="104" />
                                            <p className="cstmdv01-p">Teacher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="dv2cstma" onClick={studnt} id="studnt">
                                        <div className="cstmdv01">
                                            <img src="https://www.classdojo.com/static/2e9aa1449e3deeae0e4cc7b203577494/f8671/student_badge.png" className="cstmdv01-img" height="104" width="104" />
                                            <p className="cstmdv01-p">Student</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="dv2cstma" onClick={adminn} id="adminn">
                                        <div className="cstmdv01">
                                            <img src="https://www.classdojo.com/static/fd1ce8f9d8f7b5c0771eafca1a424193/f8671/school_leader_badge.png" className="cstmdv01-img" height="104" width="104" />
                                            <p className="cstmdv01-p">Admin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dv3">
                                <span className="dv3spn">Didn't have credentials?</span>
                                <a href="/u/signup" className="dv3cstma shldr">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    
}


