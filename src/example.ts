class Human {
    public name: string; // public을 private으로 바꿀경우 class 밖에서 사용할 수 없음.
    public age: number; 
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 20, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}!!`;
}

console.log(sayHi(lynn));

export {};