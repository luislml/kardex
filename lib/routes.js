FlowRouter.route('/',{
    subscriptions: function(params, queryParams){
  
        BlazeLayout.render("main");     
       
    }
});
FlowRouter.route('/registrar',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"registrar"});
        $('.modal').modal();  
    }

});
FlowRouter.route('/registrar/kardex',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"registrar",reg:"kardex"});
        $('.modal').modal();  
    }

});
FlowRouter.route('/registrar/perfil',{
    action: function(params, queryParams){
        BlazeLayout.render("main", {content:"registrar",reg:"perfil"});
        $('.modal').modal();  
    }

});

