const SPEED = .02;

export default class Sur {
    constructor(surElem) {
        this.surElem = surElem;
        this.reset();
    }

    get position() {
        return parseFloat(getComputedStyle(this.surElem).getPropertyValue('--position'));
    }

    set position(value) {
        this.surElem.style.setProperty('--position', value);
    }

    rect() {
        return this.surElem.getBoundingClientRect();
    }

    reset() {
        this.position = 50;
    }

    update (delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position);
    }
}