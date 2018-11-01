import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule ],
  exports:  [MatButtonModule, MatIconModule, MatInputModule]
})
export class MaterialModule { }
