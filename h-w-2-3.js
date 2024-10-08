







class Button {
    constructor(width, height, type = "button", color = "green") {
        this.button_width = width+6;
        this.height = height;
        this.type = type;
        this.color = color;
        this.props = {propsWidth: this.button_width, propsHeight: this.height, type: this.type, propsColor: this.color} 
    }
    onClick() {
        console.log(this.props)
    }
}

let OurButton = new Button(30, 2)
OurButton.onClick();

testButton(OurButton, 36, 2, "button", "green")

function testButton(button, expectedWidth, expectedHeight, expectedType, expectedColor) {
    if (
        button.button_width ===expectedWidth && 
        button.height === expectedHeight && 
        button.type === expectedType && 
        button.color === expectedColor 
    ) {
        console.log("Button has been created correctly")
    } else {
        console.log("Button has been created incorrectly")    
    }
}