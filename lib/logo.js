
class Shape {
    constructor(logoText, colorText, colorShape){
    if (logoText.length > 3 || logoText.length < 1){
    throw new error('Text needs to be between 1 and 3 charcters long')
    }
    this.logoText = logoText;
    this.colorText = colorText;
    this.colorShape = colorShape}
};


class Circle extends Shape{
    render(){
        let circle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="100" fill="${this.colorShape}" />
        <text x="100" y="120" fill="${this.colortext}" text-anchor='middle' font-size="60">${this.logoText}</text>
        </svg>`;
        return circle
    }};

class Trianle extends Shape{
    render(){
        let triangle = `<svg width="300 height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 0,200 200,200" fill="${this.colorShape}"/>
        <text x="100" y="150" fill="${this.colorText}" text-anchor="middle" font-size="60">${this.logoText}</text>
        </svg>`;
        return triangle
    }
}
class Square extends Shape{
    render(){
        let square=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="0" y="0" fill="${this.colorShape}" />
        <text x="100" y="120" fill="${this.colorText}" text-anchor='middle' font-size="60">${this.logoText}</text>
        </svg>`;
        return square
    }
}





    