import { Box } from "@chakra-ui/react";
import { ContentBox } from "./components/ContentBox/ContentBox";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Box h={"prose"}>
        <ContentBox />
      </Box>
    </>
  );
}

export default App;
