export const post = {
  index: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  },
  getById: async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
  }
}