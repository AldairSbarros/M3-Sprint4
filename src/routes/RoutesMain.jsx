import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserPage } from "../pages/UserPage"

export default RountesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        
    );
};