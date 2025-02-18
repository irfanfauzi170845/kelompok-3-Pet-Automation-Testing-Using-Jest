const findpetbyid= require('../../../collections/pet/find-pet-by-id');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});


describe('Success find pet by id', () => {
    test.each(Object.values(testData))(
        "Test find pet by id $title ", async ({body,expected_result }) => {

            resFindPetById = await findpetbyid.findPetById(body);
            logger.logRequest(resFindPetById);
            logger.logResponse(resFindPetById);
            logger.logExpectation(resFindPetById);
            logger.logMessage("hasil dari add pet");

            expect(resFindPetById.statusCode).toEqual(expected_result.status_code);
            expect(resFindPetById.body).toMatchObject(expected_result.body)
        });
});