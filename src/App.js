//imports
import Routes from "./Routes";
import AppProvider from "./context/AppContext/AppProvider";

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
