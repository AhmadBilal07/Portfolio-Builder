import React from "react";

const Login = () => {
  return (
    <form className="mt-3" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Log in</h3>
                <section className="form-group">
                  { false ? (
                    <div className="col-12 alert alert-danger px-3">
                      {}
                    </div>
                  ) : null}
                  <label className="form-control-label sr-only" htmlFor="Email">
                    Email
                  </label>
                  <input
                    required
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
 
                  />
                </section>
                <section className="form-group">
                  <input
                    required
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
     
                  />
                </section>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
