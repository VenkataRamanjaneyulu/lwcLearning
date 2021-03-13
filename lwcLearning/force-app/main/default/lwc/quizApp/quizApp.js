import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions = [
        {
            id:"1",
            question:"Which is the following is not a directive?",
            options: {
                "a" : "forEach",
                "b":"if:true",
                "c":"if-true",
                "d":"iterator",
            },
            correctAnswer: "c",
        },
        {
            id:"2",
            question:"Can We embed aura component in LWC?",
            options: {
                "a" : "true",
                "b":"false",
            },
            correctAnswer: "b",
        },
        {
            id:"3",
            question:"LWC is faster than Aura Component?",
            options: {
                "a" : "true",
                "b":"false",
            },
            correctAnswer: "a",
        },
    ];

    selected ={};
    correctAnswers = 0;
    isSubmitted = false;

    //for storing selected answers
    onchangeHandler(event){
        const {name,value} = event.target; //object destructuring.
        this.selected = {...this.selected, [name]:value}; //rest operator
    }

    //for disabling submit button
    get allNotSelected(){
      return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    //for styling the results hidden div
    get scoresStyle(){
        return `slds-text-heading_large slds-align_absolute-center ${this.correctAnswers === this.myQuestions.length ? 'slds-text-color_success':'slds-text-color_error'}`;
    }

    //for calculating scores
    submitHandler(event){
        event.preventDefault(); // prevents page refresh
        //filering the correct answers by using array method filter
        let correct = this.myQuestions.filter( item =>{
           return ( this.selected[item.id]=== item.correctAnswer);
        });
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
        
    }

    //for resetting the form
    resetHandler(event){
        this.selected= {};
        this.correctAnswers= 0;
        this.isSubmitted = false;
    }
}