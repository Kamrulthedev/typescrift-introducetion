{
    //Type alias


    type Studend =  {
        name: string;
        age: number;
        contect?: number;
        college: string
        address?:string
    };

    const Name1: Studend= {
        name: 'Kamrul',
        age: 12,
        contect:344444432,
        college: "Cox`s Bazar"
    };

    const Name2: Studend = {
        name: 'Kamrul',
        age: 12,
        college: "Cox`s Bazar"
    };
    
    const Name3:Studend = {
        name: 'Kamrul',
        age: 12,
        contect:344444432,
        college: "Cox`s Bazar",
        address:"Cox`s Bazar"
    };


    type Ka = string

    const Name4:Ka = "Kamrul"



}