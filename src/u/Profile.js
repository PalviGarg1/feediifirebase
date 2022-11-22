import React from "react";
import $ from 'jquery';
import '../Content/Content/profilecss.css';
import { Headerdashboard} from '../headeruserdashboard';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

export const Userprofile = () => {

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="item">
                <div className="item-bg"><img src="../Images/dashboard.jpg" alt="." className="" /></div>
                <div className="p-5 pos-rlt">
                    <div className="row mt-2">
                        {/* <img src="../Images/Rishikul_logo.jpg" alt="." className="circle w-300 img-toggle collapse" style={{height: "8rem", width: "8rem", marginLeft: "4rem", marginBottom: "-8rem", border: "5px solid white"}} /> */}
                        <img src="https://res.cloudinary.com/infoi/image/upload/v1643706338/Profile%20Icon/Icon-150x150_o33qvq.png" alt="." className="circle w-300 img-toggle collapse" style={{height: "8rem", width: "8rem", marginLeft: "4rem", marginBottom: "-8rem", border: "5px solid white"}} />
                        <div className="col-sm-12 text-center order-sm-2">
                            <h5 className="fs-26px">Welcome! Let's make learning at our school even better.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padding ">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="col-md-12 mt-10px p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Basic Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Name</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">School Name</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Designation</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">Admin</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Contact Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Email</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">xyz@gmail.com</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">School Website</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">www.xyz.com</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12  p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Address Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">City</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">State</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Country</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">India</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teacher */}

            <div className="padding ">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="col-md-12 mt-10px p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Basic Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Name</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Gender</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">Male</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Contact Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Email</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">xyz@gmail.com</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Mobile</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">91XXXXXXXX</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* Student */}

            <div className="padding ">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="col-md-12 mt-10px p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Basic Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Name</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">XYZ</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Class</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">5th</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Section</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">A</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Roll Number</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">12</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="inputEmail3" className="col-sm-6 col-form-label clrdrkblu _600">Gender</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">Male</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-0 mb-4">
                            <div className="bg-csmm">
                                <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Contact Info</h1>
                                    </div>
                                </div>
                                <div className="csdv1">
                                    <form>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Email</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">xyz@gmail.com</label>
                                            </div>
                                        </div>
                                        <div className="form-group row col-sm-12">
                                            <label htmlFor="" className="col-sm-6 col-form-label clrdrkblu _600">Mobile</label>
                                            <div className="col-sm-6">
                                                <label className="col-form-label clr-drkbl">91XXXXXXXX</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>        
    </div>
}

// export default Details;