$(document).ready(function() {
  $('.modal-trigger .material-icons').on('click', function(event) {
    let $pubContent = $('#pub-content'),
      $textarea = `<div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Textarea</label>
                  </div>`,
      $inputFile = `<div class="file-field input-field">
                      <div class="btn">
                        <span>File</span>
                        <input type="file">
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                      </div>
                    </div>`,
      $datePicker = `<div class="input-field col s12">
                      <input id="datepicker" placeholder="Select a date" type="text">
                    </div>`;

    switch (true) {
    case $(event.target).attr('id') === 'pub-text' :
      $pubContent.html($textarea);
      break;
    case $(event.target).attr('id') === 'pub-img' : 
      $pubContent.html($inputFile);
      break;
    case $(event.target).attr('id') === 'pub-event' :
      $pubContent.html($datePicker);
      console.log(event.target);
    } 

    $('#datepicker').pickadate();
  });

  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
       
