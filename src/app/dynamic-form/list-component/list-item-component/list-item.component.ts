import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Question } from "../../question";

@Component({
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() controlFormGroup: FormGroup;
    @Input() questions: Question<any>[];
    @Output() removed: EventEmitter<any> = new EventEmitter();

    remove(): void {
        this.removed.emit();
    }
}