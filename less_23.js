// *********************************** LESS 23 ********************************************

// # 1 Prototype inheritance

class BankAccount {
  constructor(balance, accountHolder) {
    this.balance = balance;
    this.accountHolder = accountHolder;
  }

  get printBalance() {
    return this.balance;
  }

  set addBankAccount (arg) {
    const [balance, accountHolder] = arg;
    this.balance = balance;
    this.accountHolder = accountHolder;
  }

}

const user = new BankAccount(1000000, 'Oleg');
console.log(user);
console.log(user.printBalance);
console.log(user.addBankAccount = ["Ira", 4000])


// ***********************************************************************************

// # 2 Inheritance and Polymorphism

class Animal{
  constructor(name) {
    this.name = name;
  }

  getInfo = () => {
    return `animal name ${this.name}`;
  }
};

class Mammal extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }

  run = () => {
    return `${this.name} - run `;
  }

  getInfo = () => {
    return super.getInfo() + 'is mammal';
  }
};

class Bird extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }

  fly = () => {
    return `${this.name} - fly`;
  }

  getInfo = () => {
    return super.getInfo() + ' is bird';
  }
};

class Dog extends Mammal {
  constructor(name, live, breed) {
    super(name, live);
    this.breed = breed;
  }

  whoIsGoodDog = () => {
    return ' woof woof';
  }
}

class Penguin extends Bird {
  constructor(name, live, species) {
    super(name, live);
    this.species = species;
  }

  fly = () => {
    return "Can't fly";
  }

  swim = () => {
    return `${this.name} - swim`;
  }
}

const pig = new Mammal('pig', 'village');
console.log(pig.run());

const penguin = new Penguin("penguin", "ocean", "swim");
const dog = new Dog("dogName", "city");

console.log(penguin);
console.log(penguin.swim());

console.log(dog);
console.log(dog.whoIsGoodDog());


// ***********************************************************************************

// # 3 OOP

class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.mass = mass;
    this.started = false;
  };
  
  
getMaxSpeed() {
  const maxSpeed = Math.round(0.84 * this.power / this.mass);
  return maxSpeed;
}

getGasUsage() {
  return Math.round(this.getMaxSpeed() / this.power * 100);
}

startEngine() {
  this.started = true;
}

stopEngine() {
  this.started = false;
}

drive(speed, distance) {

  if (this.started == false) {
    console.log("Cannot drive. start engine");
    
  }

  if (speed > this.getMaxSpeed() || speed < 0) {
    console.log(' Cannot drive ');
    
  }

  const gasUsage = this.getGasUsage();
  const gasLevel = (distance * gasUsage) / 100;

  if (gasLevel > this.gasTank) {
    console.log(`Cannot drive.`);
    
  }

  this.gasTank -= gasLevel;
  console.log(this.gasTank);
}

addGas(arg) {
  if (arg <= 0) {
    console.log("Cannot add gas. Gas amount must be greater than zero.");
  }

}

printInfo() {
  console.log(`Power ${this.power}, Tank ${this.gasTank}, liters
    Mass ${this.mass} tonnes, Max Speed ${this.getMaxSpeed()}, Usage ${this.getGasUsa()}, 
Engine ${this.started}, Gas${this.gasTank}`);
}
}

class Car extends Vehicle {
  constructor(power, gasTank, mass, type, maxPassengerCount) {
    super(power, gasTank, mass);
    this.type = type;
    this.maxPassengerCount = maxPassengerCount;
    
  }

  printInfo() {
    super.printInfo();
    console.log(`Type- ${this.type}, Max Passenger-${this.maxPassengerCount}`);
  }
}

class Bus extends Car {
  constructor(power, gasTank, mass, type, maxPassengerCount, passengerCount) {
    super(power, gasTank, mass, type, maxPassengerCount);
    this.passengerCount = passengerCount;
  }

  updatePassengers(passengers) {
    passengers = this.passengerCount;
    if ( this.passengerCount < this.maxPassengerCount && this.passengerCount > 0 ) {
      printInfo() {
        super.printInfo();
        console.log(`${this.maxPassengerCount}`);
      }
    
    }
    
  }

}

const vaz = new Car(200, 75, 2, "Sport", 5);
vaz.startEngine();
