/// <reference types="Cypress" />
import dataLoginFinalCostumer from "../../../../fixtures/dataLoginFinalCostumer.json"
import dataUrl from "../../../../fixtures/dataUrl.json"

const elLoginPage = require('../elementsLogin').elements

class LoginPage{
    clearCookies(){
        cy.clearCookies()
    }

    accessLoginPage(){
        cy.visit(dataUrl.urlLoginPage)
    }

    typeCostumerCorrectEmail(){
        cy.get(elLoginPage.inputImail).type(dataLoginFinalCostumer.correctEmail)
    }

    time5000(){
        cy.wait(5000)
    }

    clickBtnProsseguir(){
        cy.get(elLoginPage.btnProsseguir).click()        
    }

    typeIncorrectPassword(){
        cy.get(elLoginPage.inputPassword).type(dataLogin.incorrectPassword)
    }

    typeCorrectPassword(){
        cy.get(elLoginPage.inputPassword).type(dataLogin.incorrectPassword)
    }

    valiCostumerMsg(){
        cy.get(elLoginPage.msgCostumerAlerta).should('be.visible')

    }

    msgCostumerTipo(){
        cy.get(elLoginPage.msgCostumerValue).contains(elLoginPage.msgLoginCostumerInvalid)

    }
}
export default new LoginPage()