$(document).on('ready', function() {
  $('#all').html('');
  getSuperheros();
});

$('form').on('submit', function(event) {
  event.preventDefault();
  $('#message').html('');
  var payload = {
    name: $('#name').val(),
    power: $('#power').val(),
    enemy: $('#enemy').val()
  };
  $.post('/superheros', payload, function(data) {
    $('#message').html('Added');
    $('#message').html('');
    getSuperheros();
  });
});

function getSuperheros() {
  $('#all').html('');
  $.get('/superheros', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all').html('<li>' + data[i].name + '</li>');
    }
  });
}