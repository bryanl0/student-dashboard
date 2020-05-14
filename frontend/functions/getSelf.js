// netlify function to replace the getSelf endpoint in server.js
const canvasAPI = require('node-canvas-api');
// // Make endpoint for getSelf here
// // app.get('/getSelf', (req, res) => canvasAPI.getSelf().then(self => res.json(self))); // not as good as async/await
// app.get('/getSelf', async (req, res) => {
//     const self = await canvasAPI.getSelf();
//     res.json(self)
// });

exports.handler = async function(event, context, callback) {
    const self = await canvasAPI.getSelf();
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(self)
    });
};