import { Block, Page, PluginBlock, PluginFilter, PluginHook } from './gitbook-plugin-api';
import { AbstractPlugin, LogLevel } from './gitbook-plugin-api/utils';

export class AmigoPlantUmlPlugin extends AbstractPlugin implements PluginBlock, PluginFilter, PluginHook {

  public init(): Promise<void> | void {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:init`);
  }

  public finishBefore(): void | Promise<void> {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:finishBefore`);
  }

  public finish(): void | Promise<void> {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:finish`);
  }

  public pageBefore(page: Promise<Page> | Page): Page | Promise<Page> {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:pageBefore`);
    return page;
  }

  public page(page: Promise<Page> | Page): Page | Promise<Page> {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:page`);
    return page;
  }

  public processBlock(block: Block): string | Promise<string> {
    this.book.log.debug(`${this.getNamespace()}:processBlock {% plantuml %} ... {% endplantuml %}')`);
    return block.body;
  }

  public processFilter(lhsOperand: any, ...rhsOperands: any[]): string {
    if (AbstractPlugin.LOG_LEVEL & LogLevel.Debug)
      this.book.log.debug(`${this.getNamespace()}:processFilter ${lhsOperand}, ${JSON.stringify(rhsOperands)}`);
    return "_dummy filter response_";
  }

  public getName(): string {
    return 'amigo-puml';
  }
}

