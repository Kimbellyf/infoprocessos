import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchprocService } from '../../service/searchproc.service';
import { Process, Representative, Customer } from '../../models/process';
import { Table } from 'primeng/table';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-searchprocess',
  templateUrl: './searchprocess.component.html',
  styleUrls: ['./searchprocess.component.scss'],
  providers: [MessageService]
})
export class SearchprocessComponent implements OnInit {

  process: Process[]=[];
  selectedProcess: Process[]=[];
  
  customers: Customer[] = [];
  cnj: string | undefined;
  type: string | undefined;

  searchCNJForm = this.formBuilder.group({
    cnj: ['', Validators.required],
    type: ['']
  });

    selectedCustomers: Customer[] = [];

    representatives: Representative[] = [];

    statuses: any[] = [];

    loading: boolean = false;

    @ViewChild('dt') table: Table | any;
    messages =[];
    errors = [];
    first = 0;
    rows = 10;
    display:boolean = true;

    findInfoProcess: boolean = false;

    constructor(
      private searchProcService: SearchprocService,
      private primengConfig: PrimeNGConfig,
      private customerService: CustomerService,
      private formBuilder: FormBuilder,
      private messageService: MessageService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
          this.customers = customers;
          this.loading = false;
      });

      this.representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
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
    searchProcessCNJEtc(cnj: string |undefined | null, type: string| undefined |null){
      this.findInfoProcess = false;
      let cnjIsvalid = this.isValidCNJ(cnj);
      if(cnj && cnj!="" && cnjIsvalid &&(type)){
        this.loading = true;
        this.searchProcService.searchProcessWithCNJ(cnj,type).subscribe(
          
          (res:Process)=>{
            this.process.push(res);
            this.findInfoProcess = true;
            this.loading = false;
          },
          (err)=>{
            this.loading = false;
            if(err && err.status_op){
              this.showInfo(err.status_op);
            }else{
              this.showError();
            }
          }
        );
      }else{
        this.showError("Formato CNJ inválido ");
      }

    }
    isValidCNJ(cnj: string | undefined | null): boolean {
      if(cnj && cnj!==null){
        let regexnum = new RegExp('[0-9]{7}[-][0-9]{2}[.][0-9]{4}[.][0-9]{1}[.][0-9]{2}[.][0-9]{4}');
        if(regexnum.test(cnj)){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }

    next() {
      this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === (this.customers.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }
    showError(msg='Error ao pesquisar CNJ',status="") {
      this.messageService.add({severity:'error', summary: 'Error', detail: msg});
    }
    showInfo(msg='',status="") {
      this.messageService.add({severity:'info', summary: 'Info', detail: msg});
    }
 
  
}


