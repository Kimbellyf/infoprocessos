import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchprocService } from '../../service/searchproc.service';
import { Process, Representative, Customer } from '../../models/process';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { CustomerService } from '../../service/customer.service';
@Component({
  selector: 'app-searchprocess',
  templateUrl: './searchprocess.component.html',
  styleUrls: ['./searchprocess.component.scss']
})
export class SearchprocessComponent implements OnInit {

   /* process: Process[];

    selectedprocess: Process[];

    representatives: Representative[];

    statuses: any[];*/

    //loading: boolean = true;

    /* process: Process[];
  
   selectedprocess: Process[];
  
   representatives: Representative[];
  
   statuses: any[];*/
  //loading: boolean = true;
  customers: Customer[] = [];

    selectedCustomers: Customer[] = [];

    representatives: Representative[] = [];

    statuses: any[] = [];

    loading: boolean = true;

    @ViewChild('dt')
  table: Table | any;
  messages =[];
    errors = [];

    constructor(
      private searchProcService: SearchprocService,
      private primengConfig: PrimeNGConfig,
      private customerService: CustomerService,) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
          this.customers = customers;
          this.loading = false;
      });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
        this.primengConfig.ripple = true;
    }

    onActivityChange(event:any) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value:any) {
        this.table.filter(this.formatDate(value), 'date', 'equals')
    }

    formatDate(date:any) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event:any) {
        this.table.filter(event.value, 'representative', 'in')
    }
    searchProcessCNJEtc(cnj: string, type: string){
      //if(cnj && cnj!="")
      this.searchProcService.searchProcessWithCNJ(cnj,type).subscribe(
        (res: any)=>{
          console.log(res);
          console.log(res);
          //this.messages.push("Login efetuado com sucesso!");
        
        },
        error =>{
          console.log(error);
          /*this.showError(error.status);
          this.errors.push("Login inválido");
          this.submitted = false;*/
        });

    }
    isValidCNJ(cnj: string): boolean {
      let regexnum = new RegExp('[0-9]{7}[-][0-9]{2}[.][0-9]{4}[.][0-9]{1}[.][0-9]{2}[.][0-9]{4}');
      if(regexnum.test(cnj)){
        return true;
      }else{
        return false;
      }
    }

}
