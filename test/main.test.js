const request = require('supertest');
const app = require('../main');

describe('GET /hello', () => {
    it('returns 200', () => {
        request(app)
        .get('/hello')
        .expect(200)
    })
});

describe('GET /i_want', () => {
    it('returns 200 and string', () => {
        request(app)
        .get('/i_want')
        .expect(200)
    })
});