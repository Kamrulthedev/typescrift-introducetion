//array and object destructserring

const inituser = {
    id: 122,
    firstName: 'Kameul',
    college: 'cox`s Bazar',
    class: 11,
    contect: {
        Phone: '01299999999',
        email: 'kamrulthedev@gmail.com',
        address: 'barmiz market'
    }
};

const { college: Kmarul
    , contect: { Phone, email, address } } = inituser;


//array destrucsering

const NameOut = ['Kamrul', 'Hassan', 'Rohim', 'mohim', 'monica', 'honica', 'gonica'];

const [,, bestFriend, ...rest] = NameOut;


