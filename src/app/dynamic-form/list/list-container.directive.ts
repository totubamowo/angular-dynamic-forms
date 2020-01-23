import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[list-container]',
})
export class ListContainerDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}