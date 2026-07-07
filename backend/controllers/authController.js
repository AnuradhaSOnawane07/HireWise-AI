exports.register = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Register API Working",
  });
};

exports.login = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login API Working",
  });
};