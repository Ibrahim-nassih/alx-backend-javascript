const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    const CloningClass = Object.getPrototypeOf(this).constructor;
    return new CloningClass(this._brand, this._motor, this._color);
  }
}
