import { Fragment, useState } from 'react'
import _Sidebar from './components/_Sidebar'
import _Homework from './components/_Homework'
import _LiveLessons from "./components/_LiveLessons"
import { Outlet } from "react-router-dom"

export default function TeacherPanel() {

    return (
        <Fragment>
            <div className="d-flex">
                <div className="flex-shrink-1"><_Sidebar /></div>
                <div className="p-4 w-100">
                    <Outlet />

                </div>
            </div>
        </Fragment>
    )
}
