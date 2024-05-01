//spread operator

const name1: string[] = ["Kameul", "tarek", "Hannan", "Tohid"];
const name2: string[] = ["Tomal", "comal", "Komal", "Homal"];
name1.push(...name2)



const user1 = {
    Mobaile: 'Kamal',
    Laptop: 'Hosain',
    Destop: 'Homaoun'
};

const user2 = {
    school: 'Coox`s Bazar',
    Ol: 'Kamrul',
};
const userList = {
    ...user1,
    ...user2
};

//rest Operator

const NameOrder = (...friends: string[]) => {
    //  console.log(`Hi ${friends1} ${firends3} ${friends2}` )
    friends.forEach((friend: string) =>
        console.log(`Hi ${friend}`)
    )
};

NameOrder('Kamrul', 'hamrul', 'tamrul');


//rest Operator
const NameIn = (...Name3: string[]) => {
         Name3.forEach((Name:string)=>{
            console.log(`Hi ${Name}`)
         });
};

NameIn('Him', 'dim', 'sim');



