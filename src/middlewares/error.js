const errorHandler = (err, req, res, next) => {
    console.log("Error:", err.message);
    res.status(500).json({ error: "Что-то пошло не так" });
  };
  
  module.exports = errorHandler;