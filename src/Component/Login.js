import React, {useState, useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {validts} from "./validts";
import {notify} from "./toast";
import loginStyle from "./Login.module.css"
import {Link} from "react-router-dom";

const Login = () => {

    const [data, setData] = useState({
        phone: "",
        password: "",
    })

    const [error, setError] = useState({})

    const chengHandler = (event) => {

        setData({...data, [event.target.name]: event.target.value})
    }

    const [touch, setTouch] = useState({})

    const focusHandler = (event) => {
        setTouch({...touch, [event.target.name]: true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(error).length) {
            notify("Yor information was successfully registered", "success")
        } else {
            notify("Yor information was not successfully registered", "error")
            setTouch({
                phone: true,
                password: true,
            })
        }
    }

    useEffect(() => {
        setError(validts(data, "signIn"))
    }, [data, touch])


    return (
        <div className={loginStyle.App}>
            <form onSubmit={submitHandler} className={loginStyle.fromCounter}>
                <div className={loginStyle.title}>
                    <h2>Welcome to Amir.X.One</h2>
                </div>

                <div className={loginStyle.divForm}>
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
                </div>
                <div>
                    <button type="submit">Sign In</button>
                    <p>Have you already an account ? <Link to="/SignUp">Sign Up</Link></p>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;
