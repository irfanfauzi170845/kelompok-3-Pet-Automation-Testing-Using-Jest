const restApiCaller = require('../../callers/rest-api');

const queryparamAvailable="?status=available";
const endpointStatusAvailable="/pet/findByStatus"+queryparamAvailable;

const queryparamPending="?status=pending";
const endpointStatusPending="/pet/findByStatus"+queryparamPending;

const queryparamSold="?status=sold";
const endpointStatusSold="/pet/findByStatus"+queryparamSold;

const queryparamInvalid="?status=tersedia";
const endpointStatusParamInvalid="/pet/findByStatus"+queryparamInvalid;

const queryparamNull="?status=";
const endpointStatusParamNull="/pet/findByStatus"+queryparamNull;

const endpointInvalid="?status=available";
const endpointStatusEndpointInvalid="/pet/Status"+endpointInvalid;

async function statusAvailable(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusAvailable,
        header: {}
    })
    const res = await caller.get()
    return res
}
async function statusPending(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusPending,
        header: {}
    })
    const res = await caller.get()
    return res
}
async function statusSold(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusSold,
        header: {}
    })
    const res = await caller.get()
    return res
}
async function statusQueryParamInvalid(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusParamInvalid,
        header: {}
    })
    const res = await caller.get()
    return res
}
async function statusQueryParamNull(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusParamNull,
        header: {}
    })
    const res = await caller.get()
    return res
}
async function statusEndpointInvalid(header) {
    const caller = new restApiCaller({
        url: __URL_PET__,
        endPoint: endpointStatusEndpointInvalid,
        header: {}
    })
    const res = await caller.get()
    return res
}
module.exports={
    statusAvailable, 
    statusPending, 
    statusSold,
    statusQueryParamInvalid,
    statusQueryParamNull,
    statusEndpointInvalid
};