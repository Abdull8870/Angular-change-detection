import { Inject, Injectable, signal } from "@angular/core";

@Injectable({
        providedIn:'root'
    })
export class MessageServcice{
    
    private messages=signal<String[]>([]);

    allMessages=this.messages.asReadonly();

    addMessage(message:String){
        this.messages.update((msg)=>[...msg,message]);
    }
}