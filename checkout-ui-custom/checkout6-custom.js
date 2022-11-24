const shoppingCart = {
  header: {
    init: function () {
      const header = $('.container').first().attr('id', 'header-container')

      header.append(
        '<div class="header-payments"> <img class="payment-methods" src="/arquivos/header-payments.svg"/> </div>'
      )

      const headerLink = $('.container a').first().addClass('header-link')

      headerLink.text('')

      headerLink.append('<img class="header-logo" src="/arquivos/logo.svg"/>')
    },
  },

  removeItems:function(){
    $('.checkout-outer-reassurance').remove()
    $('.checkout-header').remove()
  },

  quantityTotal: function(){
    $('td.quantity-price').attr('style', 'display: inline !important')
  },

  toOrderFormBtn: function(){
    const toOrderFormBtnContainer = $('.btn-place-order-wrapper')

    const toOrderFormBtn = `
    <a href="#orderform" id="to-checkout-btn">
      <img class="payments-checkout" src="/arquivos/header-payments.svg"/>
      <span>Secure checkout</span>
      <img class="proceed-arrow" src="/arquivos/right-arrow-white.svg" />
    </a>
    `

    const toOrderFormBtnExists = $('#to-checkout-btn')

    if(toOrderFormBtnExists.length === 0){
      toOrderFormBtnContainer.append(toOrderFormBtn)
    }
  },

  mainCart: {
    init: function () {
      $('#cart-choose-products').prepend('<img src="/arquivos/left-arrow-white.svg" />')

      $('td.quantity-price').attr('style', 'display: inline !important')

      $('.empty-cart-title').text('Your Shopping Basket is Empty')

      const mainCart = $('.container-cart')

      const reassuranceBar = `
        <div class="shopping-outer-reassurance">
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
    },
  },

  continueShopping: {
    init: function () {
      const cartContainer = $('.cart-template-holder')

      const containerShoppingContainer = $('.continue-shopping-container')

      if(containerShoppingContainer.length === 0){
        const continueShopping = `
          <div class="continue-shopping-container">
            <a href="/"> <img src="/arquivos/left-arrow-white.svg" /><span>Continue Shopping</span></a>
          </div>
        `
  
        cartContainer.append(continueShopping)
      }
    },
  },

  summaryHeader: {
    init: function () {
      const totalizers = $('.summary-totalizers')

      const orderFormItems = Object.assign(window.vtexjs.checkout.orderForm.items)

      const items = orderFormItems.length

      const header = `
        <div class="summary-totalizer-header">
          <p class="summary-totalizer-text">You have ${items} items in your basket</p>
        </div>
      `

      const summaryHeaderExist = $('.summary-totalizer-header')

      if(summaryHeaderExist.length === 0){
        totalizers.prepend(header)
      }

    },
  },

  secureCheckoutWarning:{
    init: function(){
      const summarizerFooter = $('.summary-totalizers tfoot')

      const secureCheckoutMessage = `
        <tr class="secure-checkout">
        <td id="secure-cell"><img class="smart-image" src="/arquivos/lock-icon.svg"/><span>Secure Checkout - Shopping with us is always safe and secure</span></td>
        </tr>
      `

      const secureCheckoutMessageExist = $('.secure-checkout')

      if(secureCheckoutMessageExist.length === 0){
        summarizerFooter.append(secureCheckoutMessage)
      }

    }
  },

  storeReviews: {
    init: function(){

      const checkoutContainer = $('.container-main.container-cart')
      
      const reviewsContainer = `
      <div class="outer-reviews-container">
        <div class="reviews-container">
        <div class="reviews-header">
          <span class="trust-header">Over 190,000 reviews</span>
        </div>
        <div class="reviews-text-container">
          <p class="reviews-text">We're rated as 'Excellent'</p>
        </div>
        <div class="reviews-stars">
          <img src="/arquivos/reviews_stars-5.svg" />
        </div>
        <div class="reviews-logos">
          <img src="/arquivos/logo_reviews.svg" class="review-logo"/>
          <img src="/arquivos/logo_trustpilot.svg" class="review-logo"/>
          <img src="/arquivos/logo_reviewCentre.svg" class="review-logo"/>
        </div>
        </div>
      </div>
      `

      const reviewsExists = $('.reviews-container')

      if(reviewsExists.length === 0){
        checkoutContainer.append(reviewsContainer)
      }
    }
  },

  footerImages: {
    init: function(){

      const footer = $('div[style="text-align:center"]')

      footer.attr('id','cart-footer')
      
      const imagesContainer = `
        <div class="footer-images">
          <a class="footer-logo" href="https://www.blinds-2go.co.uk/">
            <img  src="/arquivos/b2g-logo.svg" />
          </a>
          <a class="footer-logo" href="https://www.curtains-2go.co.uk/">
            <img src="/arquivos/c2g-logo.svg" />
          </a>
        </div>
      `

      const footerImagesExists = $('.footer-images')

      if(footerImagesExists.length === 0){
        footer.append(imagesContainer)
      }
    }
  }
}

const checkoutPage = {
  removeItems: function () {
      $('.summary-coupon-wrap').remove()
      $('.custom-cart-template-wrap .summary-cart-template-holder').remove()
      $('order-form-header').remove()
      $('.shopping-outer-reassurance').remove()
      $('.order-form-header').remove()
      $('.outer-reviews-container').remove()
  },

  orderFormHeader: {
    init: function () {
      const checkoutContainer = $('.container-order-form')

      const reassuranceBar = `
      <div class="checkout-outer-reassurance">
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
      <div class="checkout-header">
        <div class="checkout-header-text">
          <h1 id="checkout-heading">Complete your order</h1>
        </div>
      </div>
    `

    const reassuranceBarExists = $('.checkout-outer-reassurance')

    const orderFormHeaderExists = $('.checkout-outer-reassurance')

    if(reassuranceBarExists.length == 0 && orderFormHeaderExists.length == 0){
      checkoutContainer.prepend([reassuranceBar, orderFormHeader])
    }

    },
  },

  clientInfo:{
    init:function(){
      $('.box-client-info-pf .client-notice').text('Cart holder details')
      $('.custom-cart-template-wrap h2').text('Order Summary')
    }
  },

  paymentButtonText:{
    init: function(){

      const paymentBtn = $('#payment-data-submit span')

      paymentBtn.text('Complete your order')
      
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
      shoppingCart.secureCheckoutWarning.init()
      shoppingCart.storeReviews.init()
      shoppingCart.toOrderFormBtn()
      shoppingCart.footerImages.init()
    }, 500)
  }

  if (window.location.hash === '#/email' || window.location.hash === '#/profile' || window.location.hash === '#/shipping' || window.location.hash === '#/payment') {
    setTimeout(() => {
      shoppingCart.header.init()
      shoppingCart.mainCart.init()
      shoppingCart.summaryHeader.init()
      shoppingCart.secureCheckoutWarning.init()
      shoppingCart.footerImages.init()
      checkoutPage.orderFormHeader.init()
      checkoutPage.clientInfo.init()
      checkoutPage.removeItems()
      checkoutPage.paymentButtonText.init()
    }, 500)
  }
})

$(window).on('hashchange', function () {
  if (window.location.hash === '#/email' || window.location.hash === '#/profile' || window.location.hash === '#/shipping' || window.location.hash === '#/payment') {
    setTimeout(() => {
      checkoutPage.removeItems()
      checkoutPage.orderFormHeader.init()
      checkoutPage.clientInfo.init()
      shoppingCart.secureCheckoutWarning.init()
      checkoutPage.paymentButtonText.init()
      shoppingCart.footerImages.init()
    }, 500)
  }

  if (window.location.hash === '#/cart' ) {
    setTimeout(() => {
      shoppingCart.mainCart.init()
      shoppingCart.continueShopping.init()
      shoppingCart.summaryHeader.init()
      shoppingCart.removeItems()
      shoppingCart.secureCheckoutWarning.init()
      shoppingCart.storeReviews.init()
      shoppingCart.footerImages.init()
    }, 500)
  }
})

$(window).on('orderFormUpdated.vtex', (_, orderForm) => {
  setTimeout(()=> {
    shoppingCart.quantityTotal()
    shoppingCart.toOrderFormBtn()
  }, 200)
})