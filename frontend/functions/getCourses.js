// netlify function to replace the getCourses endpoint in server.js
const canvasAPI = require('node-canvas-api');

// app.get('/getCourses', async (req, res) => {
//     const self = await canvasAPI.getSelf();
//     const courses = await canvasAPI.getCoursesByUser(self.id);
//     res.json(courses);
// });

exports.handler = async function(event, context, callback) {
    const self = await canvasAPI.getSelf();
    const courses = await canvasAPI.getCoursesByUser(self.id);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(courses)
    });
};