import { DashboardPage, CreateCardPage } from 'pages';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppContexts } from 'contexts';
function App() {
  return (
    <AppContexts>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/createCard" element={<CreateCardPage />} />
        </Routes>
      </BrowserRouter>
    </AppContexts>
  );
}

export default App;
