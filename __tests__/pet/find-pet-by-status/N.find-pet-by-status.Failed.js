const findpetbystatus = require('../../../collections/pet/find_pet_by_status');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');
const logger = require('../../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

describe('Failed find pet by status-Endpoint Invalid', () => {
    test.each(Object.values(testData))(
        "Test Endpoint Invalid $title ", async ({header, expected_result }) => {

            resEndpointInvalid = await findpetbystatus.statusEndpointInvalid(header);
            logger.logRequest(resEndpointInvalid);
            logger.logResponse(resEndpointInvalid);
            logger.logExpectation(resEndpointInvalid);
            logger.logMessage("hasil Endpoint Invalid");

            expect(resEndpointInvalid.statusCode).toEqual(expected_result.status_code);
            expect(resEndpointInvalid.body).toMatchObject(expected_result.body)
        });

});