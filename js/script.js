jQuery(document).ready(function($){
    jQuery('button').click(function(){
        const zipCode = $('#zipcode').val();
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=0816197f09d3d8e3aec1fae191df9b40`;
        $('#loading-animation').toggleClass('d-none');
        axios.get(weatherUrl).then(function(response){
           const {coord, weather, main, name, visibility, wind, clouds} = response.data;
           const temperature = Math.round(main.temp * 9/5 - 459.67);
           const feelLike = Math.round(main.feels_like * 9/5 - 459.67);
           const minTemperature = Math.round(main.temp_min * 9/5 - 459.67);
           const maxTemperature = Math.round(main.temp_max * 9/5 - 459.67);
           const visibilityKm = visibility / 1000;
            $('#weather').html(`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Longitude: ${coord.lon}, Latitude: ${coord.lat}</h6>
            <p class="card-text">${weather[0].main}</p>
            <p class="card-text">${weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon">
            <p class="card-text">${temperature}°F</p>
            <p class="card-text">Feel like ${feelLike}°F</p>
            <p class="card-text">Minimum temperature: ${minTemperature}°F</p>
            <p class="card-text">Maximum temperature: ${maxTemperature}°F</p>
            <p class="card-text">Pressure: ${main.pressure}</p>
            <p class="card-text">Humidity: ${main.humidity}%</p>
            <p class="card-text"> Visibility: ${visibilityKm} km</p>
            <p class="card-text">Wind Speed: ${wind.speed} m/s</p>
            <p class="card-text">Cloud: ${clouds.all}%</p>      
            </div>
    </div>

    `);
    }).catch(function(error){
        alert('error!!!');
    });
});

});