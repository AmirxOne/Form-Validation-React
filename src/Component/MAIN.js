import React from 'react';
import style from "./MAIN.module.css"
import SignUp from "./SignUp";
import Login from "./Login";
import {Route, Routes, Navigate} from "react-router-dom";

const MAIN = () => {
    return (
        <div className={style.all}>
            <div className={style.main}>
                <div className={style.mainLeft}> </div>
                <div className={style.mainRight}>
                    <Routes>
                        <Route path="/SignUp" element={<SignUp/>}/>
                        <Route path="/SignIp" element={<Login/>}/>
                        <Route path="/" element={<Navigate to="/SignUp"/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MAIN;
