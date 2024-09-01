import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../app/features/userDetailSlice";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  //   console.log(id);
  const [updateData, setUpdateData] = useState("");
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("users", users);
  useEffect(() => {
    const singleUser = users.filter((cur, i) => cur.id === id);
    setUpdateData(singleUser[0]);
    console.log("updatedata singleUser", singleUser[0]);
  }, []);

  console.log("updateData", updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  console.log(updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/home");
  };

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <h2 className="mb-4">Edit The Book </h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            name="title"
            value={updateData && updateData.title}
            onChange={newData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={updateData && updateData.author}
            onChange={newData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Language
          </label>
          <input
            type="text"
            name="language"
            value={updateData && updateData.language}
            onChange={newData}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            onChange={newData}
            value={updateData && updateData.price}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            onChange={newData}
            value={updateData && updateData.country}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Link
          </label>
          <input
            type="text"
            name="link"
            onChange={newData}
            value={updateData && updateData.link}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            total Edition
          </label>
          <input
            type="text"
            name="totalEdition"
            onChange={newData}
            value={updateData && updateData.totalEdition}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            onChange={newData}
            value={updateData && updateData.image}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Published Year
          </label>
          <input
            type="text"
            name="year"
            onChange={newData}
            value={updateData && updateData.year}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            onChange={newData}
            value={updateData && updateData.description}
            className="form-control w-75"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Pages
          </label>
          <input
            type="text"
            name="pages"
            onChange={newData}
            value={updateData && updateData.pages}
            className="form-control w-75"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit Book
        </button>
      </form>
    </div>
  );
};

export default Update;
