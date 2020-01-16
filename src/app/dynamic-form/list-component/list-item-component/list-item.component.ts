import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionBase } from "../../question-base";

@Component({
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() controlFormGroup: FormGroup;
    @Input() questions: QuestionBase<any>[];
    @Output() removed: EventEmitter<any> = new EventEmitter();

    remove(): void {
        this.removed.emit();
    }
}