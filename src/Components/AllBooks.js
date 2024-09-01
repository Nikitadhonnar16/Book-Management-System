import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../app/features/userDetailSlice";
import "../assets/css/AllBooks.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState("");

  const navigateBookDetails = useNavigate();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>loading</h2>;
  }

  return (
    <div className=" container d-flex flex-wrap gap-3 justify-content-center my-5">
      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.title.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((cur) => (
            <div key={cur.id} className="card" style={{ width: "15rem" }}>
              <div className="mx-auto">
                <img src={cur.image} className="  img" alt="..." />
              </div>
              <div className="card-body ">
                <h5 className="card-title">{cur.title}</h5>
                <h6>author: {cur.author}</h6>
                <h6>Price: ₹{cur.price}</h6>
                <h6>Language:{cur.language}</h6>
                <h6>Total Edition:{cur.totalEdition}</h6>

                <div className="d-flex mt-3 gap-3">
                  <Link
                    to={`/edit/${cur.id}`}
                    className="btn btn-outline-success"
                  >
                    Edit
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-outline-success"
                    onClick={() => dispatch(deleteUser(cur.id))}
                  >
                    Delete
                  </Link>
                </div>
                <div className="more-details">
                  <button
                    href="#"
                    className="btn btn-primary mt-3 px-4 "
                    onClick={() => [
                      setId(cur.id),
                      navigateBookDetails(`/more-details/${cur.id}`),
                    ]}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default AllBooks;
