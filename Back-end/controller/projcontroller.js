const { ObjectId } = require("mongodb");
const { client } = require("../DataBase/connect");
const data = client.db("ProjDataBase").collection("register");
// const Data = client.db("ProjDataBase").collection("statusChange");

// CREATING DATA
const createData = async (req, res) => {
  const insertData = {
    date: req.body.date,
    registerType: req.body.registerType,
    personName: req.body.personName,
    business: req.body.business,
    mobileNo: req.body.mobileNo,
    imageFile: req.body.imageFile,
    purpose: req.body.purpose,
    notes: req.body.notes,
    furtherProcess: req.body.furtherProcess,
    process: req.body.process,
    inTime: req.body.inTime,
    outTime: req.body.outTime,
    callTime: req.body.callTime,
  };
  const insertDatas = await data.insertOne(insertData);
  res.status(200).json(insertDatas);
};

// GET ALL DATA
const getAllData = async (req, res) => {
  const fullData = await data.find({}).toArray();
  res.status(201).json(fullData);
};

const getAllFilteredDatas = async (req, res) => {
  const listDatas = await data
    .find({
      date: { $gte: req.params.fDate, $lte: req.query.date },
      registerType: req.query.registerType,
    })
    .toArray();
  res.status(200).json(listDatas);
};

// GET BUSINESS DATA
const getBusinessData = async (req, res) => {
  const myData = await data.distinct("business");
  res.status(200).json(myData);
  // console.log(myData);
};

// DELETING SINGLE DATA
const deleteSingleData = async (req, res) => {
  const deleteData = await data.deleteOne({ _id: ObjectId(req.params.id) });
  res.status(200).json({ msg: "deleted one data...." });
};

// UPDATE USER
const updateData = async (req, res) => {
  const editData = await data.updateOne(
    { _id: ObjectId(req.params.id) },
    {
      $set: {
        date: req.body.date,
        registerType: req.body.registerType,
        personName: req.body.personName,
        business: req.body.business,
        mobileNo: req.body.mobileNo,
        imageFile: req.body.imageFile,
        purpose: req.body.purpose,
        notes: req.body.notes,
        furtherProcess: req.body.furtherProcess,
        process: req.body.process,
        inTime: req.body.inTime,
        outTime: req.body.outTime,
        callTime: req.body.callTime,
      },
    }
  );
  res.status(200).json(editData);
};

// DELETING ALL DATA
const delData = async (req, res) => {
  const deldata = await data.deleteMany({});
  res.status(200).json(deldata);
};

// CREATE STATUS DATA
const statusUpdate = async (req, res) => {
  // console.log(req.params.id);
  const addStatus = await data.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: { process: req.body.process } }
  );
  res.status(200).json(addStatus);
};

const downloadFile = async (req, res) => {
  const img = await data.findOne({ _id: ObjectId(req.params.id) });
  //  res.download()
  // console.log(req.params.id);
  res.download(img.imageFile);
};

module.exports = {
  createData,
  getAllData,
  delData,
  getBusinessData,
  deleteSingleData,
  updateData,
  statusUpdate,
  downloadFile,
  getAllFilteredDatas,
};
