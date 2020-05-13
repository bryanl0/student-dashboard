// test function for netlify

exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: {"name": "Bryan"}
    });
};
