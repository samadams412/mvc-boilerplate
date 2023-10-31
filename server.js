import express from 'express'
import { engine } from 'express-handlebars'
 

const app = express()
const PORT = process.env.PORT || 3001;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', './views');

app.get('/', (req, res) => res.render("home"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))