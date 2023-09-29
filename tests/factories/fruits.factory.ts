import { faker } from '@faker-js/faker';
import { Fruit } from "../../src/repositories/fruits-repository";
import fruitsRepository from "../../src/repositories/fruits-repository"

export type FruitInputs = Omit<Fruit, ("id")>;

export async function insertFruits(  name: string, price: number) {
    const fruit: FruitInputs = {
  name,
  price
    };
  
    const result = fruitsRepository.insertFruit(fruit)
    return result;
  }

export async function randomFruit() {
    const id = faker.number.int();
    const name = "sapo"
    const price = faker.number.float();
    const fruit = {name, price}
    return fruit;
  }

  export async function randomFruitWithId() {
    const id = faker.number.int();
    const name = "sapo"
    const price = faker.number.float();
    const fruit = {id, name, price}
    return fruit;
  }

  export async function randomFruits() {
    const id = faker.number.int();
    const name = faker.internet.userName();
    const price = faker.number.float();
    const fruit = {name, price}
    return fruit;
  }

  export async function randomFruitsWithId() {
    const id = faker.number.int();
    const name = "sapo"
    const price = faker.number.float();
    const fruit = {id, name, price}
    return fruit;
  }

  export async function randomFruitsWithIdA() {
    const id = faker.number.int();
    const name = faker.internet.userName();
    const price = faker.number.float();
    const fruit:FruitInputs = {name, price}
    return insertFruits(name, price);
  }