import React from "react";
import $ from 'jquery';
import '../Content/Content/surverydeepdive-css.css';
import { Headerdashboard} from '../headeruserdashboard';
import '../AllJs/dashboard-staff.js';
import Accordion from 'react-bootstrap/Accordion';
import { PieChart, Pie} from 'recharts';


export const SurveyDeepdivePage = () => {

    const data01 = [
        {
          "name": "Group A",
          "value": 50
        }
      ];

    return <div>
        <Headerdashboard />
        <div id="divLoader" style={{display: "none"}}> </div>
        <div className="be-wrapper be-login innerwrapper mt-4p" id="login">
            
            <div className="padding">
                <div className="row tab-content mb-3" id="srvydepdv">
                    <div className="col-sm-12 row tab-pane animate fadeIn text-muted active cstmpdp m-0" id="tab1">
                        <div className="col-sm-12 col-md-12">
                            <div className="box csdv1 mt-3">
                            <div className="row">
                                <div className="col-sm-4 col-lg-4">
                                <div>
                                    <div className="box-body">
                                    <form>
                                        <div>
                                        <div className="row m-0">
                                            <div className="col-sm-12">
                                            <h1 className="text-md mb-1 _600" style={{color: '#333e63', margin: '5px 0 0', fontSize: 14}}>Family School Relationshp - Pulse-1</h1>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="block clearfix">
                                                <div>
                                                    <div className="easypiechart" data-plugin="easyPieChart" data-option="{trackColor:app.color.grey,barColor: #FC6600" data-percent={52} data-size={150} data-scale-length={2} data-line-width={12}>
                                                        <div><h4 className="cstmclrspnn cstmclrspnncstm">52</h4></div>
                                                    </div>
                                                    {/* <PieChart width={200} height={200}>
                                                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="orange">
                                                            <label>50</label>
                                                        </Pie>
                                                    </PieChart> */}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-4 col-lg-4">
                                <div className="b-l b-r">
                                    <div className="box-body">
                                    <form>
                                        <div className="form-group">
                                        <div className="row m-0">
                                            <div className="col-sm-12 mb-2">
                                            <h1 className="text-md mb-1 _600" style={{color: '#333e63', margin: '5px 0 0', fontSize: 14}}>Stats</h1>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                <div className="text-center">
                                                    <span className="text-md " style={{fontSize: '4rem', color: '#a4a8ab'}}>70</span>
                                                    <div className="mt-3">
                                                    <span>
                                                        <i className="fa fa-arrow-up text-success" />
                                                    </span>
                                                    <span>19 </span>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-4 col-lg-4">
                                <div>
                                    <div className="box-body">
                                    <form>
                                        <div className="form-group">
                                        <div className="row m-0">
                                            <div className="col-sm-12 p-0">
                                            <h1 className="text-md mb-1 _600" style={{color: '#333e63', margin: '5px 0 0', fontSize: 14}}>
                                                Survey Details
                                            </h1>
                                            </div>
                                            <div className="col-md-12 mt-4 row p-0">
                                            <div className="_600 mb-2 col-sm-5" style={{fontSize: '.9rem'}}>Schedule</div>
                                            <div className="col-sm-7 text-right pr-0">
                                                <span className="cstmclrspnn"> Jan 01 2022 </span> -
                                                <span className="cstmclrspnn"> Mar 01 2022</span>
                                            </div>
                                            </div>
                                            <div className="col-md-12 mt-2 row p-0">
                                            <div className="_600 mb-2 col-sm-8" style={{fontSize: '.9rem'}}>Participation List:</div>
                                            <div className="col-sm-4 text-right pr-0">
                                                <span className="cstmclrspnn">  229 </span><p className="mb-1" />
                                            </div>
                                            </div>
                                            <div className="col-md-12 mt-2 row p-0">
                                            <div className="_600 mb-2 col-sm-8" style={{fontSize: '.9rem'}}>Responses:</div>
                                            <div className="col-sm-4 text-right pr-0">
                                                <span className="cstmclrspnn"> 6000</span>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="mb-15px">
                                    <div className="col-sm-12 cstsbx1">
                                        <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Family School Relationship</h1>
                                    </div>
                                    </div>
                                    <div className="row m-0 csdv1">
                                    <div className="col-sm-12 cstmbrdrr mb-4">
                                        <div className="box row m-3">
                                        <div className="col-sm-6 mt-1 mb-1">
                                            <div className="cst-padding text-center">
                                            <h6 className="_600 m-0" style={{color: '#333e63'}}>Response Rate</h6>
                                            <p className="text-4x _400" style={{color: '#a4a8ab'}}>84%</p>
                                            <p style={{marginBottom: 0, color: 'rgba(18,52,108,.7)'}}>6000 of 7000 responded</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mt-1 mb-1">
                                            <div className="cst-padding b-l text-center">
                                            <h6 className="_600 m-0" style={{color: '#333e63'}}>Comments</h6>
                                            <p className="text-4x _400" style={{color: '#a4a8ab'}}>0</p>
                                            <p style={{marginBottom: 0, color: 'rgba(18,52,108,.7)'}}>View all Comments</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 cstmbrdrr mb-4">
                                        <div className="box row ml-3 mr-3 mb-0 mt-2">
                                            <div className="col-sm-4 mt-1 mb-1">
                                                <div className="padding">
                                                <a href="#topicScore" className="ahover">
                                                    <h6 className="_600" style={{color: '#333e63'}}>Topics</h6>
                                                </a>
                                                    <span className="text-4x _400" style={{color: '#a4a8ab'}} id="totalresponse">5</span> <span className="text-2x _400" style={{color: '#a4a8ab'}}>/ 7</span>
                                                <p />
                                                </div>
                                            </div>
                                        <div className="col-sm-4 ">
                                            <div className="p-3 mt-1 mb-1 b-l b-r">
                                            <div className="list-item">
                                                <span className="avatar w-56 text-center  circle dark-green">
                                                    <span className="text-md _200">1</span>
                                                </span>
                                                <div className="list-body">
                                                    <span className="text-sm" style={{color: '#a4a8ab'}}>Scores Above</span>
                                                    <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Benchmark<span className="text-sm" /></a></h4>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <span className="avatar w-56 text-center  circle yellow">
                                                    <span className="text-md _200">4</span>
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
                                    <div className="col-sm-12 cstmbrdrr">
                                        <div className="box row ml-3 mr-3 mb-0 mt-2">
                                            <div className="col-sm-4">
                                                <div className="padding">
                                                    <a href className="ahover"><h6 className="_600" style={{color: '#333e63'}}>Questions</h6></a>
                                                    <span className="text-4x _400" style={{color: '#a4a8ab'}} id="totalquestion">30</span> <span className="text-2x _400" style={{color: '#a4a8ab'}}>/ 32</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="p-3 b-l b-r">
                                                    <div className="list-item">
                                                        <span className="avatar w-56 text-center circle dark-green">
                                                            <span className="text-md _200" id="questionabovebenchmark">5</span>
                                                        </span>
                                                        <div className="list-body">
                                                            <span className="text-sm" style={{color: '#a4a8ab'}}>Scores Above</span>
                                                            <h4 className="m-0 text-md _400"><a href="#" style={{color: '#333e63'}}>Benchmark<span className="text-sm" /></a></h4>
                                                        </div>
                                                    </div>
                                                    <div className="list-item">
                                                        <span className="avatar w-56 text-center  circle yellow">
                                                            <span className="text-md _200" id="questionbelowbenchmark">25</span>
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
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row" id="topicScore">
                                <div className="col-sm-12">
                                    <div className="mb-15px">
                                        <div className="col-sm-12 cstsbx1">
                                            <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Topic Scores</h1>
                                        </div>
                                    </div>
                                    <div className="row m-0 csdv1">
                                        <div className="col-sm-12 p-0">
                                            <Accordion id="accordion">
                                                <Accordion.Item eventKey="0" className="panel box mb-2 cstmbrdrr">
                                                    <div className="box-header p-y-sm">
                                                        <Accordion.Header className="collapsed clpsdsa srvycstmbxhdr">
                                                            <div className="p-1 text-left">
                                                                <div className="progress my-1" style={{height: 6}}>
                                                                    <div className="progress-bar dark-green" style={{width: '75%'}} />
                                                                </div>
                                                                <p className="clrbluu">
                                                                    Family Support : 75% &nbsp;
                                                                    <span className=" text-sm fa fa-chevron-down fachvrndn" />
                                                                    <span className="float-right text-muted">
                                                                    <i className="fa fa-caret-up text-success" /> 5
                                                                    / Benchmark 70
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </Accordion.Header>
                                                    </div>
                                                    <Accordion.Body id="" className="in collapse show p-0-20px" style={{}}>
                                                    <div className="box-body row m-0">
                                                            <div className="col-sm-3 text-center  b-r">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Questions Above Benchmark: </span> 4
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Questions Below Benchmark: </span> 3
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Questions Score Increased: </span> -
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center b-l">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Questions Score Decreased: </span> -
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="box-body row m-0">
                                                            <div className="col-sm-3 text-center  b-r">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Teachers Above Benchmark: </span> 0
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Teachers Below Benchmark: </span> 1
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Teachers Score Increased: </span> -
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-center b-l">
                                                                <p className="text-sm clrdrkblu">
                                                                    <span className="cstmclrspnn">Teachers Score Decreased: </span> -
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="box-divider" />
                                                        <div className="box-body m-15-0">
                                                            <div className="col-sm-12 text-right">
                                                                <a href className="btn btn-sm cstmgrnbtnn btnclclclk">More Details</a>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="mb-15px">
                                        <div className="col-sm-12 cstsbx1">
                                            <h1 className="text-md mb-1 _600 fs-20px clr-drkbl">Classes  Heat Maps</h1>
                                        </div>
                                        <div className="csdv1">
                                            <div className="table-responsive cstmbrdrr">
                                                <table className="table table-bordered" id="th_table" style={{borderCollapse: 'unset'}}>
                                                    <thead style={{verticalAlign: 'middle'}}>
                                                    <tr>
                                                        <th className="_400">#</th>
                                                        <th bgcolor="#f6f6f6" className="_400">All</th>
                                                        <th bgcolor="#f6f6f6" className="_400">Family Engagement</th>
                                                        <th bgcolor="#f6f6f6" className="_400">Family Support</th>
                                                        <th bgcolor="#f6f6f6" className="_400">Family Efficacy</th>
                                                        <th bgcolor="#f6f6f6" className="_400">Learning Behaviors</th>
                                                        <th bgcolor="#f6f6f6" className="_400">Grit</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">Overall</a></td>
                                                        <td className="text-center"><span className="text badge _400">0</span></td>
                                                        <td className="text-center"><span className="text badge _400" style={{fontSize: '.8rem'}}>61.5</span></td>
                                                        <td className="text-center"><span className="text badge _400" style={{fontSize: '.8rem'}}>74.9</span></td>
                                                        <td className="text-center"><span className="text badge _400" style={{fontSize: '.8rem'}}>40.3</span></td>
                                                        <td className="text-center"><span className="text badge _400" style={{fontSize: '.8rem'}}>38.4</span></td>
                                                        <td className="text-center"><span className="text badge _400" style={{fontSize: '.8rem'}}>42.9</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">1st</a></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">2nd</a></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">3rd</a></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">4th</a></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">5th</a></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                        <td className="text-center" bgcolor="#f6f6f6" style={{color: 'black'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>-</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">6th</a></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>44.2</span></td>
                                                        <td className="text-center" bgcolor="#f9a602" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>58.3</span></td>
                                                        <td className="text-center" bgcolor="#83C85C" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>76.2</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>37.1</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>29.3</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>21.9</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">7th</a></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>46.6</span></td>
                                                        <td className="text-center" bgcolor="#f9a602" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>59.3</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>73.5</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>42.9</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>38.9</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>21.6</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">8th</a></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>63.9</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>64.7</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>74.4</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>41.6</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>37.6</span></td>
                                                        <td className="text-center" bgcolor="#659157" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>94.1</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">9th</a></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>47</span></td>
                                                        <td className="text-center" bgcolor="#f9a602" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>59.7</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>74.2</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>40.6</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>43.9</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>21.2</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">10th</a></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>47</span></td>
                                                        <td className="text-center" bgcolor="#f9a602" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>59.9</span></td>
                                                        <td className="text-center" bgcolor="#83C85C" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>77.1</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>40.6</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>40.5</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>20.7</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">11th</a></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>44.8</span></td>
                                                        <td className="text-center" bgcolor="#f9a602" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>58</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>73.4</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>39</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>34.5</span></td>
                                                        <td className="text-center" bgcolor="#FC6600" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>22.1</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="featured"><a href="#" className="ahover">12th</a></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>63.9</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>70</span></td>
                                                        <td className="text-center" bgcolor="#BDC32E" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>75.4</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>37.1</span></td>
                                                        <td className="text-center" bgcolor="#f9812a" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>37.6</span></td>
                                                        <td className="text-center" bgcolor="#659157" style={{color: 'white'}}><span className="text badge _400" style={{fontSize: '.8rem'}}>94.3</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="p-2">
                                                <div className="col-sm-12 row cstm--bxx">
                                                    <div className="box mb-0">
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#FC6600'}} />
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#f9812a'}} />
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#f9a602'}} />
                                                    <p>Minimum</p>
                                                    </div>
                                                    <div className="box pl-1 mb-0">
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#BDC32E'}} />
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#83C85C'}} />
                                                    <a href="#" className="btn btn-lg" style={{backgroundColor: '#659157'}} />
                                                    <p className="text-right">Maximum</p>
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



        </div>
    </div>
}

// export default Details;