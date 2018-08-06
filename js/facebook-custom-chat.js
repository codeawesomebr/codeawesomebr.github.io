$(function(){
});
  
$("#facebook-chat").click(facebookDialog);

function removeAll(){
  var facebookModal = $(".fb-customerchat > span > iframe");
  facebookModal.removeClass("fb_customer_chat_bounce_in_v2");
  facebookModal.addClass("fb_customer_chat_bounce_out_v2");
}

function facebookDialog(){
  var facebookModal = $(".fb-customerchat > span > iframe");
  facebookModal.toggleClass("fb_customer_chat_bounce_in_v2");
}