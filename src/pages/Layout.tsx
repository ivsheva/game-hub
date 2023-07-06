import { Box } from "@chakra-ui/layout";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
