import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';

@Component({
    templateUrl: './group-child.component.html'
})
export class GroupChildComponent {
    @Input() controlFormGroup: FormGroup;
    @Input() questions: QuestionBase<any>[];
    @Output() removed = new EventEmitter<number>();

    removeItem(): void {
        this.removed.emit();
    }
}