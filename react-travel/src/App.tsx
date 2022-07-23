import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, RegisterPage, SignInPage, DetailPage } from './pages'
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/signIn" component={SignInPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route render={() => <h1>404 not found 页面去火星了！</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
