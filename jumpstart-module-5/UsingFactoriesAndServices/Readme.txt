Express 4 introduced some breaking changes. To get the Node.js server going replace this:

app.configure(function () {

    app.use(express.static(__dirname, '/'));

});

with this:

app.use(express.static(__dirname, '/'));