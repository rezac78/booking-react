import React, { useState, useRef } from 'react';
import { loginUser } from '../../services/userServices';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, forceUpdate] = useState();

    const validaton = useRef(new SimpleReactValidator({
        messages: {
            required: "پرکردن این فیلد الزامی است",
            min: "کمتر از 5 کاراکتر نباید باشد",
            email: "ایمیل نوشته شده صحیح نمی باشد"
        },
        element: message => <div style={{ color: "red" }}>{message}</div>
    }));

    const reset = () => {
        setEmail("");
        setPassword("");
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        try {
            if (validaton.current.allValid()) {
                const { status, data } = await loginUser(user)
                if (status === 201) {
                    toast.success("ورود با موفقیت ساخته شد", { position: "top-right", closeOnClick: true })
                    localStorage.setItem("token", data.token)
                    history.replace('/');
                    reset();
                }
            } else {
                validaton.current.showMessage();
                forceUpdate(1);
            }

        } catch (err) {
            toast.error("مشکلی پیش اومده", { position: "top-right", closeOnClick: true })
            console.log(err)
        }
    }
    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center">Please login</h1>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        validaton.current.showMessageFor("email")
                    }
                    } />
                    {validaton.current.message("email", email, "required|email")}
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                        validaton.current.showMessageFor("password")
                    }
                    } />
                    {validaton.current.message("password", password, "required|min:5")}
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input name="remember" type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="6Ld8NV0bAAAAAG6of_pki3Rc288CIp7Gl1rAYBYg"></div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">login</button>
            </form>
        </main>
    )
}

export default withRouter(Login);