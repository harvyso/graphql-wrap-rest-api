const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require("graphql");

const Author = new GraphQLObjectType({
  name: "Author",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    company: { type: GraphQLString }
  }
});

const Post = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: GraphQLInt },
    author: { type: Author },
    categories: { type: new GraphQLList(GraphQLString) },
    publishDate: { type: GraphQLString },
    summary: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    title: { type: GraphQLString }
  }
});

const Blog = new GraphQLObjectType({
  name: "Blog",
  fields: {
    posts: {
      type: new GraphQLList(Post),
      resolve: () => {
        return fetch("http://www.mocky.io/v2/594a3ac810000053021aa3a7").then(
          response => response.json()
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Blog
});
