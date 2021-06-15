import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitStringPipe } from './split-string.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SplitStringPipe],
    exports: [SplitStringPipe]
})
export class UtilsModule { }