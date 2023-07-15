import React from "react";
import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export type Login = {
  id: number;
  user_id: string;
  username: string;
  password: string;
};

const PostList: React.FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="username" />
        <ReferenceField label="User Id" source="user_id" reference="users">
          <TextField source="id" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default PostList;
