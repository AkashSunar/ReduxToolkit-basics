import DeleteUser from "../DeleteUser/DeleteUser";
import "./userDetails.css";
import { fakeUserData } from "../../api";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/UserSlices";
import DIsplayUser from "../DisplayUsers/DIsplayUser";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <div className="main-body">
      <div className="table-wrapper">
        <div className="heading">List of User Details</div>
        <button
          className="add-user-btn"
          onClick={() => addNewUser(fakeUserData())}
        >
          {" "}
          Add new user
        </button>
      </div>
      <ul>
        <DIsplayUser />
      </ul>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default UserDetails;
