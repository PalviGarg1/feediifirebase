import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/signin.css';
import { Headersignin } from '../headersignin';
import { ReactSession } from 'react-client-session';
// import '../AllJs/signin.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Signin = () => {
    const handleChange = (e) => {
        var eml = $('#entreml').val().trim();
        var pswrd = $('#passwrd').val().trim();

        if ((eml.length > 0 && pswrd.length > 0)) {
            $('#nxt-btnSignin').removeAttr('disabled');
        } else {
            $('#nxt-btnSignin').attr('disabled', 'disabled');
        }
    }

    const onKeyDown = (event) => {
        if (event.code === 'Space') event.preventDefault()
    }


    let acounttype = sessionStorage.getItem('acounttp');
    //alert(acounttype + " is the account type value");
    //alert(sessionStorage.getItem("acntype"));


      const onBlur = (e) => {
        var eml = $('#entreml');
        var udiv = $('#uiscs');

        if (eml.val() === '' || null) {
            udiv.attr('errr', '');
            udiv.removeClass('valid-inp');
        }
        else {
            udiv.removeAttr('errr');
            udiv.addClass('valid-inp');
        }
      }
      
      const onBlur2 = (e) => {
        var pswrd = $('#passwrd');
        var udiv2 = $('#uiscs2');

        if (pswrd.val() === '' || null) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
        }
      }

      const [emailSignin, setEmailSignin] = useState('');
      const [passwordSignin, setPasswordSignin] = useState('');


      const handleSubmit = e => {
        //console.log('handleSubmit run');
        e.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ access input values here
        console.log('emailSignin 👉️', emailSignin);
        console.log('passwordSignin 👉️', passwordSignin);

        var passwordtocheck="Feedie" + passwordSignin + "1@23";
    
        // 👇️ clear all input values in the form
        // setemailsignup('');
       
  

        fetch('/api/Token', {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: "userName=" + emailSignin + "&password=" + passwordtocheck +  "&grant_type=password",
            })

                    .then(response=> { return response.json(); })
                    .then(data=> {
                        const items = data;
                        console.log(items.access_token + "palvvvvvvvvvvvvvvvvvvv")

                    if( items.access_token!= undefined)
                    {
                        window.location.href="/u/survey";
                    }
                    else
                    {
                        alert("Incorrect username and password")
                    }

                                })
                            .catch(error =>{
                                console.log(error);
                            })

                           

      };

    return <div>
            <Headersignin />
        
                <div id="divLoader" style={{display:"none"}}> </div>
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
                                <div className="sgnd2-21">2/2</div>
                                <div className="sgndv2-2">
                                    <div className="mtb-4p">
                                        <h2 className="sgndv2-3">Welcome back!</h2>
                                    </div>
                                    <div>
                                        <form id="form" className="signinfrm" name="form" action="" method="post" onSubmit={handleSubmit}>
                                            <div className="w-100">
                                                <div className="kckh4" id="uiscs">
                                                    <input id="entreml" name="email" spellCheck="false" type="text" title="Enter your Email" className="mbl-inp" maxLength="30" required=""  value={emailSignin} onBlur={(e) => onBlur(e)} onChange={e => { setEmailSignin(e.target.value); handleChange(e)}} />
                                                    <span className="kckh4-spn" htmlFor="email">Enter your email</span>
                                                    <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd" stroke="#d7dae1" strokeWidth="2" className="stroke">
                                                            <path d="M2 4h20v16H2z"></path>
                                                            <path d="M2 7.9l9.9 3.899 9.899-3.9"></path>
                                                        </g>
                                                    </svg>
                                                    <span className="kckh4-err-spn" style={{display: "none"}}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">Email is required</span>
                                                    </span>
                                                </div>
                                                <div className="kckh4" id="uiscs2">
                                                    <input id="passwrd" name="password" spellCheck="false" type="password" title="Enter your Password" className="mbl-inp" maxLength="30" required="" onKeyPress={(event)=>onKeyDown(event)} value={passwordSignin} onBlur={(e) => onBlur2(e)} onChange={e => { setPasswordSignin(e.target.value); handleChange(e)}} />
                                                    <span className="kckh4-spn" htmlFor="password">Enter your password</span>
                                                    <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd" stroke="#d7dae1" strokeWidth="2" className="stroke">
                                                            <rect id="Rectangle" x="4" y="10" width="16" height="11"></rect>
                                                            <path d="M12,1 C14.209139,1 16,2.790861 16,5 L16,10 L16,10 L8,10 L8,5 C8,2.790861 9.790861,1 12,1 Z" id="Rectangle"></path>
                                                            <path d="M12,14 L12,17" id="Rectangle"></path>
                                                        </g>
                                                    </svg>
                                                    <span className="kckh4-err-spn" style={{display: "none" }}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">Password is required</span>
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="errtxtttt">
                                                    Please enter correct username and password.
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <a className="sgndv1-2a" href="/u/resetpassword">Password Reset?</a>
                                            </div>

                                            <div className="form-group login-submit mb-0 dvvmmn4 sgndv-btncd">
                                                <button id="nxt-btnSignin" type="submit" className="kckh-btn" disabled>
                                                    <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                        <div className="ldio-ravfkgmzeb">
                                                            <div className="lodrr"></div>
                                                        </div>
                                                    </div>
                                                    <span id="nxt-btnn-txt">Next</span>
                                                </button>
                                                <Link to="/" className="sgndv-btncda">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                        <path fill="#54D4F2" fillRule="evenodd" d="M4.709 9L7 6.708 5.586 5.294.88 10l4.705 4.706L7 13.292 4.709 11H18V9H4.709z"></path>
                                                    </svg>
                                                    &nbsp; Back
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
}