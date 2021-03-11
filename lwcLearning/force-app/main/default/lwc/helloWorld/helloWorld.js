import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
   

    @track address ={
        pincode: 500059,
        city: "Hyderabad",
        country: "India",
    }

    changeHandler(event){
        this.address.city= event.target.value;
    }

    /*
    changeHandlerWithOutTrack(event){
        this.address = {...this.address, "city":event.target.value};
    } */
}