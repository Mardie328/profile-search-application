import "./App.css";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="body-container">
      <div className="components-container">
        <SearchBar />
        <UserProfile
          picture="https://randomuser.me/api/portraits/med/women/77.jpg"
          id="60d0fe4f5311236168a109f5"
          name="ms. Charlotte Legrande "
        />
        <UserProfile
          picture="https://randomuser.me/api/portraits/med/women/15.jpg"
          id="60d0fe4f5311236168a109f6"
          name="miss. Madison Ambrose "
        />
      </div>
    </div>
  );
}

export default App;
