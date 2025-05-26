import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { AccountProvider } from "./Account";
import ArticlePage from "./pages/ArticlePage";
import TopicsPage from "./pages/TopicsPage";
TopicsPage;

function App() {
  return (
    <>
      <AccountProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ArticlePage/:article_id" element={<ArticlePage />} />
          <Route path="/HomePage/:topic" element={<HomePage />} />
        </Routes>
      </AccountProvider>
    </>
  );
}

export default App;
