import { Container } from "react-bootstrap";

import { BrowserRouter } from "react-router-dom";

import Browser from "./components/Browser";
import Nav from "./components/Nav";
import DataLayer from "./components/DataLayer";

import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <DataLayer>
        <Container>
          <BrowserRouter>
            <Nav />
            <Browser />
          </BrowserRouter>
        </Container>
      </DataLayer>
    </DataProvider>
  );
}
