
for(let i=1;i<=7;i++){
    $(".link-"+i).mouseenter(function(){
        $(".link-"+i+" i").css("margin-left","2%")
    });
    $(".link-"+i).mouseleave(function(){
        $(".link-"+i+" i").css("margin-left","1%")
    });
}

