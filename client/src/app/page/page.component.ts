import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TextFieldDirective } from '../text-field/text-field.directive';

import { InfoComponent } from "src/app/Info_component/Info_component";
import { TextFieldService } from '../text-field.service';
import { ApiService } from '../api.service';
import { dataOfTextField } from '../text-field/interface/interface.dto';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @ViewChild(TextFieldDirective,{static: true}) apptextField: TextFieldDirective;

  constructor( 
    private componentFactoryResolver: ComponentFactoryResolver,
    private textFieldService: TextFieldService,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.renderPage();
    this.textFieldService.share_data.subscribe(data=>{
      let info:dataOfTextField = data;
      console.log(info);
    })
  }

  loadComponent(name_component,data){
    const components = new InfoComponent();
    const component = components.getComponents(name_component)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)

    const viewContainerRef = this.apptextField.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory); // replace in there
    componentRef.instance.name = data;

  }

  async renderPage(){
    let data = await this.apiService.getAllText();
    console.log(data)
    for(let i = 0; i < data.length ; i++){
      
      this.loadComponent(data[i].page_child,data[i].page_name);
    }
  }
 
}
