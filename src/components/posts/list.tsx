import {
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

import React from "react";

const PostList: React.FC = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField label="Own" source="userId" reference="users">
          <FunctionField
            render={(record: { name: string; email: string }) =>
              record && `${record.name} (${record.email})`
            }
          />
        </ReferenceField>
        <ReferenceField label="Contact" source="userId" reference="users">
          <TextField source="phone" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};

export default PostList;
