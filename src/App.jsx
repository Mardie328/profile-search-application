import "./App.css";
import SearchBar from "./components/SearchBar";
import UsersProfile from "./components/UsersProfile";

function App() {
  return (
    <div className="body-container">
      <div className="components-container">
        <SearchBar />
        <UsersProfile />
      </div>
    </div>
  );
}

export default App;
