$(document).ready(function() {
  let $pubText = $('#pub-text'),
    $pubImg = $('#pub-img');

  $($pubText, $pubImg).on('click', function(event) {
    // event.preventDefault();
    let $textarea = `<div class="input-field col s12">
                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">Textarea</label>
                    </div>`;

    $('#pub-content').html($textarea);
    console.log($('#pub-content'));
  });

  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
       
