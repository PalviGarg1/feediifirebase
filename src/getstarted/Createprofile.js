import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
import '../AllJs/details3-adm.js';
//import '../AllJs/moredetails.js';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CreateProfile = () => {
    const handleChange = (e) => {
        //alert("fhhfg")
        var sname = $('#sname').val().trim();
        var name = $('#yourname').val().trim();
        var swbst = $('#swbst').val().trim();
        var designation = $('#designation').val().trim();
        var city = $('#enctyy').val().trim();
        var state = $('#enstat').val().trim();
        var country = $('#cntryname').val();
        //var psswrd_rpt = $('#repeatpassword').val().trim();
        if ((sname.length > 0) && (name.length > 0) && (swbst.length > 0) && (designation.length > 0) && (city.length > 0) && (state.length > 0) && (country != "0")) {
            //alert("inside if")
            $('#nxt-btnnfnladm').removeAttr('disabled');
        } else {
            //alert("inside else")
            $('#nxt-btnnfnladm').attr('disabled', 'disabled');
        }
    }
    


    const onBlur = (e) => {
        var schlname = $('#sname');
        var udiv1 = $('#uiscs');

      if (schlname.val() === '' || null) {
          udiv1.attr('errr', '');
          udiv1.removeClass('valid-inp');
      }
      else {
          udiv1.removeAttr('errr');
          udiv1.addClass('valid-inp');
      }
    }

    const onBlur2 = (e) => {
        var name = $('#yourname');
        var udiv2 = $('#uiscs2');

        if (name.val() === '' || null) {
            udiv2.attr('errr', '');
            udiv2.removeClass('valid-inp');
        }
        else {
            udiv2.removeAttr('errr');
            udiv2.addClass('valid-inp');
        }
    }

    const onBlur3 = (e) => {
        var schlwbst = $('#swbst');
        var udiv3 = $('#uiscs3');

      if (schlwbst.val() === '0') {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
        }
    }

    const onBlur4 = (e) => {
        var designation = $('#designation');
        var udiv4 = $('#uiscs4');

        if (designation.val() === '00') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
        }
    }

    const onBlur5 = (e) => {
        var schlcty = $('#enctyy');
        var udiv5 = $('#uiscs5');

        if (schlcty.val() === '000') {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
        }
    }

    const onBlur7 = (e) => {
        var schlstat = $('#enstat');
        var udiv7 = $('#uiscs7');

        if (schlstat.val() === '' || null) {
            udiv7.attr('errr', '');
            udiv7.removeClass('valid-inp');
        }
        else {
            udiv7.removeAttr('errr');
            udiv7.addClass('valid-inp');
        }
    }

    const onBlur8 = (e) => {
        var cntryy = $('#cntryname');
        var udiv8 = $('#uiscs8');

        if (cntryy.val() === '' || null) {
            udiv8.attr('errr', '');
            udiv8.removeClass('valid-inp');
        }
        else {
            udiv8.removeAttr('errr');
            udiv8.addClass('valid-inp');
        }
    }

      const [adminSchoolNameSignup, setAdminSchoolNameSignup] = useState('');
      const [adminNameSignup, setAdminNameSignup] = useState('');
      const [adminSchoolWebsiteSignup, setAdminSchoolWebsiteSignup] = useState('');
      const [adminDesignationSignup, setAdminDesignationSignup] = useState('');
      const [adminEnterCitySignup, setAdminEnterCitySignup] = useState('');
      const [adminEnterStateSignup, setAdminEnterStateSignup] = useState('');
      const [adminSelectCountrySignup, setAdminSelectCountrySignup] = useState('');

      const handleSubmit = e => {
        //console.log('handleSubmit run');
        e.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ access input values here
        console.log('adminSchoolNameSignup 👉️', adminSchoolNameSignup);
        console.log('adminNameSignup 👉️', adminNameSignup);
        console.log('adminSchoolWebsiteSignup 👉️', adminSchoolWebsiteSignup);
        console.log('adminDesignationSignup 👉️', adminDesignationSignup);
        console.log('adminEnterCitySignup 👉️', adminEnterCitySignup);
        console.log('adminEnterStateSignup 👉️', adminEnterStateSignup);
        console.log('adminSelectCountrySignup 👉️', adminSelectCountrySignup);
    
        // 👇️ clear all input values in the form
        // setemailsignup('');

        var rcvProfileMasterId = sessionStorage.getItem("Masteridsnd");

        fetch('/api/login/EnterShoolProfile', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({ 
                usermasterId : rcvProfileMasterId,
                schoolName : adminSchoolNameSignup,
                contactPersonName : adminNameSignup,
                designation : adminSchoolWebsiteSignup,
                website: adminDesignationSignup,
                city: adminEnterCitySignup,
                state: adminEnterStateSignup,
                country: adminSelectCountrySignup
                })
            }).then((data) => {
                console.log("test data - " + data);
                alert("Profile Created Successfully!");                        

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
                                        <div style={{position: "relative", width: "78px",height: "78px"}}>
                                            <div className="kldkc">3</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-9.833333333333332"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-43.166666666666664"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 3: Filling your details
                                        </h6>
                                        <h3 className="kckh3">Tell us more.</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" className="admincreateprofile" method="POST" id="admincreateprofile" noValidate="novalidate" onSubmit={handleSubmit}>
                                        <div className="w-100">
                                            <div className="kckh4" id="uiscs">
                                                <input id="sname" name="sname" type="text" className="mbl-inp" maxLength="50" required="" value={adminSchoolNameSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminSchoolNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="sname">School Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">School name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh42" id="uiscs2">
                                                <input id="yourname" name="yourname" type="text" className="mbl-inp" maxLength="50" required="" value={adminNameSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="yourname">Your Name</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Your name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh43" id="uiscs3">
                                                <input id="swbst" name="swbst" type="text" className="mbl-inp" maxLength="50" required="" value={adminSchoolWebsiteSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminSchoolWebsiteSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="swbst">School Website</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <g id="Homepage" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" className="stroke">
                                                        <g id="Workest-Homepage-Notifications-320" transform="translate(-186, -23.000000)" className="stroke" stroke="#9CA2B4" strokeWidth="2">
                                                            <g id="WS-header-/-design-/-320-logged" className="stroke">
                                                                <g id="General-/-search" transform="translate(184.000000, 21.000000)" className="stroke">
                                                                    <circle id="Oval-5" cx="9.58333333" cy="9.58333333" r="6.25"></circle>
                                                                    <path d="M18.7030417,14.166666 L14.0939989,18.7757088" id="Combined-Shape" transform="translate(16.434854, 16.434854) rotate(-90.000000) translate(-16.434854, -16.434854) "></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">School Website is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh44" id="uiscs4">
                                                <input id="designation" name="designation" type="text" className="mbl-inp" maxLength="50" required="" value={adminDesignationSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminDesignationSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="designation">Designation</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g strokeWidth="2" fill="none" fillRule="evenodd" stroke="#9CA2B4" className="stroke">
                                                        <path d="M13,9.5 L19,9.5" id="Path-10"></path>
                                                        <path d="M13,13.5 L17,13.5" id="Path-10"></path>
                                                        <rect id="Rectangle" x="1" y="4" width="22" height="16" rx="3"></rect>
                                                        <circle id="Oval-5" cx="7.5" cy="11.5" r="2.5"></circle>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Designation is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh45" id="uiscs5">
                                                <input id="enctyy" name="enctyy" type="text" className="mbl-inp" maxLength="30" required="" value={adminEnterCitySignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminEnterCitySignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="enctyy">Enter City</span>
                                                <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <g fill="none" fillRule="evenodd" stroke="#9CA2B4" strokeWidth="2" className="stroke">
                                                        <path d="M4 4h12v17H4zM16 10h7v11h-7zM10 18v3"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">City is required</span>
                                                </span>
                                            </div>
                                            <div className="row m-0">
                                                <div className="kckh47 col-sm-6 pl-0 mbw-pr-0" id="uiscs7">
                                                    <input id="enstat" name="enstat" type="text" className="mbl-inp" maxLength="30" required="" value={adminEnterStateSignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminEnterStateSignup(e.target.value); handleChange(e)}} />
                                                    <span className="kckh4-spn" htmlFor="enstat">Enter State</span>
                                                    <svg className="kckh4-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd" stroke="#9CA2B4" strokeWidth="2" className="stroke">
                                                            <path d="M4 4h12v17H4zM16 10h7v11h-7zM10 18v3"></path>
                                                        </g>
                                                    </svg>
                                                    <span className="kckh4-err-spn" style={{display: "none"}}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">State is required</span>
                                                    </span>
                                                </div>
                                                <div className="kckh48 kckhkcstm8 col-sm-6 p-0" id="uiscs8">
                                                    <div className="custom-selectt">
                                                        <select id="cntryname" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="gradename" value={adminSelectCountrySignup} onBlur={(e) => onBlur(e)} onChange={e => { setAdminSelectCountrySignup(e.target.value); handleChange(e)}}>
                                                            <option value="0">Select Country</option>
                                                            <option value="India">India</option>
                                                        </select>
                                                        <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Country</span>
                                                    </div>
                                                    <span className="kckh4-err-spn" style={{display: "none"}}>
                                                        <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                        <span className="err-txt">Country is required</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnfnladm" type="submit" className="kckh-btn verifybutton" disabled>
                                                <div id="nxt-btnn-loader" className="loadingio-spinner-rolling-rrc44sjio9" style={{display: "none"}}>
                                                    <div className="ldio-ravfkgmzeb">
                                                        <div className="lodrr"></div>
                                                    </div>
                                                </div>
                                                <span id="nxt-btnn-txt">Finish</span>
                                            </button>
                                        </div>
                                        <br/><br/><br/><br/><br/><br/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bck-btn-mbw">
                <Link title="Back" to="/u/signup" className="px-5 pyf-2 pp-pl-0 bck-btn cstmabtnsa">
                    <img src="../Images/left-long-arrow.svg" width="22" style={{verticalAlign: "bottom"}} /> <span className="bck-btn"> BACK </span>
                </Link>
            </div>
            </div>
        </div>
        
    </div>
}

// export default Details;