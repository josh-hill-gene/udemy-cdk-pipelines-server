const axios = require('axios');
const { testEnvironment } = require('../jest.config');

test("Service returns 'howdy earth'", () => {
    try {
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
        expect(response.data).toBe();
    } catch (e) {
        console.error(e);
        throw e;
    }
});
