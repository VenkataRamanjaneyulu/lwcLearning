import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    cars = ["Audi","BMW","Hyundai"];

    ceoList = [
        {
            name:'SundarPichai',
            company:'Google',
            id:1,
        },
        {
            name:'MarcBeniof',
            company:'Salesforce',
            id:2,
        },
        {
            name:'Amazon',
            company:'JeffBezos',
            id:3,
        },
        {
            name:'Facebook',
            company:'MarkZuckerberg',
            id:4,
        },
    ];

}