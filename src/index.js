import React                           from "react";
import ReactDOM                        from "react-dom";
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import "./index.css";
import * as serviceWorker              from "./serviceWorker";
import Header                          from "./components/common/Header/Header";
import List                            from "./components/List/List";
import Notfound
                                       from "./components/common/Notfound";
import Detail                          from "./components/detail/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={List} exact/>
        <Route path="/currency/:id" component={Detail} exact/>
        <Route component={Notfound}/>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
