const request = require('supertest');
const app = require('../app');

describe('POST /paket/new', () => {
    it('should return 401 if no token is provided', async () => {
        const response = await request(app)
            .post('/paket/new')
            .send({
                namaPaket: 'Paket Baru',
                harga: 100000,
            });

        expect(response.status).toBe(401);
        expect(response.body.message).toBe('Unauthorized');
    });

    it('should return 400 if required fields are missing', async () => {
        const token = 'valid-token'; // Replace with a valid token
        const response = await request(app)
            .post('/paket/new')
            .set('Authorization', `Bearer ${token}`)
            .send({});

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Bad Request');
    });

    // it('should return 201 and add the paket if valid data and token are provided', async () => {
    //     const token = 'valid-token'; // Replace with a valid token
    //     const response = await request(app)
    //         .post('/paket/new')
    //         .set('Authorization', `Bearer ${token}`)
    //         .field('namaPaket', 'Paket Premium')
    //         .field('harga', 200000)
    //         .attach('Gambar', 'path/to/file.jpg'); // Replace with actual path to a test file

    //     expect(response.status).toBe(201);
    //     expect(response.body.message).toBe('Paket successfully added');
    //     expect(response.body.data).toMatchObject({
    //         namaPaket: 'Paket Premium',
    //         harga: 200000,
    //     });
    // });
});
