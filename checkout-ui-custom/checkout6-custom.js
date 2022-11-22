const shoppingCart = {
  header: {
    init: function () {

        const header = $('.container').first().attr("id", "header-container")

        header.append('<div class="header-payments"> <img class="payment-methods" src="/arquivos/header-payments.svg"/> </div>')

        const headerLink = $('.container a').first().addClass('header-link')

        headerLink.text('')

        headerLink.append('<img class="header-logo" src="/arquivos/logo.svg"/>')
    },
  },

  mainCart:{
    init: function(){
        $('#cart-choose-products').prepend('<img src="/arquivos/left-arrow-white.svg" />')

        const toOrderFormBtn = $('#cart-to-orderform')

        toOrderFormBtn.text('Secure checkout')

        toOrderFormBtn.prepend('<img class="payments-checkout" src="/arquivos/header-payments.svg"/>')
        toOrderFormBtn.append('<img class="proceed-arrow" src="/arquivos/right-arrow-white.svg" />')

        $('td.quantity-price').attr('id', 'quantity-total')


        const mainCart = $('.container-cart')

        const reassuranceBar = `
        <div class="outer-reassurance">
        <div class="reassurance-bar">
            <div class="reassurance-item">
                <img class="reassurance-item-image five-icon" src="/arquivos/reassurance-5.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">5 year guarantee</p>
                    <p class="reassurance-subtitle">Peace of mind at no extra cost</p>
                </div>
            </div>
            <div class="reassurance-item">
                <img class="reassurance-item-image segtigo-icon" src="/arquivos/segtigo-logo.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">Fast, Easy & Safe</p>
                    <p class="reassurance-subtitle">100% Secure Checkout</p>
                </div>
            </div>
            <div class="reassurance-item">
                <img class="reassurance-item-image truck-icon" src="/arquivos/reassurance-truck.svg" />
                <div class="reassurance-item-text">
                    <p class="reassurance-title">Free UK Delivery</p>
                    <p class="reassurance-subtitle">On all orders over £199</p>
                </div>
            </div>
        </div>
        </div>
        `

        const orderFormHeader = `
          <div class="order-form-header">
            <div class="orderform-header-text">
              <h1 id="orderform-heading">Your shopping basket</h1>
            </div>
            <div class="orderform-header-images">
              <a href="https://www.blinds-2go.co.uk/">
                <img src="/arquivos/b2g-logo.svg" />
              </a>
              <a  href="https://www.curtains-2go.co.uk/">
                <img src="/arquivos/c2g-logo.svg" />
              </a>
            </div>
          </div>
        `

        mainCart.prepend([reassuranceBar, orderFormHeader])

        $('th.product').attr('id', 'cart-header-product')

    }
  },

  continueShopping: {
    init: function(){
      const cartContainer = $('.cart-template-holder')

      const continueShopping = `
        <div class="continue-shopping-container">
          <a href="/"> <img src="/arquivos/left-arrow-white.svg" /><span>Continue Shopping</span></a>
        </div>
      `

      cartContainer.append(continueShopping)
    }
  },

  summaryHeader: {
    init: function(){
      const totalizers = $('.summary-totalizers')

      const orderFormItems = Object.assign(window.vtexjs.checkout.orderForm.items)

      const items = orderFormItems.length

      const header = `
        <div class="summary-totalizer-header">
          <p class="summary-totalizer-text">You have ${items} items in your basket</p>
        </div>
      `

      totalizers.prepend(header)
    }
  }
}

$(document).on('ready', function () {
  if (window.location.hash === '#/cart') {
    setTimeout(() => {
      shoppingCart.header.init()
      shoppingCart.mainCart.init()
      shoppingCart.continueShopping.init()
      shoppingCart.summaryHeader.init()
    }, 500)
  }
})
