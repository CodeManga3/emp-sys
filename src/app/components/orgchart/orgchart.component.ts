import { Component, OnInit } from '@angular/core';
import {MessageService, TreeNode} from "primeng/api";

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent implements OnInit {

  data1: TreeNode[] = [];

  data2: TreeNode[] = [];

  selectedNode: TreeNode = {};

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.data1 = [
      {
        label: 'Manager',
        type: 'person',
        styleClass: 'p-person',
        expanded: false,
        data: { name: 'Walter White', avatar: 'avatar.png' },
        children: [
          {
            label: 'Collections Team',
            styleClass: 'department-coo',
            expanded: false,
            children: [
              {
                label: 'Team Leader',
                type: 'person',
                styleClass: 'p-person',
                expanded: false,
                data: { name: 'John Smith', avatar: 'avatar.png' },
                children: [
                  {
                    label: 'Agent',
                    type: 'person',
                    styleClass: 'p-person',
                    data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                  },
                  {
                    label: 'Agent',
                    type: 'person',
                    styleClass: 'p-person',
                    data: { name: 'Eden Spai', avatar: 'avatar.png' },
                  },
                ],
              },
            ],
          },

          {
            label: 'Litigations Team',
            styleClass: 'department-coo',
            expanded: false,
            children: [
              {
                label: 'Team Leader',
                type: 'person',
                styleClass: 'p-person',
                expanded: false,
                data: { name: 'Sam Mazibuko', avatar: 'avatar.png' },
                children: [
                  {
                    label: 'Agent',
                    type: 'person',
                    styleClass: 'p-person',
                    data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                  },
                ],
              },
            ],
          },
        ],
      }
    ];
  }

  onNodeSelect($event: any) {
    this.messageService.add({severity: 'success', summary: 'Node Selected', detail: $event.node.label});
  }
}
