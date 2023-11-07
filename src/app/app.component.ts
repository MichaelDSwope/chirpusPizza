import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  headers = ["ID", "Name", "Category", "Price"];

  rows = [
    {
      "ID": "1",
      "Name": "Chicken Fingers",
      "Category": "Dinner",
      "Price": "11.99"
    },
    {
      "ID": "2",
      "Name": "Pizza",
      "Category": "Dinner",
      "Price": "11.99"
    },
    {
      "ID": "3",
      "Name": "Wings",
      "Category": "Sides",
      "Price": "8.99"
    },
    {
      "ID": "4",
      "Name": "Breadsticks",
      "Category": "Sides",
      "Price": "4.99"
    },
    {
      "ID": "5",
      "Name": "Caesar Salad",
      "Category": "Salads",
      "Price": "5.99"
    },
    {
      "ID": "6",
      "Name": "Cinnamon Rolls",
      "Category": "Dessert",
      "Price": "8.99"
    },
  ]
}
