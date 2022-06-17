const { tutorials } = require("../models");

module.exports = app =>{
    const tutorials = require("../controller/tutorial.controller.js");
    
    const router = require("express").Router();

    router.get('/', (req, res) =>{
        res.json({message: "Welcome to my new backend app"})
    })

    router.post("/", tutorials.create)

    router.get("/all", tutorials.findAll)

    router.get("/published", tutorials.findAllPublished)

    router.get("/:id", tutorials.findOne)

    router.put("/:id", tutorials.update)

    router.delete("/:id", tutorials.delete)

    router.delete("/", tutorials.deleteAll )

    app.use("/api/tutorials", router)

};
