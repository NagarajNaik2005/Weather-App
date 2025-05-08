
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherResult").innerHTML = "<p>City not found. Please try again.</p>";
                return;
            }

            const weatherHTML = \`
                <div class="weather-card">
                    <h2>\${data.name}, \${data.sys.country}</h2>
                    <p><strong>Temperature:</strong> \${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> \${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> \${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> \${data.wind.speed} m/s</p>
                </div>
            \`;

            document.getElementById("weatherResult").innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = "<p>Error fetching weather data.</p>";
        });
}
