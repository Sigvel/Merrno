import * as c from "./form/index";
if (Location.pathname === "/contact") {
  c.form.addEventListener("submit", (e) => {
    c.contact(e);
  });
}