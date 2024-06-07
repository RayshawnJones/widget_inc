import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

import NavBar from './components/NavBar/Nav'
import WidgetsHome from './components/Home/Home'
import WidgetCreate from './components/WidgetContainer/Create'
// import WidgetShow from './components/WidgetContainer/Show'
import WidgetUpdate from './components/WidgetContainer/Update/Update'

import * as widgetService from './services/WidgetService'

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
      <h1>Hello Everyone</h1>
      <Routes>
        <Route path="/widgets" element={<WidgetsHome {...{widgetsArray}}/>} />
        <Route path="/widgets/new" element={<WidgetCreate {...{ widgetsArray, handleCreateWidget}}/>} />
        {/* <Route path="/widgets/:widgetId" element={<WidgetShow {...{widgetsArray, handleDeleteWidget}}/>} /> */}
        <Route path="/widgets/:widgetId/edit" element={<WidgetUpdate {...{widgetsArray, handleUpdateWidget}}/>} />
      </Routes>
    </>
  );
}

export default App