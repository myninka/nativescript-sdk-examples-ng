// >> time-picker-configure-code
import { Component } from "@angular/core";
import {setInterval, setTimeout, clearInterval} from "timer"

@Component({
    selector: 'timer-module-component',
    styleUrls:['timer/setinterval-timer-module-example/setinterval-timer-module-example.css'],
    templateUrl: 'timer/setinterval-timer-module-example/setinterval-timer-module-example.html'
})

export class SetIntervalTimerModuleExampleComponent {
    public buttoncolor;
    public color = ["green", "yellow", "red"];
    public id;
    public status = true;
    public buttonText = "Disable color change";

    constructor(){
        this.buttoncolor = "blue";
        var that =this;
        this.id = setInterval(() => {
            var randNumber = Math.floor(Math.random() * (that.color.length));
            that.buttoncolor = that.color[randNumber];
        }, 1000)
    }
    
    public onButtonTap(){
        if(this.status){
            clearInterval(this.id);
            this.status=false;
            this.buttonText = "Enable color change";
        }
        else{
            var that =this;
            this.id = setInterval(() => {
                var randNumber = Math.floor(Math.random() * (that.color.length));
                that.buttoncolor = that.color[randNumber];
            }, 1000)
            this.status=true;
            this.buttonText = "Disable color change";
        }
    }

    
}
// << time-picker-configure-code
