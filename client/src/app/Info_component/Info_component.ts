import { TextFieldComponent } from "../text-field/text-field.component";
import { ButtonComponent } from '../button/button.component';
import { TopBarComponent } from '../top-bar/top-bar.component';


export class InfoComponent {
    constructor(
    ){}
    name_component: any;

    getComponents(name_component){
        switch (name_component) {
            case "Text_field":
                return TextFieldComponent;
            case "Button":
                return ButtonComponent;
            case "Top_bar":
                return TopBarComponent;
            default:
                break;
        }
    }
}