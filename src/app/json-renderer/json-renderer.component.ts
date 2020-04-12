import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-json-renderer',
  templateUrl: './json-renderer.component.html',
  styleUrls: ['./json-renderer.component.scss']
})
export class JsonRendererComponent implements OnInit {
  schemaJson: {} | Array<any>;
  public keysOfSchema: Array<any>;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.fetchSchema();
  }

  isArray(value: any): boolean {
    return this.commonService.isOfArrayType(value);
  }

  isObject(value: any): boolean {
    return this.commonService.isObjectType(value);
  }

  getSentenceCase(label: string): string {
    return this.commonService.toSentenceCase(label);
  }

  fetchSchema() {
    this.commonService.getSchema().subscribe(data => {
      this.schemaJson = data;
      this.keysOfSchema = Object.keys(this.schemaJson);
    }, err => console.error(err));
  }

}
