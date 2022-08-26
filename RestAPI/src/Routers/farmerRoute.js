const express = require("express")
const farmer = require("./../models/farmer")

const router = express.Router();


// here we create our Route
router.post("/farmer", async (req, res) => {
    console.log(req.body)
    const data = new farmer(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status: "FAILED",
            message: "farmer not register successfully...."
        })
    }
    else {
        res.json({
            status: "SUCCESS",
            message: "farmer register successfully....",
            data: result
        })
    }
})

//get records 
router.get("/farmer", async (req, res) => {
    try {
        const result = await farmer.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found record"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

//get single record
router.get("/farmer/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await farmer.findById(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})

// update records 
router.put("/farmer/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await farmer.findByIdAndUpdate(_id,req.body,{new: true});
        console.log(result)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Records not Update....",
                data: result
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Updated successfully...",
                data: result
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})

// Delete Records 
router.delete("/farmer/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await farmer.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Delete..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record is Delete successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})


module.exports = router
