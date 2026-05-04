const Item = require("../models/Item");

// CREATE
exports.createItem = async (req, res) => {
  const item = await Item.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(item);
};

// READ (get all items of user)
exports.getItems = async (req, res) => {
  const items = await Item.find({ userId: req.user.id });
  res.json(items);
};

// UPDATE
exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(item);
};

// DELETE
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};