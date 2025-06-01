import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  imports: [RouterModule],
  styleUrls: ['./footer.scss']
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}
