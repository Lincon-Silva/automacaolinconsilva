/// <reference types="Cypress" />
import dataLogin from "../../../../fixtures/dataLoginEspecifier.json"
import dataUrl from "../../../../fixtures/dataUrl.json"

const elLoginPage = require('../elementsLogin').elements

class LoginPage{
    time(){
        cy.wait(5000)
    }
    clearCookies(){
        cy.clearAllCookies()
        
    }

    clearAllLocalStorage(){
        cy.clearAllLocalStorage()
    }

    accessLoginPage(){
        cy.visit(dataUrl.urlLoginPage)
    }

    typeCorrectEmail(){
        cy.get(elLoginPage.inputImail).type(dataLogin.correctEmail)
    }

    typeCostumerCorrectEmail(){
        cy.get(elLoginPage.inputImail).type(dataLogin.costumerEmail)
    }

    clickBtnProsseguir(){
        cy.get(elLoginPage.btnProsseguir).click()
    }

    clickBtnLogin(){
        cy.get(elLoginPage.btnLogin).click()
    }

    typeIncorrectPassword(){
        cy.get(elLoginPage.inputPassword).type(dataLogin.incorrectPassword)
    }

    typeCorrectPassword(){
        cy.get(elLoginPage.inputPassword).type(dataLogin.correctPassword)
    }

    validate(){
        cy.get(elLoginPage.msgAlerta).should('be.visible')

    }

    valiCostumerMsg(){
        cy.get(elLoginPage.msgCostumerAlerta).should('be.visible')

    }

    msgCostumerTipo(){
        cy.get(elLoginPage.msgCostumerValue).contains("Cadastro inválido, área restrita a especificadores")

    }

    msgTipo(){
        cy.get(elLoginPage.msgValue).contains("Usuário e/ou senha incorretos")

    }

    urlHomeEspecificador(){
        cy.url().should('eq', dataUrl.urlHomeEspecificador, {timeout: 10000}) // => true
        //cy.url().should('eq.').type(dataUrl.urlHomeEspecificador, setTimeout(100000))

    }
}
export default new LoginPage()