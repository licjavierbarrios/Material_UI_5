import { useState } from "react";
import { Feed, Navbar, Rightbar, Sidebar, Add } from "./components";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

function App() {
	const [mode, setMode] = useState("light");
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<Box bgcolor={"background.default"} color={"text.primary"} >
				<Navbar />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}
export default App;
