const CAT = require("../models/category");


// cat

exports.catcreate = async function (req, res, next) {
  try {
    req.body.image = req.file.filename;
    const data = await CAT.create(req.body);

    res.status(201).json({
      status: "success",
      message: "data crated successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: error.message,
    });
  }
};

exports.catupdate = async function (req, res, next) {
  try {
    req.body.image = req.file.filename;
    const data = await CAT.findByIdAndUpdate(req.query.id, req.body);

    res.status(200).json({
      status: "success",
      message: "data update successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: error.message,
    });
  }
};

exports.catdelete = async function (req, res, next) {
  try {
    const data = await CAT.findByIdAndDelete(req.query.id);

    res.status(200).json({
      status: "success",
      message: "data deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: error.message,
    });
  }
};

exports.catfind = async function (req, res, next) {
  try {
    const data = await CAT.find();

    res.status(200).json({
      status: "success",
      message: "data find successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      messgae: error.message,
    });
  }
};