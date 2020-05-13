const express = require('express');
const app = express();
const cors = require('cors');
const port = 4001;
const canvasAPI = require('node-canvas-api');
const { getDiscussions, flattenTopicAndReplies } = require('./canvasDiscussions');
const readCSV = require('./readCSV');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

// Make API call to Canvas API here
canvasAPI.getSelf().then(self => console.log(self));

// Make endpoint for getSelf here
// app.get('/getSelf', (req, res) => canvasAPI.getSelf().then(self => res.json(self))); // not as good as async/await
app.get('/getSelf', async (req, res) => {
    const self = await canvasAPI.getSelf();
    res.json(self)
});

// Make endpoint for getDiscussions here
app.get('/getDiscussions/:id', async (req, res) => {
    const courseID = req.params.id;
    const discussions = await getDiscussions(courseID);
    const result = flattenTopicAndReplies(discussions);
    res.json(result);
});

app.get('/getCourses', async (req, res) => {
    const self = await canvasAPI.getSelf();
    const courses = await canvasAPI.getCoursesByUser(self.id);
    res.json(courses);
});

app.use(function (request, response) {
    response.statusCode = 404;
    response.end('404!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
