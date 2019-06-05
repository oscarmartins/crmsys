const express = require('express');
const router = express.Router();
const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res, next) => {
    res.send('its works!!');
});

router.get('/posts', (req, res, next) => {
    axios.get(`${PostAPI}/posts`).then(posts=>{
        res.status(200).json(posts.data);
    })
    .catch(error => {
        res.status(500).send(error);
    })
});

router.get('/contact_manager/gridcontactsall', (req, res, next) => {
    var data = {
        rows:[
            { id:1001,
        data:[
            "A Time to Kill1",
            "John Grisham2",
            "abc@ever.com3"
        ] },
        { id:1002,
        data:[
            "Blood and Smoke",
            "Stephen King",
            "abc2@ever2.com"
        ] },
        { id:1003,
        data:[
            "Blood and Smoke3",
            "Stephen King3",
            "abc2@ever2.com3"
        ] }
        ]};
        res.status(200).json(data);
});

router.post('/contact_manager/formsavecontact', (req, res, next) => {
    res.status(200).json({ok:1});
});

module.exports = router;