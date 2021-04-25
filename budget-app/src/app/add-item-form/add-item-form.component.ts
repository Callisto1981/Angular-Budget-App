import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-add-item-form',
    templateUrl: './add-item-form.component.html',
    styleUrls: ['./add-item-form.component.scss']
})

export class AddItemFormComponent implements OnInit {

    @Input() item: BudgetItem; //Binding input to model of BudgetItem that is imported above
    @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

    isNewItem: boolean;

    constructor() {}

    ngOnInit() {
        if (this.item) {
            this.isNewItem = false;
        }else{
            this.isNewItem = true;
            this.item = new BudgetItem('', null);
        }
    }

    onSubmit(form: NgForm) {
        this.formSubmit.emit(form.value);
        form.reset();
    }
}