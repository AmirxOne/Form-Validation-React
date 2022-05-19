import React, {useState, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validts} from "./validts";
import {notify} from "./toast";
import signStyle from "./SignUp.module.css"
import {Link} from "react-router-dom";
import loginStyle from "./Login.module.css";

const SignUp = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        pConfirm: "",
        isAccept: false,
    })

    const [error, setError] = useState({});
    const [touch, setTouch] = useState({});

    const focusHandler = (event) => {
        setTouch({...touch, [event.target.name]: true})
    }

    const chengHandler = (event) => {
        if (event.target.name === "isAccept") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    };


    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(error).length) {
            notify("Yor information was successfully registered", "success")
        } else {
            notify("Yor information was not successfully registered", "error")
            setTouch({
                firstName: true,
                lastName: true,
                phone: true,
                email: true,
                password: true,
                pConfirm: true,
                isAccept: true,
            })
        }
    }

    useEffect(() => {
        setError(validts(data, "signUp"))
    }, [data, touch])


    return (
        <div className={signStyle.App}>
            <form onSubmit={submitHandler} className={signStyle.fromCounter}>
                <div className={signStyle.title}>
                    <p>Welcome to Amir.X.One <span>/</span></p>
                    <span className={signStyle.explanation}>Come on and create an account</span>
                </div>

                <div className={signStyle.divFrom}>
                    <div>
                        <label>FIRST NAME</label>
                        <input
                            className={(error.firstName && touch.firstName) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.firstName && touch.firstName && <span>{error.firstName}</span>}
                    </div>
                    <div>
                        <label>LAST NAME</label>
                        <input
                            className={(error.lastName && touch.lastName) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.lastName && touch.lastName && <span>{error.lastName}</span>}
                    </div>
                </div>

                <div className={signStyle.divFrom}>
                    <div>
                        <label>PHONE</label>
                        <input
                            className={(error.phone && touch.phone) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.phone && touch.phone && <span>{error.phone}</span>}
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input
                            className={(error.email && touch.email) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.email && touch.email && <span>{error.email}</span>}
                    </div>
                </div>

                <div className={signStyle.divFrom}>
                    <div>
                        <label>PASSWORD</label>
                        <input
                            className={(error.password && touch.password) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.password && touch.password && <span>{error.password}</span>}
                    </div>
                    <div>
                        <label>CONFIRM PASSWORD</label>
                        <input
                            className={(error.pConfirm && touch.pConfirm) ? loginStyle.uncompleted : loginStyle.divDif}
                            type="password"
                            name="pConfirm"
                            value={data.pConfirm}
                            onChange={chengHandler}
                            onFocus={focusHandler}
                        />
                        {error.pConfirm && touch.pConfirm && <span>{error.pConfirm}</span>}
                    </div>
                </div>
                <div className={signStyle.checkForm}>
                    <input
                        type="checkbox"
                        name="isAccept"
                        value={data.isAccept}
                        onChange={chengHandler}
                    />
                    <label>I accept terms and conditions</label>
                    {error.isAccept && touch.isAccept && <span>{error.isAccept}</span>}
                </div>
                <div className={signStyle.boxSign}>
                    <button type="submit">Sign Up</button>
                    <p>Have you already an account ? <Link to="/SignIp">Sign In</Link></p>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;
