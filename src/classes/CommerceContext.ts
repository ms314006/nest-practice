import * as fs from 'fs';
import * as path from 'path';
import Product from './Product';

class CommerceContext {
  get products(): Product[] {
    return JSON.parse(this.getJson('./products.json'));
  }

  private getJson(fileName: string): string {
    return fs.readFileSync(
      path.join(process.cwd(), `src/db/${fileName}`),
      'utf8',
    );
  }
}

export default CommerceContext;
