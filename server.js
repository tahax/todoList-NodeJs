const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/static.js");
const adminRoute = require("./routes/admin.js");
const indexRoute = require("./routes/index.js");

const app = express();

/*midlleware*/
app.use(bodyParser.urlencoded({ extended: false }));
/*end of midlleware*/

/*EJS*/
app.set("view engine", "ejs");
app.set("views", "view");
/*end of EJS*/

/* public */
setStatics(app);
/* END of public */

/* Routs*/
app.use("/", indexRoute);

app.use("/admin", adminRoute);
/* End of Routs*/

app.listen(3000, () => {
  console.log("server is running.");
});
