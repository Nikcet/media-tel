import { Route, Redirect } from "react-router-dom";
import { IComponent } from "../utils/types";

export default function ProtectedComponent({
  component: Component,
  ...props
}: IComponent) {
  if (Component.name === "Login" && props.isLoggedIn) {
    return <Redirect to="/" />;
  } else if (Component.name === "Login" && !props.isLoggedIn) {
    return <Route>{() => <Component {...props} />}</Route>;
  } else {
    return (
      <Route>
        {() =>
          props.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/sign-in" />
          )
        }
      </Route>
    );
  }
}
