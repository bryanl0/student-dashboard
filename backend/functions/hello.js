// test function for netlify

exports.handler = function(event, context, callback) {
    let response = {name: "Bryan"}
    callback(null, {
        statusCode: 200,
        body: response
    });
};
