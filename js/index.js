
    $('#dowebok').fullpage({
        navigation: true,
        sectionsColor: ['#00bfff', '#9acd32', '#ffa500', '#008000', '#87ceeb'],
        //滚出去的时候给diV添加类  
        afterLoad:function(a,index){
         $('.section').eq(index-1).addClass('org').siblings().removeClass('org');
        //  .siblings().removeClass('animation');
       }
    });
