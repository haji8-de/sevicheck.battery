import React, { useState } from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Label,
} from "reactstrap";

// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import { Controller, useForm } from "react-hook-form";

function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState("");
  const { register, control,  handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });
  const registerOptions = {
    name: { required: "Name is required",
      minLength: {
        value: 5,
        message: "Name must have at least 5 characters"
      } },
    email: { required: " is required" ,
      minLength: {
        value: 10,
        message: "Email must have at least 10 characters"
      }},
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };
 // const onSubmit = (data) => alert(JSON.stringify(data));
  const onFormSubmit  = data => {
    console.log(data)
    console.log("test")
  };

  const onErrors = errors => {
    console.error(errors)
    console.log("test2")
  };
  
  React.useEffect(() => {
    document.body.classList.add("register-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="page-header bg-default">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ill/register_bg.png") + ")",
            }}
          ></div>
          <Container className={activeContainer}>
            <div className="form-container sign-up-container">
              <Form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                <h2>Create Account</h2>
                <div className="social-container">
                  <Button color="facebook" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Button>
                </div>
                <span className="text-default mb-4">
                  or use your email for registration
                </span>
                <FormGroup className={"mb-3 " + signupNameFocus}>

                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                   
                     <Controller
                        control={control}
                        name="name"
                        render={({ field: { ref, ...fieldProps } }) => (
                            <Input id="Name" 
                            placeholder="Name"
                            type="text"
                            innerRef={ref} {...fieldProps} 
                            onFocus={() => setSignupNameFocus("focused")}
                            onBlur={() => setSignupNameFocus("")}/>
                        )}
                      />
                    <small className="text-danger">
                      {errors?.name && errors.name.message}
                    </small>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={"mb-3 " + signupEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { ref, ...fieldProps } }) => (
                            <Input 
                            placeholder="Email"
                            type="email"
                            id="Email" innerRef={ref} {...fieldProps} 
                            onFocus={() => setSignupEmailFocus("focused")}
                            onBlur={() => setSignupEmailFocus("")}/>
                        )}
                      />
                    <small className="text-danger">
                      {errors?.email && errors.email.message}
                    </small>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signupPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { ref, ...fieldProps } }) => (
                            <Input 
                            placeholder="Password"
                            type="password"
                            id="Password" 
                            innerRef={ref} {...fieldProps} 
                            onFocus={() => setSignupEmailFocus("focused")}
                            onBlur={() => setSignupEmailFocus("")}/>
                        )}
                      />
                    <small className="text-danger">
                      {errors?.password && errors.password.message}
                    </small>
                  </InputGroup>
                </FormGroup>
                <Button  type="submit" color="primary">Sign Up</Button>
              </Form>
            </div>
            <div className="form-container sign-in-container">
              <Form action="#" role="form">
                <h2>Sign in</h2>
                <div className="social-container">
                  <Button color="facebook" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Button>
                  <Button color="instagram" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Button>
                  <Button color="twitter" size="sm" type="button">
                    <span className="btn-inner--icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                  </Button>
                </div>
                <span className="text-default mb-4">or use your account</span>
                <FormGroup className={"mb-3 " + signinEmailFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={() => setSigninEmailFocus("focused")}
                      onBlur={() => setSigninEmailFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signinPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={() => setSigninPasswordFocus("focused")}
                      onBlur={() => setSigninPasswordFocus("")}
                    ></Input>
                  </InputGroup>
                </FormGroup>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Forgot your password?
                </a>
                <Button className="mt-3" color="primary">
                  Sign In
                </Button>
              </Form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="text-white">Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Button
                    className="btn-neutral"
                    color="default"
                    id="signIn"
                    size="sm"
                    onClick={() => setActiveContainer("")}
                  >
                    Sign In
                  </Button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="text-white">Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <Button
                    className="btn-neutral"
                    color="default"
                    id="signUp"
                    size="sm"
                    onClick={() => setActiveContainer("right-panel-active")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default RegisterPage;
