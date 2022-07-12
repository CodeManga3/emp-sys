import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";

enum Groups {
  COMPANY = "company",
  MANAGER = "manager",
  TEAM_LEAD = "team_lead",
  TEAM = "team",
  AGENT = "agent"
}

@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent implements OnInit {

  data1: TreeNode[] = [];
  data2: TreeNode[] = [];
  selectedManager: TreeNode[] = [];

  selectedNode: TreeNode = {};
  selectedName: string = '';
  nodeClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.data1 = [
      {
        label: 'Managers',
        type: 'person',
        key: Groups.COMPANY,
        styleClass: 'p-person',
        expanded: false,
        data: { name: 'Hammond Pole'},
        children: [
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'Walter White', avatar: 'avatar.png' },
          },
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'John Adams', avatar: 'avatar.png' },
          }
        ],
      }
    ];
    this.data2 = [
      {
        label: 'Managers',
        type: 'person',
        key: Groups.COMPANY,
        styleClass: 'p-person',
        expanded: false,
        data: { name: 'Hammond Pole'},
        children: [
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'Walter White', avatar: 'avatar.png' },
            children: [
              {
                label: 'Collections Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Collections Team' },
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'John Smith', avatar: 'avatar.png' },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
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
                type: 'person',
                key: Groups.TEAM,
                data: { name: 'Collections Team' },
                expanded: false,
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Sam Mazibuko', avatar: 'avatar.png' },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'James Mahlangu', avatar: 'avatar.png' },
            children: [
              {
                label: 'Labour Law Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Labour Law Team' },

              }
            ],
          },
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'John Adams', avatar: 'avatar.png' },
            children: [
              {
                label: 'Conveyancing Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Collections Team' },
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Edward Males', avatar: 'avatar.png' },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Eden Spai', avatar: 'avatar.png' },
                      },
                    ],
                  },
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Sihle Mthimunye', avatar: 'avatar.png' },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Lebo Skhosana', avatar: 'avatar.png' },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Eden Spai', avatar: 'avatar.png' },
                      },
                    ],
                  }
                ],
              },

              {
                label: 'Recovery Team',
                styleClass: 'department-coo',
                type: 'person',
                key: Groups.TEAM,
                data: { name: 'Collections Team' },
                expanded: false,
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Sam Mazibuko', avatar: 'avatar.png' },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
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
        ],
      }
    ];
    if (typeof(this.data2[0].children) !== "undefined") {
      this.selectedManager = new Array(this.data2[0].children[0]);
    }
  }

  onNodeSelect($event: any) {
    this.nodeClicked = !this.nodeClicked;
    if (this.nodeClicked) {
      this.selectedNode = {};
    } else {
      this.selectedNode = $event.node;
    }
  }

  editMenu(node: TreeNode) {
    if (node.key === Groups.MANAGER) {
      this.selectedNode = node;
      this.selectedName = node.data.name;
      console.log(node.label)
    } else if (node.key === Groups.TEAM) {
      this.selectedNode = node;
      this.selectedName = node.data.name;
      console.log(node.label)
    } else if (node.key === Groups.TEAM_LEAD) {
      this.selectedNode = node;
      this.selectedName = node.data.name;
      console.log(node.label)
    } else if (node.key === Groups.AGENT) {
      this.selectedNode = node;
      this.selectedName = node.data.name;
      console.log(node.label)
    }
  }


  closeAddTeamModel() {
    this.selectedNode = {};
    this.selectedName = '';
  }

  changeSelectedManager(event:any) {
    let index:number =  event.target["selectedIndex"];
    if(index ==-1) {
      return;
    }

    if (typeof(this.data2[0].children) !== "undefined") {
      this.selectedManager = new Array(this.data2[0].children[index]);
      console.log(new Array(this.data2[0].children[index].data.name));
    }

  }
}
