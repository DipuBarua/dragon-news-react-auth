import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        // another way to get input value instead of [e.target.name.value]
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        singIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login 
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => { console.error('login failed', error) });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" my-12 text-center">
                <h2 className=" text-2xl font-semibold text-center">Please Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>Do not Have An Account ? <Link to={'/register'}><button className="btn btn-link">Register</button></Link></p>
            </div>
        </div>
    );
};

export default Login;