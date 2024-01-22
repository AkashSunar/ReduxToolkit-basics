import { useDispatch, useSelector } from "react-redux";
import "./deleteUser.css";
// import { removeAllUser } from "../../store/slices/UserSlices";
import { removeAllUser } from "../../store/actions";

const DeleteUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data.length, "checking length in body");
  const deleteAllUser = () => {
    data.length === 0
      ? alert("No data to delete")
      : dispatch(removeAllUser(data.length));
  };
  return (
    <div>
      <button className="delete-user-btn" onClick={() => deleteAllUser()}>
        {" "}
        Clear All Users
      </button>
    </div>
  );
};

export default DeleteUser;
