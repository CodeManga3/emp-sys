import {Component, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from "primeng/api";
import {FormControl, FormGroup} from "@angular/forms";
import * as _ from 'lodash';

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
  highestID: number = 1;

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
        data: { name: 'Hammond Pole', id: 1},
        children: [
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'Walter White', avatar: `bi bi-person-circle`, id: 2 },
            children: [
              {
                label: 'Collections Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Collections Team', avatar: 'bi bi-people', id: 3 },
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'John Smith', avatar: 'bi bi-people',  id: 4 },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Nasreen Motani', avatar: 'bi bi-person-square', id: 5 },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Keygan Keneer', avatar: 'bi bi-person-square', id: 6 },
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
                data: { name: 'Litigations Team', avatar: 'bi bi-people', id: 7 },
                expanded: false,
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Joe Rogen', avatar: 'bi bi-people', id: 8 },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Anel Jacobs', avatar: 'bi bi-person-square', id: 22 },
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
            data: { name: 'James Mahlangu', avatar: 'bi bi-person-circle', id: 9 },
            children: [
              {
                label: 'Labour Law Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Labour Law Team', avatar: 'bi bi-people', id: 10 },

              }
            ],
          },
          {
            label: 'Manager',
            type: 'person',
            key: Groups.MANAGER,
            styleClass: 'p-person',
            expanded: false,
            data: { name: 'John Adams', avatar: 'bi bi-person-circle', id: 11 },
            children: [
              {
                label: 'Conveyancing Team',
                type: 'person',
                styleClass: 'department-coo',
                key: Groups.TEAM,
                expanded: false,
                data: { name: 'Conveyancing Team', avatar: 'bi bi-people', id: 12 },
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Edward Males', avatar: 'bi bi-people', id: 13 },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Ria Van Veer', avatar: 'bi bi-person-square', id: 14 },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Zodwa Nkosi', avatar: 'bi bi-person-square', id: 15 },
                      },
                    ],
                  },
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Sihle Mthimunye', avatar: 'bi bi-people', id: 16 },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Lebo Skhosana', avatar: 'bi bi-person-square', id: 17 },
                      },
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Eden Spai', avatar: 'bi bi-person-square', id: 18 },
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
                data: { name: 'Collections Team', avatar: 'bi bi-people', id: 19 },
                expanded: false,
                children: [
                  {
                    label: 'Team Leader',
                    type: 'person',
                    key: Groups.TEAM_LEAD,
                    styleClass: 'p-person',
                    expanded: false,
                    data: { name: 'Sam Mazibuko', avatar: 'bi bi-people', id: 20 },
                    children: [
                      {
                        label: 'Agent',
                        key: Groups.AGENT,
                        type: 'person',
                        styleClass: 'p-person',
                        data: { name: 'Ndivho Mokwevho', avatar: 'bi bi-person-square', id: 21 },
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

    this.highestID = this.getTheHighestID();

    // this.deleteManagerById(2);
    // this.deleteTeamByID(7)
    // this.deleteTeamLeaderByID(8)
    // this.deleteAgentByID(22)
    /*This will set up the menu list to move teams, leaders and agents*/
   // this.setupItemList();

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
    // this.setupItemList();
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
      data: {
        name: this.formData.controls['firstName'].value + ' ' + this.formData.controls['lastName'].value,
        avatar: 'bi bi-person-square',
        id: ++this.highestID
      },
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
    this.formData.reset();
  }

  onCloseCreateManager() {
    this.newManager = {};
  }

  onSelectionChange($event: any) {
    if ($event.target !== null ) {
      this.selectedTeam = $event.target.options[$event.target.options.selectedIndex].text;
    }
  }

  getAllManagers(){
    let arr: TreeNode[] = [];
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.forEach(manager => { arr.push(manager) });
    }
    return arr;
  }

  getAllTeams() {
    let arr: TreeNode[] = [];
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.forEach(manager => {
        manager.children?.forEach(teams => {
          arr.push(teams);
        })
      })
    }
    return arr;
  }

  getAllTeamLeaders() {
    let arr: TreeNode[] = [];
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.forEach(manager => {
        manager.children?.forEach(teams => {
          teams.children?.forEach(leader => {
            arr.push(leader);
          })
        })
      })
    }
    return arr;
  }

  moveSelected(nodeToMove: TreeNode, nodeToMoveTo: TreeNode) {
    if (nodeToMove.key === Groups.TEAM) {
      /*Moving a team to a manager*/
      this.deleteTeamByID(nodeToMove.data.id);
      this.addTeamToManager(nodeToMove, nodeToMoveTo);
    } else if (nodeToMove.key === Groups.TEAM_LEAD) {
      /*Moving a team leader to a team*/
      this.deleteTeamLeaderByID(nodeToMove.data.id);
      this.addTeamLeadToTeam(nodeToMove, nodeToMoveTo);
    } else if (nodeToMove.key === Groups.AGENT) {
      /*Moving an agent to a team leader*/
      this.deleteAgentByID(nodeToMove.data.id);
      this.addAgentToTeamLead(nodeToMove, nodeToMoveTo);
    }
  }

  getTheHighestID() {
    let id: number = 1;
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.forEach(manager => {
        id = (id >= manager.data.id) ? id : manager.data.id;
        manager.children?.forEach(teams => {
          id = (id >= teams.data.id) ? id : teams.data.id;
          teams.children?.forEach(leader => {
            id = (id >= leader.data.id) ? id : leader.data.id;
            leader.children?.forEach(agent => {
              id = (id >= agent.data.id) ? id : agent.data.id;
            })
          })
        })
      })
    }
    return id;
  }

  getUserById(id: number): TreeNode {
    let user: TreeNode = {};
    if (typeof (this.data2[0].children) !== "undefined") {
      this.data2[0].children.forEach(manager => {
        if (id === manager.data.id)  user = manager;
        manager.children?.forEach(teams => {
          if (id >= teams.data.id) user = teams;
          teams.children?.forEach(leader => {
            if (id >= leader.data.id) user = leader;
            leader.children?.forEach(agent => {
              if (id >= agent.data.id) user = agent;
            })
          })
        })
      })
    }
    return user;
  }

  deleteUserById(id: number) {
    if (typeof (this.data2[0].children) !== "undefined") {
       _.remove(this.data2[0].children, (item) => item.data.id === id);
    }
  }

  deleteManagerById(id: number): boolean{
    let deleted: boolean = false;
    if (typeof (this.data2[0].children) !== "undefined") {
      deleted = (_.remove(this.data2[0].children,
          (manager) => manager.data.id === id).length !== 0);
    }
    return deleted;
  }

  deleteTeamByID(id: number): boolean {
    let deleted: boolean = false;
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        // @ts-ignore
        deleted = (_.remove(manager.children,
              (team) => team.data.id === id).length !== 0);
      })
    }
    return deleted;
  }

  deleteTeamLeaderByID(id: number): boolean {
    let deleted: boolean = false;
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        _.forEach(manager.children, (team) => {
          // @ts-ignore
          deleted = (_.remove(team.children,
              (leader) => leader.data.id === id).length !== 0);
        })
      })
    }
    return deleted;
  }

  deleteAgentByID(id: number): boolean {
    let deleted: boolean = false;
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        _.forEach(manager.children, (team) => {
          _.forEach(team.children, (leader) => {
            // @ts-ignore
            deleted = (_.remove(leader.children,
                (agent) => agent.data.id === id).length !== 0);
          })
        })
      })
    }
    return deleted;
  }

  private addTeamToManager(teamToAdd: TreeNode, managerToAddTo: TreeNode) {
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        if (manager.data.id === managerToAddTo.data.id) {
          if (typeof (manager.children) === "undefined") {
            manager.children = [teamToAdd];
          } else {
            manager.children?.push(teamToAdd);
          }
        }
      })
    }
  }

  private addTeamLeadToTeam(teamLeadToAdd: TreeNode, teamToAddTo: TreeNode) {
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        _.forEach(manager.children, (team) => {
          if (team.data.id === teamToAddTo.data.id) {
            if (typeof (team.children) === "undefined") {
              team.children = [teamLeadToAdd];
            } else {
              team.children?.push(teamLeadToAdd);
            }
          }
        })
      })
    }
  }

  private addAgentToTeamLead(nodeToAdd: TreeNode, teamLeadToMoveTo: TreeNode) {
    if (typeof (this.data2[0].children) !== "undefined") {
      _.forEach(this.data2[0].children, (manager) => {
        _.forEach(manager.children, (team) => {
          _.forEach(team.children, (teamLead) => {
            if (teamLead.data.id === teamLeadToMoveTo.data.id) {
              if (typeof (teamLead.children) === "undefined") {
                teamLead.children = [nodeToAdd];
              } else {
                teamLead.children?.push(nodeToAdd);
              }
            }
          })
        })
      })
    }
  }
}
