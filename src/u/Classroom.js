import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/clsromcss.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';


export const ClassroomPage = () => {


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">

        <div className="item">
            <div className="item-bg"><img src="../Images/dashboard.jpg" alt="." className="" /></div>
                <div className="p-5 pos-rlt">
                    <div className="row mt-2">
                        <div className="col-sm-12 text-center order-sm-2">
                            <h5 className="fs-26px">Welcome! Let's make learning at our school even better.</h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="padding">
                <div className="row">
                    <div className="col-md-2 col-lg-2"></div>
                    <div className="col-md-9">
                        <div className="mb-30px">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <div className="clsrmdv1">
                                        <span className="clsrmdv1-spn1">6th Class</span>
                                        <span className="clsrmdv1-spn2">50</span>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section A</div>
                                                        <div className="clsrmdv2-2-dv1-a2">74%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="Mr. Xyzsdfjkbwekjlbdsjkbfsdfkjsbdfksdjbf">Mr. Xyzsdfjkbwekjlbdsjkbfsdfkjsbdfksdjbf</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "74%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section B</div>
                                                        <div className="clsrmdv2-2-dv1-a2">50%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="-">-</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "50%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section C</div>
                                                        <div className="clsrmdv2-2-dv1-a2">100%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="Mrs. Abc">Mrs. Abc</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "100%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section D</div>
                                                        <div className="clsrmdv2-2-dv1-a2">85%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="-">-</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "85%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mb-30px">
                            <div className="col-sm-12">
                                <div className="col-sm-12">
                                    <div className="clsrmdv1">
                                        <span className="clsrmdv1-spn1">7th Class</span>
                                        <span className="clsrmdv1-spn2">70</span>
                                    </div>
                                    <div className="clsrmdv2 col-sm-12 row">
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section A</div>
                                                        <div className="clsrmdv2-2-dv1-a2">74%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="Mr. Xyz">Mr. Xyz</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "74%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section B</div>
                                                        <div className="clsrmdv2-2-dv1-a2">30%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="Mr. Uvw">Mr. Uvw</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "30%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section C</div>
                                                        <div className="clsrmdv2-2-dv1-a2">88%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="Mrs. Abc">Mrs. Abc</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "88%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mb-4">
                                            <div className="clsrmdv2-1">
                                                <Link to="">
                                                    <div className="clsrmdv2-2-dv1">
                                                        <div className="clsrmdv2-2-dv1-a1">Section D</div>
                                                        <div className="clsrmdv2-2-dv1-a2">10%</div>
                                                    </div>
                                                    {/* <div className="clsrmdv2-2-dv2"></div> */}
                                                    <div className="clsrmdv2-2-dv3">
                                                        <div className="float-left">Class Teacher</div>
                                                        <div className="float-right wd-80px text-right text-truncate" title="-">-</div>
                                                    </div>
                                                    <div className="clsrmdv2-2-dv4">
                                                        <div className="clsrmdv2-2-dv4-prgrs progress-bar dark-green" style={{width: "10%"}}></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
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

// export default Details;