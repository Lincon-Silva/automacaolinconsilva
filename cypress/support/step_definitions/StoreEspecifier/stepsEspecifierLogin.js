import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/PStoreEspecifier/loginEspecifier/indexLoginEspecifier'

Given("i access the especifier login page", () =>{
    //LoginPage.clarCookies()
    //LoginPage.clearAllLocalStorage()
    LoginPage.accessLoginPage()
})

When("i login with invalid email", () =>{
    LoginPage.typeCorrectEmail()
    LoginPage.clickBtnProsseguir()
    LoginPage.typeIncorrectPassword()
    LoginPage.clickBtnLogin()
})

Then("i receive alert message", () =>{
    LoginPage.validate()
    LoginPage.msgTipo()
})

Given("i access the especifier login page", () =>{
    LoginPage.clearCookies()
    LoginPage.accessLoginPage()
})

When("i enter a valid email specifier", () =>{
    LoginPage.typeCorrectEmail()
    LoginPage.clickBtnProsseguir()
    LoginPage.typeCorrectPassword()
    LoginPage.clickBtnLogin()
    LoginPage.time()
})

Then("i taken to the specifier home page", () =>{
    LoginPage.urlHomeEspecificador()
})

