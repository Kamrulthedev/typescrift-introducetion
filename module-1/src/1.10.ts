{
    //union types & intersection types



    //union type --- | 

    type FullName = "Kamrul" | "Hassan";
    const name1: FullName = 'Kamrul' //Kamrul | Hassan

    type L1Developer = 'fakibajDeveloper' | 'Jonior Developer';

    type UserInfo = {
        name: string;
        id: number;
        address: string,
        isMerred: boolean
        booled: 'O+' | 'A+' | 'B+' | 'AB+'
    }


    const user1: UserInfo = {
        name: 'Kmaeul',
        id: 12,
        address: 'cox`s Bazar',
        isMerred: false,
        booled: 'A+'
    };



    //intersection types
    // &------intersection types

    type FontDev = {
        name: string;
        skills: string;
        skill: 'Fontend Developer'
    };

    type BackDev = {
        name: string;
        skills: string[];
        skill: 'Beckend Developer'
    };

    type FullDev = FontDev & BackDev

    const Developer: FullDev = {
        name: 'Kmarul',
        skills: ['HTML', 'Css', 'JS'],
        skill: 'Beckend Developer'
    }

}