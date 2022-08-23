import connectdb from "../../../server";
import Test from "../../../server/models";

export default async function addTest(req, res) {
    //res.status(200).json({ name: 'John Doe' })
   const { name, email } = req.body;

   console.log("Connecting to db")

   await connectdb()

   console.log("Connected to db")


   console.log("Creating document")

   const test = await Test.create(req.body)
   console.log("Created document")

    res.json({test})

  }