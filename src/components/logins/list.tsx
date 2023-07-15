import React from "react";
import { Datagrid, List, ReferenceField, TextField } from "react-admin";

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
