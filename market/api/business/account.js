'use strict';

var models = require('../models'),
    Base = require('./base');

module.exports = class extends Base {
    constructor(fieldName) {
        super(fieldName ||'Account');
    }
    
    selectByLogin(login){
        return models.Account.findOne({login: login});
    }
};