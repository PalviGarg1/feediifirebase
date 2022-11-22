import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';


export const SurveyDetailsPage = () => {


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row tab-content mb-3" id="survydtlstbl">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmdpd" id="tab1">
                    <div className="bg-csmm mb-1-5rm">
                        <div className="mb-15px">
                        <div className="col-sm-12 cstsbx1 pt-0">
                            <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">text</h1>
                        </div>
                        </div>
                        <div className="col-sm-12 m-0 csdv1">
                            <div className=" row">
                                <div className="col-sm-4">
                                    <div className="cspdd1rm text-center">
                                        <h6 className="_600 m-0" style={{color: '#333e63'}}>Score</h6>
                                        <p className="text-4x _400" style={{color: '#a4a8ab'}}>2%</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="cspdd1rm b-l b-r text-center">
                                        <h6 className="_600 m-0" style={{color: '#333e63'}}>Response Rate</h6>
                                        <p className="text-4x _400" style={{color: '#a4a8ab'}}>2%</p>
                                        <p style={{marginBottom: 0, color: 'rgba(18,52,108,.7)'}}>25 responded</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="cspdd1rm text-center">
                                        <h6 className="_600 m-0" style={{color: '#333e63'}}>Comments</h6>
                                        <p className="text-4x _400" style={{color: '#a4a8ab'}}>0</p>
                                        <p style={{marginBottom: 0, color: 'rgba(18,52,108,.7)'}}>View all Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-csmm mb-1-5rm">
                        <div className="mb-15px">
                            <div className="col-sm-12 cstsbx1 pt-0">
                            <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Questions</h1>
                            </div>
                        </div>
                        <div className="row m-0 csdv1">
                            <div className="col-sm-12 cstmbrdrr mb-4">
                            <div className="box row ml-3 mr-3 mb-0 mt-2">
                                <div className="col-sm-4 mt-1 mb-1">
                                <div className="padding">
                                    <div className="text-center">
                                    <h6 className="_600" style={{color: '#333e63'}}>Questions</h6>
                                    <span className="text-4x _400" style={{color: '#a4a8ab'}}>2</span>
                                    <span className="text-2x _400" style={{color: '#a4a8ab'}}>/ 24</span>
                                    <span id="topicid" style={{display: 'none'}}>2</span>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-4">
                                <div className="p-3 mt-1 mb-1 b-l b-r">
                                    <div className="list-item">
                                    <span className="avatar w-56 text-center circle dark-green">
                                        <span className="text-md _200">23</span>
                                    </span>
                                    <div className="list-body">
                                        <span className="text-sm" style={{color: '#a4a8ab'}}>Scores Above</span>
                                        <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Benchmark<span className="text-sm" /></a></h4>
                                    </div>
                                    </div>
                                    <div className="list-item">
                                    <span className="avatar w-56 text-center  circle yellow">
                                        <span className="text-md _200">1</span>
                                    </span>
                                    <div className="list-body">
                                        <span className="text-sm" style={{color: '#a4a8ab'}}>Scores Below</span>
                                        <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Benchmark<span className="text-sm" /></a></h4>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="p-3 mt-1 mb-1">
                                        <div className="list-item">
                                            <span className="text-4x _200" style={{color: '#48CD89', marginTop: '-20px'}}>-</span>
                                            <div className="list-body">
                                                <span className="text-sm" style={{color: '#a4a8ab'}}>Scores</span>
                                                <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Increased<span className="text-sm" /></a></h4>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <span className="text-4x _200" style={{color: '#F9BE00', marginTop: '-20px'}}>-</span>
                                            <div className="list-body">
                                                <span className="text-sm" style={{color: '#a4a8ab'}}>Scores</span>
                                                <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Decreased<span className="text-sm" /></a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-12">
                                <Accordion defaultActiveKey="0" flush className="mt-3 mb-3" id="accordion">
                                    <Accordion.Item eventKey="0" className="panel box mb-2 cstmbrdrr">
                                        <div className="box-header p-y-sm">
                                            <Accordion.Header className="clpsdsa srvycstmbxhdr">
                                                <div className="p-1 text-left">
                                                    <div className="progress my-1 " style={{height: 6}}>
                                                    <div className="progress-bar dark-green" style={{width: '5%'}}></div>
                                                    </div>
                                                    <p className="clrbluu">
                                                    <span className="float-right text-muted">
                                                        <i className="fa fa-caret-down text-warning" /> 1 <span></span>
                                                        / Benchmark 4
                                                    </span>
                                                    text : 4% &nbsp;&nbsp;<span className=" text-sm fa fa-chevron-down fachvrndn" />
                                                    </p>
                                                </div>
                                            </Accordion.Header>
                                        </div>
                                        <Accordion.Body id="" className="in collapse show" style={{}}>
                                            <div className="box-body row p-0-20px">
                                                <div className="col-sm-3">
                                                    <p className="text-sm pl-3">
                                                    text
                                                    </p>
                                                </div>
                                                <div className="col-sm-2 pl-5"> <span className="text-muted">n = 2</span></div>
                                                <div className="col-sm-6 pl-0">
                                                    <div className="progress my-1  text-right" style={{height: 6}}><div className="progress-bar cyan" style={{width: '2%'}} /></div>
                                                </div>
                                                <div className="col-sm-1 pl-2"> <span className="clrdrkblu">2%</span></div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        </div>
                    </div>
                    <br />
                    </div>
                </div>
                </div>


        </div>
    </div>
}

// export default Details;