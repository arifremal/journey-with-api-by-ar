// const user = {
//     id:1,name:'arif',k:true
// }
// console.log(user);
// const s= JSON.stringify(user)
// console.log(s);

const shop = {
    owner:'arif',
    address:{
        street:9090,
        city:'hb',
        country:'bd'
    },
    products:['laptop','mobile','keyboard'],
    revenre: 5600,
    isOpen: true,
    isNew:false
}
console.log(shop);
const j = JSON.stringify(shop)
console.log(j);