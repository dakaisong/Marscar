import express, {Request,Response,Application} from 'express';
import bodyParser from 'body-parser';
import { APIService } from './services/APIService';
const app:Application = express();

let apiService = new APIService();

const PORT = process.env.PORT || 8000;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
});

app.post("/sendOrder",(req:Request, res:Response) =>{
    let orders: string = req.body.orders;
    let name: string = req.body.name;
    let result = apiService.excuteOrders(orders,name);

    res.send(result);
})

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
  });