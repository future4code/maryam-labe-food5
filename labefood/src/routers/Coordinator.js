export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToSignupPage = (history) => {
    history.push("/cadastro")
}

export const goToInitialPage = (history) => {
    history.push("/inicio")
}

export const goToProfilePage = (history) => {
    history.push("/perfil")
}

export const goToWishPage = (history) => {
    history.push("/pedido/:id")
}

export const goToCartPage = (history) => {
    history.push("/carrinho")
}

export const goToRestaurantPage = (history) => {
    history.push("/feed/restaurante")
}

export const goToSearchPage = (history) => {
    history.push("/busca")
}

export const goBack = (history) => {
    history.goBack()
}