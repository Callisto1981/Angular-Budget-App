 import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 import { BudgetItem } from 'src/shared/models/budget-item.model';
 import { MatDialog } from '@angular/material';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
    selector: 'app-budget-item-card',
    templateUrl: './budget-item-card.component.html',
    styleUrls: ['./budget-item-card.component.scss']
})

 export class BudgetItemListComponent implements OnInit {

     @Input() budgetItems: BudgetItem[];
     @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
     @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

     constructor(public dialog: MatDialog) { }

     ngOnInit() {
     }

     ondeleteButtonClicked(item: BudgetItem) {
        this.delete.emit(item);
     }

     onCardClicked(item: BudgetItem) {
         const dialogRef = this.dialog.open(EditItemModalComponent, {
            width: '500px',
            data: item
         });
         
         dialogRef.afterClosed().subscribe(result => {
             if (result) {
                 this.update.emit({
                     old: item,
                     new: result
                 });
             }
         })
     }
 }

 export interface UpdateEvent {
    old: BudgetItem;
    new: BudgetItem;
}