import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() schemaList: Array<any>;
  public listData: Array<any>;
  public showList = false;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  isArray(value: any): boolean {
    return this.commonService.isOfArrayType(value);
  }

  isObject(value: any): boolean {
    return this.commonService.isObjectType(value);
  }

  getKeys(obj): Array<string> {
    return this.commonService.getKeys(obj);
  }

  expand(list) {
    this.showList = !this.showList;
    this.listData = this.showList ? [...list] : [];
  }

  getSentenceCase(label: string): string {
    return this.commonService.toSentenceCase(label);
  }

}
