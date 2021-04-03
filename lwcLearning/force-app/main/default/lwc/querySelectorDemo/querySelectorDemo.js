import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    userNames = ['anil','beny','karuna','satyavati','jason','chinnu'];
    detailHandler(){
        const h1 = this.template.querySelector('h1');
        h1.style.border= "1px solid red";
        console.log(h1.innerText);
        
        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText);
            item.setAttribute('title',item.innerText);
        });

        const childElem = this.template.querySelector('.child');
        childElem.innerHTML= '<p>I am a child Element</p>';
        console.log(childElem.innerText);
    }
}