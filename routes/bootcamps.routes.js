const express = require("express");
const {
  createBootcamp,
  getBootcamp,
  getBootcamps,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps.controller");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

exports.bootcampRoutes = router;
