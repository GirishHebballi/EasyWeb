import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  menuProps: any = [
    {
      menu: "Assets",
      items: [
        {
          itemLabel: "Laptop",
          functionOrLink: "ListProcessNode",
          itemHasChild: false
        },
        {
          itemLabel: "Location",
          functionOrLink: "ListLocation",
          itemHasChild: true,
          children: [
            {
              itemLabel: "Location Bandwidth Manager Group",
              functionOrLink: "ListLbmGroup",
              itemHasChild: false
            },
            {
              itemLabel:"Location Bandwidth Manager(LBM) Intercluster Replication Group",
              functionOrLink: "ListLbmHubGroup",
              itemHasChild: false
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    console.log(this.menuProps);
  }

  ngOnInit() {}

  load(link) {
    console.log(link);
  }
}
