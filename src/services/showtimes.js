const { v4: uuidv4 } = require("uuid");
const { getShowtimes, saveShowtimes } = require("../db/db");

const getAll = async () => {
  return await getShowtimes();
};

const getById = async (id) => {
  const showtimes = await getShowtimes();
  return showtimes.find((showtime) => showtime.id === id);
};

const create = async (data) => {
  const showtimes = await getShowtimes();
  const newShowtime = { id: uuidv4(), ...data };
  showtimes.push(newShowtime);
  await saveShowtimes(showtimes);
  return newShowtime;
};

const update = async (id, data) => {
  const showtimes = await getShowtimes();
  const index = showtimes.findIndex((showtime) => showtime.id === id);
  if (index === -1) return null;
  showtimes[index] = { id, ...data };
  await saveShowtimes(showtimes);
  return showtimes[index];
};

const patch = async (id, data) => {
  const showtimes = await getShowtimes();
  const index = showtimes.findIndex((showtime) => showtime.id === id);
  if (index === -1) return null;
  showtimes[index] = { ...showtimes[index], ...data };
  await saveShowtimes(showtimes);
  return showtimes[index];
};

const remove = async (id) => {
  const showtimes = await getShowtimes();
  const index = showtimes.findIndex((showtime) => showtime.id === id);
  if (index === -1) return null;
  const deleted = showtimes.splice(index, 1)[0];
  await saveShowtimes(showtimes);
  return deleted;
};

module.exports = { getAll, getById, create, update, patch, remove };