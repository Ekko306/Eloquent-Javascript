// Exercises

// // 1⃣️
// // Build a table
// // An HTML table is built with the following tag structure:
// //
// // <table>
// // <tr>
// // <th>name</th>
// // <th>height</th>
// // <th>place</th>
// // </tr>
// // <tr>
// // <td>Kilimanjaro</td>
// // <td>5895</td>
// // <td>Tanzania</td>
// // </tr>
// // </table>
// // For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>).
// //
// // Given a data set of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names.
// //
// // Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.
// //
// // Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document.
// //
// // Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".
//
// <!doctype html>
//
// <meta charset="utf8">
//
//     <h1>Mountains</h1>
//
//     <div id="mountains"></div>
//
//     <script>
// const MOUNTAINS = [
//     {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
//     {name: "Everest", height: 8848, place: "Nepal"},
//     {name: "Mount Fuji", height: 3776, place: "Japan"},
//     {name: "Vaalserberg", height: 323, place: "Netherlands"},
//     {name: "Denali", height: 6168, place: "United States"},
//     {name: "Popocatepetl", height: 5465, place: "Mexico"},
//     {name: "Mont Blanc", height: 4808, place: "Italy/France"}
// ];
//
// function buildTable(data) {
//     let table = document.createElement("table");
//
//     let fields = Object.keys(data[0]);
//     let headRow = document.createElement("tr");
//     fields.forEach(function(field) {
//         let headCell = document.createElement("th");
//         headCell.appendChild(document.createTextNode(field));
//         headRow.appendChild(headCell);
//     });
//     table.appendChild(headRow);
//
//     data.forEach(function(object) {
//         let row = document.createElement("tr");
//         fields.forEach(function(field) {
//             let cell = document.createElement("td");
//             cell.appendChild(document.createTextNode(object[field]));
//             if (typeof object[field] == "number") {
//                 cell.style.textAlign = "right";
//             }
//             row.appendChild(cell);
//         });
//         table.appendChild(row);
//     });
//
//     return table;
// }
//
// document.querySelector("#mountains")
//     .appendChild(buildTable(MOUNTAINS));
// </script>


// // 2⃣️
// // Elements by tag name
// // The document.getElementsByTagName method returns all child elements with a given
// // tag name. Implement your own version of this as a function that takes a node and a
// // string (the tag name) as arguments and returns an array containing all descendant
// // element nodes with the given tag name.
// //
// // To find the tag name of an element, use its nodeName property. But note that this will
// // return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods
// // to compensate for this.
//
// <!doctype html>
//
// <h1>Heading with a <span>span</span> element.</h1>
// <p>A paragraph with <span>one</span>, <span>two</span>
// spans.</p>
//
// <script>
// function byTagName(node, tagName) {
//     let found = [];
//     tagName = tagName.toUpperCase();
//
//     function explore(node) {
//         for (let i = 0; i < node.childNodes.length; i++) {
//             let child = node.childNodes[i];
//             if (child.nodeType == document.ELEMENT_NODE) {
//                 if (child.nodeName == tagName) found.push(child);
//                 explore(child);
//             }
//         }
//     }
//
//     explore(node);
//     return found;
// }
//
// console.log(byTagName(document.body, "h1").length);
// // → 1
// console.log(byTagName(document.body, "span").length);
// // → 3
// let para = document.querySelector("p");
// console.log(byTagName(para, "span").length);
// // → 2
// </script>


// // 3⃣️
// // The cat’s hat
// // Extend the cat animation defined earlier so that both the cat and his hat
// // (<img src="img/hat.png">) orbit at opposite sides of the ellipse.
// //
// // Or make the hat circle around the cat. Or alter the animation in some other
// // interesting way.
// //
// // To make positioning multiple objects easier, it is probably a good idea to switch
// // to absolute positioning. This means that top and left are counted relative to the
// // top left of the document. To avoid using negative coordinates, which would cause
// // the image to move outside of the visible page, you can add a fixed number of pixels
// // to the position values.
//
// <!doctype html>
//
// <meta charset="utf8">
//
//     <base href="https://eloquentjavascript.net/">
//
//     <style>body { min-height: 200px }</style>
// <img src="img/cat.png" id="cat" style="position: absolute">
//     <img src="img/hat.png" id="hat" style="position: absolute">
//
//     <script>
//     let cat = document.querySelector("#cat");
// let hat = document.querySelector("#hat");
//
// let angle = 0;
// let lastTime = null;
// function animate(time) {
//     if (lastTime != null) angle += (time - lastTime) * 0.001;
//     lastTime = time;
//     cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
//     cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
//     hat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
//     hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
//
//     requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);
// </script>
