import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
// import '../AllJs/reset';
import { Headersignup } from '../headersignup';
import { Link } from 'react-router-dom';

export const Resetpsword = () => {
    const handleChange = (e) => {
        var email = $('#rstPswrdEmail').val().trim();
        if ((email.length > 0)) {
            $('#nxt-btnnRstPswrdEml').removeAttr('disabled');
        } else {
            $('#nxt-btnnRstPswrdEml').attr('disabled', 'disabled');
        }
    }

    var accounttypepswrd = sessionStorage.getItem("acntypesignup");
    sessionStorage.setItem("isforgot", 1);
    // alert(sessionStorage.getItem("acntypesignup"));


      const onBlur = (e) => {
        var eml = $('#rstPswrdEmail');
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

      const [resetPassEmail, setResetPassEmail] = useState('');

      const handleSubmit = e => {
        //console.log('handleSubmit run');
        e.preventDefault(); // 👈️ prevent page refresh
    
      
        fetch('/api/Login/GetUserValidatedforgotpassword/' + resetPassEmail , {
            method: 'GET',          
           
            }).then((data) => {
                //console.log("test data - " + data);
                //alert("Successfully!");  
                window.location.href="/getstarted/accountverify";                     
            })
        .catch(error =>{
            console.log(error);
        })
                           

      };

    return <div>
        <Headersignup />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="be-content">
                <div className="main-content container-fluid disp-flex pb-0">
                    <div className="col-lg-8 col-xs-12" style={{margin: "0 auto", maxWidth: "752px"}}>
                        <div>
                            <div className="dvvmmn">
                                <div style={{display: "flex", marginLeft: "5px"}} className="dvvmmn2">
                                    <div style={{paddingRight: "15px"}}>
                                        <div style={{position: "relative", width: "78px", height: "78px"}}>
                                            <div className="kldkc">1</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 1: Reset your password
                                        </h6>
                                        <h3 className="kckh3">Enter your email</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" method="POST" className="restpswrdfrm" id="restpswrdform" noValidate="novalidate" onSubmit={handleSubmit}>

                                        <div className="w-100">
                                            <div className="kckh43 elmll" id="uiscs">
                                                <input id="rstPswrdEmail" name="rstEmail" type="text" className="mbl-inp" maxLength="50" required="" value={resetPassEmail} onBlur={(e) => onBlur(e)} onChange={e => { setResetPassEmail(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="rstEmail">Your Email</span>
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
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnRstPswrdEml" type="submit" className="kckh-btn verifybutton" disabled>
                                                <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                    <div className="ldio-ravfkgmzeb">
                                                        <div className="lodrr"></div>
                                                    </div>
                                                </div>
                                                <span id="nxt-btnn-txt">Continue</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bck-btn-mbw">
                    <Link title="Back" to="/u/signin" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                        <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: "bottom"}} /> <span className="bck-btn"> BACK </span>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
}

// export default Details;