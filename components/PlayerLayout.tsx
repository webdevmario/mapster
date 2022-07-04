import { Box } from "@chakra-ui/layout";

import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vh" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box
        marginLeft="250px"
        marginBottom="100px"
        backgroundColor="gold"
        width="calc(100vw - 250px)"
        height="calc(100vh - 100px)"
      >
        {children}
      </Box>
      <Box
        position="absolute"
        left="0"
        bottom="0"
        height="100px"
        width="100%"
        backgroundColor="blue"
      >
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
