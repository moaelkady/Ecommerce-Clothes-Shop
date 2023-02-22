import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="authentication-container">
      {currentUser ? (
        <h1>Welcome back {currentUser.displayName? currentUser.displayName : "User"}</h1>
      ) : (
        <Fragment>
          <SignInForm />
          <SignUpForm />
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;
