module.exports = function validateName(req, res, next) {
    const name = req.query.name;
  
    if (name) {
      next(); 
    } else {
      res.status(500).send('500 Error');
    }
  };


  