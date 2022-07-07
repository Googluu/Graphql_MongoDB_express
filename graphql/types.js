const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { User, Post } = require('../models')

const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "the user type",
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createAt: { type: GraphQLString },
        updateAt: { type: GraphQLString },
    }
});

const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "The post type",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        createAt: { type: GraphQLString },
        updateAt: { type: GraphQLString },
        author: {
            type: UserType,
            resolve(parent) {
              return User.findById(parent.authorId);
            },
          },
    }
});

const CommentType = new GraphQLObjectType({
    name: "CommentType",
    description: "The comment type",
    args: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        userId: { type: UserType, reslve(parent) {
            return User.findById(parent.userId);
        } },
        postId: { type: PostType, reslve(parent) {
            return Post.findById(parent.postId);
        } },
    }
});

module.exports = {
    UserType,
    PostType,
    CommentType
}