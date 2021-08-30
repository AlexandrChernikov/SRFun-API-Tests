/// <reference types="cypress" />
import testData from "../../fixtures/getpostByID.json"
const { describe } = require("mocha");
import { expect } from 'chai';
//import { data } from 'cypress/types/jquery';
import { baseURL } from "../../../cypress.json"


describe('Получение записи по ID', () =>{
    testData.forEach((testDataRow) =>{
        const data={
            "id": testDataRow.id            
          };        
    });

    it('Get Post by id', () => {
        cy.request({
            url: baseURL+"/srfun/api/Posts/Get?postId=50c2795e-9056-4f37-8d67-64990922cd53",
            method: "GET"
        })
        .should((Response) => {
            cy.log(JSON.stringify(Response.body))
            expect(Response.status).to.eq(200)
                          
        })
    });
});     