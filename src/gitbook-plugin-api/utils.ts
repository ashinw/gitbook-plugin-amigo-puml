import {Book} from './';

export enum LogLevel {
  None = 0,
  Debug = 1 << 0,
  Info = 1 << 1,
  Warn = 1 << 2,
  Error = 1 << 3,
  Trace = 1 << 4,
  ALL = Debug | Info | Warn | Error | Trace
}

export abstract class AbstractPlugin {
  public static HOOK_INIT = 'init';
  public static HOOK_FINISH_BEFORE = 'finish:before';
  public static HOOK_FINISH = 'finish';
  public static HOOK_PAGE_BEFORE = 'page:before';
  public static HOOK_PAGE = 'page';
  
  public static LOG_LEVEL = LogLevel.Error;
  public book: Book;
  
  public configure(book: Book): void {
    this.book = book;
    let loglLevel = <string> this.queryConfig('LOG_LEVEL');
    if (loglLevel) {
      AbstractPlugin.LOG_LEVEL = parseInt(loglLevel, 2);            
      this.book.log.warn(`AbstractPlugin.LOG_LEVEL=${AbstractPlugin.LOG_LEVEL}`);
    }    
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      book.log.logLevel = 0;
    else if (AbstractPlugin.LOG_LEVEL & LogLevel.Info)
      book.log.logLevel = 1;
    else if (AbstractPlugin.LOG_LEVEL & LogLevel.Warn)
      book.log.logLevel = 2;
    else
      book.log.logLevel = 3;    
  }

  public abstract getName(): string;
  public getNamespace(): string {
    return `gitbook-plugin-${this.getName()}`;
  }

  public queryConfig(key: string, def?: null|boolean|number|string|Object): null|boolean|number|string|Object {
    return this.book.config.get(`pluginsConfig.${this.getName()}.${key}`, def);
  }
}