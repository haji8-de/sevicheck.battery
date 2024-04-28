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
import { useNavigate} from "react-router-dom";
// Core Components
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";
import { Controller, useForm } from "react-hook-form"; 
//import { useMutation, gql } from '@apollo/client';
import { useQuery, useMutation, gql } from '@apollo/client';
import useGeneralStore from "stores/generalStore.js"

// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
// import client from "apollo.js"
//   loadDevMessages();
//   loadErrorMessages();
function RegisterPage() {
  const [activeContainer, setActiveContainer] = React.useState("");
  const [signupNameFocus, setSignupNameFocus] = React.useState("");
  const [signupEmailFocus, setSignupEmailFocus] = React.useState("");
  const [signupPasswordFocus, setSignupPasswordFocus] = React.useState("");
  const [signinEmailFocus, setSigninEmailFocus] = React.useState("");
  const [signinPasswordFocus, setSigninPasswordFocus] = React.useState(""); 

  const { isLoginOpen, setLoginIsOpen,  setUser, logout, clear,
    general_count, increasePopulation,   
    username, email } = useGeneralStore();

  const { register, control,  handleSubmit, formState: { errors },
  getValues,
  setError,
  clearErrors} = useForm({
    mode: "onChange",
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const registerOptions = {
    username: { required: "Name is required",
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
    }}

    
const HELLO = gql`
  query Hello{hello}
`;
const SIGNUP = gql`
  mutation SignUp($input:SignUpInput!){
  signup(signUpInput:$input)
  {
    accessToken
    refreshToken
    user{email username}
  }
}`
const SIGNIN = gql`
  mutation SignIn($input:SignInInput!){
  signin(signInInput:$input)
  {
    accessToken
    refreshToken
    user{username}
  
  }
}`
function DisplayLocations() { 
  const { loading, error, data } = useQuery(HELLO);

  if (loading) {
    console.log(loading)
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error)
    return <p>Error : {error.message}</p>;
  }
  console.log("data", data.hello)
 return <>{data.hello}</>
}
    
  const onSignUpCompleted = (data) => {

    console.log("datatest1", data);
    const {
      signup: { accessToken,  refreshToken, user},
    } = data;
    localStorage.setItem('authToken', accessToken)
    setLoginIsOpen(true);
    setUser({
      accessToken: accessToken,
      refreshToken: refreshToken,
      username: user.username,
      email: user.email
    });
    // localStorage.setItem("accessToken", accessToken)
    // localStorage.setItem("refreshToken", refreshToken)
    // localStorage.setItem("user.username", user.username)
    // localStorage.setItem("user.email", user.email)
    navigate('/landing-page');
  };
  const onSignInCompleted = (data) => 
  {
    console.log("datatest2", data);
    const {
      signin: { accessToken,  refreshToken, user},
    } = data;
    setLoginIsOpen(true);
    
    localStorage.setItem("authToken", accessToken)
    setUser({
      accessToken: accessToken,
      refreshToken: refreshToken,
      username: user.username,
      email: "testmail"
    });
    // localStorage.setItem("accessToken", accessToken)
    // localStorage.setItem("refreshToken", refreshToken)
    // localStorage.setItem("user.username", user.username)
    navigate('/index');
  };
  const [signup_fnc, signUpData] = useMutation(SIGNUP, {
    onCompleted: onSignUpCompleted,
  });
  const [signin_fnc, signInData] = useMutation(SIGNIN, {
    onCompleted: onSignInCompleted,
  });
 // const onSubmit = (data) => alert(JSON.stringify(data));
  const onSignUpFormSubmit  = data2 => {
    //e.preventDefault();
    console.log("t11t", signUpData)
    const { loading, error, data } = signUpData;

    if (loading) {
      console.log("loading", loading)
      return;
    }
    if (error) {
      console.log("error", error)
    } 
    console.log("data2", data2)
    const {email, username, password} = data2;
    const signUpInput= {
      email : email,
      username : username,
      password : password
    }
    console.log("signUpInput",signUpInput)
    signup_fnc(
      { 
        variables: {"input":signUpInput},
      }
    );
    //signup({ variables: data2 });;
    //console.log(data)
    //console.log(dataAll)
    
  };
  const onSignInFormSubmit  = data2 => {
    //e.preventDefault();
    // console.log("t122t", signInData)
    const { loading, error, data } = signInData;

    if (loading) {
      console.log("loading", loading)
      return;
    }
    if (error) {
      console.log("error", error)
    } 
    // if (loading) {
    //   return;
    // }
    const {login_email, login_password} = data2;
    const signInInput= {
      email : login_email,
      password : login_password
    }
    console.log("signInInput", signInInput)
    signin_fnc(
      { 
        variables: {"input":signInInput},
      }
    );
    //signup({ variables: data2 });;
    // console.log(data)
    //console.log(dataAll)
    
  };

  const onErrors = errors => {
    console.error(errors)
    console.log("test2")
  };
  
  React.useEffect(() => {
  // if ( isLoggedInVar ) navigate('/landing-page');
    if(isLoginOpen) {
      navigate('/index');
    }
    document.body.classList.add("register-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);

  function Counter () {
    return (
      <div>
        <span>{general_count}</span>
        <button onClick={increasePopulation}>one up</button>
        <button onClick={clear}>clear</button>
        <spen>username/{username};</spen>
        <spen>email/{email};</spen>
        <spen>login/{isLoginOpen};</spen>
      </div>
    )
  }
  return (
    <>
      <DemoNavbar type="transparent" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Counter /> */}
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

              <Form onSubmit={handleSubmit(onSignUpFormSubmit, onErrors)}>
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

                <div>
                    <h2>My first Apollo app 🚀</h2>
                    <DisplayLocations />
                  </div>
                <FormGroup className={"mb-3 " + signupNameFocus}>

                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                   
                     <Controller
                        control={control}
                        name="username"
                        render={({ field: { ref, ...fieldProps } }) => (
                            <Input id="user" 
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
              <Form 
              // action="#" 
              role="form"
              onSubmit={handleSubmit(onSignInFormSubmit, onErrors)}>
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
                    <Controller
                        control={control}
                        name="login_email"
                        render={({ field: { ref, ...fieldProps } }) => (
                            <Input 
                            placeholder="Email"
                            type="email"
                            id="Email" innerRef={ref} {...fieldProps} 
                            onFocus={() => setSignupEmailFocus("focused")}
                            onBlur={() => setSignupEmailFocus("")}/>
                        )}
                      />
                  </InputGroup>
                </FormGroup>
                <FormGroup className={signinPasswordFocus}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        control={control}
                        name="login_password"
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
