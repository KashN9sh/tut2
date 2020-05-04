
var picker = new Lightpick({
    dropdowns:false,
    footer: true,
    field: document.getElementById('date-start'),
    secondField: document.getElementById('date-end'),
    singleDate: false,
    autoclose:false,
    onSelect: function(start, end){
        var str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
        document.getElementById('result-3').innerHTML = str;
    }
});
