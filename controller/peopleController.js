const People = require("../model/people");

module.exports = {
    async show (request, response){
        try {
            const people = await People.find();
            console.log("GET", people);
            return response.status(200).json(people);
        } catch (error) {
            return response.status(500).json({
                msg: "Deu ruim",
                error: error,
             });    
        }
    },
    async create (request, response){
        const { name, gander, age, eye_color, hair_color, mundo, familia, image } = request.body;
        try {
            let pesesoa = await People.create({
                name,
                gander,
                age,
                eye_color,
                hair_color,
                mundo,
                familia,
                image
            });
            console.log(pesesoa);
            return response.status(200).json(pesesoa);    
        } catch (error) {
            return response.status(500).json({
                msg: "Deu ruim",
                error: error,
             });        
        }
    },
};
