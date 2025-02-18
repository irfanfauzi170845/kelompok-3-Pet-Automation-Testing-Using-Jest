const addpet= require('../../../collections/pet/add_pet');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});


describe('Success add pet', () => {
    test.each(Object.values(testData))(
        "Test add pet $title ", async ({body,expected_result }) => {

            resAddPet = await addpet.addPet(body);
            logger.logRequest(resAddPet);
            logger.logResponse(resAddPet);
            logger.logExpectation(resAddPet);
            logger.logMessage("hasil dari add pet");

            expect(resAddPet.statusCode).toEqual(expected_result.status_code);
            expect(resAddPet.body).toMatchObject(expected_result.body);
            
        });
    
});
