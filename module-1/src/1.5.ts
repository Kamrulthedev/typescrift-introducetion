//Refareans Types---->Optional


const user: {
    // school:'Kamlarmer Chhra high school'; //literal types
    //  school: string;-------change value
    readonly school: string; //-------- not change value
    firstName: string;
    MiddleName: string;    //optionl types
    isMarred: boolean
} = {
    school: 'Kamlarmer Chhra high school',
    firstName: 'Kamrul',
    MiddleName: 'Hassan',
    isMarred: false
};

// user.school = 'KA'