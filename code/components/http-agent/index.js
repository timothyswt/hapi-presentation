/**
 * Created by GZ0DMH on 3/11/2015.
 */

var env = process.env.NODE_ENV || 'development';

module.exports =  require('./' + env + '.js');
