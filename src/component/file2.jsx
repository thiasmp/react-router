export const males = ['Peter', 'Jan'];
export const females = ['Janne', 'Sarah'];

const obj = {
  firstName: 'Kurt',
  lastName: 'Wonnegut',
  gender: 'Male',
  email: 'kurt@wonnegut.dk',
};

const personV2 = {
  email: 'kurt@wonnegut.dk',
  firstName: 'Kurt',
  friends: [...males, ...females],
  gender: 'Male',
  lastName: 'Wonnegut',
  phone: 123456,
};

export const persons = [
  {
    firstName: 'Kurt',
    lastName: 'Wonnegut',
    gender: 'Male',
    email: 'k@wonnegut.dk',
    phone: '12345',
  },
  {
    firstName: 'Jane',
    lastName: 'Wonnegut',
    gender: 'female',
    email: 'j@wonnegut.dk',
    phone: '12345',
  },
  {
    firstName: 'ib',
    lastName: 'Wonnegut',
    gender: 'Male',
    email: 'i@wonnegut.dk',
    phone: '12345',
  },
];

export default obj;
export { personV2 };

