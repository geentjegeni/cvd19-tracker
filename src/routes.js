import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import HomeContainer from "./containers/Home";
import NotFoundContainer from "./containers/NotFound";


const Routes = () => {
    return (
        <Fragment>
            <Switch>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route component={NotFoundContainer} />
            </Switch>
        </Fragment>
    )
}

export default Routes;