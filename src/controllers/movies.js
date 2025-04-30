const moviesService = require("../services/movies");

const getAll = async (req, res) => {
  const movies = await moviesService.getAll();
  res.json(movies);
};

const getById = async (req, res) => {
  const movie = await moviesService.getById(req.params.id);
  if (!movie) return res.status(404).json({ error: "Фильм не найден" });
  res.json(movie);
};

const create = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const newMovie = await moviesService.create(req.body);
  res.status(201).json(newMovie);
};

const update = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const updated = await moviesService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Фильм не найден" });
  res.json(updated);
};

const patch = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const updated = await moviesService.patch(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Фильм не найден" });
  res.json(updated);
};

const remove = async (req, res) => {
  const deleted = await moviesService.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Фильм не найден" });
  res.json(deleted);
};

module.exports = { getAll, getById, create, update, patch, remove };