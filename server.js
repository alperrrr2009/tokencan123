let Discord = require("discord.js");
let client = new Discord.Client();
const ms = require('ms');
const fs = require("fs")

let clientObject = {}
let tokenler = fs.readFileSync("./tokens.txt", "utf-8").toString().replace(/\r\n/g,'\n').split("\n")

class CLIENT {
    constructor(token) {
        this.token = token;
        this.client = new Discord.Client();
        this.client.login(token);
    }
}
function createClient(token) {
    let c = new CLIENT(token);
    return c.client;
}
for (var i = 0; i < tokenler.length; i++) {
    clientObject[i] = createClient(tokenler[i])
}
for (let client in clientObject) {
    client = clientObject[client];
    client.on("ready", async () => {
    console.log(client.user.username + " adlı ses botunun durumu çevirmiçi olarak ayarlandı!");
});
}