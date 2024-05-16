import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { UserProvider } from './components/UserContext';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<App />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
