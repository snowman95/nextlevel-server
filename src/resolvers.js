const resolvers = {
  Query: {
    photos: (_, { page }, { dataSources }) => {
      return dataSources.jsonPlaceholderAPI.getPhotosByPage(page);
    },
    posts: (_, __, { dataSources }) => {
      return dataSources.jsonPlaceholderAPI.getPosts();
    },
  },
};

module.exports = resolvers;
