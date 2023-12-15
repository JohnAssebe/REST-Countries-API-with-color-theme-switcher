/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout";
import FilteredCountries from "./components/filteredCountries";
import CountryDetail from "./components/countryDetail";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FilteredCountries />} />
            <Route path="/countryDetail/:name" element={<CountryDetail />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
