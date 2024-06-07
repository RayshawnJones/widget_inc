import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

import NavBar from './components/NavBar'
import WidgetsHome from './components/WidgetsHome'
import WidgetCreate from './components/WidgetCreate'
import WidgetShow from './components/WidgetShow'
import WidgetUpdate from './components/WidgetUpdate'

import * as widgetService from './services/widgets'

const App = () => {

  const Navigate = useNavigate()

  const [widgetsArray, setWidgetsArray] = useState([])

  const getAllWidgets = async () => {
    const allWidgets = await widgetService.index()
    setWidgetsArray(allWidgets)
  }

  const handleCreateWidget = async (widget) => {
    await widgetService.create(widget)
    getAllWidgets()
    Navigate('/widgets')
  }
  
  const handleDeleteWidget = async (widgetId) => {
    await widgetService.deleteWidget(widgetId)
    await getAllWidgets()
    Navigate('/widgets')
  }
  
  const handleUpdateWidget = async (widget) => {
    await widgetService.updateWidget(widget, widget._id)
    await getAllWidgets()
    Navigate(`/widget/${widget._id}`)
  }

  useEffect(()=>{
    getAllWidgets()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/widgets" element={<WidgetsHome {...{widgetsArray}}/>} />
        <Route path="/widgets/new" element={<WidgetCreate {...{ widgetsArray, handleCreateWidget}}/>} />
        <Route path="/widgets/:widgetId" element={<WidgetShow {...{widgetsArray, handleDeleteWidget}}/>} />
        <Route path="/widgets/:widgetId/edit" element={<WidgetUpdate {...{widgetsArray, handleUpdateWidget}}/>} />
      </Routes>
    </>
  );
}

export default App