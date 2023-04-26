import { DashboardPage, CreationPage } from 'pages';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppContexts } from 'contexts';
function App() {
  return (
    <AppContexts>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/createCard" element={<CreationPage />} />
        </Routes>
      </BrowserRouter>
    </AppContexts>
  );
}

export default App;
