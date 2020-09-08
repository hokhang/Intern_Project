import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TextFieldDirective } from '../text-field/text-field.directive';

import { InfoComponent } from "src/app/Info_component/Info_component";
import { TextFieldService } from '../text-field/text-field.service';
import { ApiService } from '../api.service';
import { dataOfTextField } from '../text-field/interface/interface.dto';
import { ButtonService } from '../button/button.service'

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
    private buttonService: ButtonService,
  ) {}

  ngOnInit(): void {
    this.renderPage();
    this.collectData();
    this.showData();
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
  
  data = [];
  i: any
  collectData(){
    this.textFieldService.share_data.subscribe(data =>{
      let response: dataOfTextField = data;
   
      // console.log(this.data.length)
      let index = this.data.findIndex(p => p.key === response.key)
      if( index !== -1){
        this.data[index].value = response.value;
      }
      else {
        this.data.push(response);
      }
      console.log(index)
      console.log(response.value)
      console.log(this.data);
    })
  }

  showData(){
   this.buttonService.current_data.subscribe(data =>{
     let response = data;
     console.log(response)
   })
  }
 
}
