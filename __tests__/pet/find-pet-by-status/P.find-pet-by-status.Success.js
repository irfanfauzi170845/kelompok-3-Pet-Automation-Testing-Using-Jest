const findpetbystatus = require('../../../collections/pet/find_pet_by_status');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});


describe('Success find pet by status', () => {
    test.each(Object.values(testData))(
        "Test Available $title ", async ({header, expected_result }) => {

            resAvailable = await findpetbystatus.statusAvailable(header);
            logger.logRequest(resAvailable);
            logger.logResponse(resAvailable);
            logger.logExpectation(resAvailable);
            logger.logMessage("hasil dari status Available");

            expect(resAvailable.statusCode).toEqual(expected_result.status_code);
            expect(resAvailable.body).toMatchObject(expected_result.body)
            //expect(resAvailable.json_schema).toContain(expected_result.json_schema)
        });
        test.each(Object.values(testData))(
            "Test Pending $title ", async ({header, expected_result }) => {
    
                resPending = await findpetbystatus.statusPending(header);
                logger.logRequest(resPending);
                logger.logResponse(resPending);
                logger.logExpectation(resPending);
                logger.logMessage("hasil dari status Pending");
    
                expect(resPending.statusCode).toEqual(expected_result.status_code);
                expect(resPending.body).toMatchObject(expected_result.body)
            });
            test.each(Object.values(testData))(
                "Test Sold $title ", async ({ header, expected_result }) => {
        
                    resSold = await findpetbystatus.statusPending(header);
                    logger.logRequest(resSold);
                    logger.logResponse(resSold);
                    logger.logExpectation(resSold);
                    logger.logMessage("hasil dari status Sold");
        
                    expect(resSold.statusCode).toEqual(expected_result.status_code);
                    expect(resSold.body).toMatchObject(expected_result.body)
                });
});

describe('Success find pet by status-Query Param Invalid and null', () => {
    test.each(Object.values(testData))(
        "Test Query Param Invalid $title ", async ({header, expected_result }) => {

            resParamInvalid = await findpetbystatus.statusQueryParamInvalid(header);
            logger.logRequest(resParamInvalid);
            logger.logResponse(resParamInvalid);
            logger.logExpectation(resParamInvalid);
            logger.logMessage("hasil query param Invalid");

            expect(resParamInvalid.statusCode).toEqual(expected_result.status_code);
            expect(resParamInvalid.body).toMatchObject(expected_result.body)
        });
        test.each(Object.values(testData))(
            "Test Query Param Null $title ", async ({header, expected_result }) => {
    
                resParamNull = await findpetbystatus.statusQueryParamInvalid(header);
                logger.logRequest(resParamNull);
                logger.logResponse(resParamNull);
                logger.logExpectation(resParamNull);
                logger.logMessage("hasil query param Null");

                expect(resParamNull.statusCode).toEqual(expected_result.status_code);
                expect(resParamNull.body).toMatchObject(expected_result.body)
            });

});