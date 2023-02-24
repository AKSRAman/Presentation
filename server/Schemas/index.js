const graphql = require("graphql");
const userMongo = require("../mongoSchema/userSchema")
const UserType = require("./TypeDefs/UserType");
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsersFromMongo: {
      type: new GraphQLList(UserType),
      args: { _id: { type: GraphQLString } },
      resolve(parent, args) {
        return userMongo.find({})
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUserMongo: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        let user = new userMongo({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password
        });
        return user.save()
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });