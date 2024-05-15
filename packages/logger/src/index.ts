export type Logger = {
  debug(message: unknown): void;
  info(message: unknown): void;
  warn(message: unknown): void;
  error(message: unknown): void;
};

export default function createLogger(): Logger {
  return {
    debug: (msg) => console.log('DEBUG: ', msg),
    info: (msg) => console.log('INFO: ', msg),
    warn: (msg) => console.log,
    error: (msg) => console.log,
  };
}
