switch((process.env.NODE_ENV || '').toLowerCase()) {
    case 'production':
    case 'prod':
        module.exports = require('./webpack.prod.js');
        break;
    case 'development':
    case 'dev':
    default:
        module.exports = require('./webpack.dev.js');
        break;
}