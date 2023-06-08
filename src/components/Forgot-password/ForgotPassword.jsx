import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <div class=" gap-2 col-6 mx-auto main">
        <h2>Forgot Password</h2>
      </div>
      <div class="gap-2 col-6 mx-auto sub-head">
        <p>
          Submit your email address and we will send you a link to reset your
          password.
        </p>
      </div>
      <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto">
          <label for="staticEmail" class="col-form-label label">
            E-mail Address
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control input"
              id="staticEmail"
              placeholder="Email"
              required
            />
          </div>
        </div>
      </div>
      <div class="gap-2 col-6 mx-auto route">
        <span>Already have an account?</span>
        <span>
          <Link to="/login" class="link">
            Log In
          </Link>
        </span>
      </div>
      <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div
            style={{ marginTop: "60px", marginBottom: "60px" }}
            class="col-sm-12"
          >
            <button class="col-sm-10 btn btn-lg btn" type="submit">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;
