const places = [];

$(document).ready(function () {
  places.sort((a, b) => parseFloat(a.lat) - parseFloat(b.lat));
  $("#textarea").val(JSON.stringify(places));
});