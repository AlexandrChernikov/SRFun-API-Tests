/// <reference types="cypress" />
const { describe } = require("mocha");
import { expect } from 'chai';
import { baseURL } from 'C:/Projects/SRFunAPITests/cypress.json';
//const testData = require("../");


describe('Получение списка всех загруженных файлов', ()=> {
    it('Get ALL files', () => {
        cy.request({
            url: baseURL+"/srfun/api/Posts/GetAll",
            metod: 'GET'
            })
            .should((Response) => {
                cy.log(JSON.stringify(Response.body))
                expect(Response.status).to.eq(200)
                              
            })
            
            
            
    })
})