document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            if (data.cod === 200) {
                weatherDiv.innerHTML = `
                    <h2 class="text-xl font-bold">${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                weatherDiv.innerHTML = `<p class="text-red-500">${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
