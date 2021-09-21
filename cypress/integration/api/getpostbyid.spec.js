/// <reference types="cypress" />
import testData from "../../fixtures/getpostByID.json"
//const { describe } = require("mocha");
import { describe } from 'mocha';
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
        
       const token = (resbody.accessToken)



        cy.request({
            url: baseURL+"/srfun/api/Posts/Get?postId=65317a5f-b99a-4187-b7a8-d4934b53dd9c",
            method: "GET",
            //headers: {"postId": "619bc25f-bd3d-46cb-8542-5842145c8293"},
            failOnStatusCode: false
        }).should((Response) => {
            cy.log(JSON.stringify(Response.body)) 
            expect(Response.status).to.eq(204)
                          
        }) 
    });

    it('Get Post by id prorerties', () => {
        cy.request('GET', baseURL+"/srfun/api/Posts/Get?postId=65317a5f-b99a-4187-b7a8-d4934b53dd9c").then((res) =>{
            expect(res.status).eq(204)
            expect(res.body).has.property("id","65317a5f-b99a-4187-b7a8-d4934b53dd9c")
            //expect(res.body).has.property("imageLink", "https://srfun.koniglabs.ru/videos/eb3a376f-3f83-4c2b-88bf-093b61062049.jpg")
            //expect(res.body).has.property("videoLink", "https://srfun.koniglabs.ru/videos/4dbc833c-3a20-4af5-9bd3-14fdb235184a.mp4")
            //expect(res.body).has.property("createdAt", "2021-08-28T14:32:57.225035")
            //expect(res.body).has.length(7)
            cy.log(JSON.stringify(res.body))
            cy.clock(Date.Response)
        })
            
            //headers: {"postId": "619bc25f-bd3d-46cb-8542-5842145c8293"},
            failOnStatusCode: false
        })
       
    });
});     