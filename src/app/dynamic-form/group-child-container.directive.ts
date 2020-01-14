import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[group-child-container]',
})
export class GroupChildContainerDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}