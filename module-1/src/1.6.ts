//Larning function 
    // function 2 types
    // 1.normal function
    // 2. arrow function

    //normal function
    const add = (num1: number, num2: number):number =>{
        return num1 + num2
    };

    add(1, 4);
    



    //arrow function
const added = (num1:number, num2:number):number=>num1+num2

added(2, 3);


// Object-->function -- > method
const NameUser = {
    name: "Kamrul",
    balance: 0, 
    addBalance(amount: number): string {
        this.balance += amount; 
        return `My new balance: ${this.balance}`; 
    },
};

// Example usage of the object's method
const result = NameUser.addBalance(100); 
console.log(result); 



//square numbar 

const arry: number[] =[1, 2, 3, 4, 5];

const newArray :number[] = arry.map((elem:number):number => elem * elem);   

