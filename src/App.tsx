import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "./components/users/list";
import LoginList from "./components/logins/list";

// NOTE: it like a prefix endpoint
const dataProvider = jsonServerProvider("http://localhost:3004");

const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* NOTE: name is a api path */}
    <Resource name="users" list={UserList} options={{ label: "Users ^^" }} />
    <Resource name="logins" list={LoginList} />
  </Admin>
);

export default App;
