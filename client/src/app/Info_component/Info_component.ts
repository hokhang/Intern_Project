import { TextFieldComponent } from "../text-field/text-field.component";
import { ButtonComponent } from '../button/button.component';
import { TopBarComponent } from '../top-bar/top-bar.component'

export class InfoComponent {
    constructor(){}
    getComponents(name_component){
        switch (name_component) {
            case "text_box":
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