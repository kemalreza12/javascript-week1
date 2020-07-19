let data = {
    id: 1,
    name: "Leanne Graham" ,
    username: "Bret",
    email: "Sincere@april.biz" ,
    address:
    {
        street: "Kulas Light" ,
        suite: "Apt. 556",
        city: "Gwenborough" ,
        zipcode: "92998-3874" ,
    },
    phone: "1-770-736-8031 x56442" ,
    website: "hildegard.org" ,
}

const data2 = {
    name: "Kemal Reza",
    email: "kemalreza92@gmail.com"
}

const data3 = {
    hobby: "Swimming, Watching film, Reading, Playing badminton"
}

const merge = {...data, ...data2, ...data3};
console.log(merge)

const {street, city} = data.address;
console.log(street, city)