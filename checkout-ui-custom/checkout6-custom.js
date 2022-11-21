const shoppingCart = {
  header: {
    init: function () {

        const header = $('.container').first().attr("id", "header-container")

        header.append('<div class="header-payments"> <img class="payment-methods" src="/arquivos/header-payments.svg"/> </div>')

        const headerLink = $('.container a').first().addClass('header-link')

        headerLink.text('')

        headerLink.append('<img class="header-logo" src="/arquivos/logo.svg"/>')

        console.log("GTM header anchor -> ", header)
    },
  },

  mainCart:{
    init: function(){
        $('#cart-choose-products').prepend('<img src="/arquivos/left-arrow-white.svg" />')

        const mainCart = $('.container-cart')

        const reassuranceBar = `
        <div class="reassurance-bar">
            <div class="reassurance-item">
                <img reassurance-item-image src="/arquivos/reassurance-5.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">5 year guarantee</p>
                    <p class="reassurance-subtitle">Peace of mind at no extra cost</p>
                </div>
            </div>
            <div class="reassurance-item">
                <img reassurance-item-image src="/arquivos/segtigo-logo.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">Fast, Easy & Safe</p>
                    <p class="reassurance-subtitle">100% Secure Checkout</p>
                </div>
            </div>
            <div class="reassurance-item">
                <img reassurance-item-image src="/arquivos/reassurance-truck.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">Free UK Delivery</p>
                    <p class="reassurance-subtitle">On all orders over £199</p>
                </div>
            </div>
        </div>
        `

        mainCart.prepend(reassuranceBar)
    }
  }
}

$(document).on('ready', function () {
  if (window.location.hash === '#/cart') {
    setTimeout(() => {
      shoppingCart.header.init()
      shoppingCart.mainCart.init()
    }, 1000)
  }
})
