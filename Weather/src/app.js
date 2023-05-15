const express = require('express');
const app = express();
const PORT = process.env.PORT  ||5000;
const path = require('path');
const hbs = require('hbs');

const setRoutes = require('./routes/router');




const static_path =path.join(__dirname, '../public')
const templatePath =path.join(__dirname, '../tamplets/views')


app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views', templatePath);

hbs.registerPartials(path.join(__dirname, '../tamplets/partials'));

setRoutes(app);



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});