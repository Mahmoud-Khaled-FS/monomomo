function intTofixedLen(num: number, maxLen: number): string {
  return num.toString().padStart(maxLen, '0');
}

export function logFormat(level: string, msg: string, isTerm: boolean = false): string {
  const date = new Date();
  const dateMessage = `${date.getFullYear()}-${intTofixedLen(date.getMonth() + 1, 2)}-${intTofixedLen(
    date.getDate(),
    2,
  )}`;
  const timeMessage = `${intTofixedLen(date.getHours(), 2)}:${intTofixedLen(date.getMinutes(), 2)}:${intTofixedLen(
    date.getSeconds(),
    2,
  )}`;
  const levelMessage = isTerm ? `${color[level]}${level.toUpperCase()}${color.reset}:` : `${level.toUpperCase()}:`;
  return `${dateMessage} ${timeMessage} ${levelMessage} ${msg}`;
}

const color = {
  debug: `\x1b[34m`,
  info: `\x1b[32m`,
  warn: `\x1b[33m`,
  error: `\x1b[31m`,
  reset: `\x1b[0m`,
};
