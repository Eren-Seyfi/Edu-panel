import { Fragment, useState } from 'react'
import { Route, Routes } from "react-router-dom"

import TeacherPanel from "./Panel/Teacher/TeacherPanel"
import T_Homework from './Panel/Teacher/components/_Homework'
import T_LiveLessons from './Panel/Teacher/components/_LiveLessons'

import StudentsPanel from './Panel/Students/StudentsPanel'
import S_Homework from './Panel/Students/components/_Homework'
import S_LiveLessons from './Panel/Students/components/_LiveLessons'
export default function App() {


  return (
    <Fragment>

      <Routes>

        <Route path="TeacherPanel" element={<TeacherPanel />} >
          <Route index path="Homework" element={<T_Homework />} />
          <Route path="LiveLessons" element={<T_LiveLessons />} />
        </Route>

        <Route path="StudentsPanel" element={<StudentsPanel />} >
          <Route index path="Homework" element={<S_Homework />} />
          <Route path="LiveLessons" element={<S_LiveLessons />} />
        </Route>


      </Routes>
    </Fragment>
  )
}
