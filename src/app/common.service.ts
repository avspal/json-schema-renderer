import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private jsonUrl = 'assets/sample-schema.json';
  private jsonListUrl = 'assets/sample-schema-list.json';

  constructor(private http: HttpClient) { }

  isOfArrayType(value: any): boolean {
    return value instanceof Array;
  }

  isObjectType(value: any): boolean {
    return value instanceof Object;
  }

  getKeys(obj): Array<string> {
    return Object.keys(obj);
  }

  toSentenceCase(camelCase: string): string {
    const result = camelCase.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  getSchema() {
    return this.http.get(this.jsonUrl);
  }
}
