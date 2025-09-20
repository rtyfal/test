const fs = require("fs").promises

const getDataFromDb = async(dbpath) => {
        const dataFromDb = await fs.readFile(dbpath, "utf-8")
        const data = JSON.parse(dataFromDb)

        return data;
}

module.exports = getDataFromDb