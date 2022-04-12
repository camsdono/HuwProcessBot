const { Events } = require("../Validation/EventNames");
const { promisify } = require("util"); 
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");

module.exports = async (client) => {
    const Table = new Ascii("events loaded");

    (await PG (`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require(file);
        
        if(!Events.includes(event.name) || !event.name) {
            const L = file.split("/");
            await Table.addRow(`${event.name || "MISSING"}`, `the event does not exist you fu**: ${L[6] + `/` + L[7]}`);
            return; 
        }

        if(event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        };

        await Table.addRow(event.name, "it worked :D:D:D:D:D:D:D:D")
    });

    console.log(Table.toString());
}