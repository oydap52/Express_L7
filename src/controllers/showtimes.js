const showtimesService = require("../services/showtimes");

const getAll = async (req, res) => {
  const showtimes = await showtimesService.getAll();
  res.json(showtimes);
};

const getById = async (req, res) => {
  const showtime = await showtimesService.getById(req.params.id);
  if (!showtime) return res.status(404).json({ error: "Сеанс не найден" });
  res.json(showtime);
};

const create = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const newShowtime = await showtimesService.create(req.body);
  res.status(201).json(newShowtime);
};

const update = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const updated = await showtimesService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Сеанс не найден" });
  res.json(updated);
};

const patch = async (req, res) => {
  if (!req.body || !Object.keys(req.body).length)
    return res.status(400).json({ error: "Нет данных" });
  const updated = await showtimesService.patch(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "Сеанс не найден" });
  res.json(updated);
};

const remove = async (req, res) => {
  const deleted = await showtimesService.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Сеанс не найден" });
  res.json(deleted);
};

module.exports = { getAll, getById, create, update, patch, remove };