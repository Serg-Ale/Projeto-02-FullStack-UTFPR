import Header from "./components/Header";
import Search from "./components/Search";

import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="bg-background">
        <Header />
        <Search />
      </div>
    </SearchProvider>
  );
}

export default App;
