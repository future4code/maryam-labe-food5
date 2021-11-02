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

                <Route>
                    <InitialPage exact path='/inicio'/>
                </Route>

                <Route>
                    <LoginPage exact path='/login'/>
                </Route>

                <Route>
                    <SignupPage exact path='/cadastro'/>
                </Route>

                <Route>
                    <SignupAddressPage exact path='/cadastro/endereco'/>
                </Route>

                <Route>
                    <HomePage exact path='/'/>
                </Route>

                <Route>
                    <SearchPage exact path='/busca'/>
                </Route>

                <Route>
                    <CartPage exact path='/carrinho'/>
                </Route>

                <Route>
                    <RestaurantPage exact path='/feed/restaurante'/>
                </Route>

                <Route>
                    <WishPage exact path='/pedido/:id'/>
                </Route>

                <Route>
                    <ProfilePage exact path='/perfil'/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}