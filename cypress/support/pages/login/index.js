/// <reference types="Cypress" />
import dataLogin from "../../../fixtures/dataLogin.json"

const elLoginPage = require('./elements').elements

class LoginPage{
    accessLoginPage(){
        cy.visit("https://automationexercise.com/login")
    }

    typeEmail(){
        cy.get(elLoginPage.inputImail).type(dataLogin.incorrectEmail)
    }

    typePassword(){
        cy.get(elLoginPage.inputPassword).type(dataLogin.incorrectPassword)
    }

    clickBtnLogin(){
        cy.get(elLoginPage.btnLogin).click()
    }

    validate(){
        cy.get(elLoginPage.msgAlerta).should('be.visible')

    }

    msgTipo(){
        cy.get(elLoginPage.msgValue).contains("Your email or password is incorrect!")

    }
}
export default new LoginPage()