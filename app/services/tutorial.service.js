const db = require("../models");
const Tutorial = db.tutorials;

const createTutorial = (title, description, published) => {
    const tutorial = {
        title,
        description,
        published,
    };

    return Tutorial.create(tutorial)

}

module.exports = {
    createTutorial,
}
