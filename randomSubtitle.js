subtitleTextElement = document.getElementById("subtitle");
RandomSubtitle();



async function RandomSubtitle()
{
    fetch("./resources/subtitles.json")
    .then((Response) => Response.json())
    .then((json) => subtitleTextElement.innerHTML = json.subtitles[Math.floor(Math.random()*json.subtitles.length)]);
};