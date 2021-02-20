const request = require("request");
const csv = require("@fast-csv/parse");

module.exports = {
    /**
     * Get the apple music playlist and returns an array of objects with an album, artist and title property
     * @param {string} frequency Filter the charts by frequency, options: "daily"/"weekly", default: "daily"
     * @param {string} county Filter the charts by country code, options are e.g.: "us"/"gb"/"nl", default: "global"
     * @param {string} date Filter the charts by date, the format is "YYYY-MM-DD" , default: "latest"
     * @return {Promise<object>} The charts array
     */
    getCharts: function (
        frequency = "daily",
        country = "global",
        date = "latest"
    ) {
        return new Promise((resolve, reject) => {
            const url = `https://spotifycharts.com/regional/${country}/${frequency}/${date}/download`;

            let charts = {
                count: 0,
                list: [],
                filters: {
                    country,
                    frequency,
                    date,
                },
            };

            request(url, {}, (err, res, body) => {
                if (err) {
                    reject(err);
                }

                csv.parseString(body, {
                    skipRows: 2,
                })
                    .on("error", (error) => reject(error))
                    .on("data", (row) => charts.list.push(row))
                    .on("end", (rowCount) => {
                        charts.count = rowCount;
                        charts.list = charts.list.map((i) => {
                            return {
                                place: parseInt(i[0]),
                                title: i[1],
                                artist: i[2],
                                streams: parseInt(i[3]),
                                url: i[4],
                            };
                        });
                        resolve(charts);
                    });
            });
        });
    },
};
