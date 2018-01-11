$(function () {
    
    $('#btn').click(function(){
        var val1,
            val2,
            options;
        
        val1 = parseFloat($('input[name=fir]').val());
        val2 = parseFloat($('input[name=sec]').val());
        
        options = {
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [val1,val2]
            }]
        };
        
        $('#container').highcharts(options);
    });
    
    
});
    
