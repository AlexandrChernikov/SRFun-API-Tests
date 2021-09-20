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
        cy.request({
            url: baseURL+"/srfun/api/Posts/Get?postId=50c2795e-9056-4f37-8d67-64990922cd53",
            method: "GET",
            //headers: {"postId": "619bc25f-bd3d-46cb-8542-5842145c8293"},
            failOnStatusCode: true
        }).should((Response) => {
            cy.log(JSON.stringify(Response.body)) 
            expect(Response.status).to.eq(204)
                          
        }) 
    });

    it('Get Post by id prorerties', () => {
        cy.request('GET', baseURL+"/srfun/api/Posts/Get?postId=50c2795e-9056-4f37-8d67-64990922cd53").then((res) =>{
            expect(res.status).eq(204)
            expect(res.body).has.property("id","50c2795e-9056-4f37-8d67-64990922cd53")
            expect(res.body).has.property("imageLink", "https://srfun.koniglabs.ru/videos/eb3a376f-3f83-4c2b-88bf-093b61062049.jpg")
            expect(res.body).has.property("videoLink", "https://srfun.koniglabs.ru/videos/4dbc833c-3a20-4af5-9bd3-14fdb235184a.mp4")
            expect(res.body).has.property("createdAt", "2021-08-28T14:32:57.225035")
            //expect(res.body).has.length(7)
            cy.log(JSON.stringify(res.body))
            cy.clock(Date.Response)
        })
            
            //headers: {"postId": "619bc25f-bd3d-46cb-8542-5842145c8293"},
            failOnStatusCode: false
        })
       
    });
     