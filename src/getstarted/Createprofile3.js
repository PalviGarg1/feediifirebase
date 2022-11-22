import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
import { Headersignup } from '../headersignup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const CreateProfileStu = () => {

    const GradeData = [
        { value: '6th', name: '6th' },
        { value: '7th', name: '7th' },
        { value: '8th', name: '8th' },
        { value: '9th', name: '9th' },
        { value: '10th', name: '10th' },
        { value: '11th', name: '11th' },
        { value: '12th', name: '12th' }
    ];

    const SectionData = [
        { value: 'A', name: 'A' },
        { value: 'B', name: 'B' },
        { value: 'C', name: 'C' },
        { value: 'D', name: 'D' }
    ];
    

    const handleChange = (e) => {
        //alert("fhhfg")
        var scode = $('#scode').val().trim();
        var name = $('#yourname').val().trim();
        var rollnumm = $('#rollnumm').val().trim();
        var clss = $('#cclss').val();
        var sctn = $('#ssection').val();
        var gender = $('#gender').val();
        //var psswrd_rpt = $('#repeatpassword').val().trim();
        if ((scode.length > 0) && (name.length > 0) && (rollnumm.length > 0) && (clss !== "0") && (sctn !== "1") && (gender !== "2")) {
            //alert("inside if")
            $('#nxt-btnnfnltchr').removeAttr('disabled');
        } else {
            //alert("inside else")
            $('#nxt-btnnfnltchr').attr('disabled', 'disabled');
        }
    }

    var masteridtosendapi = sessionStorage.getItem("Masteridsnd");
    const onBlur = (e) => {
        var scode = $('#scode');
        var udiv1 = $('#uiscs');

      if (scode.val() === '' || null) {
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
        var clss = $('#cclss');
        var udiv3 = $('#uiscs3');

      if (clss.val() === '0') {
            udiv3.attr('errr', '');
            udiv3.removeClass('valid-inp');
        }
        else {
            udiv3.removeAttr('errr');
            udiv3.addClass('valid-inp');
        }
    }

    const onBlur4 = (e) => {
        var sctn = $('#ssection');
        var udiv4 = $('#uiscs4');

        if (sctn.val() === '00') {
            udiv4.attr('errr', '');
            udiv4.removeClass('valid-inp');
        }
        else {
            udiv4.removeAttr('errr');
            udiv4.addClass('valid-inp');
        }
    }

    const onBlur5 = (e) => {
        var gender = $('#gender');
        var udiv5 = $('#uiscs5');

        if (gender.val() === '000') {
            udiv5.attr('errr', '');
            udiv5.removeClass('valid-inp');
        }
        else {
            udiv5.removeAttr('errr');
            udiv5.addClass('valid-inp');
        }
    }

    const onBlur6 = (e) => {
        //alert(rollnumm.val());
        var rollnumm = $('#rollnumm');
        var udiv6 = $('#uiscs6');

        if (rollnumm.val() === '' || null) {
            udiv6.attr('errr', '');
            udiv6.removeClass('valid-inp');
        }
        else {
            udiv6.removeAttr('errr');
            udiv6.addClass('valid-inp');
        }
    }

      const [studentSchoolCodeSignup, setStudentSchoolCodeSignup] = useState('');
      const [studentNameSignup, setStudentNameSignup] = useState('');
      const [studentClassSignup, setStudentClassSignup] = useState('');
      const [studentSectionSignup, setStudentSectionSignup] = useState('');
      const [studentGenderSignup, setStudentGenderSignup] = useState('');
      var [studentrollnummSignup, setStudentrollnummSignup] = useState('');

      const handleSubmit = e => {
        //console.log('handleSubmit run');
        e.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ access input values here
       
        alert(masteridtosendapi);
        alert(studentNameSignup);
        alert(studentSchoolCodeSignup);

        fetch('/api/login/EnterStudent', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                 usermasterId : masteridtosendapi,
                schoolCode : studentSchoolCodeSignup,
                name : studentNameSignup,
                gender: studentGenderSignup,
                gradename:studentClassSignup,
                section:studentSectionSignup,
                rollNo: studentrollnummSignup
            })
            }).then((data) => {
                console.log("test data - " + data);
                alert("Successfully!");                       
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
                                    <form action="" className="stucreateprflpg" method="POST" id="stucreateprflpg" noValidate="novalidate" onSubmit={handleSubmit}>
                                        <div className="w-100">
                                            <div className="kckh4" id="uiscs">
                                                <input id="scode" name="scode" type="text" className="mbl-inp" maxLength="50" required=""  value={studentSchoolCodeSignup} onBlur={(e) => onBlur(e)} onChange={e => { setStudentSchoolCodeSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="scode">School Code</span>
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
                                                    <span className="err-txt">School code is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh42" id="uiscs2">
                                                <input id="yourname" name="yourname" type="text" className="mbl-inp" maxLength="50" required=""  value={studentNameSignup} onBlur={(e) => onBlur2(e)} onChange={e => { setStudentNameSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="yourname">Name</span>
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
                                                    <span className="err-txt">Name is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh43" id="uiscs3">
                                                <div className="custom-selectt">
                                                    <select id="cclss" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="classname"  value={studentClassSignup} onBlur={(e) => onBlur3(e)} onChange={e => { setStudentClassSignup(e.target.value); handleChange(e)}}>
                                                        <option value="0">Select Class</option>
                                                        {GradeData.map((e, key) => {
                                                            return <option key={key} value={e.value}>{e.name}</option>;
                                                        })}
                                                    </select>
                                                    <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Class</span>
                                                </div>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Class is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh44" id="uiscs4">
                                                <div className="custom-selectt">
                                                    <select id="ssection" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="sectionname"  value={studentSectionSignup} onBlur={(e) => onBlur4(e)} onChange={e => { setStudentSectionSignup(e.target.value); handleChange(e)}}>
                                                        <option value="00">Select Section</option>
                                                        {SectionData.map((e, key) => {
                                                            return <option key={key} value={e.value}>{e.name}</option>;
                                                        })}
                                                    </select>
                                                    <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Section</span>
                                                </div>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Section is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh45" id="uiscs5">
                                                <div className="custom-selectt">
                                                    <select id="gender" className="mbl-inp cs-slct-fld slct-cstm1 pdl-30px" name="gendername"  value={studentGenderSignup} onBlur={(e) => onBlur5(e)} onChange={e => { setStudentGenderSignup(e.target.value); handleChange(e)}}>
                                                        <option value="000">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                    <span className="kckh4-spn kckh4-spncstm cs-lft">Choose Gender</span>
                                                </div>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Gender is required</span>
                                                </span>
                                            </div>
                                            <div className="kckh46" id="uiscs6">
                                                <input id="rollnumm" name="rollnumm" type="text" className="mbl-inp" maxLength="20" required=""  value={studentrollnummSignup} onBlur={(e) => onBlur6(e)} onChange={e => { setStudentrollnummSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="rollnumm">Roll Number</span>
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
                                                    <span className="err-txt">Roll number is required</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnfnltchr" type="submit" className="kckh-btn verifybutton" disabled>
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

                            <div className="hide">
                                <input type="hidden" id="crtprfdata" value="" />
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