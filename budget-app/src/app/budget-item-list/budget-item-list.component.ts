 import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-budget-item-card',
    templateUrl: './budget-item-card.component.html',
    styleUrls: ['./budget-item-card.component.scss']
})
 export class BudgetItemListComponent implements OnInit {

     @Input() budgetItems: BudgetItem[];
     @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

     constructor() { }

     ngOnInit() {
     }

     ondeleteButtonClicked(item: BudgetItem) {
        this.delete.emit(item);
     }
 }