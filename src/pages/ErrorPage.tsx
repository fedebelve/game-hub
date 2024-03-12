import { Box, Heading, Text } from "@chakra-ui/react";
import {useRouteError, isRouteErrorResponse} from "react-router-dom"
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  

  return (
    <>
      <NavBar/>
      <Box padding={5}>
      <Heading>Oops!</Heading>
        {isRouteErrorResponse(error)?
        <Text>"Invalid Page"</Text>:
        <Text>"Sorry, an unexpected error has occurred."</Text>
        }
        </Box>
    </>
  );
};

export default ErrorPage;
