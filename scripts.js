$(function() {

  // elemek összegyűjtése
  let $progressBar = $('.progress-bar');
  let $input = $('input[type="number"]');


  $input.change(function() {

    // kérjük le a %-//
    let percent = $input.val();
    // let percent = 30;

    // állítsuk be a progressbar-t
    $progressBar.text(percent + '%');
    $progressBar.css('width', percent + '%');
    $progressBar.attr('aria-valuenow', percent);
  });
});
