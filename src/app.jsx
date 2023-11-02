import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login";
import UseCases from "./components/useCases";

export default function App() {
  return (
    <div className="h-full min-h-full">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="login" element={<Login />} />
          <Route path="useCases" element={<UseCases />} />
        </Route>
      </Routes>
    </div>
  );
}
