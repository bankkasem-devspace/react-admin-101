import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostList from "./components/posts/list";

// NOTE: it like a prefix endpoint
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />

    {/* NOTE: name is a api path */}
    <Resource name="posts" list={PostList} options={{ label: "My Posts" }} />
  </Admin>
);

export default App;
