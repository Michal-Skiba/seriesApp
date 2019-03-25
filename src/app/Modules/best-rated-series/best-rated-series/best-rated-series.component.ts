import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { TabEvent } from '@models/tabEvent.model.ts';
import { GetTabService } from '@services/get-tab.service';
import { AddTabComponent } from 'src/app/classes/add-tab/add-tab';
import { AddTabDirective } from 'src/app/directives/add-tab.directive';
import { TabComponent } from '@models/tabComponent.model';


@Component({
  selector: 'app-best-rated-series',
  templateUrl: './best-rated-series.component.html',
  styleUrls: ['./best-rated-series.component.scss']
})
export class BestRatedSeriesComponent implements OnInit {

  tab: AddTabComponent[];
  actualTab: number = 1;
  @ViewChild(AddTabDirective) adHost: AddTabDirective;
  constructor(private getTabService: GetTabService, private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit() { 
    this.tab = this.getTabService.getBestRatedComponent()
    this.loadComponent();
  }

  loadComponent() {
    let addComponent = this.tab[this.actualTab -1]

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(addComponent.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TabComponent>componentRef.instance).tab = addComponent.tab;
  }

  
  tabClick($tab: TabEvent) {
    this.actualTab = $tab.index + 1;
    console.log(this.actualTab,' indeksik')
    this.loadComponent()
  }
  
}
