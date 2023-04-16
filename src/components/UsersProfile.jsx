import App from "../App";
import { useState } from "react";
import SearchBar from "./SearchBar";

const UsersProfile = () => {
  const usersProfileData = [
    {
      id: "60d0fe4f5311236168a109f5",
      title: "ms",
      firstName: "Charlotte",
      lastName: "Legrand",
      picture: "https://randomuser.me/api/portraits/med/women/77.jpg",
    },
    {
      id: "60d0fe4f5311236168a109f6",
      title: "miss",
      firstName: "Madison",
      lastName: "Ambrose",
      picture: "https://randomuser.me/api/portraits/med/women/15.jpg",
    },
    {
      id: "60d0fe4f5311236168a109fa",
      title: "ms",
      firstName: "Ann",
      lastName: "Mason",
      picture: "https://randomuser.me/api/portraits/med/women/18.jpg",
    },
    {
      id: "60d0fe4f5311236168a109fb",
      title: "mr",
      firstName: "Sohan",
      lastName: "Pierre",
      picture: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
    {
      id: "60d0fe4f5311236168a109fc",
      title: "mr",
      firstName: "Gonzaga",
      lastName: "Ribeiro",
      picture: "https://randomuser.me/api/portraits/med/men/10.jpg",
    },
    {
      id: "60d0fe4f5311236168a109ff",
      title: "mrs",
      firstName: "Josefina",
      lastName: "Calvo",
      picture: "https://randomuser.me/api/portraits/med/women/3.jpg",
    },
    {
      id: "60d0fe4f5311236168a10a00",
      title: "mrs",
      firstName: "Els",
      lastName: "Ijsseldijk",
      picture: "https://randomuser.me/api/portraits/med/women/75.jpg",
    },
    {
      id: "60d0fe4f5311236168a10a01",
      title: "mr",
      firstName: "Jesus",
      lastName: "Riley",
      picture: "https://randomuser.me/api/portraits/med/men/45.jpg",
    },
    {
      id: "60d0fe4f5311236168a10a03",
      title: "mr",
      firstName: "Andri",
      lastName: "Leclerc",
      picture: "https://randomuser.me/api/portraits/med/men/57.jpg",
    },
    {
      id: "60d0fe4f5311236168a10a04",
      title: "mr",
      firstName: "Konsta",
      lastName: "Manninen",
      picture: "https://randomuser.me/api/portraits/med/men/24.jpg",
    },
  ];

  const [searchInput, setSearchInput] = useState("");

  const filteredProfiles = usersProfileData.filter((profile) => {
    const searchLowercase = searchInput.toLowerCase();
    const titleMatches = profile.title.toLowerCase().includes(searchLowercase);
    const firstNameMatches = profile.firstName
      .toLowerCase()
      .includes(searchLowercase);
    const lastNameMatches = profile.lastName
      .toLowerCase()
      .includes(searchLowercase);

    return titleMatches || firstNameMatches || lastNameMatches;
  });

  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="userProfileContainer">
        {...filteredProfiles.map((userProfileData, id) => {
          return (
            <div className="eachUserContainer" key={id}>
              <img src={userProfileData.picture} />
              <div className="userDetails">
                <p className="userId">{userProfileData.id}</p>
                <p className="userName">
                  {userProfileData.title + ". "}
                  {userProfileData.firstName + " "}
                  {userProfileData.lastName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersProfile;
