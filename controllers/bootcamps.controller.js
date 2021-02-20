// @desc    Get all bootcamps
// @route   GET api/v1/bootcapms
// @access  Public
exports.getBootcamps = (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

// @desc    Get single bootcamp
// @route   GET api/v1/bootcapms/:id
// @access  Public
exports.getBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

// @desc    Create new bootcamp
// @route   POST api/v1/bootcapms
// @access  Private
exports.createBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Create new Bootcamp`,
  });
};

// @desc    Update bootcamp
// @route   PUT api/v1/bootcapms/:id
// @access  Private
exports.updateBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

// @desc    Delete bootcamp
// @route   DELETE api/v1/bootcapms/:id
// @access  Private
exports.deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};