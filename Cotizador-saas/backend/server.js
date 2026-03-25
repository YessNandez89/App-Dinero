const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// endpoint de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// endpoint principal
app.post('/api/cotizar', (req, res) => {
  const { cliente, servicio, precio } = req.body;

  res.json({
    cliente,
    servicio,
    precio,
    id: Date.now()
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});
