import {Component, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from "primeng/api";
import {FormControl, FormGroup} from "@angular/forms";

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

  data2: TreeNode[] = [];
  selectedManager: TreeNode[] = [];

  newManager: TreeNode = {};
  selectedNode: TreeNode = {};
  selectedName: string = '';
  createTeam: number = 1;
  isChecked: boolean = true;
  formData: FormGroup = new FormGroup({});
  private selectedTeam: string = '';
  items: MenuItem[] = [];
  selectedKey: string = ' ';

  constructor() { }

  ngOnInit(): void {
    /*Form group to capture Manager Data*/
    this.formData = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      createTeamRadio: new FormControl(),
      createTeam: new FormControl(),
      selectTeam: new FormControl()
    });

    /*Main data for the chart*/
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

    /*This will set up the menu list to move teams, leaders and agents*/
   this.setupItemList();

  }

  /*This method will help keep track on which node was selected on the chart*/
  onNodeSelect($event: any) {
    this.selectedNode = $event.node;
    if (this.selectedNode.key === Groups.TEAM_LEAD) {
      /*Place team, manager or team leader the selected node to move to*/
      this.selectedKey = ' Team Leader ';
    } else if (this.selectedNode.key === Groups.AGENT) {
      this.selectedKey = ' Agent ';
    } else if (this.selectedNode.key === Groups.MANAGER) {
      this.selectedKey = ' Manager ';
    } else if (this.selectedNode.key === Groups.TEAM) {
      this.selectedKey = ' Team ';
    }
    /*update  the selected list item with the correct team, manager or team leader*/
    this.setupItemList();
  }

  getAllTeams() {
    /*This method will help us get all available teams in the chart*/
    let arr: any[] = [];

     if (this.selectedNode.key === Groups.TEAM) {
      arr = [];
      arr.push({label: 'Manager'},{separator:true},)
      if (typeof(this.data2[0].children) !== "undefined" ) {
        this.data2[0].children.forEach(manager => {
          if ( manager.key === Groups.MANAGER) {
            console.log('Moving to manager => ' + manager.data.name);
            let node: TreeNode = this.selectedNode;
            arr.push({label: manager.data.name, command: (label: string) => this.moveItem(label, node),})
          }
        })
      }

    } else if (this.selectedNode.key === Groups.TEAM_LEAD) {
      arr = [];
      arr.push({label: 'Teams'},{separator:true},)
      if (typeof(this.data2[0].children) !== "undefined") {
        this.data2[0].children.forEach(manager => {
          manager.children?.forEach(teams => {
            console.log('Moving to team =>');
            let node: TreeNode = this.selectedNode;
            arr.push({label: teams.label, command: (label: string) => this.moveItem(label, node),})
          })
        })
      }
    } else if (this.selectedNode.key === Groups.AGENT) {
      arr = [];
      arr.push({label: 'Team Leaders'},{separator:true},)
      if (typeof(this.data2[0].children) !== "undefined") {
        this.data2[0].children.forEach(manager => {
          manager.children?.forEach(teams => {
              teams.children?.forEach(team => {
                if (team.key === Groups.TEAM_LEAD) {
                  console.log('Moving to team leader =>');

                  let node: TreeNode = this.selectedNode;
                  arr.push({label: team.data.name, command: (label: string) => this.moveItem(label, node),})
                }
              })
          })
        })
      }
    }

    /*return the teams*/
    return arr;
  }

  closeAddTeamModel() {
    this.selectedNode = {};
    this.selectedName = '';
  }

  /*Get the selected manager from the select option and display them on the chart*/
  changeSelectedManager(event:any) {
    let index:number =  event.target["selectedIndex"];
    if(index ==-1) {
      return;
    }

    if (typeof(this.data2[0].children) !== "undefined") {
      this.selectedManager = new Array(this.data2[0].children[index]);
    }
  }

  /*This method will help dertemine to select a team from the current list or create a new team*/
  createOrSelectTeam() {
    if (this.isChecked) {
      this.isChecked = false;
      this.createTeam = 0;
    } else {
      this.isChecked = true;
      this.createTeam = 1;
    }
  }

  /*This methd will take the captured data and add a manager to the chart*/
  createManager() {
    if (this.isChecked) {
      this.selectedTeam = this.formData.controls['createTeam'].value;
    }
    this.newManager = {
      label: 'Manager',
      type: 'person',
      key: Groups.MANAGER,
      styleClass: 'p-person',
      expanded: false,
      data: {name: this.formData.controls['firstName'].value + ' ' + this.formData.controls['lastName'].value, avatar: 'avatar.png' },
      children: (this.selectedTeam === '') ? []: [{
        label: this.selectedTeam,
        type: 'person',
        key: Groups.TEAM,
        styleClass: 'p-person',
        expanded: false,
        data: {name: this.selectedTeam },
      }]
    }
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.push(this.newManager);
    }
  }

  onCloseCreateManager() {
    this.newManager = {};
  }

  onSelectionChange($event: any) {
    if ($event.target !== null ) {
      this.selectedTeam = $event.target.options[$event.target.options.selectedIndex].text;
    }
  }



  private setupItemList() {
    this.items = [
      {
        items:[
          {
            label:'Move' + this.selectedKey + 'to',
            icon:'pi pi-fw pi-plus',
            items: this.getAllTeams()
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-trash'
          },
          {
            separator:true
          },
          {
            label:'Export',
            icon:'pi pi-fw pi-external-link'
          }
        ]
      },
    ];

  }

  private moveItem(label: string, selectedNode: TreeNode) {
    console.log(selectedNode)
    console.log(label)


    // if (key === Groups.MANAGER) {
    //   // console.log('Move  to ' + label + '\n Groups.MANAGER')
    // } else if (key === Groups.TEAM) {
    //   // this.data2.forEach(managers => {
    //   //   console.log(managers + '\nGroups.TEAM')
    //   // })
    //   // console.log('Move   to ' + label + '\n Groups.TEAM')
    // } else if (key === Groups.TEAM_LEAD) {
    //   // console.log('Move  to ' + label + '\n Groups.TEAM_LEAD')
    // } else if (key === Groups.AGENT) {
    //   // console.log('Move  to ' + label + ' \nGroups.AGENT')
    // }

  }
}
