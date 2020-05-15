// netlify function to replace getDiscussions endpoint in server.js
const { getDiscussions, flattenTopicAndReplies } = require('./canvasDiscussions');

// app.get('/getDiscussions/:id', async (req, res) => {
//     const courseID = req.params.id;
//     const discussions = await getDiscussions(courseID);
//     const result = flattenTopicAndReplies(discussions);
//     res.json(result);
// });

exports.handler = async function(event, context, callback) {
    const courseID = event.queryStringParameters.course;
    const discussions = await getDiscussions(courseID);
    const result = flattenTopicAndReplies(discussions);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    })
};