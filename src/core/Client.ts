export default class Client {
  // # means the attribute is private
  #id: string = '';
  #name: string = '';
  #age: number = 0;

  constructor(name: string, age: number, id: string = '') {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}
