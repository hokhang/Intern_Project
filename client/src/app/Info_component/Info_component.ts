import { TextFieldComponent } from "../component/text-field/text-field.component";
import { ButtonComponent } from 'src/app/component/button/button.component';
import { TopBarComponent } from '../component/top-bar/top-bar.component';
import { Type } from '@angular/core';


export class InfoComponent {
    constructor(
    ){}

    getComponents(name_component:string):Type<any>{
        switch (name_component) {
            case "input":
                return TextFieldComponent;
            case "button":
                return ButtonComponent;
            case "top_bar":
                return TopBarComponent;
            default:
                break;
        }
    }
}