import { OnInit } from "@angular/core";

export class CounterService{
    count: number = 0;

    addCount(){
        this.count++;
        console.log(this.count);
    }
}