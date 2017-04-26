
// <button type="button" id="myButton" data-loading-text="Loading..." class="btn btn-primary" autocomplete="off">
//   Loading state
// </button>

  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })

  $('.collapse').collapse()

  $('#myCollapsible').collapse({
    toggle: false
  })

  $('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
  })
// </div>
//             <button type="submit" class="btn btn-default space">Submit</button>
