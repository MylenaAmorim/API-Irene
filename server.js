require('dotenv').config();

const app = require("./src/app");
const port = process.env.PORT || PORT;

app.listen(port, () => {
    console.log(`Servidor na porta ${port} OK`);
});