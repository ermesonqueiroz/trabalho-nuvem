export const user = {
  getById: async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();
  }
};
