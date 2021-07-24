import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Sugar } from 'react-preloaders';
import { withRouter } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { registerUser } from './../../services/userServices';


const Register = ({history}) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();
    const [loading, setLoading] = useState(false);
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
        setFullname("");
        setPassword("");
    }
    const handleSubmit = async event => {
        event.preventDefault();

        const user = {
            fullname,
            email,
            password
        }
        try {
            if (validaton.current.allValid()) {
                setLoading(true);
                const { status } = await registerUser(user)
                if (status === 201) {
                    toast.success("کاربر با موفقیت ساخته شد", { position: "top-right", closeOnClick: true })
                    history.replace('/login');
                    reset();
                }
            } else {
                validaton.current.showMessage();
                setLoading(false);
                forceUpdate(1);
            }
        } catch (err) {
            toast.error("مشکلی پیش اومده", { position: "top-right", closeOnClick: true })
            setLoading(false);
            console.log(err)
        }
        console.log(user);
    }
    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center">Please Register</h1>
                {loading ? (
                    <Sugar time={0} color="#fc03d7" customLoading={loading} />
                ) : null}
                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="fullname" type="text" className="form-control" id="floatingInput" placeholder="fullname" value={fullname} onChange={e => {
                        setFullname(e.target.value);
                        validaton.current.showMessageFor("fullname")
                    }} />
                    {validaton.current.message("fullname", fullname, "required|min:4")}
                </div>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => {
                        setEmail(e.target.value)
                        validaton.current.showMessageFor("email");
                    }} />
                    {validaton.current.message("email", email, "required|email")}
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => {
                        setPassword(e.target.value)
                        validaton.current.showMessageFor("password")
                    }
                    } />
                    {validaton.current.message("password", password, "required|min:5")}
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input name="policy" type="checkbox" value={policy} onChange={(e) => {
                            setPolicy(e.currentTarget.checked)
                            validaton.current.showMessageFor("policy")
                        }} /> I accept the rules
                    </label>
                    {validaton.current.message("policy", policy, "required")}
                </div>
                <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="6Ld8NV0bAAAAAG6of_pki3Rc288CIp7Gl1rAYBYg"></div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </main>
    )
}

export default withRouter(Register);