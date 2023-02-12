const { RESTDataSource } = require("apollo-datasource-rest");

class JsonPlaceholderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com/";
  }

  getPhotosByPage(page) {
    return this.get(`photos?_limit=10&_page=${page}`);
  }

  getPosts() {
    return this.get(`posts`);
  }
}

module.exports = JsonPlaceholderAPI;
