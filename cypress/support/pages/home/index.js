/// <reference types="Cypress" />

const elHomePage = require('./elements').elements

class HomePage{
    accessHomePage(){
        cy.visit("https://automationexercise.com")
    }
    
    selectBtnWOMEN(){
        cy.get(elHomePage.menuWomen).click()
    }

    selectBtnDRESS(){
        cy.get(elHomePage.categoryDress).click()
    }

    UrlDress(){
        cy.url('https://automationexercise.com/category_products/1')

    }
}


export default new HomePage()


//clickBtnWOMEN(){
    //cy.get(elHomePage.menuWomen).click()
//}