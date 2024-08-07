const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require('./lib/shapes')

const questions = [
    { type: 'input',
        message:'What letters, up to 3, would you like in your logo?',
        name: 'logoText'},   
    {type: 'input',
        message:'What color would you like the text in your logo to be?',
        name:'colorText'
    },
    { type: 'list',
        message:'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'logoShape'},
    {type:'input',
        message:'What color would you like you shape to be?',
        name:'colorShape'
    }]

    function shapeLogo(logoText, colorText, logoShape, colorShape){
        //let shape = logoShape
        switch(logoShape){
            case 'Circle': 
                shape = new Circle(logoText, colorText, colorShape);
            break;
            case 'Triangle': 
                shape = new Triangle(logoText, colorText, colorShape);
            break;
            case 'Square': 
                shape = new Square(logoText, colorText, colorShape);
            break;
        } 
        return shape
    };


inquirer.default.prompt(questions)
.then((answers)=>{
    //console.log(answers)
    const logo = new shapeLogo(answers.logoText, answers.colorText, answers.logoShape, answers.colorShape);

        fs.writeFile("Logo.svg", logo.render(), (err)=>
        {if (err){
           console.log("Something went wrong, please try again!");}
        else{
            console.log("Generated logo.svg")}
        });
});