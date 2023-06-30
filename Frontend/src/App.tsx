import LoginMaske from "./components/LoginMaske";
import LandingPage from "./components/LandingPage";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <LoginMaske />
      </Box>
    </>
  );
}
