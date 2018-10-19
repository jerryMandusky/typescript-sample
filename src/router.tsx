import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./app";
import { About, MembersPageContainer, MemberPageContainer } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/members" component={MembersPageContainer} />
            <Route path="/member" component={MemberPageContainer} />
            <Route exact path="/member/:id" component={MemberPageContainer} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
