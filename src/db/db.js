const fs = require("fs").promises;
const path = require("path");

const moviesFile = path.join(__dirname, "movies.json");
const showtimesFile = path.join(__dirname, "showtimes.json");

const readData = async (file) => {
  try {
    const data = await fs.readFile(file, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeData = async (file, data) => {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
};

module.exports = {
  getMovies: () => readData(moviesFile),
  saveMovies: (movies) => writeData(moviesFile, movies),
  getShowtimes: () => readData(showtimesFile),
  saveShowtimes: (showtimes) => writeData(showtimesFile, showtimes),
};