const restApiCaller = require('../../callers/rest-api');


// const queryparamDeletePetId= __PET_ID__;
// const endpointdeletePet="/pet/"+543;

async function deletePetById(body) {

    
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: "/pet/"+__PET_ID__,
        header: {
            "Content-Type": "application/json"
        },
        body:body
    })
    const res = await caller.del()
    return res
}

module.exports={
    deletePetById
};