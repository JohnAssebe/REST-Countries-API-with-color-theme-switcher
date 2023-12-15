/* eslint-disable */
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/header";
import FilteredCountries from "./components/filteredCountries";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Header />
      <FilteredCountries />
    </QueryClientProvider>
  );
}

export default App;
