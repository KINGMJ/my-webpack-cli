$(function () {
  // tab 点击效果
  tabActiveInit();
});

function tabActiveInit() {
  $(".tab-container .tab-block div").click((event) => {
    $(event.currentTarget).siblings().removeClass("active");
    $(event.currentTarget).addClass("active");
  });
}
