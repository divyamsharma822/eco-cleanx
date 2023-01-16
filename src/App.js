import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Products from "./pages/Products/Products";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* // Home Route */}
                    <Route index element={<Home />} />
                    <Route path='/' element={<Home />} />

                    <Route path='/Contact' element={<ContactUs />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/ProductInfo' element={<ProductInfo />} />

                    {/* // 404 Route */}
                    <Route
                        path='*'
                        element={
                            <div
                                style={{ height: "80vh",fontSize:"28px",fontWeight:"600" }}
                                className='d-flex justify-content-center align-items-center'
                            >
                               Page Not Found
                            </div>
                        }
                    />
                </Routes>
            </React.Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
