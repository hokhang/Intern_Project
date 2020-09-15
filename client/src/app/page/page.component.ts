import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TextFieldDirective } from 'src/app/component/text-field/text-field.directive';

import { InfoComponent } from "src/app/Info_component/Info_component";
import { TextFieldService } from '../component/text-field/text-field.service';
import { ApiService } from '../api.service';
import { dataOfTextField } from '../component/text-field/interface/interface.dto';
import { ButtonService } from 'src/app/component/button/button.service'
import { typeOfDataInput } from '../page/data-input.dto';
 
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
    this.handleEventButton();
  }

  loadComponent(name_component:string, data){

    let components = new InfoComponent();
    let comp = components.getComponents(name_component);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

    const viewContainerRef = this.apptextField.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory); // replace in there
    componentRef.instance.data = data;

  }

  async renderPage(){
    let data: Array<any> = await this.apiService.getAllText();
    // console.log(data)
    data.forEach(p=> {
        this.loadComponent(p.type,p);
    })
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

  // showData(){
  //  this.buttonService.current_data.subscribe(data =>{
  //    let response = data;
  //    console.log(response)
  //  })
  // }
  
  handleDataPost(data:Array<any>){
    var dataOutput = {};
    data.forEach(p=>{
      let dataTemp = {};
      dataTemp[p.key.trim()] = p.value;
      dataOutput = Object.assign(dataOutput,dataTemp);
    })
    return dataOutput;
  }

  handleEventButton(){
    this.buttonService.current_data.subscribe(event=>{
      switch(event){
        case "submit()": this.onClick();
      }
    })
    
  }
  async onClick(): Promise<any> {
    let datapost = this.handleDataPost(this.data);
    return this.apiService.postData(datapost);
  }
  
 
}
