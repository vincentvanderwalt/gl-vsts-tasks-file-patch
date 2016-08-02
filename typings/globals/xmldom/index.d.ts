// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/e786952f1d7142112f995b5ed594fcb43b877ce4/xmldom/xmldom.d.ts
declare module "xmldom" {
  namespace xmldom {
    var DOMParser: DOMParserStatic;
    var XMLSerializer: XMLSerializerStatic;

    interface DOMParserStatic {
      new(): DOMParser;
      new(options: Options): DOMParser;
    }

    interface XMLSerializerStatic {
      new(): XMLSerializer;
    }

    interface DOMParser {
      parseFromString(xmlsource: string, mimeType?: string): Document;
    }

    interface XMLSerializer {
      serializeToString(node: Node): string;
    }

    interface Options {
      locator?: any;
      errorHandler?: ErrorHandlerFunction|ErrorHandlerObject;
    }

    interface ErrorHandlerFunction {
      (level: string, msg: any): any;
    }

    interface ErrorHandlerObject {
      warning?: (msg: any) => any;
      error?: (msg: any) => any;
      fatalError?: (msg: any) => any;
    }
  }

  export = xmldom;
}