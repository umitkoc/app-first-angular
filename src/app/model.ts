export class Model{
    user;
    items;
    constructor(){
        this.user="Ümit";
        this.items=[
            new TodoItem("spor",false),
            new TodoItem("kitap",true),
            new TodoItem("müzik",true),
            new TodoItem("sosyal",false)
        ];
    }
   
}
export class TodoItem{
    desc;
    action;
    constructor(desc,action){
        this.desc=desc;
        this.action=action;
    }
}