const express = require("express");
const projRouter = express.Router();

const {
  createData,
  getAllData,
  delData,
  getBusinessData,
  deleteSingleData,
  updateData,
  statusUpdate,
  downloadFile,
  getAllFilteredDatas,
} = require("../controller/projcontroller");

projRouter.route("/").get(getAllData).post(createData);
projRouter.route("/delete").delete(delData);
projRouter.route("/business").get(getBusinessData);
projRouter.route("/delete/:id").delete(deleteSingleData);
projRouter.route("/update/:id").patch(updateData);

projRouter.route("/:fDate/filteredDatas").get(getAllFilteredDatas);

// Process Data
projRouter.route("/status/:id").put(statusUpdate);

//download image
projRouter.route("/downloadImage/:id").get(downloadFile);

module.exports = projRouter;
