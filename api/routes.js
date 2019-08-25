const express = require('express');
const router = express.Router();
const axios = require('axios');
const PostAPI = 'https://jsonplaceholder.typicode.com';

const storage = require('node-persist');

storage.init({
    //dir: 'relative/path/to/persist',
 
    stringify: JSON.stringify,
 
    parse: JSON.parse,
 
    encoding: 'utf8',
 
    logging: false,  // can also be custom logging function
 
    ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
 
    expiredInterval: 60 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
 
    // in some cases, you (or some other service) might add non-valid storage files to your
    // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
    forgiveParseErrors: false
 
});

/**        
 * local_server_path: 'http://localhost:8081/orcv2',
 * remote_server_path : 'https://oscarmartins.pt/api/orcv2',
**/

async function fetchApiPolicyFn () {
    return await axios.get('http://localhost:8081/orcv2/fetchApiPolicy');
}

async function loadApiPolicy (forceLocalStorage) {
    let fetchApiPolicy = await storage.get('fetchApiPolicy');
    if (!fetchApiPolicy || forceLocalStorage) {
        fetchApiPolicy = await fetchApiPolicyFn();
        if (fetchApiPolicy.status === 200) {
            await storage.setItem('fetchApiPolicy', fetchApiPolicy.data);
            fetchApiPolicy = await storage.get('fetchApiPolicy');
        }
    }
    return fetchApiPolicy;
}

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

router.get('/sidebar', async (req, res, next) => {
    /**
    var data = {
        "items": [
            {"id": "recent", "text": "Recent", "icon": "recent.png", "selected": true, data: {"route": "/contact_manager/index.html"}},
            {"id": "desktop", "text": "Desktop", "icon": "desktop.png"},
            {"id": "downloads", "text": "Downloads", "icon": "downloads.png"},
            {"type": "separator"},
            {"id": "documents", "text": "Documents", "icon": "documents.png"},
            {"id": "music", "text": "Music", "icon": "music.png"},
            {"id": "pictures", "text": "Pictures", "icon": "pictures.png"},
            {"id": "video", "text": "Video", "icon": "video.png"},
            {"type": "separator"},
            {"id": "disk_c", "text": "Windows (C:)", "icon": "disk_c.png"},
            {"id": "disk_d", "text": "Data (D:)", "icon": "disk_d.png"},
            {"id": "disk_e", "text": "DVD RW (E:)", "icon": "disk_e.png"}
        ]};
        res.status(200).json(data);
        **/
        /**
        let fetchApiPolicy = await storage.get('fetchApiPolicy');
        if (!fetchApiPolicy) {
            fetchApiPolicy = await fetchApiPolicyFn();
            if (fetchApiPolicy.status === 200) {
                await storage.setItem('fetchApiPolicy', fetchApiPolicy.data);
                fetchApiPolicy = await storage.get('fetchApiPolicy');
            }
        } 
        **/

        let fetchApiPolicy = await loadApiPolicy();

        let reqctx = fetchApiPolicy.services.crmsys;
        let reqact = fetchApiPolicy.crmsys.sidebar;

        let parameters = {data: {REQ_CONTEX: reqctx, REQ_ACTION: reqact, REQ_INPUTS: {}}};
        axios.get('http://localhost:8081/orcv2', parameters).then( get => {
            res.status(200).json(get.data);
        }).catch(error => {
            res.status(500).send(error);
        })    
});

router.get('/contact_manager/gridcontactsall', async (req, res, next) => {
    
    var data = {
        rows:[
            { 
                id: 1001,
                data: ["A Time to Kill1","John Grisham2","abc@ever.com3"]
            }
        ]};



    /**
        res.status(200).json(data);
    */


    let fetchApiPolicy = await loadApiPolicy(true);
    let reqctx = fetchApiPolicy.services.crmsys;
    let reqact = fetchApiPolicy.crmsys.allUserGroup;
    let parameters = {data: {REQ_CONTEX: reqctx, REQ_ACTION: reqact, REQ_INPUTS: {}}};
    
    const result = await axios.get('http://localhost:8081/orcv2', parameters).then( get => {
        const data = {
            rows: []
        };
        var nextId = 100;
        get.data.data.allUserGroup.forEach(element => {
            data.rows.push({
                //id: element.id,
                id: nextId++,
                data: [element.id, element.groupname, element.groupid, element.status]
            })
        });

        res.status(200).json(data);
    }).catch(error => {
        res.status(500).send(error);
    });
    
});

router.post('/contact_manager/formsavecontact', (req, res, next) => {
    res.status(200).json({ok:1});
});

router.post('/users/add_user_group', async (req, res, next) => {
    const reqbody = req.body;
    if (typeof reqbody === 'string')
        console.log('request prop type not supported!!')
    
    if (reqbody.action === 'inserted') {
        console.log('inserted', reqbody);
        res.status(200).json(reqbody);
        return next();
    } 
    if (reqbody.action === 'updated') {
        console.log('updated', reqbody);
        let fetchApiPolicy = await loadApiPolicy();
        let reqctx = fetchApiPolicy.services.crmsys;
        let reqact = fetchApiPolicy.crmsys.addUserGroup;
        let parameters = {data: {REQ_CONTEX: reqctx, REQ_ACTION: reqact, REQ_INPUTS: reqbody}};
        
        const result = await axios.get('http://localhost:8081/orcv2', parameters).then( get => {
            var response = {"status": "ok", "action": reqbody.action, "data": get.data};
            if (!get.data.iook) {
                response.status = 'error';
                response.action = 'error';
                response.data = get.data.error;
            } 
            res.status(200).json(response);
        }).catch(error => {
            console.log(1234);
            res.status(500).send(error);
        });
        /**
        console.log('request data: ', requestData);
        **/
      
       return next();
    }
    res.status(200).json({"status": "ok", "action": reqbody.action});

});
module.exports = router;