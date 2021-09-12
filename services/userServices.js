const baseURL = 'https://jsonplaceholder.typicode.com';

const getUsers = () => {
  return fetch(baseURL + '/users')
      .then(value => value.json())
};

export {getUsers}