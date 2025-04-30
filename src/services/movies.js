const { v4: uuidv4 } = require("uuid");
const { getMovies, saveMovies } = require("../db/db");

const getAll = async () => {
  return await getMovies();
};

const getById = async (id) => {
  console.log("Looking for movie with id:", id);
  const movies = await getMovies();
  const movie = movies.find((movie) => movie.id === id);
  console.log("Found movie:", movie);
  return movie;
};

const create = async (data) => {
  const movies = await getMovies();
  const newMovie = { id: uuidv4(), ...data };
  movies.push(newMovie);
  await saveMovies(movies);
  return newMovie;
};

const update = async (id, data) => {
  const movies = await getMovies();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return null;
  movies[index] = { id, ...data };
  await saveMovies(movies);
  return movies[index];
};

const patch = async (id, data) => {
  const movies = await getMovies();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return null;
  movies[index] = { ...movies[index], ...data };
  await saveMovies(movies);
  return movies[index];
};

const remove = async (id) => {
  const movies = await getMovies();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index === -1) return null;
  const deleted = movies.splice(index, 1)[0];
  await saveMovies(movies);
  return deleted;
};

module.exports = { getAll, getById, create, update, patch, remove };