import { Link } from "react-router-dom";

const Login = () => {

    const handleCancel = () => {
        window.history.back();
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" className="btn btn-secondary mx-5" onClick={handleCancel}>Cancel</button>
                                <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login