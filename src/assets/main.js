const mainscript = ($) => {
  $(document).ready(function () {
    window.onload = ()=>{

        window.location.hash ==="#feature" && document.querySelector("#feature")?.scrollIntoView({
            behavior: "smooth",
          });
    }
    $(document).on("click", "a[href='/#feature']", (e) => {
      e.preventDefault();
      document.querySelector("#feature")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

export default mainscript;
