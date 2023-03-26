import { Component, OnInit,Attribute, Input} from '@angular/core';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor(
    @Attribute('label') public label: string,
    @Attribute('striped') public striped: boolean,
    @Attribute('thin') public thin: boolean,
    @Attribute('statusbar') public statusbar: string
  ){}

  @Input()
  value: string='0'


  ngOnInit(): void {
  }

}
