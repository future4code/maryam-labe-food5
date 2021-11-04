import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartPage } from "../pages/CartPage/CartPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { InitialPage } from "../pages/InitialPage/InitialPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RestaurantPage } from "../pages/RestaurantPage/RestaurantPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { SignupAddressPage } from "../pages/SignupPage/SignupAddressPage";
import { SignupPage } from "../pages/SignupPage/SignupPage";
import { WishPage } from "../pages/WishPage/WishPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path='/'>
                    <InitialPage />
                </Route>

                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route exact path='/cadastro'>
                    <SignupPage />
                </Route>

                <Route exact path='/cadastro/endereco'>
                    <SignupAddressPage />
                </Route>

                <Route exact path='/home'>
                    <HomePage />
                </Route>

                <Route exact path='/busca'>
                    <SearchPage />
                </Route>

                <Route exact path='/carrinho'>
                    <CartPage />
                </Route>

                <Route exact path='/restaurante/:id'>
                    <RestaurantPage />
                </Route>

                <Route exact path='/pedido/:id'>
                    <WishPage />
                </Route>

                <Route exact path='/perfil'>
                    <ProfilePage />
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}