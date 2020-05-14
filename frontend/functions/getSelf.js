// netlify function to replace the getSelf endpoint in server.js
const canvasAPI = require('node-canvas-api');
// // Make endpoint for getSelf here
// // app.get('/getSelf', (req, res) => canvasAPI.getSelf().then(self => res.json(self))); // not as good as async/await
// app.get('/getSelf', async (req, res) => {
//     const self = await canvasAPI.getSelf();
//     res.json(self)
// });

exports.handler = function(event, context, callback) {


};