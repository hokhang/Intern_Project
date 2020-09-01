import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TextFieldDirective } from '../text-field/text-field.directive';

import { InfoComponent } from "src/app/Info_component/Info_component";
import { TextFieldService } from '../text-field.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @ViewChild(TextFieldDirective,{static: true}) appTextField: TextFieldDirective;

  constructor( 
    private componentFactoryResolver: ComponentFactoryResolver,
    private textFieldService: TextFieldService,
  ) {}

  ngOnInit(): void {
    this.renderPage();
  }

  loadComponent(name_component,data){
    const components = new InfoComponent();
    const component = components.getComponents(name_component)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component)

    const viewContainerRef = this.appTextField.viewContainerRef;
    
    const componentRef = viewContainerRef.createComponent(componentFactory); // replace in there
    componentRef.instance.name = data;

  }

  renderPage(){
    let variable = [{type: "top_bar", label: "Manage student"},{type:"text_field", label: "First name: "}, {type: "text_field", label: "Last name"}, {type: "button", label:"Add"}];
    for(let i = 0; i < variable.length ; i++){
      this.loadComponent(variable[i].type,variable[i].label)
    }
  }

}
