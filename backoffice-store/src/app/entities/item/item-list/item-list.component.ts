import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  categoryId?: number;
  title: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("categoryId")) {
        this.categoryId = +this.route.snapshot.paramMap.get("categoryId")!;
        this.title = "Artículos de la categoría " + this.categoryId;
    } else {
        this.title = "Lista de artículos";
    }
  }

}
