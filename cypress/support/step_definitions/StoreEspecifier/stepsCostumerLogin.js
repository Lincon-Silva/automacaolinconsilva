import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../pages/PStoreEspecifier/loginEndCostumer/indexCostumerLogin'

Given("i access the login page cu", () =>{
    LoginPage.clearCookies()
    LoginPage.accessLoginPage()
})

When("i login with valid end customer email cu", () =>{
    LoginPage.typeCostumerCorrectEmail()
    LoginPage.clickBtnProsseguir()
    LoginPage.time5000()

})

Then("the alert message is displayed cu", () =>{
    LoginPage.valiCostumerMsg()
    LoginPage.msgCostumerTipo()
})