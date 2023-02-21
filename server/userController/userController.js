const userModel = require("../mongoSchema/userSchema");

const getUser = async (req, res) => {
  const details = await userModel.find({});
  return res.status(200).send({ status: true, msg: "successful", details });
};

module.exports = { getUser };