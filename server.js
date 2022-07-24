const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("✅ RayDev RPC is ready!")});
}
module.exports = keepAlive


///////////////////////////////////

// Credit Infos 
// This Project Made By RaysDev
// Must Give Credits While Using 
// Support Server 
// https://discord.gg/kA3qQWSWBP
// Youtube 
// https://www.youtube.com/channel/UCCh4wQZ21eNgvPbl4iNQ-hA
// ©RaysDev™

///////////////////////////////////