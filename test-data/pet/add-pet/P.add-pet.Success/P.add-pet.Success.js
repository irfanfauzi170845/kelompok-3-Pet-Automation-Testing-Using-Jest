const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
//const schema=require('../../../../schema/users/get-users-list.json')

const test_data = {
    "title": scriptName,
    "header": {},
    "body":{
        "id": __PET_ID__,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "dog",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    },
    "expected_result": {
        "status_code": 200,
        "body": {},
        "json_schema":{},
    }
}

module.exports = test_data;
