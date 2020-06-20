const express = require('express');
const app = express();
const PORT = 5000;

app.get('/data', (req, res) => {
    const data = {
        group : "AKMU",
        lastname: "dl",
        firstname: "tngus"
    };
    res.json(data);
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})

