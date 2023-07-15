import React from "react";
import { Datagrid, FunctionField, List, TextField } from "react-admin";

export type User = {
  id: number;
  first_name: string;
  last_name?: string;
};

const PostList: React.FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <FunctionField
          label="Name"
          render={(record: User) =>
            record && `${record.first_name} (${record.last_name})`
          }
        />
        <TextField source="first_name" />
        <TextField source="last_name" />
      </Datagrid>
    </List>
  );
};

export default PostList;
