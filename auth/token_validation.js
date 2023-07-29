const { verify } = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "qwe1234", (err, decoded) => {
        if (err) {
          return res.json({
            message: "Invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        message: "Unauthorized",
      });
    }
  },
};
