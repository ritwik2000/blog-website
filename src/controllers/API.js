
const asyncHandler=require('../middleware/async')

const getBlogDetails = asyncHandler(async (req, res) => {
    console.log("Hit");
  return res.status(200).json({
    data: "All OK",
  });
});

module.exports = {
  getBlogDetails,
};
