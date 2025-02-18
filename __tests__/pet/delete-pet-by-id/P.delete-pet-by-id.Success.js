const deletepetbyid= require('../../../collections/pet/delete-pet-by-id');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});


describe('Success delete pet by id', () => {
    test.each(Object.values(testData))(
        "Test find pet by id $title ", async ({body,expected_result }) => {

            resdeletePetById = await deletepetbyid.deletePetById(body);
            logger.logRequest(resdeletePetById);
            logger.logResponse(resdeletePetById);
            logger.logExpectation(resdeletePetById);
            logger.logMessage("hasil dari add pet");

            expect(resdeletePetById.statusCode).toEqual(expected_result.status_code);
            expect(resdeletePetById.body).toMatchObject(expected_result.body) 
        });
});