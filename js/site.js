class  Popup{
    constructor(type){
        if(type) {
        let item = $('.b-popup[data-type="'+type+'"]');
         if(item!=undefined) {
            this.item = item;
            this.action('open');
        
            $(item).on('click',(event)=>{
                console.log(event.target==event.currentTarget)
                if(event.target == event.currentTarget){
                    this.action('close')
                }
            })
        }
        }else{
            return false;
            }

            
    }
    
    action(type){
         type == 'open'? this.open() : this.close()
    }
    open(){

        
        $(this.item).addClass('b-popup--active');
    }
    close(){
    
        $(this.item).removeClass('b-popup--active');
    }
}
class Button{
    constructor(item){
        this.item = item;
       $(item).on('click',(item)=>{
            this.onClick();
       }) 
    }
    onClick(){
        let type= $(this.item).data('popup')
        new Popup(type);
    }
}
class Block {
    constructor(item){
        this.item = item;
        this.startWidth = $(item).width()
        this.startHeight = $(item).height()
        $('.b-popup-header__button').on('click',(event,item)=>{
            this.click(event.target);
        })
    }
    click(item){
        
        let type = $(item).data('type');
        console.log(type)
        switch(type){
            case 1 :
                this.x2();
                break;
            case 2:
                this.divide();
                break;
            case 3:
                this.toStart();
                break;
        }
    }
    x2(){
        $(this.item).animate({'width':this.startWidth*2,'height':this.startHeight*2},1500)
    }
    divide(){
        $(this.item).animate({'width':this.startWidth/2,'height':this.startHeight/2},1500)
    }
    toStart(){
        $(this.item).animate({'width':this.startWidth,'height':this.startHeight},1500)
    }
}

$(document).ready(function(){
    new Block($('#block'))
    $('.b-btn').each(function(){
        new Button(this);
    })
})