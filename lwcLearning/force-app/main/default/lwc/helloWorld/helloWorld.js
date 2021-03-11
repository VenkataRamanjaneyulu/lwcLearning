import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
    name =' Defult Name';
    num1 = 10;
    num2 = 20;

    @track address ={
        pincode: 500059,
        city: "Hyderabad",
        country: "India",
    }

    users = ['John','Mark','Luke'];

    get sumOfNumbers(){
        return this.num1+this.num2;
    }

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    twoWayBindHandler(event){
        this.name= event.target.value;
    }
    

    trackHandler(event){
        this.address.city = event.target.value;
    }

    /*
    changeHandlerWithOutTrack(event){
        this.address = {...this.address, "city":event.target.value};
    } */
}