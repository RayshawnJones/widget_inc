import { useState } from 'react'
import './App.css'
import 'react-router-dom'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/widgets" element={<WidgetsHome />} />
        <Route path="/widgets/new" element={<WidgetCreate />} />
        <Route path="/widgets/:widgetId" element={<WidgetShow />} />
        <Route path="/widgets/:widgetId/edit" element={<WidgetUpdate />} />
      </Routes>
    </>
  );
}

export default App