document.getElementById("btn").addEventListener("click", async function() {
    {
        const api_url = 'https://danepubliczne.imgw.pl/api/data/synop';
        var miasto = document.getElementById("pole").value;
        const response = await fetch(api_url);
        const data = await response.json();
        var station_found = false;
        for(var i=0;i<data.length-1;i++)
        {
            if(data[i].stacja==miasto)
            {
                station_found = true;
            }
        }
        document.getElementById("form").remove();
        if(station_found)
        {
            var div = document.createElement('div');
            div.className = 'info';
            var text = document.createTextNode(data[i].temperatura + "°C");
            div.appendChild(text);
            document.getElementById("content").appendChild(div);
            var div2 = document.createElement('div');
            div2.className = 'info';
            var text = document.createTextNode(data[i].predkosc_wiatru + " km/h");
            div2.appendChild(text);
            document.getElementById("content").appendChild(div2);
            var div3 = document.createElement('div');
            div3.className = 'info';
            var text = document.createTextNode(data[i].cisnienie + " hPa");
            div3.appendChild(text);
            document.getElementById("content").appendChild(div3);
        }
        else
        {
            var div = document.createElement('div');
            div.className = 'info';
            var text = document.createTextNode("Nie znaleziono stacji! :(");
            div.appendChild(text);
            document.getElementById("content").appendChild(div);
        }
        var button = document.createElement('input');
        button.setAttribute('onclick', 'window.location=\'index.html\'');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Wyszukaj ponownie');
        document.getElementById("content").appendChild(button);
    }
    });