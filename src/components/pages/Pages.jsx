import React, { useState } from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import SignUp from "../Auth/SignUp"
import SignIn from "../Auth/SignIn"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import Offer from "../offer/Offer"
import Property from "../contact/Property"
const Pages = () => {
  


  return (
    <>
      <Router>
       
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/property' component={Property} />
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/signIn' component={SignIn} />
          <Route exact path='/offer' component={Offer} />
        </Switch>
       
        <Footer/>
      </Router>
    </>
  )
}

export default Pages
