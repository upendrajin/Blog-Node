const express = require('express');
const router = express.Router();
const catcontroller = require('../Controller/category');
const admincontroller = require('../Controller/admin');


// Multer
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
const upload = multer({ storage: storage })


router.post('/create', admincontroller.sequre, upload.single("image"), catcontroller.catcreate);

router.patch('/update', admincontroller.sequre, upload.single("image"), catcontroller.catupdate);

router.delete('/delete', admincontroller.sequre, catcontroller.catdelete);

router.get('/find', catcontroller.catfind);

router.get('/find', async function (req, res, next) {
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
});

module.exports = router;