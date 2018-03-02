$(function(){
  $("#group-type").hide();
  $("#label-group").hide();
  $("#random-group").hide();

  $("#tab_hide").hide();
  $("#tab_content").css({
    marginTop:0
  })

  $("#tab_hide_random").hide();

  $("input:radio[name='group']").change(function (e){
      var val = $("input:radio[name='group']:checked").val();

      switch (val) {
        case "0":
          $("#group-type").hide();
          $("#tab_hide").hide();
          $("#tab_content").css({
            marginTop:0
          })

          $(".tab_hide_random").hide();
        break;

        case "1":
          $("#group-type").show();
          $("#label-group").show();
          $("#random-group").hide();

          $("#tab_hide").show();
          $("#tab_content").css({
            marginTop:'-30px'
          })

          $(".tab_hide_random").hide();
        break;

        case "2":
          $("#group-type").show();
          $("#label-group").hide();
          $("#random-group").show();

          $("#tab_hide").hide();

          $("#random_group_select").val("1")
          $("#tab_hide_random").show();
          $(".tab_hide_random").eq(0).show();
          $(".tab_hide_random").slice(1,5).hide();
          $(".group_box").css({
            marginTop:'-30px'
          })
        break;

        default:

        break;
      }
  });


  $("#frequency_weektime").hide();

  $("#send_date").hide();

  $("input:radio[name='group_frequency']").change(function(e){
      var val = $("input:radio[name='group_frequency']:checked").val();

      switch (val) {
        case "0":
          $("#frequency_weektime").hide();
          $("#send_date").hide();
          break;

        case "1":
          $("#frequency_weektime").hide();
          $("#send_date").show();
          break;

        case "2":
          $("#frequency_weektime").show();
          $("#frequency_week").hide();
          $("#frequency_time").show();
          $("#send_date").hide();
          break;

        case "3":
          $("#frequency_weektime").show();
          $("#frequency_week").show();
          $("#frequency_time").show();
          $("#send_date").hide();
          break;

        default:

      }
  })


  $('#random_group_select').change(function(){

    var val = $(this).children('option:selected').val();
    $(".tab_hide_random").show();
    $(".tab_hide_random").slice(val,5).hide();
  })


  $(".form_datetime").datetimepicker({
    minView: "month", //选择日期后，不会再跳转去选择时分秒
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    todayBtn:  1,
    autoclose: 1,
  });


  $("#ygw_hide").hide();
  $("#fq_hide").hide();


  $("#btn_active_ok").click(function(){
    $("#activity_modal").modal('hide');
    $("#ygw_hide").show();
  })

  $("#btn_active2_ok").click(function(){
    $("#activity_modal2").modal('hide');
    $("#fq_hide").show();
  })

  $("#btn_preview").click(function(){
    var content = $("#txt_content").text();
    $("#txt_content_right").text(content)
  })
})
