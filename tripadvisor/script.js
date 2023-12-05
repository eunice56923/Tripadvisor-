<script>
  var map = L.map('map').setView([51.505, -0.09], 13); // Set the initial map center and zoom level

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker
  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker.')
    .openPopup(); // This line opens the popup by default when the map loads
</script>
