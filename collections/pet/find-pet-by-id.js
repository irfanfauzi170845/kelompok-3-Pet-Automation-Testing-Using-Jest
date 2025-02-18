const restApiCaller = require('../../callers/rest-api');

const petid=__PET_ID__;
const endpointPetID="/pet/"+petid;

async function findPetById(body) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointPetID,
        header: {
            "Content-Type": "application/json"
        },
        body:body
    })
    const res = await caller.get()
    return res
}

module.exports={
    findPetById
};