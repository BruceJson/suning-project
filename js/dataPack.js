$(function(){
    $(".setCondition").click(function(){
      var txt = $(this).closest("tr").find(".name").text();
      alert(txt)
    })

    $('#myTabs a').click(function (e) {
      e.preventDefault()
      var activeTab = $(e.target).text();
      if (activeTab=='标签') {
          $("#my-collection").show();
      }else{
        $("#my-collection").hide();
      }
    })
})
