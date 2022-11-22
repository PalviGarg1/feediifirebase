import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/waiting.css';
// import '../AllJs/verifyaccount.js';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const AccountVerifi = () => {

    var tokenn = sessionStorage.getItem("tokensnd");
    var accounttypeacntverify = sessionStorage.getItem("acntypesignup");
    var isforgot = sessionStorage.getItem("isforgot");
    alert(isforgot);
    var errorDiv = $('#shwmsg');

    const verifidbtn = () => {
        fetch('https://entity-feediiapi.azurewebsites.net/api/login/getverifyToken/' + tokenn, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            var tkn = parse[0].Message;
            alert(tkn);
            
            if (tkn == "verified")
            {
                window.location.href="/getstarted/createpassword";
            }
            else {
                //errorDiv.attr('errr', '');
                $('#msgdvacntvrfy').show();
                $("#shwmsg").text('Your account is not verified! Please check your email');
                setTimeout(function () {
                    $('#msgdvacntvrfy').hide();
                }, 10000);
            }

          })
          .catch(error =>{
              console.log(error);
          });
    }

    const rsndlinkbtn = () => {

        var rcvMaterId = sessionStorage.getItem("Masteridsnd");

        fetch('https://entity-feediiapi.azurewebsites.net/api/login/getLink/' + rcvMaterId + '-' + accounttypeacntverify +"-" + isforgot, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            console.log(data);
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            var activeStatus_ = parse[0].activeStatus;
            
            if (activeStatus_ === "Attempt Exceed")
            {
                $('#msgdvacntvrfy').show();
                $("#shwmsg").text('Your acount is on hold position! Please try after some time');
                window.location.href="/getstarted/createpassword";
                setTimeout(function () {
                    $('#msgdvacntvrfy').hide();
                }, 10000);
            }
            else {
                $("#shwmsg").text('Verification link has send to your email');
            }

          })
          .catch(error =>{
              console.log(error);
          });
        
    }

    const msgHideBtnid = () => {
        $('#msgdvacntvrfy').hide();        
    }


    return <div>
        <Headersignup />

        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="container wtmcst">
                <div className="wtdv1">
                    <div className="wtdv2">
                        <div>
                            <div className="wtdv2-dvv wtdv2-dvv1"></div>
                            <div className="wtdv2-dvv wtdv2-dvv2"></div>
                            <div className="wtdv2-dvv wtdv2-dvv3"></div>
                            <div className="wtdv2-dvv wtdv2-dvv4"></div>
                            <div className="wtdv2-dvv wtdv2-dvv5"></div>
                            <div className="wtdv2-dvv wtdv2-dvv6"></div>
                            <div className="wtdv2-dvv wtdv2-dvv7"></div>
                            <div className="wtdv2-dvv wtdv2-dvv8"></div>
                        </div>
                        <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg" className="wtdv2-svg"><path d="M71.56 141.12C109.977 141.12 141.12 109.977 141.12 71.56C141.12 33.1431 109.977 2 71.56 2C33.1431 2 2 33.1431 2 71.56C2 109.977 33.1431 141.12 71.56 141.12Z" stroke="#54D4F2" strokeWidth="3.9624" strokeMiterlimit="10" strokeLinecap="round" strokeDasharray="0.05 21.79"></path></svg>
                    </div>
                    <div className="wtdv3">
                        <div className="wtdv3-dv1">
                            <div>
                                <h2 className="wtdv3-dv1-h2">Sit back & Relax</h2>
                                <p className="wtdv3-dv1-p">While we're verifying your details, check your mail for verification code</p>
                                <div className="dspflx">
                                    <a className="wtdv3-dv1-a" onClick={verifidbtn} id="wtdvbtn1">
                                        <span>I have verified</span>
                                    </a>
                                    <a className="wtdv3-dv1-btn" onClick={rsndlinkbtn} id="wtdvbtn2">
                                        <span>Resend Link?</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="wtdv3-dv2">
                            <img className="wtdv3-dv2-img" src="../Images/waiting-imgg.jpg" />
                        </div>
                    </div>
                    <div id="msgdvacntvrfy">
                        <div className="errdvacntvrfysgnup col-sm-6 row">
                            <div id="shwmsg" className="col-sm-10 pl-0"></div>
                            <div className="col-sm-2 text-right">
                                <button className="msgHideBtn" onClick={msgHideBtnid}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}

// export default Details;