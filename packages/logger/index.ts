import { winstonDriver } from './src/winston';

const log = winstonDriver('./log');
log.info('hello world');
log.debug('debug func');
log.warn('Bad Request');
log.error('Error can not handle this issus');
