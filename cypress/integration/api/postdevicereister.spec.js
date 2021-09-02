/// <reference types="Cypress" />
import { baseURL } from '../../../cypress.json'
const testData = require('../../fixtures/devicereg.json');
//import { testData  } from '../fixtures/devicereg.json'

describe('Device reg', () =>  {
    // let accessToken = ''
    testData.forEach((testDataRow) =>{
        const data ={  
            deviceId:       testData.deviceId,
            model:          testData.model,
            manufacturer:   testData.manufacturer,
            name:           testData.name,
            version:        testData.version,
            serialNumber:   testData.serialNumber,
            platform:       testData.platform,
            idiom:          testData.idiom,
            type:           testData.type
        };
    

        context(`Context is ${testDataRow.context}`, () => {
                it('POST device info', () => {
                    cy.request({
                        method:'POST', 
                        url: baseURL + '​/srfun​/api​/Auth​/deviceregister',
                    // haders: {
                    //     'Authorization': 'Barer ' + accessToken
                    // },
                    body:  data   
                }).then((res)=>{
                    expect(res.status).eq(200)
                })
            });
        });
    });
});