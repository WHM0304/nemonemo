document?.addEventListener("DOMContentLoaded", () => {
  const nav_hover = document.querySelector(".HM-main_hover_box");
  const nav_box = document.querySelector(".HM-main_nav");
  const select_box = document.querySelector(".HM-home_picture");
  // console?.log(CLEAR);
  // console.log(CLEAR);
  // console.log(CLEAR.includes("c_id=1"));
  // let result = CLEAR.filter((currentValue) => {
  //   return currentValue === "c_id";
  // });
  // console.log(result);

  nav_hover?.addEventListener("click", (e) => {
    const qq = e.target;
    qq.style.display = "none";
    nav_box.style.display = "flex";
  });

  nav_box?.addEventListener("click", (e) => {
    const target = e.target.innerHTML;
    if (target === "홈") {
      document.location.href = `${rootPath}`;
    }
    if (target === "게임") {
      document.location.href = `${rootPath}/game`;
    }
  });
  select_box?.addEventListener("click", (e) => {
    const target = e.target;
    // alert(target.id);
    document.location.href = `${rootPath}/game/${target.id}`;
  });
});
