import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WidgetsHome from './WidgetsHome';
import WidgetCreate from './WidgetCreate';
import DeleteWidget from './DeleteWidget'; // Import your new Delete component

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/widgets" element={<WidgetsHome />} />
        <Route path="/widgets/new" element={<WidgetCreate />} />
        <Route path="/widgets/:widgetId/delete" element={<DeleteWidget />} />
        {/* Removed Show and Update Routes */}
      </Routes>
    </>
  );
};

export default App;