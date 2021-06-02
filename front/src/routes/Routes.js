import React, { Suspense } from "react"
import { Router, Switch } from "react-router-dom"
import history from "./History"
import * as LazyComponent from "../utils/LazyLoaded"
import Loader from "../components/Loader/Loader"

const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <LazyComponent.ListOracle path="/" exact />
        <LazyComponent.OracleDetail path="/:hash" exact />
        <LazyComponent.RequestDetail path="/request/:id" exact />
        <LazyComponent.NotFound path="**" title="This page doesn't exist..." exact />
      </Switch>
    </Router>
  </Suspense>
)

export default Routes
