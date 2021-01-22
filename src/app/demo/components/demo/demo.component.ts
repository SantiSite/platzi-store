import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'santi-site-angular-platzi';

  items = ['Santiago', 'Alejandra', 'Rufus', 'Juan David'];

  power = 10;

  addItem(): void {
    this.items.push('Nuevo item');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
