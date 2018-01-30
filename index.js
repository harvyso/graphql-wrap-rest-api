const graphqlHttp = require("express-graphql");
const fetch = require("isomorphic-fetch");
const schema = require("./schema.js");
const app = require("express")();
const PORT = 5000;

app.use(
  graphqlHttp({
    schema,
    // Pretty Print the JSON response
    pretty: true,
    // Enable the GraphiQL dev tool
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
