/* eslint-disable */
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout";
import FilteredCountries from "./components/filteredCountries";
import CountryDetail from "./components/countryDetail";
const client = new QueryClient();

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <ScrollTop />
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
