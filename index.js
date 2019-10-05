const request = require('request');
const cheerio = require('cheerio');


const players = {
    "Marlon Mack": "",
    "Terry McLaurin": "",
    "Stefon Diggs": "",
}

request("https://www.fantasypros.com/nfl/injury-news.php?page=1", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var news = [];
        $('.player-news-item .player-news-header span').each(function(i,elem) {
            let headline = $(this).text();

            for (var key in players) {
                if (headline.includes(key)) {
                    if (players[key] != headline) {
                        players[key] = headline;
                        //text headline
                    }
                }
            }
            
        });
        console.log(players);
        //console.log(playerNews.text())
    }
});
