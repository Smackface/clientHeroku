const {gql} = require('apollo-server');

const typeDefs = gql`
    # Schema Defintiions Go here
    "A track is a group of educational Modules for viewing"
    type Track {
        #Fields Go here!
        id: ID!
        "Track title"
        title: String!
        "Track's Desc (can be in markdown!)"
        description: String
        "Author of the track"
        author: Author!
        "Track's main illustration"
        thumbnail: String
        "How long the track is, in minutes"
        length: Int
        "The number of modules in a track"
        modulesCount: Int
        "Track views number"
        numberOfViews: Int
        "Track module array"
        modules: [Module!]!
    }
    "An author is someone who has created a Track"
    type Author {
        #Fields Go here!
        id: ID!
        "Author's first and las names"
        name: String!
        "Profile picture url"
        photo: String
    }
    "A query is how we access our data"
    type Query {
        "Get tracks array for the homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }
    "A mondule is a teaching unit, multiple modules compose a Track"
    type Module {
        id: ID!
        "Module title"
        title: String!
        "Module Length (in minutes)"
        length: Int
    }
`;
module.exports = typeDefs