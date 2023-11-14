import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";

import authOperations from "../../redux/auth/authOperations";
import { wipeUser } from "../../redux/calculatorSlice/calcSlice";

import "./UserMenu.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <h2>{name}</h2>
      <div className="ContBtton">
        <button 
          className="LogBtStyle"
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
            // dispatch(wipeUser());
            // localStorage.clear();
          }}
        >
          logout
        </button>
      </div>
    </>
  );
};

const UserBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <div className="UserMenu">
              <UserMenu />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default UserBar;
