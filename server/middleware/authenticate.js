var {User} = require('./../models/user');


// middleware authentication function
var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.toke = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};


module.exports = {authenticate};
