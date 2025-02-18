const updatepet= require('../../../collections/pet/update-pet');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});


describe('Success update pet', () => {
    test.each(Object.values(testData))(
        "Test update pet $title ", async ({body,expected_result }) => {

            resUpdatePet = await updatepet.updatePet(body);
            logger.logRequest(resUpdatePet);
            logger.logResponse(resUpdatePet);
            logger.logExpectation(resUpdatePet);
            logger.logMessage("hasil dari add pet");

            expect(resUpdatePet.statusCode).toEqual(expected_result.status_code);
            expect(resUpdatePet.body).toMatchObject(expected_result.body)
        });
});