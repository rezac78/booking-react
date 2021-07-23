import React from 'react';

const Register=()=>{
    return(
        <main className="form-signin">
            <form action="/users/register" method="POST">
                <h1 className="h3 mb-3 fw-normal text-center">Please login</h1>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="fullname" type="text" className="form-control" id="floatingInput" placeholder="" />
                </div>

                <div className="form-floating">
                    <label for="floatingInput">Email address</label>
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                </div>
                <div className="form-floating">
                    <label for="floatingPassword">Password</label>
                    <input name="confirmpassword" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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