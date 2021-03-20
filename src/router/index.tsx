  
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {
  Time,
  Noticia,
} from "pages";
import TimeStore from "pages/Time/store";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/time" component={Time} />
      <PrivateRoute exact path="/time/:id" component={TimeStore} />
      <PrivateRoute exact path="/noticia" component={Noticia} />
    </Switch>
  );
};

export default Routes;