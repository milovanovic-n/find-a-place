import dbConnect from "../../../utils/dbConnect";
import Place from "../../../models/Place";
import { ObjectId } from "mongodb";

export default async function(req, res) {
  const { method } = req;
  const { db } = await dbConnect();

  switch(method) {
    case "GET":
      try {
        const places = await db
          .collection("places")
          .find({})
          .limit(20)
          .toArray()
        res.status(200).json({success: true, data: places});
      } catch (error) {
          res.status(400).json({success: false, message: new Error(error).message});
      }
      break;
    
    case "PUT":
      try {
        await db.collection("places").updateOne(
          {
            _id: new ObjectId(req.body)
          },
          {
            $set: {
              location: req.body.location,
              title: req.body.title,
              description: req.body.description,
              price: req.body.price,
              long: req.body.long,
              lat: req.body.lat
            }
          }
        )

        return res.status(200).json({success: true, message: "Place updated successfully"})
      } catch (error) {
        res.json({
          success: false,
          message: new Error(error).message
        })
      }
      break;

    case "POST":
      /*
        Will need to add authorization
      */
      try {
        const place = db.collection("places").insertOne(req.body);
        res.status(201).json({success: true, message: "Place added successfully"});
      } catch (error) {
        console.log(error)
        res.status(400).json({success: false, message: new Error(error).message})
      }
      break;

    case "DELETE":
      try {
        const place = await db.collection("places").deleteOne({
          _id: new ObjectId(req.body)
        });
        res.status(200).json({success: true, data: place, message: "Successfully deleted place"})
      } catch (error) {
        res.status(400).json({success: false, message: new Error(error).message})
      }
      break;
    default:
      res.status(400).json({success: false});
      break;

  }
}