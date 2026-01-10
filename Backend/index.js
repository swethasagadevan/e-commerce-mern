const express = require("express")
const cors = require("cors")
const axios = require("axios")
const razorpay = require("razorpay")
const crypto =require("crypto")
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000,()=>{console.log("App started...")})

// to check and connect to DB
let isConnected = false;
const connectDB = async () =>{
    if (isConnected) return;
    try{
        const db = await mongoose.connect("mongodb+srv://Vercel-Admin-atlas-database:Dinesh1@atlas-database.xdpz9wo.mongodb.net/protfolio?appName=atlas-database")
        //console.log(db.connections[0])
        isConnected = db.connections[0].readyState;
        console.log("DB connected",isConnected);
    }
    catch (err){
        console.log("DB connection error ",err);
    }
}

// define schema for mongodb
const userDetailsSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    },
    {
        strict : true // to ensure data is saved as per scheme
    }
)

//define model for mongodb
const UserDetailsList = mongoose.models.UserDetails || mongoose.model("UserDetails",userDetailsSchema,"UserDetails")

// Middleware to ensure DB is connected before handling routes
app.use(async (req, res, next) => {
    await connectDB();
    next();
});


// to get products list
app.get("/products",async (request,response)=>{
    try{
        await axios.get("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
    .then(data=>{
        // console.log(data)
        response.send(data.data)
    })
    .catch(()=>{
        response.status(200).send("Error while fetching data")
    })
    }
    catch (error){
        response.send(500).send("unable to fetch product details/API")
    }

})

// initialize payment
app.post("/api/payment/buynow",async(req,res)=>{
    try{
        const razorpayinstance = new razorpay({
            key_id:"rzp_test_S1ekeWRYJe5KOA",
            key_secret:"lOoelC2szJYND3IPd5MAEQFM"
        })

        const options ={
            amount :req.body.price*100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString('hex'),
        }
        //console.log(req.body.price*100)

        razorpayinstance.orders.create(options,(error,order)=>{
            if (error){
                // console.log(error)
                res.status(500).send('order creation failed')
            }
            //console.log(order)
        res.status(200).json({data:order});
            
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send("internal server error..")
    } 

})

app.post("/api/payment/verify",(req,res)=>{
    try{
        const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body;
    const expectedSign = crypto.createHmac("sha256","lOoelC2szJYND3IPd5MAEQFM")
    .update(razorpay_order_id+'|'+razorpay_payment_id)
    .digest("hex");

    console.log(expectedSign)

    if (expectedSign === razorpay_signature){
        return res.status(200).send("Success")
    }
    else{
        return res.status(400).send("Failed")
    }   
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Server error")
    }
})

// to save user signup details
app.post ("/signup",async (req,res)=>{
        try{
            console.log(req.body.data)
            const user = await UserDetailsList.findOne({email: req.body.data.email,password:req.body.data.password});
            if (user){
                res.status(200).send("User Exsits")
            }
            else{
                const saveUser = new UserDetailsList ({
                name:req.body.data.userName,
                email:req.body.data.email,
                password:req.body.data.password
                })
                await saveUser.save().then(()=>{
                console.log("Saved successfully")
                 res.status(200).send(true)
                })
            }
            
           
        }
        catch(err){
            console.log(err)
        }
    })

app.post("/login", async (req, res) => {

  const enteredmail = req.body.enteredmail; 
  const enteredpass = req.body.enteredpass;
   //console.log(req.body);

  try {
    const user = await UserDetailsList.findOne({email: enteredmail,password: enteredpass});
    // console.log(user.email,user.password)
    // console.log(enteredmail,enteredpass)
    if (user.email===enteredmail && user.password===enteredpass) {
      res.status(200).json(user.name);
    } else {
      res.status(401).json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(false);
  }
});



    