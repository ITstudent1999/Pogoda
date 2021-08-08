const api_url = 'https://danepubliczne.imgw.pl/api/data/synop';
document.getElementById("btn").addEventListener("click", async function() {
{
    var miasto = document.getElementById("pole").value;
    const response = await fetch(api_url);
    const data = await response.json();
    //console.log(data);
    for(var i=0;i<data.length-1;i++)
    {
        if(data[i].stacja==miasto)
        {
            document.getElementById("temp").innerText=data[i].temperatura + "°C";
            document.getElementById("wiatr").innerText=data[i].predkosc_wiatru + " km/h";
            document.getElementById("cisnienie").innerText=data[i].cisnienie + " hPa";
        }
    }
}
  });