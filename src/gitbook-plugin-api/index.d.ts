/**
 * A new gitbook directory should be added to:
 *  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
 * 
 * npm install @types/gitbook --save-dev
 */

export interface Book {
}

export interface GitBook {
  time: number;
  version: string;
}

export interface File {
  path: string;
  mtime: number;
  type: string;
}

export interface Page {
  type: string;
  path: string;
  rawPath: string;
  title: string;
  content: string;

  // ???
  previous: Page;
  next: Page;
  dir: string;
}

export interface ReadMe {
  path: string;
}

export interface Glossary {
  path: string;
}

export interface Summary {
  parts: any;
}

export interface Languages {
  list: any;
}

export interface Output {
  name: string;
  format: string;
}

export interface Config {
}


export interface Block {
  args: any[];
  kwargs: Object;
  body: string;
}

export interface PluginHook {
  init(): Promise<void>|void;
  finishBefore(): Promise<void>|void;
  finish(): Promise<void>|void;

  pageBefore(page: Page): Promise<Page>|Page;
  page(page: Page): Promise<Page>|Page;
}

export interface PluginBlock {
  process(block: Block): Promise<string>|string;
}

export interface PluginFilter {
  process(operand, ...restArgs): string;
}