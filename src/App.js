import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Profile } from "./profile/component/ProfileComponent";
import { FooterPage } from "./profile/footer/Footer";
import Nav from "./profile/navbar/Navbar";
const members = [
  {
    id: 1,
    Photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7S9pKMslch4WjEcuH1FTueBDvu3nL4NTsNg&usqp=CAU",
    FullName: "Tuki",
  },
  {
    id: 2,
    Photo:
      "https://i.pinimg.com/originals/33/9b/75/339b7514a90f67f8fc9f56dc2c9e393a.jpg",
    FullName: "Archnight",
  },

  {
    id: 3,
    Photo:
      "data:image/png;base64,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",
    FullName: "Kyora",
  },

  {
    id: 4,
    Photo: "https://i.ibb.co/ZmJL75y/kydoc2ssg6l21.png",
    FullName: "Crazy",
  },

  {
    id: 5,
    Photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrlCqcLrCTI-K4rGNlpheOhu8ufm3XNdd0hQ&usqp=CAU",
    FullName: "flén",
  },
  {
    id: 6,
    Photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrlCqcLrCTI-K4rGNlpheOhu8ufm3XNdd0hQ&usqp=CAU",
    FullName: "flén",
  },
  {
    id: 7,
    Photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrlCqcLrCTI-K4rGNlpheOhu8ufm3XNdd0hQ&usqp=CAU",
    FullName: "flén",
  },
  {
    id: 8,
    Photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrlCqcLrCTI-K4rGNlpheOhu8ufm3XNdd0hQ&usqp=CAU",
    FullName: "flén",
  },
];
const handleName = (FullName) => {
  alert(`${FullName} has been followed`);
};

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile members={members} handleName={handleName} />
      <FooterPage />
    </div>
  );
}

export default App;
