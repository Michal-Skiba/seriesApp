import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
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
export class BestRatedSeriesComponent implements OnInit, AfterViewInit {

  tab: AddTabComponent[];
  actualTab = 1;
  @ViewChildren(AddTabDirective) adHost: QueryList<AddTabDirective>;
  constructor(private getTabService: GetTabService, private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit() {
    this.tab = this.getTabService.getBestRatedComponent();
  }
  ngAfterViewInit() {
    this.loadComponent();
  }
  private loadComponent() {
    setTimeout(() => {
      const viewChildren = this.adHost.toArray();
      const currentIndex = this.actualTab - 1;
      const addComponent = this.tab[currentIndex];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(addComponent.component);
      const viewContainerRef = viewChildren[currentIndex].viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<TabComponent> componentRef.instance).tab = addComponent.tab;
    }, 0);
  }
  public tabClick($tab: TabEvent) {
    this.actualTab = $tab.index + 1;
    this.loadComponent();
  }
}
