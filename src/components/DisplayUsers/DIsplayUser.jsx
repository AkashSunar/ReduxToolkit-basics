import React from 'react';
import "./displayUser.css" 
import { useSelector,useDispatch} from 'react-redux';
import { deleteUser } from '../../store/slices/UserSlices';

const DIsplayUser = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    })
    const removeUser = (id) => {
        dispatch(deleteUser(id))
    }
  return (
    <div className='userList-container'>
          {data.map((user, id) => {
              return <li key={id}>
                  <hr />
                  <div className="user">
                      <div className="userName">
                          {user}
                      </div>
                      <div className="delete-icon">
                          <img src="images/icons8-delete-25.png" alt="" onClick={()=>removeUser(id)} />
                      </div>
                  </div>
        
              </li>
          
        })}
    </div>
  );
}

export default DIsplayUser;
