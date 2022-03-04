class Component {

    constructor(selector) {
        this.$selector = document.querySelector(selector);
    }

    show() {
        this.$selector.style.display = 'block';
    }

    hide() {
        this.$selector.style.display = 'none';
    }

}

class Box extends Component {

    constructor(properties) {
        super(properties.selector);
        
        this.$selector.style.background = properties.color;
        this.$selector.style.width = this.$selector.style.height = properties.size + 'px';
    }

}

class Circle extends Box {

    constructor(properties) {
        super(properties);

        this.$selector.style.borderRadius = properties.borderRadius;
    }
}

const box1 = new Box({
    selector: '#box1',
    color: 'yellow',
    size: 100
});

const box2 = new Box({
    selector: '#box2',
    color: 'green',
    size: 150
});

const circle1 = new Circle({
    selector: '#circle1',
    color: 'black',
    size: 300,
    borderRadius: '%'
})