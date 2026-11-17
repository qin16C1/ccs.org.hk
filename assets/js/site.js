// Contact form -> mailto (no backend needed)
document.querySelectorAll("form#cform").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(f);
    var to = "qin@ccs.org.hk";
    var subj = encodeURIComponent("[網站來信] " + (d.get("name") || ""));
    var body = encodeURIComponent(
      "姓名 Name: " + (d.get("name") || "") + "\n" +
      "電郵 Email: " + (d.get("email") || "") + "\n" +
      "機構 Organisation: " + (d.get("org") || "") + "\n" +
      "電話 Phone: " + (d.get("phone") || "") + "\n\n" +
      "信息 Message:\n" + (d.get("msg") || "")
    );
    window.location.href = "mailto:" + to + "?subject=" + subj + "&body=" + body;
    var s = f.querySelector(".fsent");
    if (s) s.hidden = false;
  });
});
