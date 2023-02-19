const express = require('express');
const app = express();
const CONFIG = require('./config.json');
const CategoriesRouter = require('./routes/categories');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());

app.use('/categories', CategoriesRouter);

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running at port ${CONFIG.PORT}`);
});