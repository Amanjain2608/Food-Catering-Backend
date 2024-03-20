const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
     try {
         console.log(global.fooditems,global.foodCategory);
            res.send([global.fooditems,global.foodCategory]);
         } catch (error) {
            // console.error(error.massage)
            res.send("Server Error")
         }

})

module.exports = router;