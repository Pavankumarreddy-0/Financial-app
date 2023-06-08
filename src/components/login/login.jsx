import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <>
      <div class="gap-2 col-6 mx-auto main-heading">
        <h1>Log in</h1>
      </div>
      <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto">
          <label for="staticEmail" class="col-form-label label-class">
            E-mail Address
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control input-class"
              id="staticEmail"
              placeholder="Email"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto">
          <label for="inputPassword" class="col-form-label label-class">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control input-class"
              id="inputPassword"
              placeholder="Password"
              required
            />
          </div>
        </div>
      </div>
      <div class="gap-2 col-6 mx-auto route-class">
        <span>Forgotten your password?</span>
        <span>
          <Link to="/forgot-password" class="link-class">
            Click here
          </Link>
        </span>
      </div>
      <div class="gap-2 col-6 mx-auto route-class">
        <span>Don't have an account?</span>
        <span>
          <a href="/" class="link-class">
            Sign up
          </a>
        </span>
      </div>
      <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div
            style={{ marginTop: "60px", marginBottom: "60px" }}
            class="col-sm-12"
          >
            <button class="col-sm-10 btn btn-lg btn-class" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
