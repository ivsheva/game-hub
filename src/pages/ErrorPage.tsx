import { Box } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Error 404. This page does not exist."
            : "Unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
