(function() {

  var lastScrollAt = Date.now()
    , timeout

  function scrollStartStop() {
      var $this = $(this)

      if (Date.now() - lastScrollAt > 100)
          $this.trigger('scrollstart')

      lastScrollAt = Date.now()

      clearTimeout(timeout)

      timeout = setTimeout(function() {
          if (Date.now() - lastScrollAt > 99)
          $this.trigger('scrollend')
      }, 150)
  }

  $(".layer__scroll").scroll(scrollStartStop);
  $('.layer__main').scroll(scrollStartStop);
})()
