import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import Header from "./Header";
import IMG from "./assets/Group 3.png";
import IMG1 from "./assets/f_logo_RGB-Blue_1024.png";
import IMG2 from "./assets/search.png";

const Popup = () => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  const openSignIn = () => {
    setSignInVisible(true);
  };

  const closeSignIn = () => {
    setSignInVisible(false);
  };

  const openSignUp = () => {
    setSignUpVisible(true);
  };

  const closeSignUp = () => {
    setSignUpVisible(false);
  };
  return (
    <>
      {signInVisible && (
        <div className="popup position-fixed d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-end">
            <button
              onClick={closeSignIn}
              className="btn bg-white rounded-pill m-2"
            >
              <GrFormClose />
            </button>
            <div className="bg-white rounded-2">
              <p className="popup-paragraph p-3 rounded-2">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
              <div className="p-4">
                <div className="popup-grid">
                  <form className="d-flex flex-column gap-4 p-2">
                    <div>
                      <div class="mb-3">
                        <h4 className="text-start">Sign In</h4>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="email"
                        />
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="password"
                        />
                      </div>
                      <Link
                        to="/signin"
                        class="btn btn-primary rounded-pill w-100"
                        onClick={closeSignIn}
                      >
                        Sign In
                      </Link>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <button type="submit" class="btn border w-100">
                        <img src={IMG1} alt="facebook logo" /> Sign In with
                        Facebook
                      </button>
                      <button type="submit" class="btn border w-100">
                        <img src={IMG2} alt="google logo" /> Sign In whit Google
                      </button>
                    </div>
                    <h6>Forget Password</h6>
                  </form>

                  <div className="p-2">
                    <p>
                      Don't have an account yet?{" "}
                      <span className="text-primary fw-bold">
                        Create new free!
                      </span>
                    </p>
                    <img src={IMG} className="popupphoto" alt="photosignin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {signUpVisible && (
        <div className="popup position-fixed d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-end">
            <button
              onClick={closeSignUp}
              className="btn bg-white rounded-pill m-2"
            >
              <GrFormClose />
            </button>
            <div className="bg-white rounded-2">
              <p className="popup-paragraph p-3 rounded-2">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
              <div className="p-4">
                <div className="popup-grid">
                  <form className="d-flex flex-column gap-4 p-2">
                    <div>
                      <div class="mb-3 field form-group">
                        <h4 className="text-start">Create Accout</h4>
                        <div className="d-flex sign-up">
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Last Name"
                          />
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="email"
                        />
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="password"
                        />
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="confirm password"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary rounded-pill w-100"
                      >
                        Create Account
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <button type="submit" class="btn border w-100">
                        <img src={IMG1} alt="facebook logo" /> Sign Up with
                        Facebook
                      </button>
                      <button type="submit" class="btn border w-100">
                        <img src={IMG2} alt="google logo" /> Sign Up whit Google
                      </button>
                    </div>
                  </form>

                  <div className="p-2">
                    <p>
                      Already have an account?{" "}
                      <span className="text-primary fw-bold">Sign In</span>
                    </p>
                    <img src={IMG} className="popupphoto" alt="photosinup" />
                    <p>
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Header openSignIn={openSignIn} openSignUp={openSignUp} />
    </>
  );
};
export default Popup;
