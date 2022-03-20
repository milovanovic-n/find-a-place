import dbConnect from "../../utils/dbConnect";
import Place from "../../models/Place";


export default async (req, res) => {
  const place = await Place.create(req.body)
  res.send({success: true, data: place});
}