const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
//const schema=require('../../../../schema/users/get-users-list.json')

const test_data = {
    "title": scriptName,
    "header": {},
    "expected_result": {
        "status_code": 404,
        "body": {},
        "json_schema":{},
    }
}

module.exports = test_data;
