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

    function shapeLogo({ logoText, colorText, logoShape, colorShape}){
        let shape = logoShape
        switch(shape){
            case 'Circle': 
                return new Circle(logoText, colorText, colorShape);
            case 'Triangle': 
                return new Triangle(logoText, colorText, colorShape);
            case 'Square': 
                return new Square(logoText, colorText, colorShape);
        } 
    };


inquirer.default.prompt(questions)
.then((answers)=>{
     const shapes = new shapeLogo(answers)
        fs.writeFile("Logo.svg", shapes.render(), (err)=>
        {if (err){
           console.log("Something went wrong, please try again!");}
        else{
            console.log("Generated logo.svg")}
        });
});