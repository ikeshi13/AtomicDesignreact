import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnryLayout } from "../components/templates/HeaderOnlyLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/user">
          <HeaderOnryLayout>
            <Users />
          </HeaderOnryLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
