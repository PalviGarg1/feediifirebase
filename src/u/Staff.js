import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/dashboard.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';
import { PieChart, Pie} from 'recharts';


export const Staffpage = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

      const data01 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

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
                        {/* <div className="box mt-10px">
                            <div className="box-body">
                                <form className="">
                                    <div className="form-group">
                                            <div className="bg-csmm">
                                                <div className="mb-15px">
                                                    <div className="col-sm-12 cstsbx1">
                                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Overall Engagement Score</h1>
                                                    </div>
                                                </div>
                                                <div className="row m-0 csdv1">
                                                    <div className="col-sm-4">
                                                        <div className="block clearfix">
                                                            <div className="">
                                                                {/* <div className="easypiechart" dataPlugin="easyPieChart" dataPercent="40" data-size="150" dataScaleLength="2" dataLineWidth="12">
                                                                    <div>
                                                                        <h4 className="text-3x text-blucs _400">40</h4>
                                                                    </div>
                                                                </div> */}
                                                                {/* <PieChart width={250} height={250}>
                                                                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="orange" label />
                                                                </PieChart>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-sm-offset-8 mt-5">
                                                        <h6 style={{color: "#333e63", fontSize: "18px"}}>How are we doing? Fair!</h6>
                                                        <p style={{fontSize: "14px"}}>Your students are happy and motivated some of the time. Use the analyze tools to see what's working for you and what can be improved.</p>
                                                        <small className="text-sm mb-1 _500" style={{color: "#333e63"}}> Total Responses: 250 </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div> */}

                        <div className="mt-10px">
                            <div className="mb-15px">
                                <div className="col-sm-12 row ml-0 mr-0 cstsbx1">
                                    <div className="col-sm-10 pl-0"><h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Staff Details</h1></div>
                                    <div className="col-sm-2 text-right pr-0"><button id="adtchrbtn" className="btn-bluclr" onClick={handleShow}>Add Teacher</button></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12" id="stftabl">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="brdr-n">S.No.</th>
                                        <th className="brdr-n">Name</th>
                                        <th className="brdr-n">Status</th>
                                        <th className="brdr-n">Email</th>
                                        <th className="brdr-n">Class</th>
                                        <th className="brdr-n">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><div>1</div></td>
                                        <td><div className="text-truncate wd-130px" title="Joe">Joe</div></td>
                                        <td className="dv-c-tdcstm2"><div className="dv-c-aprvd-grn">Joined</div></td>
                                        <td><div className="text-truncate wd-130px" title="john@example.com">john@example.com</div></td>
                                        <td><div className="text-truncate wd-80px" title="1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</div></td>
                                        <td>
                                            <i className="fa fa-edit dv-c-i-cstm editdv" title="Edit"></i>
                                            <i className="fa fa-trash dv-c-i-cstm removedv" title="Delete"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div>2</div></td>
                                        <td><div className="text-truncate wd-130px" title="Joe">Joe</div></td>
                                        <td className="dv-c-tdcstm2"><div className="dv-c-rqst-red">Pending</div></td>
                                        <td><div className="text-truncate wd-130px" title="john@example.com">john@example.com</div></td>
                                        <td><div className="text-truncate wd-80px" title="1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</div></td>
                                        <td>
                                            <i className="fa fa-check dv-c-i-cstm truedv" title="Approved"></i>
                                            <i className="fa fa-close dv-c-i-cstm falsedv" title="Reject" onClick={handleShow}></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div>3</div></td>
                                        <td><div className="text-truncate wd-130px" title="Joe">Joe</div></td>
                                        <td className="dv-c-tdcstm2"><div className="dv-c-activ-blu">Active</div></td>
                                        <td><div className="text-truncate wd-130px" title="john@example.com">john@example.com</div></td>
                                        <td><div className="text-truncate wd-80px"  title="1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</div></td>
                                        <td>
                                            <i className="fa fa-edit dv-c-i-cstm editdv" title="Edit"></i>
                                            <i className="fa fa-trash dv-c-i-cstm removedv" title="Delete"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><div>4</div></td>
                                        <td><div className="text-truncate wd-130px" title="Joe">Joe</div></td>
                                        <td className="dv-c-tdcstm2"><div className="dv-c-left-ylw">Left</div></td>
                                        <td><div className="text-truncate wd-130px" title="john@example.com">john@example.com</div></td>
                                        <td><div className="text-truncate wd-80px"  title="1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12</div></td>
                                        <td>
                                            {/* <i className="fa fa-edit dv-c-i-cstm editdv" title="Edit"></i>
                                            <i className="fa fa-trash dv-c-i-cstm removedv" title="Delete"></i> */}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>

                        {/* <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Core Factors of Engagement</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-md-12">
                                                    <p style={{marginBottom: "20px"}}>Your core factors of engagement is a reflection of your most recent six surveys. It's a stable moving average of engagement data at your school.</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="csdvscs">
                                                        <div className="p-1 row cstdvcsc">
                                                                    <div className="col-sm-4"><a className="ahover btnclclclk" href="">  1 </a></div>
                                                                    <div className="col-sm-7">
                                                                        <div className="progress my-1">
                                                                            <div className="progress-bar" id="scorecolor"></div>
                                                                            <span id="new" style={{display: "none"}}>1</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-1"><span className="_600 text-blucs">1%</span></div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Current Survey Cycle: At a Glance</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-md-12">
                                                    <p style={{marginBottom: "20px"}}>Your current survey cycle is a reflection of your most recent six surveys. It's a stable moving average of engagement data at your school.</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th>Measure</th>
                                                                <th className="text-center">Starting Score</th>
                                                                <th className="text-center">Current Score</th>
                                                                <th className="text-center">Change over Cycle</th>
                                                            </tr>

                                                            <tr>
                                                                    <td className="text-muted">Engagement Score</td>
                                                                    <td className="text-center" id="startingscore"><span className="text badge _400" style={{backgroundColor: "#f2f2f2", color: "white"}}>-</span></td>
                                                                    <td className="text-center" id="currentscore"><span className="text badge _400" style={{backgroundColor: "#f2f2f2", color: "white"}}>-</span></td>
                                                                    <td className="change text-center">
                                                                        <span className="h6"></span> <span className=""> - </span>
                                                                    </td>
                                                                </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-body">
                                <form>
                                    <div className="form-group">
                                        <div className="bg-csmm">
                                            <div className="mb-15px">
                                                <div className="col-sm-12 cstsbx1">
                                                    <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Suggestion</h1>
                                                </div>
                                            </div>
                                            <div className="row m-0 csdv1">
                                                <div className="col-sm-12  animate fadeIn text-muted" id="tab3">
                                                    <div className="row tab-content">

                                                        <div className="row m-0 col-sm-12 tab-pane animate fadeIn text-muted  active show" id="tab_action" style={{padding: ".5rem 1rem 0rem 1rem"}}>
                                                            <div className="col-sm-12 col-md-12 p-0">

                                                                <ul className="list-group box mb-0">
                                                                                <li className="list-group-item pl-0 pr-0">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-10">
                                                                                            <a className="float-left w-40"><img alt="." src="../Images/userblue.png" className="w-100 brdrcsimg circle crsr-auto" /></a>
                                                                                            <div className="clear px-3">
                                                                                                <a className="_500 d-block cstmdvdvd crsr-auto">User</a>
                                                                                            </div>
                                                                                            <div className="clear mt-2 mb-3 ml-58px"><span className="fs-14px">text</span></div>
                                                                                        </div>
                                                                                        <div className="col-sm-2">
                                                                                            <div className="csvwlalbtn">
                                                                                                <a href="/Feedback/suggestion" className="csvwlalbtnaa">View All <i className="fa fa-chevron-right"></i></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                </ul>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>            
        </div>

        <Modal show={show} onHide={handleClose} className="cstmmtmodal" >
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to remove?</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary modalRedBtn" onClick={handleClose}>
                Confirm
            </Button>
            <Button variant="primary modalGrayBtn" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>



    </div>
}

// export default Details;