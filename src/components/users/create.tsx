import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import { User } from "./modal";
import { Box, Typography } from "@mui/material";
import { v4 } from "uuid";

type CreateUser = Pick<User, "first_name" | "last_name">;

const CreateUsers: React.FC = () => {
  return (
    <Create
      transform={(data: CreateUser): User => {
        return {
          ...data,
          id: v4(),
        };
      }}
    >
      <SimpleForm>
        <Typography variant="h6" gutterBottom>
          Identity
        </Typography>

        <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
          <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="first_name" isRequired fullWidth />
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
            <TextInput source="last_name" fullWidth />
          </Box>
        </Box>
      </SimpleForm>
    </Create>
  );
};

export default CreateUsers;
