import { createLogger, transports, format, transport } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { logFormat } from './format';

export function winstonDriver(logDir: string) {
  const loggerTransports: transport[] = [];
  if (process.env.NODE_ENV === 'production') {
    const infoFileTransport = new DailyRotateFile({
      filename: `${logDir}/%DATE%-combine.log`,
      maxSize: '1g',
      datePattern: 'YYYY-MM-DD',
      level: 'info',
      format: format.printf((i) => logFormat(i.level, i.message)),
    });
    const errorFileTransport = new DailyRotateFile({
      filename: `${logDir}/%DATE%-errors.log`,
      maxSize: '1g',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      format: format.printf((i) => logFormat(i.level, i.message)),
    });
    loggerTransports.push(infoFileTransport, errorFileTransport);
  } else {
    const consoleTransport = new transports.Console({
      level: 'debug',
      format: format.printf((i) => logFormat(i.level, i.message, true)),
    });
    loggerTransports.push(consoleTransport);
  }
  const logger = createLogger({
    transports: loggerTransports,
  });
  return logger;
}
