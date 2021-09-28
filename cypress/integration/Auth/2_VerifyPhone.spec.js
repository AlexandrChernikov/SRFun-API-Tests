/// <reference types="cypress" />
const { describe } = require("mocha");
import { expect } from 'chai';
import { baseURL } from '../../../cypress.json';
//const testData = require("../");


describe('Отправка кода верификации по смс для создания пользователя', ()=> {

    

    it('Verify Phone number', () => {
        cy.request({  //get token
            method:'POST', 
            url: baseURL + '​/srfun/api/Auth/deviceregister',
            body: {
                "OrigDevId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "model": "string",
                "manufacturer": "string",
                "name": "string",
                "version": "string",
                "serialNumber": "string",
                "platform": "Unknown",
                "idiom": "Unknown",
                "type": "Unknown"
             },
            failOnStatusCode: false   
    }).then(function(response){
        const resbody = (response.body)
        expect(response.status).eq(200)
        expect(resbody).to.not.be.null
        expect(resbody.accessToken).to.not.be.null
        
        //SET token 
       const token = (resbody.accessToken)
          


        cy.request({
            url: baseURL+"/srfun/api/Auth/VerifyPhone",
            method: 'POST',
            headers: {'Authorization': 'Bearer '+ token},
            body:   {
                'phone': '+79520505577'
                    }
            })
            .should((Response) => {
                cy.log(JSON.stringify(Response.body))
                expect(Response.status).to.eq(200)
                              
            })
        })     
            
            
    })
})