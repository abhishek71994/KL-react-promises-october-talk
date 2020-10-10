const apiCall = require('../apiCall');

const axios = require('axios');

jest.mock('axios');

describe('when api is called', () => {
  axios.get.mockResolvedValue({
    data: {
      number: 3,
      people: [
        { craft: 'MPJ', name: 'Chris Cassidy' },
        { craft: 'ISS', name: 'Anatoly Ivanishin' },
        { craft: 'ISS', name: 'Ivan Vagner' }
      ],
      message: 'success'
    }
  })
  test('returns data', async () => {
    const result = await apiCall.facts();
    console.log(result.data);
    expect(result.data.number).toBe(3);
  })
  test('returns craftname', async () => {
    const result = await apiCall.spaceShip();
    console.log(result);
    expect(result).toBe('ISS');
  })
})