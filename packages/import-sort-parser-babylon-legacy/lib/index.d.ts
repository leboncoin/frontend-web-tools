import { IImport } from "import-sort-parser";
export declare function parseImports(code: string): Array<IImport>;
export declare function formatImport(code: string, imported: IImport, eol?: string): string;
