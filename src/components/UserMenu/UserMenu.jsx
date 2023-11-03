import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/selectors";

import authOperations from '../../redux/auth/authOperations';
import { wipeUser } from '../../redux/calculatorSlice/calcSlice';

const UserMenu = () => {
    const dispatch = useDispatch();

    const name = useSelector(authSelectors.getUserName);
  return (
    <>
      
      <h2>{name}</h2>
      <button
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
            dispatch(wipeUser());
          }}
        >
          Так
        </button>
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
            <div>
              <UserMenu />
            </div>
          </>
        ) : null}
      </div>
      {/* {isLoggedIn && (
          <NavState>
            <MainMenu />
          </NavState>
        )} */}
      {/* 
      {isLoggedIn && (
        <WrapperUserMenu>
          <UserMenu />
        </WrapperUserMenu>
      )} */}
    </>
  );
};

export default UserBar;
