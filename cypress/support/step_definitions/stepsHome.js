import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../pages/home/index'

Given("i access the home page", () =>{
    HomePage.accessHomePage()
})

When("i validate drop dow menu", () =>{
    HomePage.selectBtnWOMEN()
    HomePage.selectBtnDRESS() 
})

Then("WOMEN - DRESS PRODUCTS is presented", () =>{
    HomePage.UrlDress()
})