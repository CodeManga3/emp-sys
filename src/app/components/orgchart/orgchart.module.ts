import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrgchartComponent} from "./orgchart.component";
import {OrganizationChartModule} from "primeng/organizationchart";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {PanelModule} from "primeng/panel";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    OrgchartComponent
  ],
  exports: [
    OrgchartComponent
  ],
  imports: [
    CommonModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    ToastModule,
    PanelModule,
    FormsModule
  ],
  providers: [
    MessageService
  ]
})
export class OrgchartModule { }
