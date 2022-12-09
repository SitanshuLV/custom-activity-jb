var connection = new Postmonger.Session();
var eventKey;
let payload = {};

connection.trigger('ready');
connection.trigger('requestTriggerEventDefinition');

connection.on('requestedTriggerEventDefinition', function (eventDefinitionModel) {
    eventKey = eventDefinitionModel.eventDefinitionKey;
});

connection.on('initActivity', function( data ) {
    //document.getElementById('response').value = JSON.stringify(data, null, 2);
    payload = data;
});

connection.on('clickedNext', function() {
    //var resp = JSON.parse(document.getElementById('response').value);
    var params = {
        subscriberKey: '{{Contact.key}}',
        email: '{{Event.' + eventKey + '.Email}}',
        eventkey: eventKey
      };
    payload['arguments'].execute.inArguments = [params];
    payload.metaData.isConfigured = true;
    connection.trigger('updateActivity', payload);
});
