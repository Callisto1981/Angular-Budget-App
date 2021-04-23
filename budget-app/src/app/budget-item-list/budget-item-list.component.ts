 import { Component, Input, OnInit } from '@angular/core';
 import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-budget-item-card',
    templateUrl: './budget-item-card.component.html',
    styleUrls: ['./budget-item-card.component.scss']
})
 export class BudgetItemListComponent implements OnInit {

     @Input() budgetItems: BudgetItem[];

     constructor() { }

     ngOnInit() {
     }
 }