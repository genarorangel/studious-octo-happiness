var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Pessoa'); // Create a table for 'Pessoa' with default settings
mobileApp.tables.add('Servico'); // Create a table for 'Servico' with default settings
mobileApp.tables.add('Rota'); // Create a table for 'Rota' with default settings
app.use(mobileApp);
app.listen(process.env.PORT || 3000);
