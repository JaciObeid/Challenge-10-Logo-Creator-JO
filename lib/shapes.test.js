const {Circle, Triangle, Square} = require('./shapes.js')

test('Circle render method', () =>{
    const shape = new Circle("skl", "green", "aqua");
    expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="100" fill="aqua" />
        <text x="100" y="120" fill="green" text-anchor='middle' font-size="60">skl</text>
        </svg>`)
});

test('Triangle render method', () =>{
    const shape = new Triangle("asd", "blue", "purple");
    expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,0 0,200 200,200" fill="purple"/>
        <text x="100" y="150" fill="blue" text-anchor="middle" font-size="60">asd</text>
        </svg>`)
});

test('Square render method', () =>{
    const shape = new Square("qwe", "yellow", "pink");
    expect(shape.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="0" y="0" fill="pink" />
        <text x="100" y="120" fill="yellow" text-anchor='middle' font-size="60">qwe</text>
        </svg>`)
});


