import { ThemeProvider } from "styled-components";
import { GitDashboard } from "./pages/GitDashboard";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitDashboard />
      <GLobalStyle />
    </ThemeProvider>
  );
}
export default App;
