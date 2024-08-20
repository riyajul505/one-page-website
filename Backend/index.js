const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(
  cors({
    origin: 'https://one-page-web.surge.sh',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ixzkh9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productsCollection = client
      .db("one-page-website")
      .collection("products");

    app.get("/products", async (req, res) => {
      const { search, brand, category } = req.query;
      const query = {};
      if(search){
        query.product_name = search;
      }
      if(brand){
        query.brand = brand;
      }
      if(category){
        query.category = category;
      }
      const results = await productsCollection.find(query).toArray();
      res.send(results);
    });

    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/test", (req, res) => {
  res.send({ pok: "lol" });
});
app.listen(port, () => {
  console.log("server running port", port);
});
