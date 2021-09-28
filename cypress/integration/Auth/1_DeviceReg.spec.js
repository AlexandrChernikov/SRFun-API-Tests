/// <reference types="Cypress" />
import { baseURL } from '../../../cypress.json'
const testData = require('../../fixtures/devicereg.json');
//import { testData  } from '../fixtures/devicereg.json'

describe('Device reg', () =>  {
    
    testData.forEach((testDataRow) =>{
       

        context('Регистрация устройства', () => {
                it('POST device info', () => {
                    cy.request({
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
                    
                })
            });
        });
    });
});