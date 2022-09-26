const express = require('express');
const app = express();
const tasks = require('./routers/task');

//*middleware
app.use(express.json());

//* routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
