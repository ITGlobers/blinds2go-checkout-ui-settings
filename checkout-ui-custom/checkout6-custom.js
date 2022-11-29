const shoppingCart = {
  header: {
    init: function () {
      const header = $('.container').first().attr('id', 'header-container')

      const headerLink = $('.container a').first().addClass('header-link')

      headerLink.text('')

      const svgLogo = `
      <svg enable-background="new 0 0 377 68" viewBox="0 0 377 68" xmlns="http://www.w3.org/2000/svg"><title>blinds 2go logo</title><path d="m8.4 17.6c2.8-2.7 5.6-3.9 9.7-3.9 9.3 0 17.2 7.8 17.2 17.9 0 10.3-8.7 17.9-18.5 17.9-8.9 0-16.8-7.5-16.8-18.4v-28.1l8.4-1.1zm0 14c0 5.5 4.3 10.2 9.9 10.2 4.8 0 9.1-4.7 9.1-10.2s-4.3-10.2-9.1-10.2c-5.6 0-9.9 4.7-9.9 10.2zm32.1 17.4v-46l8.5-1.1v45.9zm14.7-34.2 8.4-1.1v34l-8.4 1.3zm15 0 7.9-.8v4.6h.1c2.8-3.8 5.6-4.9 10.3-4.9 7 0 11.6 4.4 11.6 11.6v22.5l-8.3 1.2v-21.4c0-3.6-1.7-6.6-5.4-6.6-5.3 0-7.8 4-7.8 8.3v18.5l-8.4 1.2zm62.5 30c-3.5 3.5-5.8 4.7-10.5 4.7-9.6 0-16.6-8.5-16.6-17.9 0-9.3 7-17.9 16.6-17.9 3.4 0 6.9 1 10 3.6v-14.3l8.4-1.1v46l-7.9 1.3zm-9.4-3c5.6 0 9.7-4.7 9.7-10.2s-4.1-10.2-9.7-10.2-9.7 4.7-9.7 10.2c-.1 5.5 4 10.2 9.7 10.2zm27.3-2.9c2.2 2.3 4.4 3.6 7.6 3.6 2.7 0 4.7-1.7 4.7-3.4 0-6-16.6-2.1-16.6-15 0-6.9 6.1-10.3 12.3-10.3 4.8 0 9.3 1.9 12.5 5.5l-5.5 4.9c-1.7-1.8-3.8-3.4-6.4-3.4-2.5 0-4 .9-4 3.5 0 5.5 16.6 1.7 16.6 14.1 0 7.7-7 11.1-13.8 11.1-4.7 0-9.5-1.8-12.7-5.4z" fill="#3b214f"></path><path d="m176.5 48.4 12.9-15.8c3.4-4.2 9.7-10.8 9.7-15.9 0-3.8-2.5-6.9-7.5-6.9-4.6 0-7.2 3.4-7.2 7.3 0 3.3 2.6 6.6 6 6.8l-5.4 7.1c-3.2-1.2-9.3-4.8-9.3-14.6 0-7 5.1-14.5 16.8-14.5 8.6 0 15.4 6.3 15.4 15.1 0 9.5-9.2 16.6-14.8 23h15.6l-2.2 8.4z" fill="#afb6bd"></path><path d="m220.1 38c-5.8-2.5-7.9-5.4-7.9-11.1 0-7.9 6.8-13.2 15.4-13.2 3.8 0 6.9.4 8.1.4 3.3 0 8-1.1 11.7-2.3l-1.7 7.2h-5.2c2.1 2.4 3.4 4.8 3.4 8.2 0 4.7-2.9 8.1-7.2 9.9 4.7 2.3 7.8 5.7 7.8 11.1 0 9.1-8.8 13.2-15.9 13.2-7.7 0-12.6-1.9-17-6.8l5.2-5.4c3.6 3.7 5.7 5.1 11 5.1 3.4 0 8-2.1 8-6.6 0-5.2-4-7.6-8.9-7.6-2.9 0-5.7 1.1-8.1 2.5zm8-4c3.8 0 7.5-3 7.5-7s-3.6-7-7.5-7-7.5 3-7.5 7 3.6 7 7.5 7zm39.3-20.3c9.9 0 18.7 7.8 18.7 17.9s-8.7 17.9-18.7 17.9-18.7-7.8-18.7-17.9 8.8-17.9 18.7-17.9zm0 28.1c5.7 0 10.7-4.4 10.7-10.2s-5-10.2-10.7-10.2-10.7 4.4-10.7 10.2 5 10.2 10.7 10.2zm18.9-28.2h-2.8v-1.5h7.3v1.5h-2.8v7.8h-1.7zm6.3-1.5h2.7l2.5 7.1h.1l2.5-7.1h2.7v9.2h-1.7v-7.7l-2.7 7.7h-1.4l-2.7-7.7v7.7h-1.7v-9.2zm-229.3-4.1-8.4 1.2v-8.1l8.4-1.1zm-50.3 57h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-1.9v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4-.4.3-.6.7-.7 1.1v4.2h-1.9v-7.2h1.7v1.3c.3-.5.6-.8 1.1-1.1s1-.4 1.6-.4 1.1.1 1.4.4.5.7.6 1.1c.3-.5.7-.9 1.1-1.1.4-.3 1-.4 1.5-.4.4 0 .8.1 1.1.2.3.2.5.4.7.6.2.3.3.6.3.9.1.3.1.7.1 1zm3.6.2c-.3 0-.7-.1-1-.2s-.6-.3-.8-.5-.4-.4-.5-.7-.2-.6-.2-.9.1-.7.2-.9c.2-.3.4-.5.6-.7.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.3 0 .6 0 .9.1s.6.1.8.2v-.4c0-.5-.1-.8-.4-1.1s-.5-.4-1.1-.4c-.4 0-.8.1-1.1.2-.4.1-.7.3-1.1.6l-.6-1.2c.9-.6 1.9-.9 3-.9 1 0 1.8.3 2.4.8s.9 1.2.9 2.2v2.2c0 .2 0 .3.1.4s.2.1.4.1v1.6c-.2 0-.3.1-.5.1h-.4c-.3 0-.6-.1-.8-.2-.2-.2-.3-.4-.3-.6v-.4c-.3.4-.7.7-1.2 1s-1 .3-1.5.3zm.5-1.4c.3 0 .6-.1.9-.2s.5-.3.7-.4c.2-.2.3-.3.3-.5v-.8c-.2-.1-.5-.1-.7-.2-.3-.1-.5-.1-.7-.1-.5 0-.9.1-1.2.3s-.5.5-.5.8.1.6.4.8c.2.2.5.3.8.3zm8.4 1.4c-.5 0-1-.1-1.4-.3s-.8-.5-1.1-.8-.5-.7-.7-1.2-.3-.9-.3-1.5c0-.5.1-1 .2-1.5.2-.4.4-.8.7-1.2.3-.3.6-.6 1-.8s.8-.3 1.3-.3 1 .1 1.4.4.8.6 1 1v-4h1.8v7.9c0 .2 0 .3.1.4s.2.1.4.1v1.6c-.3.1-.6.1-.9.1s-.6-.1-.8-.2-.3-.4-.4-.6v-.5c-.3.5-.6.8-1.1 1-.2.2-.7.4-1.2.4zm.5-1.6c.2 0 .4 0 .5-.1.2-.1.4-.1.5-.3.2-.1.3-.2.4-.4.1-.1.2-.3.3-.5v-1.7c-.2-.4-.4-.7-.8-1s-.7-.4-1.1-.4c-.3 0-.5.1-.8.2s-.4.3-.6.5-.3.4-.4.7-.1.5-.1.8.1.6.2.8c.1.3.2.5.4.7s.4.3.6.5c.4.1.6.2.9.2zm8.8 1.6c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.8-1.2c-.1-.5-.2-.9-.2-1.4s.1-1 .3-1.5.4-.9.8-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4v.6h-5.7c0 .3.1.5.2.8.1.2.3.4.4.6.2.2.4.3.6.4s.4.1.7.1c.4 0 .7-.1 1-.3s.5-.4.7-.7l1.6.4c-.3.6-.7 1-1.3 1.4-.6.3-1.3.5-2.1.5zm1.9-4.4c0-.5-.2-1-.6-1.3s-.8-.5-1.3-.5c-.2 0-.5 0-.7.1s-.4.2-.6.4-.3.3-.4.6c-.1.2-.1.5-.1.7zm10.6 3.9c-.2.1-.6.2-.9.3-.4.1-.7.2-1.1.2-.3 0-.5 0-.7-.1l-.6-.3c-.2-.1-.3-.3-.4-.6-.1-.2-.2-.5-.2-.8v-4.1h-.9v-1.4h.9v-2.3h1.8v2.3h1.5v1.4h-1.5v3.5c0 .3.1.4.2.5s.3.2.5.2.4 0 .6-.1.3-.1.4-.2zm4.2.5c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.7-1.2c-.2-.4-.3-.9-.3-1.4s.1-1 .3-1.4.4-.8.7-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4s-.1 1-.3 1.4-.4.8-.7 1.2c-.3.3-.7.6-1.2.8s-1 .3-1.6.3zm-1.9-3.8c0 .3 0 .6.1.9s.2.5.4.7.4.3.6.4.5.2.7.2c.3 0 .5-.1.7-.2s.4-.3.6-.4c.2-.2.3-.4.4-.7s.1-.6.1-.9 0-.6-.1-.9-.2-.5-.4-.7-.4-.3-.6-.4-.5-.2-.7-.2c-.3 0-.5.1-.7.2s-.4.3-.6.5-.3.4-.4.7c0 .2-.1.5-.1.8zm21.3 3.6h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-1.8v-7.2h1.7v1.3c.3-.5.6-.8 1.1-1.1s1-.4 1.6-.4 1.1.1 1.4.4.5.7.6 1.1c.3-.5.7-.9 1.1-1.1.4-.3 1-.4 1.5-.4.4 0 .8.1 1.1.2.3.2.5.4.7.6.2.3.3.6.3.9.1.3.1.7.1 1v4.7zm5 .2c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.8-1.2c-.2-.4-.3-.9-.3-1.4s.1-1 .3-1.5.4-.9.8-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4v.6h-5.7c0 .3.1.5.2.8.1.2.3.4.4.6.2.2.4.3.6.4s.4.1.7.1c.4 0 .7-.1 1-.3s.5-.4.7-.7l1.6.4c-.3.6-.7 1-1.3 1.4-.5.3-1.2.5-2 .5zm1.9-4.4c0-.5-.2-1-.6-1.3s-.8-.5-1.3-.5c-.2 0-.5 0-.7.1s-.4.2-.6.4-.3.3-.4.6c-.1.2-.2.5-.2.7zm5 4.4c-.3 0-.7-.1-1-.2s-.6-.3-.8-.5-.4-.4-.5-.7-.2-.6-.2-.9.1-.7.2-.9c.2-.3.4-.5.6-.7.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.3 0 .6 0 .9.1s.6.1.8.2v-.4c0-.5-.1-.8-.4-1.1s-.6-.4-1.1-.4c-.4 0-.8.1-1.1.2-.4.1-.7.3-1.1.6l-.6-1.2c.9-.6 1.9-.9 3-.9 1 0 1.8.3 2.4.8s.9 1.2.9 2.2v2.2c0 .2 0 .3.1.4s.2.1.4.1v1.6c-.2 0-.3.1-.5.1h-.4c-.3 0-.6-.1-.8-.2-.2-.2-.3-.4-.3-.6v-.4c-.3.4-.7.7-1.2 1-.5.2-1 .3-1.5.3zm.5-1.4c.3 0 .6-.1.9-.2s.5-.3.7-.4c.2-.2.3-.3.3-.5v-.8c-.2-.1-.5-.1-.7-.2-.3-.1-.5-.1-.7-.1-.5 0-.9.1-1.2.3s-.5.5-.5.8.1.6.4.8.4.3.8.3zm8.3 1.4c-.3 0-.6 0-.9-.1-.3 0-.6-.1-.9-.2l-.9-.3c-.3-.1-.5-.3-.7-.4l.7-1.3c.9.6 1.8.9 2.7.9.4 0 .7-.1.9-.2s.3-.3.3-.6-.1-.4-.4-.6c-.3-.1-.7-.3-1.3-.4-.5-.1-.9-.2-1.2-.3s-.6-.3-.8-.4c-.2-.2-.3-.3-.4-.5s-.1-.4-.1-.7c0-.4.1-.7.2-1s.4-.5.6-.7c.3-.2.6-.4.9-.5.4-.1.7-.2 1.1-.2.5 0 1 .1 1.5.2.5.2 1 .4 1.4.7l-.8 1.1c-.4-.3-.8-.4-1.1-.6-.3-.1-.7-.1-1-.1s-.6.1-.8.2-.3.3-.3.6c0 .2.1.4.3.5s.6.2 1.1.4c.5.1 1 .3 1.3.4.4.1.7.3.9.4.2.2.4.4.5.6s.2.5.2.8-.1.7-.2.9c-.1.3-.3.5-.6.7s-.6.3-.9.5-.9.2-1.3.2zm6.3 0c-.7 0-1.3-.2-1.7-.7s-.6-1.2-.6-2.1v-4.5h1.8v4.1c0 1.1.4 1.7 1.2 1.7.4 0 .7-.1 1.1-.3.3-.2.6-.5.8-1v-4.5h1.8v5.1c0 .2 0 .3.1.4s.2.1.4.1v1.5c-.2 0-.4.1-.5.1h-.4c-.3 0-.6-.1-.8-.2-.2-.2-.3-.4-.4-.6v-.6c-.3.5-.7.9-1.2 1.1-.4.2-1 .4-1.6.4zm10.7-5.8c-.6 0-1.1.1-1.5.3s-.8.5-.9.9v4.4h-1.8v-7.2h1.7v1.5c.2-.5.6-.9 1-1.2s.8-.5 1.3-.5h.3zm4.3 5.8c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.8-1.2c-.2-.4-.3-.9-.3-1.4s.1-1 .3-1.5.4-.9.8-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4v.6h-5.6c0 .3.1.5.2.8.1.2.3.4.4.6.2.2.4.3.6.4s.4.1.7.1c.4 0 .7-.1 1-.3s.5-.4.7-.7l1.6.4c-.3.6-.7 1-1.3 1.4-.6.3-1.3.5-2.1.5zm1.9-4.4c0-.5-.2-1-.6-1.3s-.8-.5-1.3-.5c-.2 0-.5 0-.7.1s-.4.2-.6.4-.3.3-.4.6c-.1.2-.2.5-.2.7zm2.7 4.5c.1 0 .2 0 .3-.1s.2-.2.2-.4v-1.8h1.5v2.1c0 .3-.1.5-.2.7s-.3.3-.5.4-.4.2-.6.2-.4.1-.7.1zm18.1-.3h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-2v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-1.8v-7.2h1.7v1.3c.3-.5.6-.8 1.1-1.1s1-.4 1.6-.4 1.1.1 1.4.4.5.7.6 1.1c.3-.5.7-.9 1.1-1.1.4-.3 1-.4 1.5-.4.4 0 .8.1 1.1.2.3.2.5.4.7.6.2.3.3.6.3.9.1.3.1.7.1 1zm3.5.2c-.3 0-.7-.1-1-.2s-.6-.3-.8-.5-.4-.4-.5-.7-.2-.6-.2-.9.1-.7.2-.9c.2-.3.4-.5.6-.7.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.3 0 .6 0 .9.1s.6.1.8.2v-.4c0-.5-.1-.8-.4-1.1s-.7-.4-1.2-.4c-.4 0-.8.1-1.1.2-.4.1-.7.3-1.1.6l-.6-1.2c.9-.6 1.9-.9 3-.9 1 0 1.8.3 2.4.8s.9 1.2.9 2.2v2.2c0 .2 0 .3.1.4s.2.1.4.1v1.6c-.2 0-.3.1-.5.1h-.4c-.3 0-.6-.1-.8-.2-.2-.2-.3-.4-.3-.6v-.4c-.3.4-.7.7-1.2 1-.4.2-.9.3-1.4.3zm.5-1.4c.3 0 .6-.1.9-.2s.5-.3.7-.4c.2-.2.3-.3.3-.5v-.8c-.2-.1-.5-.1-.7-.2-.3-.1-.5-.1-.7-.1-.5 0-.9.1-1.2.3s-.5.5-.5.8.1.6.4.8c.2.2.5.3.8.3zm8.5 1.4c-.5 0-1-.1-1.4-.3s-.8-.5-1.1-.8-.5-.7-.7-1.2-.3-.9-.3-1.5c0-.5.1-1 .2-1.5.2-.4.4-.8.7-1.2.3-.3.6-.6 1-.8s.8-.3 1.3-.3 1 .1 1.4.4.8.6 1 1v-4h1.8v7.9c0 .2 0 .3.1.4s.2.1.4.1v1.6c-.3.1-.6.1-.9.1s-.6-.1-.8-.2-.3-.4-.4-.6v-.5c-.3.5-.6.8-1.1 1-.2.2-.7.4-1.2.4zm.5-1.6c.2 0 .4 0 .5-.1.2-.1.4-.1.5-.3.2-.1.3-.2.4-.4.1-.1.2-.3.3-.5v-1.7c-.2-.4-.4-.7-.8-1s-.7-.4-1.1-.4c-.3 0-.5.1-.8.2s-.4.3-.6.5-.3.4-.4.7-.1.5-.1.8.1.6.2.8c.1.3.2.5.4.7s.4.3.6.5c.3.1.6.2.9.2zm8.8 1.6c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.8-1.2c-.2-.4-.3-.9-.3-1.4s.1-1 .3-1.5.4-.9.8-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4v.6h-5.6c0 .3.1.5.2.8.1.2.3.4.4.6.2.2.4.3.6.4s.4.1.7.1c.4 0 .7-.1 1-.3s.5-.4.7-.7l1.6.4c-.3.6-.7 1-1.3 1.4-.6.3-1.3.5-2.1.5zm1.8-4.4c0-.5-.2-1-.6-1.3s-.8-.5-1.3-.5c-.2 0-.5 0-.7.1s-.4.2-.6.4-.3.3-.4.6c-.1.2-.2.5-.2.7zm9.2 4.4c-.3 0-.6 0-.9-.1-.3 0-.6-.1-.9-.2l-.9-.3c-.3-.1-.5-.3-.7-.4l.7-1.3c.9.6 1.8.9 2.7.9.4 0 .7-.1.9-.2s.3-.3.3-.6-.1-.4-.4-.6c-.3-.1-.7-.3-1.3-.4-.5-.1-.9-.2-1.2-.3s-.6-.3-.8-.4c-.2-.2-.3-.3-.4-.5s-.1-.4-.1-.7c0-.4.1-.7.2-1s.4-.5.6-.7c.3-.2.6-.4.9-.5.4-.1.7-.2 1.1-.2.5 0 1 .1 1.5.2.5.2 1 .4 1.4.7l-.8 1.1c-.4-.3-.8-.4-1.1-.6-.4-.1-.7-.2-1.1-.2-.3 0-.6.1-.8.2s-.3.3-.3.6c0 .2.1.4.3.5s.6.2 1.1.4c.5.1 1 .3 1.3.4.4.1.7.3.9.4.2.2.4.4.5.6s.2.5.2.8-.1.7-.2.9c-.1.3-.3.5-.6.7s-.6.3-.9.5-.8.3-1.2.3zm4.1-8.4v-1.8h1.8v1.8zm0 8.2v-7.2h1.8v7.2zm14.7 0h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-1.8v-4c0-.6-.1-1-.3-1.3s-.5-.4-.8-.4c-.4 0-.7.1-1 .4s-.6.6-.7 1.1v4.2h-2v-7.2h1.7v1.3c.3-.5.6-.8 1.1-1.1s1-.4 1.6-.4 1.1.1 1.4.4.5.7.6 1.1c.3-.5.7-.9 1.1-1.1.4-.3 1-.4 1.5-.4.4 0 .8.1 1.1.2.3.2.5.4.7.6.2.3.3.6.3.9.1.3.1.7.1 1zm5.9.2c-.6 0-1-.1-1.5-.4-.4-.3-.8-.6-1-1v4.2h-1.8v-10.2h1.6v1.2c.3-.4.6-.8 1-1s.9-.4 1.5-.4c.5 0 .9.1 1.3.3s.8.5 1.1.8.5.7.7 1.2.3.9.3 1.4-.1 1-.2 1.5c-.2.5-.4.9-.7 1.2s-.6.6-1 .8c-.4.3-.9.4-1.3.4zm-.6-1.6c.3 0 .5-.1.8-.2.2-.1.4-.3.6-.5s.3-.4.4-.7.1-.5.1-.8-.1-.6-.2-.8c-.1-.3-.2-.5-.4-.7s-.4-.3-.6-.5c-.2-.1-.5-.2-.8-.2-.2 0-.4 0-.5.1-.2.1-.4.1-.5.3-.2.1-.3.2-.4.4-.1.1-.2.3-.3.5v1.7c.2.4.4.8.8 1 .2.3.6.4 1 .4zm5-8.6h1.8v7.6c0 .6.3.8.8.8.1 0 .2 0 .4-.1.1 0 .3-.1.4-.1l.2 1.5c-.2.1-.5.2-.9.3s-.6.1-.9.1c-.6 0-1-.2-1.3-.5s-.5-.7-.5-1.3zm7.7 10.2c-.6 0-1.1-.1-1.6-.3s-.9-.5-1.2-.8-.6-.7-.8-1.2c-.2-.4-.3-.9-.3-1.4s.1-1 .3-1.5.4-.9.8-1.2c.3-.3.7-.6 1.2-.8s1-.3 1.6-.3 1.1.1 1.6.3.9.5 1.2.8.6.7.7 1.2c.2.4.3.9.3 1.4v.6h-5.6c0 .3.1.5.2.8.1.2.3.4.4.6.2.2.4.3.6.4s.4.1.7.1c.4 0 .7-.1 1-.3s.5-.4.7-.7l1.6.4c-.3.6-.7 1-1.3 1.4-.6.3-1.3.5-2.1.5zm1.9-4.4c0-.5-.2-1-.6-1.3s-.8-.5-1.3-.5c-.2 0-.5 0-.7.1s-.4.2-.6.4-.3.3-.4.6c-.1.2-.2.5-.2.7z" fill="#3b214f"></path></svg>
      `

      headerLink.append(svgLogo)

      svgPayments = `
      <div class="header-payments"><svg enable-background="new 0 0 188.1 21" viewBox="0 0 188.1 21" xmlns="http://www.w3.org/2000/svg"><title>mastercard maestro visa american express paypal icons</title><path d="m188.1 0h-34.1v21h34.1z" fill="#cccccb"></path><path d="m187.7.4v20.3h-33.3v-20.3z" fill="#fff"></path><path d="m179.6 8.2c-.6 0-1.2.1-1.8.3l-.1 1.2c.5-.2 1.1-.3 1.6-.3.6 0 1 .1.8.6-1.8 0-3 .4-3.2 1.5-.3 2 1.8 1.9 2.7 1.1l-.1.5h1.6l.7-3.2c.1-1.4-1.1-1.8-2.2-1.7zm.1 3.2c-.1.4-.4.6-.8.6s-.7-.3-.4-.7c.3-.3.6-.4 1-.4h.4c-.1.2-.2.3-.2.5zm3.3-4.5-1.3 6.1h1.6l1.4-6.1zm-7.4 0h-3l-1.3 6.1h1.7l.4-2h1.2c1.2 0 2.3-.8 2.5-2 .3-.8-.2-1.7-1-2-.2-.1-.3-.1-.5-.1zm-.1 2.1c-.1.5-.5.8-1 .8h-.8l.4-1.7h.9c.4.1.6.4.5.9 0-.1 0 0 0 0z" fill="#167eae"></path><path d="m164 8.2c-.6 0-1.2.1-1.8.3l-.1 1.2c.5-.2 1-.3 1.5-.3.6 0 .9.1.8.6-1.8 0-3 .4-3.2 1.5-.3 2 1.8 1.9 2.7 1.1l-.1.5h1.6l.7-3.2c.3-1.4-1-1.8-2.1-1.7zm.2 3.2c-.1.4-.4.6-.8.6-.3 0-.5-.2-.5-.5 0-.1 0-.2.1-.2.3-.3.6-.4 1-.4h.4c-.1.1-.2.3-.2.5zm2.6-3.2h1.6l.2 2.9 1.6-2.9h1.7l-3.8 6.8h-1.8l1.1-2zm-6.7-1.3h-3l-1.3 6.1h1.8l.4-2h1.2c1.2 0 2.3-.8 2.5-2 .2-.9-.3-1.8-1.2-2-.1-.1-.3-.1-.4-.1zm-.1 2.1c-.1.5-.5.8-1 .8h-.8l.4-1.7h.9c.4.1.6.4.5.9 0-.1 0 0 0 0zm25-1.3v-.7h-.3v-.1h.6v.1h-.3zm.5 0v-.8h.2l.2.6.2-.6h.1v.8h-.1v-.7l-.2.7h-.1l-.2-.7z" fill="#1d567e"></path><path d="m115.9 21h33.2v-21h-33.2z" fill="#3473db"></path><path d="m118.9 7.4-.6-1.6-.6 1.6m15.3-.6c-.1.1-.3.1-.5.1h-1.1v-.9h1.1c.2 0 .3 0 .4.1s.2.2.2.3 0 .3-.1.4zm8.1.6-.6-1.6-.6 1.6zm-15.1 1.7h-1v-3.1l-1.3 3.1h-.8l-1.4-3.1v3.1h-1.9l-.4-.9h-1.9l-.4.9h-1l1.7-3.9h1.4l1.6 3.7v-3.7h1.5l1.2 2.6 1.1-2.6h1.5zm3.8 0h-3.1v-3.9h3.1v.8h-2.2v.7h2.1v.8h-2.1v.8h2.2zm4.4-2.9c0 .5-.3.9-.7 1 .2.1.3.2.5.3.1.2.2.5.2.7v.8h-.9v-.5c0-.3 0-.6-.2-.8s-.4-.2-.7-.2h-1v1.4h-.9v-3.9h2.1c.4-.1.8 0 1.1.2s.5.6.5 1zm1.5 2.9h-.9v-3.9h.9zm11.1 0h-1.3l-1.8-2.9v2.9h-1.9l-.4-.9h-1.9l-.4.9h-1.1c-.5 0-1-.1-1.4-.4-.4-.4-.5-1-.5-1.5s.1-1.1.5-1.5c.4-.3.9-.4 1.4-.4h.9v.7h-.9c-.2 0-.5.1-.7.2-.2.2-.3.6-.3.9s.1.7.3.9c.2.1.4.2.6.2h.4l1.3-3.1h1.4l1.6 3.7v-3.7h1.4l1.6 2.7v-2.7h1zm-30.9.8h1.6l.4-.9h.8l.4.9h3.1v-.7l.3.7h1.6l.3-.7v.7h7.8v-1.4h.1c.1 0 .1 0 .1.2v1.2h4v-.3c.5.2 1 .3 1.5.3h1.7l.4-.9h.8l.3.9h3.3v-.9l.5.8h2.6v-5.4h-2.6v.6l-.4-.6h-2.7v.6l-.3-.6h-3.6c-.5 0-1.1.1-1.6.3v-.3h-2.5v.3c-.3-.2-.6-.3-1-.3h-8.9l-.6 1.4-.6-1.4h-2.8v.6l-.3-.6h-2.4l-1.3 2.6zm33.2 2.8h-1.7c-.2 0-.3 0-.4.1s-.1.2-.1.3.1.2.2.3h.9c.4 0 .8.1 1.1.3l.1.1m-.1 1.5c-.3.4-.8.5-1.3.5h-1.8v-.8h1.8c.2 0 .3 0 .4-.1s.1-.1.1-.2c0-.2-.1-.4-.3-.4h-.1c-.9 0-2 0-2-1.2 0-.7.5-1.2 1.2-1.2h2v-.8h-1.7c-.4 0-.8.1-1.2.3v-.3h-2.5c-.4 0-.8.1-1.1.3v-.3h-4.6v.3c-.4-.2-.8-.3-1.3-.3h-3v.3c-.4-.3-.8-.4-1.3-.3h-3.4l-.8.8-.7-.8h-5v5.5h4.9l.8-.9.8.9h3v-1.3h.3c.4 0 .9 0 1.3-.2v1.5h2.5v-1.4h.1c.2 0 .2 0 .2.2v1.3h7.6c.5 0 .9-.1 1.3-.4v.4h2.4c.5 0 .9-.1 1.4-.2zm-3.7-1.5c.2.2.3.5.3.8 0 .8-.5 1.2-1.5 1.2h-1.8v-.8h1.8c.2 0 .3 0 .4-.1s.1-.1.1-.2c0-.2-.1-.4-.3-.4h-.1c-.9 0-2 0-2-1.2 0-.7.5-1.2 1.2-1.2h2v.8h-1.7c-.2 0-.3 0-.4.1s-.1.2-.1.3.1.2.2.3h.9c.4.1.8.1 1 .4zm-8.4-.3c-.1.1-.3.1-.5.1h-1.1v-.9h1.1c.2 0 .3 0 .4.1s.2.2.2.4c.1.1 0 .2-.1.3zm.5.5c.2.1.3.2.5.3.1.2.2.5.2.7v.8h-.9v-.5c0-.3 0-.6-.2-.8s-.4-.2-.7-.2h-1v1.4h-.9v-3.9h2.2c.4-.1.8 0 1.1.2s.5.5.5.9c0 .5-.3.9-.8 1.1zm1.2-2.1h3.1v.8h-2.2v.7h2.1v.8h-2.1v.8h2.2v.8h-3.1zm-6.3 1.8h-1.2v-1h1.2c.3 0 .6.1.6.5s-.2.5-.6.5zm-2.1 1.8-1.4-1.6 1.4-1.5zm-3.7-.5h-2.3v-.8h2v-.8h-2v-.7h2.3l1 1.1zm7.4-1.8c0 1.1-.8 1.3-1.6 1.3h-1.2v1.3h-1.8l-1.1-1.3-1.2 1.3h-3.7v-3.9h3.8l1.1 1.3 1.2-1.3h3c.7 0 1.5.2 1.5 1.3z" fill="#fff"></path><path d="m34.1 0h-34.1v21h34.1z" fill="#cccccb"></path><path d="m33.7.4v20.3h-33.3v-20.3z" fill="#fff"></path><path d="m72.4 0h-34.1v21h34.1z" fill="#cccccb"></path><path d="m72 .4v20.3h-33.3v-20.3z" fill="#fff"></path><path d="m9.9 19.3v-1.2c0-.4-.3-.7-.7-.7-.2 0-.5.1-.7.3-.1-.2-.3-.3-.6-.3-.2 0-.4.1-.5.3v-.2h-.4v1.9h.4v-1c0-.3.2-.5.5-.5s.4.2.4.5v1h.4v-1c0-.3.2-.5.5-.5s.4.2.4.5v1zm6.1-1.9h-.7v-.6h-.4v.6h-.4v.4h.4v.8c0 .4.2.7.6.7.2 0 .4-.1.5-.1l-.1-.3c-.1.1-.3.1-.4.1-.2 0-.3-.1-.3-.3v-.8h.8zm3.4-.1c-.2 0-.4.1-.5.3v-.2h-.4v1.9h.4v-1c0-.3.1-.5.4-.5h.3l.1-.4c-.1 0-.2-.1-.3-.1zm-5.2.2c-.2-.1-.5-.2-.8-.2-.5 0-.8.2-.8.6 0 .3.2.5.6.5h.2c.2 0 .3.1.3.2s-.1.2-.4.2-.5-.1-.6-.2l-.2.3c.2.2.5.2.8.2.5 0 .8-.3.8-.6s-.2-.5-.7-.6h-.2c-.2 0-.3-.1-.3-.2s.1-.2.4-.2c.2 0 .5.1.6.2zm10.8-.2c-.2 0-.4.1-.5.3v-.2h-.4v1.9h.4v-1c0-.3.1-.5.4-.5h.3l.1-.4c-.1 0-.2-.1-.3-.1zm-5.2 1c0 .6.4 1 1 1 .3 0 .5-.1.7-.2l-.2-.3c-.2.1-.3.2-.5.2-.3 0-.6-.2-.6-.6s.2-.6.6-.6c.2 0 .3.1.5.2l.2-.3c-.2-.2-.4-.2-.7-.2-.6-.2-1 .3-1 .8zm3.8 0v-.9h-.4v.2c-.1-.2-.3-.3-.6-.3-.5 0-.9.4-.9 1s.4 1 .9 1c.3 0 .5-.1.6-.3v.2h.4zm-1.5 0c0-.3.2-.6.6-.6.3 0 .6.3.6.6s-.2.6-.6.6-.6-.3-.6-.6zm-4.9-1c-.5 0-.9.4-.9 1s.4 1 1 1c.3 0 .5-.1.8-.3l-.2-.3c-.2.1-.4.2-.5.2-.3 0-.5-.1-.6-.5h1.4v-.2c-.1-.5-.5-.9-1-.9zm0 .4c.3 0 .4.2.5.5h-1c.1-.3.2-.5.5-.5zm10.2.6v-1.7h-.4v1c-.1-.2-.3-.3-.6-.3-.5 0-.9.4-.9 1s.4 1 .9 1c.3 0 .5-.1.6-.3v.2h.4zm-1.5 0c0-.3.2-.6.6-.6.3 0 .6.3.6.6s-.2.6-.6.6-.6-.3-.6-.6zm-13.7 0v-.9h-.4v.2c-.1-.2-.3-.3-.6-.3-.5 0-.9.4-.9 1s.4 1 .9 1c.3 0 .5-.1.6-.3v.2h.4zm-1.5 0c0-.3.2-.6.6-.6.3 0 .6.3.6.6s-.2.6-.6.6-.6-.3-.6-.6z"></path><path d="m14.1 3.2h6.1v11h-6.1z" fill="#ff5f00"></path><path d="m14.4 8.7c0-2.2 1-4.2 2.7-5.5-1.2-.9-2.7-1.5-4.3-1.5-3.9 0-7 3.1-7 7s3.1 7 7 7c1.6 0 3.1-.6 4.3-1.5-1.6-1.3-2.7-3.2-2.7-5.5z" fill="#eb001b"></path><path d="m28.5 8.7c0 3.9-3.1 7-7 7-1.6 0-3.1-.6-4.3-1.5 1.6-1.3 2.7-3.3 2.7-5.5s-1-4.2-2.7-5.5c1.2-.9 2.7-1.5 4.3-1.5 3.8 0 7 3.1 7 7z" fill="#f79e1b"></path><path d="m50.8 19.4v-1.2c0-.4-.3-.7-.7-.8h-.1c-.3 0-.5.1-.7.3-.1-.2-.4-.3-.6-.3s-.4.1-.6.3v-.2h-.4v1.9h.4v-1c0-.2.1-.5.4-.5h.1c.3 0 .4.2.4.5v1.1h.4v-1c0-.2.1-.5.4-.5h.1c.3 0 .4.2.4.5v1.1zm2.3-1v-.9h-.4v.2c-.1-.2-.4-.3-.6-.3-.5 0-1 .4-1 1s.4 1 1 1c.2 0 .5-.1.6-.3v.2h.4zm-1.5 0c0-.3.3-.6.6-.5.3 0 .6.3.5.6 0 .3-.3.5-.6.5s-.5-.2-.5-.6zm10.3-1c.1 0 .3 0 .4.1.1 0 .2.1.3.2s.2.2.2.3c.1.3.1.5 0 .8 0 .1-.1.2-.2.3s-.2.2-.3.2c-.3.1-.6.1-.8 0-.1 0-.2-.1-.3-.2s-.2-.2-.2-.3c-.1-.3-.1-.5 0-.8 0-.1.1-.2.2-.3s.2-.2.3-.2.3-.1.4-.1zm0 .4h-.2c-.1 0-.1.1-.2.1-.1.1-.1.1-.1.2-.1.2-.1.3 0 .5 0 .1.1.1.1.2.1.1.1.1.2.1.2.1.3.1.5 0 .1 0 .1-.1.2-.1.1-.1.1-.1.1-.2.1-.2.1-.3 0-.5 0-.1-.1-.1-.1-.2-.1-.1-.1-.1-.2-.1zm-6.6.6c0-.6-.4-1-.9-1s-1 .5-1 1 .5 1 1 1c.3 0 .6-.1.8-.3l-.2-.3c-.1.2-.3.2-.5.2-.3 0-.5-.2-.6-.5h1.4zm-1.4-.1c0-.3.2-.5.5-.5s.5.2.5.5zm3.2-.3c-.2-.1-.4-.2-.6-.2s-.4.1-.4.2.1.2.3.2h.2c.4.1.7.2.7.6s-.3.6-.9.6c-.3 0-.6-.1-.8-.2l.2-.3c.2.1.4.2.6.2.3 0 .4-.1.4-.2s-.1-.2-.3-.2h-.2c-.4-.1-.7-.2-.7-.6s.3-.6.8-.6c.3 0 .5.1.8.2zm2-.1h-.7v.9c0 .2.1.3.3.3.1 0 .3 0 .4-.1l.1.4c-.2.1-.3.1-.5.1-.5 0-.7-.3-.7-.7v-.9h-.4v-.4h.4v-.6h.4v.6h.7zm1.4-.5c.1 0 .2 0 .3.1l-.1.4h-.3c-.3 0-.4.2-.4.5v1.1h-.4v-1.9h.4v.2c.1-.3.3-.4.5-.4zm2.8 1.7c.1 0 .1 0 0 0 .1 0 .1 0 .1.1v.3h-.1-.1c-.1 0-.1 0-.2-.1v-.1-.1c.2-.1.2-.1.3-.1zm0 .3c.1 0 .1 0 0 0 .2-.1.2-.2.1-.2h-.1-.1c-.1.1-.1.1.1.2zm0-.2c.1 0 .1 0 0 0 .1.1.1.1 0 0v.1l.1.1-.1-.1v.1zm0 0c.1.1.1.1 0 0 .1.1.1 0 0 0 .1 0 .1 0 0 0z"></path><path d="m52.2 3h6.2v11.2h-6.2z" fill="#7673c0"></path><path d="m52.6 8.6c0-2.2 1-4.3 2.7-5.6-3.1-2.4-7.6-1.9-10 1.2s-1.9 7.6 1.2 10c2.6 2 6.2 2 8.8 0-1.7-1.3-2.7-3.4-2.7-5.6z" fill="#eb001b"></path><path d="m66.2 13.1v-.2h.1-.2.1zm.5 0v-.3h-.1l-.1.2-.1-.2h-.1v.3h.1v-.2l.1.2h.2v-.2zm.2-4.5c0 3.9-3.2 7.1-7.1 7.1-1.6 0-3.2-.5-4.4-1.5 3.1-2.4 3.6-6.9 1.2-10-.4-.4-.8-.9-1.2-1.2 3.1-2.4 7.6-1.9 10 1.2 1 1.3 1.5 2.8 1.5 4.4z" fill="#00a1df"></path><path d="m77.3 0h34.1v21h-34.1z" fill="#1a1f70"></path><g fill="#fff"><path d="m89.8 6.9-1.8 4.7-.7-4c-.1-.4-.4-.7-.8-.7h-3.1l-.1.2c.6.2 1.4.4 1.8.6.2.1.4.2.4.6l1.4 5.5v-.1h1.9l2.9-6.9z"></path><path d="m92.4 6.9-1.5 6.9h1.8l1.5-6.9z"></path><path d="m96.5 8.8c0-.2.2-.5.7-.6.2-.1 1-.1 1.8.3l.3-1.5c-.4-.2-1-.3-1.7-.3-1.8 0-3 .9-3 2.3 0 1 .9 1.6 1.6 1.9.7.4.9.6.9.9 0 .5-.6.7-1 .7-.9 0-1.4-.2-1.8-.4l-.3 1.5c.4.2 1.2.4 2 .4 1.9 0 3.1-.9 3.1-2.4-.1-1.8-2.6-2-2.6-2.8z"></path><path d="m105.4 13.9-1.4-6.9h-1.5c-.3 0-.6.2-.7.5l-2.8 6.4h1.9l.4-1h2.3l.2 1v.1h1.6zm-3.7-2.5 1-2.6.6 2.6z"></path></g></svg> </div>
      `

      header.append(svgPayments)
    },
  },

  removeItems: function () {
    $('.checkout-outer-reassurance').remove()
    $('.checkout-header').remove()

    if ($('.checkout-outer-slider').length >= 1) {
      $('.checkout-outer-slider').remove()
    }
  },

  quantityTotal: function () {
    $('td.quantity-price').attr('style', 'display: inline !important')
  },

  toOrderFormBtn: function () {
    const toOrderFormBtnContainer = $('.btn-place-order-wrapper')

    const toOrderFormBtn = `
    <a href="#orderform" id="to-checkout-btn">
      <img class="payments-checkout" src="/arquivos/header-payments.svg"/>
      <span>Secure checkout</span>
      <img class="proceed-arrow" src="/arquivos/right-arrow-white.svg" />
    </a>
    `

    const toOrderFormBtnExists = $('#to-checkout-btn')

    if (toOrderFormBtnExists.length === 0) {
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

      const mobileSlider = `
      <div class="outer-slider">
      <section class="slider-wrapper">
 
      <button class="slide-arrow" id="slide-arrow-prev">
        &#8249;
      </button>
       
      <button class="slide-arrow" id="slide-arrow-next">
        &#8250;
      </button>
       
      <ul class="slides-container" id="slides-container">
        <li class="slide">
          <img class="reassurance-item-image five-icon" src="/arquivos/reassurance-5.svg" />
          <div class="slider-text">
              <p class="reassurance-title">5 year guarantee</p>
              <p class="reassurance-subtitle">Peace of mind at no extra cost</p>
          </div>
        </li>
        <li class="slide">
          <img class="reassurance-item-image segtigo-icon" src="/arquivos/segtigo-logo.svg" />
          <div class="slider-text">
              <p class="reassurance-title">Fast, Easy & Safe</p>
              <p class="reassurance-subtitle">100% Secure Checkout</p>
          </div>
        </li>
        <li class="slide">
          <img class="reassurance-item-image truck-icon" src="/arquivos/reassurance-truck.svg" />
          <div class="slider-text">
              <p class="reassurance-title">Free UK Delivery</p>
              <p class="reassurance-subtitle">On all orders over £199</p>
          </div>
        </li>
      </ul>
    </section>
    </div>
      `

      mainCart.prepend([reassuranceBar, mobileSlider, orderFormHeader])

      $('th.product').attr('id', 'cart-header-product')
    },
  },

  handleSlider: function () {
    const sliderOuter = document.querySelector('outer-slider')
    const slidesContainer = document.getElementById('slides-container')
    const slide = document.querySelector('.slide')
    const prevButton = document.getElementById('slide-arrow-prev')
    const nextButton = document.getElementById('slide-arrow-next')

    nextButton.addEventListener('click', (event) => {
      const slideWidth = slide.clientWidth
      slidesContainer.scrollLeft += slideWidth
    })

    prevButton.addEventListener('click', () => {
      const slideWidth = slide.clientWidth
      slidesContainer.scrollLeft -= slideWidth
    })
  },

  continueShopping: {
    init: function () {
      const cartContainer = $('.cart-template-holder')

      const containerShoppingContainer = $('.continue-shopping-container')

      if (containerShoppingContainer.length === 0) {
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

      if (summaryHeaderExist.length === 0) {
        totalizers.prepend(header)
      }
    },
  },

  secureCheckoutWarning: {
    init: function () {
      const summarizerFooter = $('.summary-totalizers tfoot')

      const secureCheckoutMessage = `
        <tr class="secure-checkout">
        <td id="secure-cell"><img class="smart-image" src="/arquivos/lock-icon.svg"/><span>Secure Checkout - Shopping with us is always safe and secure</span></td>
        </tr>
      `

      const secureCheckoutMessageExist = $('.secure-checkout')

      if (secureCheckoutMessageExist.length === 0) {
        summarizerFooter.append(secureCheckoutMessage)
      }
    },
  },

  storeReviews: {
    init: function () {
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

      if (reviewsExists.length === 0) {
        checkoutContainer.append(reviewsContainer)
      }
    },
  },

  footerImages: {
    init: function () {
      const footer = $('div[style="text-align:center"]')

      footer.attr('id', 'cart-footer')

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

      if (footerImagesExists.length === 0) {
        footer.append(imagesContainer)
      }
    },
  },
}

const checkoutPage = {
  removeItems: function () {
    $('.summary-coupon-wrap').remove()
    $('order-form-header').remove()
    $('.shopping-outer-reassurance').remove()
    $('.order-form-header').remove()
    $('.outer-reviews-container').remove()
    $('.outer-slider').remove()
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

      const mobileSlider = `
    <div class="checkout-outer-slider">
    <section class="slider-wrapper">

    <button class="slide-arrow" id="slide-arrow-prev">
      &#8249;
    </button>
     
    <button class="slide-arrow" id="slide-arrow-next">
      &#8250;
    </button>
     
    <ul class="slides-container" id="slides-container">
      <li class="slide">
        <img class="reassurance-item-image five-icon" src="/arquivos/reassurance-5.svg" />
        <div class="slider-text">
            <p class="reassurance-title">5 year guarantee</p>
            <p class="reassurance-subtitle">Peace of mind at no extra cost</p>
        </div>
      </li>
      <li class="slide">
        <img class="reassurance-item-image segtigo-icon" src="/arquivos/segtigo-logo.svg" />
        <div class="slider-text">
            <p class="reassurance-title">Fast, Easy & Safe</p>
            <p class="reassurance-subtitle">100% Secure Checkout</p>
        </div>
      </li>
      <li class="slide">
        <img class="reassurance-item-image truck-icon" src="/arquivos/reassurance-truck.svg" />
        <div class="slider-text">
            <p class="reassurance-title">Free UK Delivery</p>
            <p class="reassurance-subtitle">On all orders over £199</p>
        </div>
      </li>
    </ul>
  </section>
  </div>
    `

      const reassuranceBarExists = $('.checkout-outer-reassurance')

      const orderFormHeaderExists = $('.checkout-outer-reassurance')

      if (reassuranceBarExists.length == 0 && orderFormHeaderExists.length == 0) {
        checkoutContainer.prepend([reassuranceBar, mobileSlider, orderFormHeader])
      }
    },
  },

  clientInfo: {
    init: function () {
      $('.client-profile-data .accordion-heading span.accordion-toggle span').text('Cart holder details')
      $('.custom-cart-template-wrap h2').text('Order Summary')
    },
  },

  paymentButtonText: {
    init: function () {
      const paymentBtn = $('#payment-data-submit span')

      paymentBtn.text('Complete your order')
    },
  },
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

    setTimeout(() => {
      shoppingCart.handleSlider()
    }, 1000)
  }

  if (
    window.location.hash === '#/email' ||
    window.location.hash === '#/profile' ||
    window.location.hash === '#/shipping' ||
    window.location.hash === '#/payment'
  ) {
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

    setTimeout(() => {
      shoppingCart.handleSlider()
    }, 1000)
  }
})

$(window).on('hashchange', function () {
  if (
    window.location.hash === '#/email' ||
    window.location.hash === '#/profile' ||
    window.location.hash === '#/shipping' ||
    window.location.hash === '#/payment'
  ) {
    setTimeout(() => {
      checkoutPage.removeItems()
      checkoutPage.orderFormHeader.init()
      checkoutPage.clientInfo.init()
      shoppingCart.secureCheckoutWarning.init()
      checkoutPage.paymentButtonText.init()
      shoppingCart.footerImages.init()
    }, 500)

    setTimeout(() => {
      shoppingCart.handleSlider()
    }, 1000)
  }

  if (window.location.hash === '#/cart') {
    setTimeout(() => {
      shoppingCart.mainCart.init()
      shoppingCart.continueShopping.init()
      shoppingCart.summaryHeader.init()
      shoppingCart.removeItems()
      shoppingCart.secureCheckoutWarning.init()
      shoppingCart.storeReviews.init()
      shoppingCart.footerImages.init()
    }, 500)

    setTimeout(() => {
      shoppingCart.handleSlider()
    }, 1000)
  }
})

$(window).on('orderFormUpdated.vtex', (_, orderForm) => {
  setTimeout(() => {
    shoppingCart.quantityTotal()
    shoppingCart.toOrderFormBtn()
  }, 200)
})
