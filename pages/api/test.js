import dbConnect from "../../utils/dbConnect";
import Place from "../../models/Place";

dbConnect()

export default async (req, res) => {
  // const place = await Place.create({
  //   location: "Trebinje",
  //   title: "Stan u Trebinju",
  //   description: "2 sobe 2 kupatila",
  //   price: 22,
  //   long: 2545,
  //   lat: 14422,
  // });

  // if(!place) {
  //   res.status(400).json({success: false});
  // }
  res.json({success: true, /*data: place*/});
}