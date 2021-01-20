const ApiModel = require('../models/Api');

const getAll = async (req, res) => {
  const apiList = await ApiModel.find({});
  return res.send(apiList);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  await ApiModel.findOneAndUpdate({ _id: id }, { ...req.body })
  return res.send({ message: 'Updated' });
};

module.exports = {
  getAll,
  updateById,
};
