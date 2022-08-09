var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function( data ) {
    console.log(JSON.stringify(data, null, 2));
    document.getElementById('response').value = JSON.stringify(data, null, 2);
});

connection.on('clickedNext', function() {
    var respp = JSON.parse(document.getElementById('response').value);
    connection.trigger('updateActivity', configuration);
});
