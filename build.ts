const fs = require("fs");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { printSchemaWithDirectives } = require("@graphql-tools/utils");

const schema = loadSchemaSync("./src", {
  loaders: [new GraphQLFileLoader()],
});

fs.writeFileSync("schema.graphql", printSchemaWithDirectives(schema));
