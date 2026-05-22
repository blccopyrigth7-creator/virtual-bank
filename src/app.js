const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'MAHolding backend opérationnel 🚀' });
});

app.listen(PORT, () => {
  console.log(`Serveur MAHolding lancé sur le port ${PORT}`);
});
