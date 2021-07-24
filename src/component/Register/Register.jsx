import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { registerUser } from './../../services/userServices';


const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            const { status } = await registerUser(user)
            if (status === 201) {
                toast.success("کاربر با موفقیت ساخته شد", { position: "top-right", closeOnClick: true })
                reset();
            }
        } catch (err) {
            toast.error("مشکلی پیش اومده", { position: "top-right", closeOnClick: true })
            console.log(err)
        }





        console.log(user);
    }
    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center">Please Register</h1>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="fullname" type="text" className="form-control" id="floatingInput" placeholder="fullname" value={fullname} onChange={e => setFullname(e.target.value)} />
                </div>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input name="remember" type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="6Ld8NV0bAAAAAG6of_pki3Rc288CIp7Gl1rAYBYg"></div>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register;