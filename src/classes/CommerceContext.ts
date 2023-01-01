import * as path from 'path';
import JsonReader from './interfaces/jsonReader.interface';
import Product from './Product';

class CommerceContext {
  private reader: JsonReader;

  constructor(reader: JsonReader) {
    this.reader = reader;
  }

  get products(): Product[] {
    return JSON.parse(this.getJson('./products.json'));
  }

  private getJson(fileName: string) {
    return this.reader.readFileSync(
      path.join(process.cwd(), `src/db/${fileName}`),
    );
  }
}

export default CommerceContext;
