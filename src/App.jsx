import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { AccountProvider } from "./Account";

function App() {
  return (
    <>
      <AccountProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </AccountProvider>
    </>
  );
}

export default App;
