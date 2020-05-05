var double = new Lightpick({
    dropdowns:false,
    footer: true,
    field: document.getElementById('date-start'),
    secondField: document.getElementById('date-end'),
    singleDate: false,
    autoclose:false,
    onSelect: function(start, end){
    }
});

var single = new Lightpick({
    field: document.getElementById('date'),
    singleDate: false,
    footer: true,
    dropdowns:false,
    format:'DD MMM',
    lang: 'ru',
    onOpen(){
      var pick=document.getElementsByClassName("lightpick");
      pick.classList.add('single');
    }
});
