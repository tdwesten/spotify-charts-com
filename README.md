# Spofity Charts

[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tdwesten/spotify-charts-com/blob/master/LICENSE.md)
[![github](https://img.shields.io/github/package-json/v/tdwesten/spotify-charts-com.svg?color=brightgreen)](https://github.com/tdwesten/spotify-charts-com/tree/master)
[![npm](https://img.shields.io/npm/v/spotify-charts-com.svg?color=brightgreen)](https://www.npmjs.com/package/spotify-charts-com)
[![Build Status](https://travis-ci.com/tdwesten/spotify-charts-com.svg?branch=master)](https://travis-ci.com/tdwesten/spotify-charts-com)
[![Coverage Status](https://coveralls.io/repos/github/tdwesten/spotify-charts-com/badge.svg?branch=master)](https://coveralls.io/github/tdwesten/spotify-charts-com?branch=master)

### Deprecated!

Spotify added Cloudflare DDOS protection...

### What is spotify-charts-com?

It is a small npm module which allows getting the Spotify charts information based on by type, frequency, date or country.
The information that is returned contains the place in the chart, title, artist, number of streams and the song url.

### Usage

```js
const spotifyCharts = require("spotify-charts-com");

spotifyCharts
	.getCharts("regional", "daily", "global", "latest") // type, frequency, country, date
	.then((results) => {
		console.log(results);
	})
	.catch((err) => {
		throw err;
	});
```

### Result

The function returns an object with following structure:

```js
let result = [
	{
		count: 200,
		list: [
			{
				place: 1,
				title: "drivers license",
				artist: "Olivia Rodrigo",
				streams: 5916117,
				url: "https://open.spotify.com/album/66FPnVL9G4CMKy3wvaGTcr?highlight=spotify:track:7lPN2DXiMsVn7XUKtOW1CS",
			},
		],
		filters: {
			type: "regional",
			country: "global",
			frequency: "daily",
			date: "latest",
		},
	},
];
```
