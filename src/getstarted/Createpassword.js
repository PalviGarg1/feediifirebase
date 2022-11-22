import React, {useState} from "react";
import $ from 'jquery';
import '../Content/Content/nwlogin.css';
import '../Content/Content/nwlogin2.css';
// import '../AllJs/create-pass';
import { Headersignup } from '../headersignup';
import { Link } from 'react-router-dom';

export const CreatePassword = () => {

    var url = document.URL;
    var id = url.substring(url.lastIndexOf('?') + 1);
    alert(id);

    fetch('https://entity-feediiapi.azurewebsites.net/api/login/getverifyToken/' + id, {
            method: 'GET'
          }) .then((response) => response.json())
          .then((data) => {
            var objj = JSON.stringify(data);
            var parse = JSON.parse(objj);
            var tkn = parse[0].Message;
            //alert(tkn);
            
            if (tkn == "verified")
            {
                $('#tknexistdv').show();
                $('#toknexprddv').hide();
            }
            else if (tkn == "Not verified") {                
                $('#tknexistdv').hide();
                $('#toknexprddv').show();
                $("#tkndv").text('Your token has been expired! Please try again later...');
            }
            else if (tkn == "Token Not exists") {                
                $('#tknexistdv').hide();
                $('#toknexprddv').show();
                $("#tkndv").text('Something went wrong! Please try again later...');
            }
            else {                
                $('#tknexistdv').hide();
                $('#toknexprddv').show();
                $("#tkndv").text('Something went wrong! Please try again later...');
            }

          })
          .catch(error =>{
              console.log(error);
          });
    
    const handleChange = (e) => {
        //alert("fhhfg")
        var psswrd = $('#creatpasswordsignup').val().trim();
        //var psswrd_rpt = $('#repeatpassword').val().trim();
        if ((psswrd.length > 0)) {
            //alert("inside if")
            $('#nxt-btnnpswrd').removeAttr('disabled');
        } else {
            //alert("inside else")
            $('#nxt-btnnpswrd').attr('disabled', 'disabled');
        }
    }

    const onKeyDown = (event) => {
        if (event.code === 'Space') event.preventDefault()
    }


    var accounttypepswrd = sessionStorage.getItem("acntypesignup");
    // alert(sessionStorage.getItem("acntypesignup"));
  
        const onBlur = (e) => {
  
            var psswrd = $('#creatpasswordsignup');
            var udiv = $('#uiscs');
  
          if (psswrd.val() === '' || null) {
              udiv.attr('errr', '');
              udiv.removeClass('valid-inp');
          }
          else {
              udiv.removeAttr('errr');
              udiv.addClass('valid-inp');
          }
        }
  
        const [passwordSignup, setPasswordSignup] = useState('');
  
        const handleSubmit = e => {
          //console.log('handleSubmit run');
          e.preventDefault(); // 👈️ prevent page refresh
      
          // 👇️ access input values here
          console.log('passwordSignup 👉️', passwordSignup);
      
          // 👇️ clear all input values in the form
          // setemailsignup('');

          var password = $('#creatpasswordsignup').val();

          if ((password == "" || null)) {
            $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
            $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
            $("#uiscs1").attr('errr', '');
            $("#uiscs2").attr('errr2', '');
            $(".kckh4-svg > g").removeClass("grn-strk");
            $(".kckh4-svg > g").addClass("stroke");
            $(".err-txt").css("display", 'flex');
            $('.err-txt').text('Password is required');
        }

        
        else if (password.length < 6) {
            //alert('pswrd');
            $("#nxt-btnnpswrd #nxt-btnn-loader").css('display', 'none');
            $("#nxt-btnnpswrd #nxt-btnn-txt").css('display', 'block');
            $(".pswrdd#uiscs1").attr('errr', ''); 
            $(".pswrdd .kckh4-err-spn").css("display", 'flex');
            $(".pswrdd #uiscs1 .kckh4-svg > g").removeClass("grn-strk");
            $(".pswrdd #uiscs1 .kckh4-svg > g").addClass("stroke");
            $('.pswrdd .err-txt').text('Password length should be atleast 6 charcters');
        }

        else {
            
            var newpassword = "Feedie" + password + "1@23";
            var rcvMaterId = sessionStorage.getItem("Masteridsnd");
            alert(rcvMaterId);
            fetch('/api/login/GetSetPassword', {
                method: 'POST', 
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                        masterid: rcvMaterId, 
                        pcode: newpassword
                    })
                }).then((data) => {
                    console.log("test data - " + data);
                   // alert("llllll");
                    fetch('/api/login/Update_PasswordStatus', {
                        method: 'POST', 
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            },
                        body: JSON.stringify({ masterid: rcvMaterId })
                        }).then((data) => {
                            console.log("test data - " + data);
                            alert("Password Created Successfully!");
                            if(accounttypepswrd=="School")
                            {
                                window.location.href="/getstarted/createprofile";
                            }
                            else if(accounttypepswrd=="Teacher")
                            {
                                window.location.href="/getstarted/createprofile2";
                            }
                            else{
                                window.location.href="/getstarted/createprofile3";
                            }
                                                    
            
                        })
                    })
                    .catch(error =>{
                        console.log(error);
                    })
                .catch(error =>{
                    console.log(error);
                });
                
            };            
  
        };

    return <div>
        <Headersignup />

        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper" id="login">
            <div className="be-content">
                <div className="main-content container-fluid disp-flex pb-0">
                    <div className="col-lg-8 col-xs-12" style={{margin: "0 auto", maxWidth: "752px"}}>
                        <div id="tknexistdv">
                            <div className="dvvmmn">
                                <div style={{display: "flex", marginLeft: "5px"}} className="dvvmmn2">
                                    <div style={{paddingRight: "15px"}}>
                                        <div style={{position: "relative", width: "78px", height: "78px"}}>
                                            <div className="kldkc">2</div>
                                            <svg className="kldkc-svg" width="100%" height="100%" viewBox="0 0 34 34">
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="30.333333333333332 3" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="23.5"></circle>
                                                <circle className="kldkc-crcl2" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-9.833333333333332"></circle>
                                                <circle className="kldkc-crcl1" cx="17" cy="17" r="15.91549430918954" fill="transparent" stroke="transparent" strokeWidth="1" strokeDasharray="30.333333333333332 69.66666666666667" strokeDashoffset="-43.166666666666664"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{paddingLeft: "10px"}} className="dvvmmn3">
                                        <h6 className="kckh6">
                                            Step 2: Create your password
                                        </h6>
                                        <h3 className="kckh3">Keep your account safe with password.</h3>
                                    </div>
                                </div>

                                <div className="c-div" style={{width: "80%", margin: "7.6% 0 0 18%"}}>
                                    <form action="" method="POST" className="cratepswrdfm1" id="cratepswrdfm1" noValidate="novalidate" onSubmit={handleSubmit}>

                                        <div className="w-100">
                                            <div className="kckh43 elmll pswrdd" id="uiscs">
                                            <input id="creatpasswordsignup" name="creatpasswordsignup" type="password" onKeyPress={(event)=>onKeyDown(event)} className="mbl-inp" maxLength="16" required=""  value={passwordSignup} onBlur={(e) => onBlur(e)} onChange={e => { setPasswordSignup(e.target.value); handleChange(e)}} />
                                                <span className="kckh4-spn" htmlFor="creatpasswordsignup">New Password</span>
                                                <svg className="kckh4-svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd" stroke="#d7dae1" strokeWidth="2" className="stroke">
                                                        <rect id="Rectangle" x="4" y="10" width="16" height="11"></rect>
                                                        <path d="M12,1 C14.209139,1 16,2.790861 16,5 L16,10 L16,10 L8,10 L8,5 C8,2.790861 9.790861,1 12,1 Z" id="Rectangle"></path>
                                                        <path d="M12,14 L12,17" id="Rectangle"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Password is required</span>
                                                </span>
                                            </div>
                                            {/* <div className="kckh43 elmll rptpswrd" id="uiscs2">
                                                <input id="repeatpassword" name="repeatpassword" type="password" onKeyPress={(event)=>onKeyDown(event)} className="mbl-inp" maxLength="16" required="" onChange={(e)=>handleChange(e)} />
                                                <span className="kckh4-spn" htmlFor="repeatpassword">Repeat Password</span>
                                                <svg className="kckh4-svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd" stroke="#d7dae1" strokeWidth="2" className="stroke">
                                                        <rect id="Rectangle" x="4" y="10" width="16" height="11"></rect>
                                                        <path d="M12,1 C14.209139,1 16,2.790861 16,5 L16,10 L16,10 L8,10 L8,5 C8,2.790861 9.790861,1 12,1 Z" id="Rectangle"></path>
                                                        <path d="M12,14 L12,17" id="Rectangle"></path>
                                                    </g>
                                                </svg>
                                                <span className="kckh4-err-spn" style={{display: "none"}}>
                                                    <img src="https://res.cloudinary.com/infoi/image/upload/q_auto/v1639375615/Login%20Image/closearw234dsfoi2l.webp" alt="" width="16" height="16" />
                                                    <span className="err-txt">Password is required</span>
                                                </span>
                                            </div> */}
                                        </div>

                                        <div className="form-group login-submit mb-0 dvvmmn4" style={{paddingTop: "38px"}}>
                                            <button id="nxt-btnnpswrd" type="submit" className="kckh-btn verifybutton" disabled>
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

                        <div id="toknexprddv">
                            <div className="tkndv1">
                                <img src="https://res.cloudinary.com/infoi/image/upload/q_auto:best/v1634879425/AMA%20Icons/sidebar-empty-state-1_uwimwd.svg" alt="Error Image" />
                                <div id="tkndv"></div>
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