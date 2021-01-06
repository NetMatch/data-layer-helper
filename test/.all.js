let context = require.context( ".", true, /_(?:test)\.js$/ );
context.keys().forEach( context );
