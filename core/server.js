async function initServer(app) {
    app.get('/', (req, res) => {
        res.json({
            message: "Hello world! Welcome to Delium backend!"
        })
    })

    return app
}

exports.initServer = initServer
