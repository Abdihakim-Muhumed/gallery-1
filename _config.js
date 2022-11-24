var config = {}

// Update to have your correct username and password -- ie uri for mongodb atlas -
config.mongoURI = {
    production: 'mongodb+srv://abdihakim-muhumed:sQM3fAIrQloziTIw@gallery-1-0.20kru4h.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://abdihakim-muhumed:sQM3fAIrQloziTIw@gallery-1-0.20kru4h.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://abdihakim-muhumed:sQM3fAIrQloziTIw@gallery-1-0.20kru4h.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
