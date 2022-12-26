
const express = require('express');
const app = express();

const proppers=[
    {
        id: 1,
        name: 'Xiaomi Black Shark 2 Pro',
        price: 875,
        amount:10
    },
    {
        id: 2,
        name: 'Ipad PRO',
        price: 2480,
        amount:8
    },
    {
        id: 3,
        name: 'Iphone SE',
        price: 1149,
        amount:5
    },
    {
        id: 4,
        name: 'Samsung M515',
        price: 740,
        amount:10
    },
    {
        id: 5,
        name: 'Xiomi Redmi note 9 PRO',
        price: 536,
        amount:8
    },
    {
        id: 6,
        name: 'Honor 9C',
        price: 638,
        amount:5
    },
    {
        id: 7,
        name: 'Huawei P40 Pro',
        price: 750,
        amount:8
    },
    {
        id: 8,
        name: 'OPPO Reno 4 Lite',
        price: 860,
        amount:5
    },
    {
        id: 9,
        name: 'Realme C3',
        price: 780,
        amount:10
    },
    {
        id: 10,
        name: 'Vivo V20',
        price: 450,
        amount:8
    },

]
app.get('/proppers',  (req , res) => {
    const propper=proppers
    if(!propper) {res.status(404)}
    res.send(propper)
});

app.get('/proppers/:id',  (req , res) => {
    const id=+req.params.id;
    const propper=proppers.find(propper=>propper.id===id)
    if(!propper) {res.status(404)}
    res.send(propper.name)
});
app.listen(8300, function () {
    console.log('Example app listening on port 8300!');
  });