import React from "react";
import Button from "../../components/Button";

import "./index.css";
import Input from "../../components/Input";
import { useSignupForm } from "./useSignupForm";
import TextSection from "../../components/TextSection";

import cohorts from "../../assets/cohorts.png";
import logo from "../../assets/logo.svg";
import Notifications from "../../components/Notifications";
import Testimonials from "../../components/Testimonials";

const Home: React.FC<{}> = () => {
    const { errors, isValid, values, setFieldValue, handleSubmit } = useSignupForm();

    return (
        <div className="home-wrapper">
            <div className="hero-container">
                <div className="notification-wrapper" id="notification-wrapper">
                    <TextSection
                        icon={"bell"}
                        align="left"
                        primaryText="Get notified when a highly correlated whale makes a move"
                        secondaryText="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
                    />
                    <Notifications />
                </div>
                <div className="whales-wrapper">
                    <div className="cohorts">
                        <img src={cohorts} />
                    </div>
                    <TextSection
                        icon={"eye"}
                        align="right"
                        primaryText="Watch what the whales are doing"
                        secondaryText="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
                    />
                </div>
                <div className="testimonials-wrapper" id="testimonials-wrapper">
                    <div className="testimonials-header">
                        <h4>Testimonials</h4>
                        <hr />
                    </div>
                    <div className="testimonials-wrapper-2">
                        <img src={logo} />
                        <Testimonials />
                    </div>
                </div>
            </div>
            <div className="signup-container">
                <div className="signup-content">
                    <h1>Sign up for exclusive access.</h1>
                    <form onSubmit={handleSubmit} className="form-wrapper">
                        <Input
                            value={values.email}
                            name="email"
                            error={errors?.email}
                            onChange={(e) => setFieldValue("email", (e.target as HTMLInputElement).value)}
                            placeholder="Your email address"
                            className="input-full height-60"
                        />
                        <Button className="btn-full height-60" disabled={!isValid}>
                            Get Started
                        </Button>
                    </form>
                </div>
                <p className="signup-text">You'll receive an email with an invite link to join.</p>
            </div>
        </div>
    );
};

export default Home;
