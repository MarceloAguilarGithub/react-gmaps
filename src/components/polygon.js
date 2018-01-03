import createEntity from './entity';
import PolygonEvents from '../events/polygon';
import PathEvents from '../events/path';

export default createEntity('Polygon', 'center', PolygonEvents, PathEvents);
