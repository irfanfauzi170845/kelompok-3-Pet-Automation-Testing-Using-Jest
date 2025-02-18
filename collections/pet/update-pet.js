const restApiCaller = require('../../callers/rest-api');

//const queryparamAvailable="?status=available";
const endpointAddPet="/pet";

async function updatePet(body) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointAddPet,
        header: {
            "Content-Type": "application/json"
        },
        body:body
    })
    const res = await caller.put()
    return res
}

module.exports={
    updatePet
};