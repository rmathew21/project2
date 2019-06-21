const connection = require("../config.js");
console.log(connection);

function printQuestionMarks(num) {
    const arr = [];
    for (i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};
function objToSql(ob) {
    const arr = [];
    for (const key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = '"' + value + '"';
            }
            arr.push(key + " = " + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
const orm = {
    all: function ()



}