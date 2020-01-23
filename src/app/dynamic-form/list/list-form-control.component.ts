import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from "@angular/core";
import { FormControlService } from "../form-control.service";
import { ListQuestion } from "./list-question";
import { FormGroup, FormArray } from "@angular/forms";
import { ListContainerDirective } from "./list-container.directive";
import { ListItemComponent } from "./list-item/list-item.component";

@Component({
  selector: 'list',
  templateUrl: './list-form-control.component.html',
  styleUrls: ['./list-form-control.component.css']
})

export class ListFormControlComponent implements OnInit {
  @Input() question: ListQuestion;
  @Input() controlFormGroup: FormGroup;
  @ViewChild(ListContainerDirective, { static: true, read: ViewContainerRef }) listContainer: ViewContainerRef;

  private listItemComponentFactory: ComponentFactory<ListItemComponent>;

  ngOnInit(): void {
    if (this.question.value !== null && typeof this.question.value !== 'undefined') {
      this.question.value.forEach((currentValue: any) => {
        const controlIndex = this.addListItem();
        this.formArray.at(controlIndex).setValue(currentValue);
        this.controlFormGroup.updateValueAndValidity();
      });
    }
  }

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.listItemComponentFactory = componentFactoryResolver.resolveComponentFactory(ListItemComponent);
  }

  get isValid(): boolean {
    return this.formArray.valid;
  }

  get formArray(): FormArray {
    return this.controlFormGroup.controls[this.question.key] as FormArray;
  }

  createGroupChild(controlIndex: number): void {
    const componentRef = this.listContainer.createComponent(this.listItemComponentFactory);
    componentRef.instance.controlFormGroup = this.formArray.controls[controlIndex] as FormGroup;
    componentRef.instance.questions = this.question.questions;
    componentRef.instance.removed.subscribe(() => {
      this.formArray.removeAt(controlIndex);
      this.listContainer.remove(controlIndex);
    });
  }

  addListItem(): number {
    this.formArray.push(FormControlService.toFormGroup(this.question.questions));
    let controlIndex = this.formArray.length - 1;
    this.createGroupChild(controlIndex);
    return controlIndex;
  }

  get isAddButtonDisabled(): boolean {
    if (this.question.maxLength !== null && typeof this.question.maxLength !== 'undefined') {
      return this.formArray.length >= this.question.maxLength;
    }
    return false
  }
}