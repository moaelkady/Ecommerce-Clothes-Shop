import "./authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="authentication-container">
      {currentUser ? (
        <h1>Welcome back {currentUser.displayName}</h1>
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
