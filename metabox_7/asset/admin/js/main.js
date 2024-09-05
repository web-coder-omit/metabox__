var frame;
;(($)=>{








  var img_url = $("#input_url").val();
  if(img_url) {
   $("#img_container").html(`<img src="${img_url}"/>`);
//  $("#img_container").html(`<img src="${img_url}"/>`);
//  $('#img_container').html(`<img src="${attachment.url}"/>`);
  }
    if (frame) {
      frame.open(); 
      return;
    };





  $("#btn_id_1").on("click",function(){



    frame = wp.media({
      title:"Upload Image",
      button:{
        text:"Select Image"
      },
      multiple:true
    });
    
    frame.on('select', function(){
      var attachment = frame.state().get('selection').first().toJSON();
      console.log(attachment);
      $("#input_id").val(attachment.id);
      $("#input_url").val(attachment.url);
      // $("#img_container").html(`<img src="${attachment.url}"/>`);
      $('#img_container').html('<img src="{attachment.url}"/>');
    });
    frame.open();
  });
})(jQuery);

// var frame;
// ;(($) => {
//   $("#btn_id_1").on("click", function(event) {
//     if (frame) {
//       frame.open();
//       return;
//     }
//     frame = wp.media({
//       title: "Upload Image",
//       button: {
//         text: "Select Image"
//       },
//       multiple: false // Allow only a single file selection
//     });
//         frame.on("select",function(){
//     var attachment = frame.state().get('selection').first().toJSON();
//     console.log(attachment);
//     });
//     frame.open();
//   });
// })(jQuery);
