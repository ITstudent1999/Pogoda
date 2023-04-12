document.getElementById("btn").addEventListener("click", async function () {
    const api_url = 'https://danepubliczne.imgw.pl/api/data/synop';
    var miasto = document.getElementById("pole").value;
    const response = await fetch(api_url);
    const data = await response.json();
    var station_found = false;
    document.getElementById("weather").innerHTML = "";
    for (var i = 0; i < data.length - 1; i++) {
        if (data[i].stacja.toLowerCase() === miasto.toLowerCase()) {
            station_found = true;
            var info_data = [
                {
                    className: 'info',
                    html: '<i class="fa-solid fa-sun-plant-wilt" style="font-size: 5em; !important"></i><span class="name">Stacja</span><span class="value">' + data[i].stacja + '</span>'
                },
                {
                    className: 'info',
                    html: '<i class="fa-solid fa-temperature-full" style="font-size: 5em; !important"></i><span class="name">Temperatura</span><span class="value">' + data[i].temperatura + "°C</span>"
                },
                {
                    className: 'info',
                    html: '<i class="fa-solid fa-wind" style="font-size: 5em; !important"></i><span class="name">Prędkość wiatru</span><span class="value">'+data[i].predkosc_wiatru + " km/h</span>"
                },
                {
                    className: 'info',
                    html: '<i class="fa-solid fa-feather-pointed" style="font-size: 5em; !important"></i><span class="name">Ciśnienie</span><span class="value">'+data[i].cisnienie + " hPa</span>"
                }
            ];
            for (var j = 0; j < info_data.length; j++) {
                var div = document.createElement('div');
                div.className = info_data[j].className;
                div.innerHTML = info_data[j].html
                document.getElementById("weather").appendChild(div);
            }

            break;
        }
    }
    if (!station_found) {
        var div = document.createElement('div');
        div.className = 'info';
        var text = document.createTextNode("Nie znaleziono stacji! :(");
        div.appendChild(text);
        document.getElementById("weather").appendChild(div);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pole").addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById("btn").click();
        }
    });
});