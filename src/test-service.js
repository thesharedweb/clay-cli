const path  = require('path')
  ,   chalk = require('chalk');


module.exports = function() {

const service = require(path.resolve(process.cwd(), `${this.clayConfig.serviceName}.js`)).handler
 ,    data = require(path.resolve(process.cwd(), 'test-data.json'))
 ,    packageInfo = require(path.resolve(process.cwd(), 'package.json'))
 ,    SERVICE_OUTPUT_MSG = chalk.white("Runing service with data from:\n")+chalk.red("test-data.json \n\n")+chalk.white("Output from your local service:");

var event = {}
var context = {
  functionName: this.clayConfig.serviceName,
  functionDescription: this.clayConfig.serviceDescription,
  functionVersion: packageInfo.version,
  succeed: (response => console.log(response.body))
}

event.body = JSON.stringify(data);

console.log(SERVICE_OUTPUT_MSG);
service(event, context)

}


