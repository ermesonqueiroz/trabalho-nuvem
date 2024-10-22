import express from 'express';
import { engine } from 'express-handlebars';
import { router } from './router.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3333;
const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(DIRNAME, './views'));
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening port ${PORT}`);
});
