$(document).ready(function() {
  fadePage();
  loadImages();
  chooseFoodType(); 
  modalContent();
  initMap();
});

function fadePage() {
  $('#fade-initial-page').delay('2000').fadeOut('slow');
  $('#main-page').delay('2000').fadeIn('slow');
}

function loadImages() {
  for (restaurante of restaurantes) {
    var image = $('<img>').attr('src', restaurante.image).addClass('restaurantImage').data(restaurante);
    $('#restaurantsImg').append(image);
  }
}

function chooseFoodType() {
  $('.choose-type').on('input', function () {
    var inputValue = $('.choose-type').val().toLowerCase();
    $('.restaurantImage').each(function() {
      if ($(this).data('type') !== inputValue) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn('slow');
      }
      if (!inputValue) {
        $(this).fadeIn('slow');
      }
    });
  })
}

function modalContent() {
  $('.restaurantImage').each(function() {
    $(this).click(function() {
      $('#info-modal').modal('show');
      $('.modal-title').html($(this).data('name'));
      $('.modal-body').html('<span>Comida: </span>' + $(this).data('type') + '<br>' + '<span>Descrição: </span>' + $(this).data('description') + '<button type="button" class="btn d-block ml-auto m-2">Pedir agora</button>');
    });
  });
}

/* Google Maps API */
function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -23.558209, lng: -46.658834},
    zoom: 15
  });

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });
  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {lat: restaurantes[0]['latitude'], lng: restaurantes[0]['longitude']},
  {lat: restaurantes[1]['latitude'], lng: restaurantes[1]['longitude']},
  {lat: restaurantes[2]['latitude'], lng: restaurantes[2]['longitude']},
  {lat: restaurantes[3]['latitude'], lng: restaurantes[3]['longitude']},
  {lat: restaurantes[4]['latitude'], lng: restaurantes[4]['longitude']},
  {lat: restaurantes[5]['latitude'], lng: restaurantes[5]['longitude']},
  {lat: restaurantes[6]['latitude'], lng: restaurantes[6]['longitude']},
  {lat: restaurantes[7]['latitude'], lng: restaurantes[7]['longitude']},
  {lat: restaurantes[8]['latitude'], lng: restaurantes[8]['longitude']}
]