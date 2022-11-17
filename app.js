import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());




import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = encodeURIComponent("mongodb+srv://nehasimon:<kramer>@cluster0.ycn6rkn.mongodb.net/?retryWrites=true&w=majority");
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



