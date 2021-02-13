import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  regularPay:number=0;
  overTime:number=0;
  totalPay:number=0;
  taxOnPay:number=0;
  hourlyrate:number=0;
  noofhrsworked:number=0;
  calculatePay(){
     
    this.noofhrsworked > 40 ? this.overTime = ((this.noofhrsworked - 40)*this.hourlyrate*1.5) : this.overTime = 0;

    this.totalPay = this.overTime + this.noofhrsworked * this.hourlyrate;
    this.regularPay = this.noofhrsworked * this.hourlyrate;
    if(this.totalPay){
      this.taxOnPay =this.totalPay * 0.18;
    }   

  }

    constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  }
