import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisabledControlDirective } from './disable-control.directive';

@NgModule({
  declarations: [DisabledControlDirective],
  imports: [CommonModule],
  exports: [DisabledControlDirective],
})
export class DisableControlModule {}
