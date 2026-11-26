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

// Course enquiry forms (斲琴課程 / 古琴彈奏課程) -> mailto, same pattern as the contact form
document.querySelectorAll("form.qform").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(f);
    var to = "qin@ccs.org.hk";
    var subj = encodeURIComponent("查詢 Enquiry — " + (f.getAttribute("data-course") || ""));
    var body = encodeURIComponent(
      "姓名 Name: " + (d.get("name") || "") + "\n" +
      "電郵 Email: " + (d.get("email") || "") + "\n" +
      "電話 Phone: " + (d.get("phone") || "") + "\n" +
      "古琴彈奏資歷、師承 Qin Playing Experience / School: " + (d.get("exp") || "") + "\n\n" +
      "信息 Message:\n" + (d.get("msg") || "")
    );
    window.location.href = "mailto:" + to + "?subject=" + subj + "&body=" + body;
    var s = f.querySelector(".csent");
    if (s) s.hidden = false;
  });
});
