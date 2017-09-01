/**
 * A new gitbook directory should be added to:
 *  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types
 * 
 * npm install @types/gitbook --save-dev
 */

export interface Book {
  config: Config;
  getPageByPath(filePath): Page; // make just an obj
  gitbook: GitBook;
  isLanguageBook(): boolean;
  isMultilingual(): boolean;
  log: Logger;
  // navigation: Object; 
  output: Output;
  readFile(fileName: string): Promise<string>;
  readFileAsString(fileName: string): Promise<string>;
  renderBlock(type: string, text: string): Promise<string>;
  renderInline(type: string, text: string): Promise<string>;
  resolve(fileName: string): string;
  summary: Summary;
  template: Template;
}

export interface GitBook {
  version: string;
}

export interface Page {
  content: string;
  depth: number;
  dir: string;
  level: string;
  next: Page;
  path: string;
  rawPath: string;
  type: string;
  title: string;
}

export interface Summary {
  getArticleByLevel(level: string): Object;
  getArticleByPath(level: string): Object;
  walk(iter: (iterable: Object) => boolean): void;
}

export interface Output {
  copyFile(inputFile: string, outputFile: string): Promise<void>;
  hasFile(fileName: string): Promise<boolean>;
  name: string;
  resolve(fileName: string): string;
  root(): string;
  toURL(filePath: string): string;
  writeFile(fileName: string, content: string): Promise<void>; 
}

export interface Config {
  get(key: string, def?: null|boolean|number|string|Object): null|boolean|number|string|Object;
  set(key: string, val: null|boolean|number|string|Object): void;
  values: ValuesConfig;
}

export interface ValuesConfig {
  generator: string;
  gitbook: string;
  output: string;
  pdf: PdfConfig;
  plugins: string[];
  pluginsConfig: PluginsConfigConfig;
  structure: StructureConfig;
  styles: StylesConfig;
  theme: string;
  variables: Object;
}

export interface PdfConfig {
  chapterMark: string;
  fontFamily: string;
  fontSize: number;
  margin: Margin;
  pageBreaksBefore: string;
  pageNumbers: boolean;
  pageSize: string;
}

export interface PluginsConfigConfig {
  fontsettings: Object;
  highlight: Object;
  lunr: Object;
  search: Object;
  sharing: Object;
  // ['theme-default']
  // ['$PLUGIN_NAME']
}

export interface StructureConfig {
  glossary: string;
  langs: string;
  readme: string;
  summary: string;
}

export interface StylesConfig {
  ebook: string;
  epub: string;
  mobi: string;
  pdf: string;
  print: string;
  website: string;
}

export interface Margin {
  bottom: number;
  left: number;
  right: number;
  top: number;
} 

export interface Logger {
  debug(arg, ...args);
  info(arg, ...args);
  warn(arg, ...args);
  error(arg, ...args);
  lastChar: string;
  logLevel: number;
}

export interface Template {
  applyBlock(inner: Object, context: Object): Promise<String>|String;
}

export interface Block {
  args: any[];
  body: string;
  kwargs: Object;
}

export interface PluginHook {
  init(): Promise<void>|void;
  finishBefore(): Promise<void>|void;
  finish(): Promise<void>|void;

  pageBefore(page: Promise<Page>|Page): Promise<Page>|Page;
  page(page: Promise<Page>|Page): Promise<Page>|Page;
}

export interface PluginBlock {
  processBlock(block: Block): Promise<string>|string;
}

export interface PluginFilter {
  processFilter(lhsOperand, ...rhsOperands): string;
}

type PluginHookContextHandler = () => Promise<void>|void;
type PluginHookPageHandler = (page: Promise<Page>|Page) => Promise<Page>|Page;

type PluginBlockHandler = (block: Block) => Promise<string>|string;
type PluginFilterHandler = (lhsOperand, ...rhsOperands) => string;

interface Plugin {
  hooks: PluginHook;
  blocks: Object;
}