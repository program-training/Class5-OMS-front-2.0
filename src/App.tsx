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
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5000/graphql",
  })
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

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
