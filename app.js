const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./routers/userRouter');
const photoRouter = require('./routers/photoRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use(photoRouter);

app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`) });