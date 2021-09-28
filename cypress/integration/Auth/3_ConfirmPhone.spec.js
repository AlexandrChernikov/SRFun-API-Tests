/// <reference types="cypress" />
const { describe } = require("mocha");
import { expect } from 'chai';
import { baseURL } from '../../../cypress.json';
//const testData = require("../");


describe('Отправка кода верификации по смс для создания пользователя', ()=> {

    let token;
   
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
    }).then(response => {
        token = response.body.accessToken;
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.accessToken).to.not.be.null;
        
        //SET token 
       //const token = (resbody.accessToken)
        });      
    });

//https://dou.ua/lenta/articles/choosing-postman/
    let confToken;

    it('Verify Phone number', () => {
        cy.request({
            url: baseURL+"/srfun/api/Auth/VerifyPhone",
            method: 'POST',
            headers: {'Authorization': `Bearer ${token}`},
            body:   {
                'phone': '+79520505577'
                    }
            })
            .then(response => {
                confToken = response.body.accessToken
                //cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(200)
                //cy.log(JSON.stringify(confToken))    
            });
            // Set token for phone confirmation 
    });
    
    

    it('Confirm phone', () => {
        cy.request({
            url: baseURL+ '/srfun/api/Auth/ConfirmPhone',
            method: 'POST',
            headers: {'Authorization':'Bearer '+ confToken },
            body:   {
                "code": "0000"
                    }
                }).then(response => {
                    expect(response.status).to.eq(200)
                });
            });     
        

});