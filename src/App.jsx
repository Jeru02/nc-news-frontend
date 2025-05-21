import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { AccountProvider } from "./Account";
import ArticlePage from "./pages/ArticlePage";


function App() {
  return (
    <>
       <AccountProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ArticlePage/:article_id" element={<ArticlePage />} />
        </Routes>
      </AccountProvider>
    </>
  );
}

export default App;
