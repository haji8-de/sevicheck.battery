import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import { 
  ApolloClient,
   InMemoryCache, useQuery, ApolloProvider, gql } from '@apollo/client';


import Index from "views/Index.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AccountSettings from "views/examples/AccountSettings.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ChatPage from "views/examples/ChatPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";
import InvoicePage from "views/examples/InvoicePage.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import PricingPage from "views/examples/PricingPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";

import JobOffer from "views/sevicheck/JobOffer.js";
import FindWorker from "views/sevicheck/FindWorker.js";

import client from "./apollo.js"
const root = ReactDOM.createRoot(document.getElementById("root"));

const HELLO = gql`
  query Hello{hello}
`;
client
  .query({
    query: HELLO
  })
  .then((result) => console.log(result));
root.render(  
  <>
  <head>
    <title>Apollo Test</title>
    <meta charSet="utf-8"></meta>
  </head>
  <ApolloProvider client={client}>
    <BrowserRouter >
    {/* basename="/web"> */}
      <Routes>
        <Route path="/error" exact element={<Error />} />
        <Route path="/index" exact element={<Index />} />
        <Route path="/sections/*" exact element={<Sections />} />
        <Route path="/presentation" exact element={<Presentation />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/account-settings" exact element={<AccountSettings />} />
        <Route path="/blog-post" exact element={<BlogPost />} />
        <Route path="/blog-posts" exact element={<BlogPosts />} />
        <Route path="/chat-page" exact element={<ChatPage />} />
        <Route path="/checkout-page" exact element={<CheckoutPage />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/ecommerce" exact element={<Ecommerce />} />
        <Route path="/error" exact element={<Error />} />
        <Route path="/error-500" exact element={<Error500 />} />
        <Route path="/invoice-page" exact element={<InvoicePage />} />
        <Route path="/landing-page" exact element={<LandingPage />} />
        <Route path="/login-page" exact element={<LoginPage />} />
        <Route path="/pricing-page" exact element={<PricingPage />} />
        <Route path="/product-page" exact element={<ProductPage />} />
        <Route path="/profile-page" exact element={<ProfilePage />} />
        <Route path="/register-page" exact element={<RegisterPage />} />
        <Route path="/reset-page" exact element={<ResetPage />} />
        {/* ///  custom*/}

        <Route path="/job-offer" exact element={<JobOffer />} />
        <Route path="/find-worker" exact element={<FindWorker />} />
        
       
        {/* custom */}
        <Route path="/" element={<Navigate to="" replace />} />

      </Routes>
    </BrowserRouter>
  </ApolloProvider>
  </>
);
