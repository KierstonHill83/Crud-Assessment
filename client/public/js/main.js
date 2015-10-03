$(document).on('ready', function() {
  $('#all').html('');
  getSuperheros();
});

$('#superhero-form').on('submit', function(event) {
  event.preventDefault();
  $('#message').html('');
  var payload = {
    name: $('#name').val(),
    power: $('#power').val(),
    enemy: $('#enemy').val()
  };
  $.post('/api/v1/superheros', payload, function(data) {
    $('#message').html('Added');
    $('#message').html('');
    getSuperheros();
  });
});

function getSuperheros() {
  $('#all').html('');
  $.get('/api/v1/superheros', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#all').append('<li>' + data[i].name + '</li>');
    }
  });
}
