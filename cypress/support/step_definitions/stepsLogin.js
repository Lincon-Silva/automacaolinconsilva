import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pages/login/index'

Given("i access the login page", () =>{
    LoginPage.accessLoginPage()
})

When("i login with valid email", () =>{
    LoginPage.typeEmail()
    LoginPage.typePassword()
    LoginPage.clickBtnLogin()
})

Then("i receive alert message", () =>{
    LoginPage.validate()
    LoginPage.msgTipo()
})