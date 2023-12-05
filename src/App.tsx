import { ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/themes/themes";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./features/layout/Header/Header";
import RouterDOM from "./features/router/RouterDOM";
import Spinner from "./features/spinner/Spinner";
import HeaderLoggedIn from "./features/layout/HeaderLoggedIn/HeaderLoggedIn";
import { getRealToken, getToken } from "./services/localStorageService";
import { setToken } from "./features/token/tokenSlice";
import { setLoading } from "./features/spinner/spinnerSlice";
import { setLoggedUser } from "./features/users/usersSlice";
import * as jwt from "jwt-decode";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apolloApi";

const App = () => {
  const token = useAppSelector((store) => store.token.token);
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const loading = useAppSelector((store) => store.spinner.loading);
  const isLogged = getToken();
  const RealToken = getRealToken();
  const dispatch = useAppDispatch();
  console.log("log:  " + isLogged, token);

  if (loading) {
    dispatch(setToken(isLogged));
    if (RealToken !== "") {
      dispatch(setLoggedUser(jwt.jwtDecode(RealToken)));
      console.log(jwt.jwtDecode(RealToken));
    }

    setTimeout(() => dispatch(setLoading(false)), 1000);
    return (
      <>
        <Spinner />;
      </>
    );
  }

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={themeMode ? themeLight : themeDark}>
          <CssBaseline />
          {isLogged === "loggedin" || token === "loggedin" ? (
            <HeaderLoggedIn />
          ) : (
            <Header />
          )}
          <RouterDOM />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
