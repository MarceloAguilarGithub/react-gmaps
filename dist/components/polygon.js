'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _entity = require('./entity');

var _entity2 = _interopRequireDefault(_entity);

var _eventsPolygon = require('../events/polygon');

var _eventsPolygon2 = _interopRequireDefault(_eventsPolygon);

var _eventsPath = require('../events/path');

var _eventsPath2 = _interopRequireDefault(_eventsPath);

exports['default'] = (0, _entity2['default'])('Polygon', 'center', _eventsPolygon2['default'], _eventsPath2['default']);
module.exports = exports['default'];