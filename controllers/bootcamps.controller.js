const { Bootcamp } = require("../models/bootcamp.model");

// @desc    Get all bootcamps
// @route   GET api/v1/bootcapms
// @access  Public
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      msg: "Show bootcamps",
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Get single bootcamp
// @route   GET api/v1/bootcapms/:id
// @access  Public
exports.getBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Create new bootcamp
// @route   POST api/v1/bootcapms
// @access  Private
exports.createBootcamp = async (req, res) => {
  try {
    const new_bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      success: true,
      msg: `New Bootcamp Created`,
      data: new_bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Update bootcamp
// @route   PUT api/v1/bootcapms/:id
// @access  Private
exports.updateBootcamp = async (req, res) => {
  try {
    const updated_bootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated_bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: updated_bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Delete bootcamp
// @route   DELETE api/v1/bootcapms/:id
// @access  Private
exports.deleteBootcamp = async (req, res) => {
  try {
    const deleted_bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!deleted_bootcamp) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      msg: `Bootcamp id-${req.params.id} was deleted successfully`,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};
