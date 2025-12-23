const div = document.getElementById('location');
const button = document.getElementById('btn');
button.addEventListener('click', ()=>{

})
navigator.geolocation.getCurrentPosition(Location);

  function Location(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = '5738901d3815433cb8c7d0975dfdde66';

    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;
 
    fetch(apiUrl)
    .then(response => response.json())

    .then(data => {
      console.log(data)

      const city = data.results[0].components.city
      const country = data.results[0].components.country;
      div.textContent = `Your current location: ${city}, ${country}`;
    })
    .catch(error => console.error('Error fetching location information:', error));
}