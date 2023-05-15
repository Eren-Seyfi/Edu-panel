import { Fragment, useState } from 'react'
import { Nav, Button } from "react-bootstrap"
import { BrowserView, MobileView } from 'react-device-detect';

import { NavLink } from "react-router-dom"

export default function _Sidebar() {


    return (
        <Fragment>

            <BrowserView>

                <div className="d-flex flex-column bg-dark " style={{ height: "100vh", width: "200px" }}>


                    <img src='https://avesis.ksbu.edu.tr/user/image/100162' className='rounded-4 mx-4 my-3' />
                    <div className='d-flex flex-column justify-content-center align-items-center text-white '>
                        <h4 className='text-center'>Dr.Öğr.Üyesi EMRE GÜNGÖR</h4>

                    </div>
                    <Nav defaultActiveKey="#home" className="nav-pills nav-flush flex-column" >

                        <NavLink to="Homework" className="nav-link" >
                            <div className='d-flex my-2'>
                                <div className='text-center'><i className="bi bi-journal-bookmark-fill"></i> <span> Ödevler  </span> </div>
                            </div>
                        </NavLink>

                        <hr className='text-white my-1' />

                        <NavLink to="LiveLessons" className="nav-link">
                            <div className='d-flex my-2'>
                                <div className='text-center'> <i className="bi bi-collection-play"></i> <span> Canlı Ders  </span> </div>
                            </div>
                        </NavLink>
                        <hr className='text-white my-1' />

                    

                    </Nav>

                    <Button variant="outline-danger" ><i className="bi bi-box-arrow-in-right"></i></Button>


                </div>

            </BrowserView>

            <MobileView>
                <div className="d-flex flex-column bg-dark" style={{ height: "100vh", width: "60px" }}>


                    <Nav className=" nav-pills nav-flush flex-column" >



                        <NavLink to="Homework" className="text-center nav-link">
                            <i className="bi bi-journal-bookmark-fill"></i>
                        </NavLink>

                        <hr className='text-white my-1 ' />

                        <NavLink to="LiveLessons" className="text-center nav-link">
                            <i className="bi bi-collection-play"></i>
                        </NavLink>

                        <hr className='text-white my-1' />

                    </Nav>

                    <Button variant="outline-danger" ><i className="bi bi-box-arrow-in-right"></i></Button>
                </div>
            </MobileView>



        </Fragment>
    )
}