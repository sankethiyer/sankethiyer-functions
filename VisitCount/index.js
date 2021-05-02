var globalCount = 0;

module.exports = async function(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name ?
        "Hello, " + name + ". This HTTP triggered function executed successfully." :
        "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    let count = context.bindings.count || { "count": ++globalCount };
    context.log(context.bindings);
    context.log("count=", count);
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            'content-type': 'application/json'
        },
        body: count
    };
}