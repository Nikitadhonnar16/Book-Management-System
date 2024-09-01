import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUSer } from "../app/features/userDetailSlice";

const Navbar = () => {
  const allData = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUSer(searchData));
  }, [searchData]);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  navbar-dark d-flex ">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand ms-5" href="#">
            Book Management System
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="./addbook"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link" href="#">
                  All Books ({allData.length})
                </Link>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
                style={{ width: "400px" }}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
