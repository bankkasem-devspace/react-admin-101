import React from "react";
import { Datagrid, FunctionField, List, TextField } from "react-admin";
import { User } from "./modal";

const PostList: React.FC = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <FunctionField
          label="Name"
          render={(record: User) => {
            if (record && record.last_name)
              return `${record.first_name} (${record.last_name})`;

            return record.first_name;
          }}
        />
        <TextField source="first_name" />
        <TextField source="last_name" emptyText="-" />
      </Datagrid>
    </List>
  );
};

export default PostList;
