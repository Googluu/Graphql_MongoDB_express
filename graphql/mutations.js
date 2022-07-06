const { GraphQLString } = require('graphql')
const { User, Post } = require('../models')
const { createJWTToken } = require('../utils/auth')
const { PostType } = require('./types')

const register = {
    type: GraphQLString,
    description: "Register a new user as return and token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    async resolve(_, args)  {
        const { username, email, password, displayName } = args;

        const user = new User({username, email, password, displayName})
        await user.save();

        const token = createJWTToken({_id: user._id, username: user.username, email: user.email, displayName: user.displayName});

        return token;
    },
};

const login = {
    type: GraphQLString,
    description: "Login a user and return a token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(_, args) {

        const user = await User.findOne({ email: args.email }).select('+password')
   
        if(!user || args.password !== user.password) 
            throw new Error('Invalid credentials')

        const token = createJWTToken({
            _id: user._id, 
            username: user.username, 
            email: user.email, 
            displayName: user.displayName
        })

        return token;
    }
}

const createPost = {
    type: PostType,
    description: "Create a new post",
    args: {
        title: { type: GraphQLString},
        body: { type: GraphQLString}
    },
    async resolve(_, args) {
        const post = new Post({
            title: args.title,
            body: args.body,
            authorId: '62c5c2d006e71de4acfed128'
        })

        return post
    }
}

module.exports = {
    register,
    login,
    createPost
}