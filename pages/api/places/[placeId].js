import dbConnect from "../../../utils/dbConnect";
import Place from "../../../models/Place";

dbConnect();

export default async (req, res) => {
  // Destructure query and method from req object
  const { 
    query: {id},
    method
  } = req;

  switch(method) {
    case "GET":
      try {
        // Find place by id
        const place = await Place.findById(id);
        // If not place found by id provided return false
        if(!place) {
          res.status(400).json({success: false});
        }
        // If found return that place
        res.status(200).json({success: true, data: place});
      } catch (error) {
          res.status(400).json({success: false});
      }
      break;

    case "PUT":
      try {
        // Find place by id
        const place = await Place.findByIdAndUpdate(id, req.body, {
          new: true,
          rundValidators: true
        });
        // If not place found by id provided return false
        if(!place) {
          res.status(400).json({success: false});
        }
        // If found return that place
        res.status(200).json({success: true, data: place});
      } catch (error) {
          res.status(400).json({success: false});
      }
      break;
    
    case "DELETE":
      try {
        const deletedPlace = await Place.deleteOne({ _id: id });

        if(!deletedPlace) {
          res.status(400).json({success: false});
        }

        res.status(200).json({success: true, data: {}})
      } catch (error) {
          res.status(400).json({success: false});
      }
      break;

    default:
      res.status(400).json({success: false});
      break;
  }
}