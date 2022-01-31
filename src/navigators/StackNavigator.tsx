import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, resetUser } from "../redux/actions/userAction";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const RootStack = () => {
  const userReducer = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(
      getAuth(),
      (authenticatedUser) => {
        authenticatedUser
          ? dispatch(setUser(authenticatedUser))
          : dispatch(resetUser());
      }
    );

    return unsubscribeAuthStateChanged;
  }, [userReducer]);

  return (
    <NavigationContainer>
      {userReducer?.uid ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
