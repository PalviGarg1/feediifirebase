import React, { useState } from "react";
import $ from 'jquery';
import '../Content/Content/survery-css.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';


export const SurveyPage = () => {


    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            <div className="padding">
                <div className="row tab-content mb-3">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active" id="tab1">
                    <div className="col-sm-12 col-md-12" id="survytbl">
                        <div className="row col-sm-12 ">
                            <div className="col-sm-6 mb-3">
                                <h4 className="text-lg">My Survey</h4>
                            </div>                                
                        </div>
                        <Accordion className="m-3" id="accordion" defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0" >
                                <div className="panel box no-border mb-2">
                                    <Accordion.Header className="box-header p-y-sm srvycstmbxhdr srvycstmbxhdrclrgrnbg">
                                        <div className="text-left">
                                            <div className="p-1">
                                                <div className="text-md">
                                                    <div className="nav-caret"><i className="float-right text-sm fa fa-chevron-down" /> </div>
                                                    <div className>2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body id="c_2020" className="in collapse show" style={{}}>
                                        <div className="box-body row m-0">
                                            <div className="table-responsive pb-3">
                                                <table id="datatable" className="table v-middle p-0 m-0 box" dataPlugin>
                                                    <thead>
                                                    <tr><th>SURVEY</th>
                                                        <th>PARTICIPATION RATE</th>
                                                        <th>SCHEDULE</th>
                                                        <th>STATUS</th>
                                                        <th />
                                                    </tr></thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="/s/deepdive/3" className="ahover">Family School Relationshp - Pulse-1 </a></td>
                                                        <td>
                                                        <span className="text-left" style={{position: 'relative'}}>84 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '84%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="text-muted">
                                                                <i className="fa fa-fw fa-ellipsis-h" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/3"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="/s/deepdive/1" className="ahover">Social &amp; Emotional Learning - Pulse-1 </a>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>48 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '48%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="text-muted">
                                                                <i className="fa fa-fw fa-ellipsis-h" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/1"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="/s/deepdive/4" className="ahover">Student School Relationship - Pulse-1 </a>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>67 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '67%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="text-muted">
                                                                <i className="fa fa-fw fa-ellipsis-h" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/4"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="/s/deepdive/2" className="ahover">Student Teacher Relationship - Pulse-1 </a>
                                                        </td>
                                                        <td>
                                                            <span className="text-left" style={{position: 'relative'}}>47 % </span>
                                                            <div className="progress my-2 ml-2" style={{height: 5, position: 'absolute', display: 'inline', width: '10%'}}>
                                                                <div className="progress-bar primary" style={{width: '47%'}} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-muted">Jan 01 - Mar 01</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge text-sm success pb-6px">Open</span>
                                                        </td>
                                                        <td>
                                                            <Dropdown className="item-action dropdown">
                                                                <Dropdown.Toggle className="text-muted">
                                                                <i className="fa fa-fw fa-ellipsis-h" />
                                                                </Dropdown.Toggle >
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-color" role="menu" x-placement="bottom-end" style={{position: 'absolute', transform: 'translate3d(16px, 18px, 0px)', top: 0, left: 0, willChange: 'transform'}}>
                                                                    <Dropdown.Item className="dropdown-item" href="/s/deepdive/2"><i className="fa fa-bar-chart-o" /> Analyze Results</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </div>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <br />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

// export default Details;