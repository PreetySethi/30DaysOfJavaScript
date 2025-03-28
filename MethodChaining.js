class Car {
    setMake(make) {
        this.make = make;
        return this;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}

const car = new Car().setMake('Toyota').setModel('Corolla').setColor('Blue');