/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import ReactPaginate from "react-paginate";
import Classes from "./characterscreen.module.css";

const CharacterScreen = () => {
  const [isData, setIsData] = useState([]);
  const [pageNumber, setIsPageNumber] = useState(0);
  const [q, setQ] = useState(" ");

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters?limit=50")
      .then((response) => response.json())
      .then((data) => setIsData(data))
      .catch((error) => console.log(error));
  }, []);
  const numberPerView = 12;
  const pageViewed = pageNumber * numberPerView;
  const displayData = isData.slice(pageViewed, pageViewed + numberPerView);
  const pageCount = Math.ceil(isData.length / numberPerView);
  const onPageChange = ({ selected }) => {
    setIsPageNumber(selected);
  };

  return (
    <div className={Classes.containerChara}>
      <NavBar />

      <div className="container">
        <input
          type="search"
          placeholder="Search..."
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "0",
            width: "40%",
            outline: "none",
            borderRadius: "5px",
            lineHeight: "30px",
            padding: "5px",
          }}
          onChange={(e) => setQ(e.target.value)}
        />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Nick Name</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {displayData
              .filter((val) => {
                if (q === " ") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(q.toLocaleLowerCase()) ||
                  val.nickname.toLowerCase().includes(q.toLocaleLowerCase())
                ) {
                  return val;
                }
                if (val.birthday === String(q)) return val;
              })
              .map((user, index) => (
                <tr key={index}>
                  <td>{user.char_id}</td>
                  <td>{user.name}</td>
                  <td>{user.nickname}</td>
                  <td title="*You can search for a user by DOB">
                    {user.birthday}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={Classes.paginateBttns}
        previousLinkClassName={Classes.previousBttn}
        nextLinkClassName={Classes.nextbttn}
        disabledClassName={Classes.paginateDisbled}
        activeClassName={Classes.paginateActive}
      />
    </div>
  );
};

export default CharacterScreen;
