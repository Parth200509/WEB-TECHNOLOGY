/* =====================================
   WEB TECHNOLOGY - JAVASCRIPT
   Units, Topics, Notes and Navigation
===================================== */


/* =====================================
   1. SYLLABUS DATA
===================================== */

const syllabus = [

    // UNIT 1
    {
        title: "Unit 1: Web Fundamentals",

        topics: [

            {
                title: "1.1 Introduction to Web Technology",

                theory: `
                    <p>Web Technology includes the tools, languages,
                    protocols and techniques used to create websites
                    and web applications.</p>

                    <p>HTML provides structure, CSS controls the design,
                    and JavaScript adds interactivity. Back-end
                    technologies process requests and communicate
                    with databases.</p>

                    <ul>
                        <li><b>Web page:</b> A single document displayed in a browser.</li>
                        <li><b>Website:</b> A collection of related web pages.</li>
                        <li><b>Front-end:</b> The user-facing part of a website.</li>
                        <li><b>Back-end:</b> The server-side processing part.</li>
                    </ul>
                `,

                syntax: `HTML = Structure
CSS = Presentation
JavaScript = Interaction`,

                code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to Web Technology</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,

                output: `Welcome to Web Technology

This is my first webpage.`
            },

            {
                title: "1.2 Internet, WWW and Web Browser",

                theory: `
                    <p>The Internet is a global network of connected
                    computers. The World Wide Web (WWW) is a collection
                    of linked web resources accessed through the Internet.</p>

                    <ul>
                        <li><b>Internet:</b> Global network infrastructure.</li>
                        <li><b>WWW:</b> Collection of linked web resources.</li>
                        <li><b>Browser:</b> Software used to access websites.</li>
                        <li><b>URL:</b> Address of a web resource.</li>
                        <li><b>HTTP:</b> Protocol used to transfer web data.</li>
                        <li><b>HTTPS:</b> HTTP secured using TLS encryption.</li>
                    </ul>
                `,

                syntax: `Browser → HTTP Request → Web Server
Browser ← HTTP Response ← Web Server`,

                code: `<a href="https://example.com">
    Open Example Website
</a>`,

                output: `A clickable link labelled
"Open Example Website" appears.`
            },

            {
                title: "1.3 Client-Server Architecture",

                theory: `
                    <p>Client-server architecture divides work between
                    a client and a server. The client sends a request,
                    and the server processes it and returns a response.</p>

                    <ul>
                        <li><b>Client:</b> Sends requests.</li>
                        <li><b>Server:</b> Processes requests.</li>
                        <li><b>Database:</b> Stores application data.</li>
                        <li><b>Response:</b> Data returned to the client.</li>
                    </ul>
                `,

                syntax: `Client → Request → Server
Client ← Response ← Server`,

                code: `console.log("Client sends a request");
console.log("Server processes the request");
console.log("Client receives a response");`,

                output: `Client sends a request
Server processes the request
Client receives a response`
            },

            {
                title: "1.4 HTTP Request and Response",

                theory: `
                    <p>HTTP stands for Hypertext Transfer Protocol.
                    It defines how clients and servers exchange data.</p>

                    <p>Requests contain a method, URL and headers.
                    Responses contain a status code, headers and
                    possibly a response body.</p>

                    <ul>
                        <li><b>GET:</b> Retrieves information.</li>
                        <li><b>POST:</b> Sends data to the server.</li>
                        <li><b>PUT:</b> Replaces a resource.</li>
                        <li><b>DELETE:</b> Deletes a resource.</li>
                        <li><b>200:</b> Request successful.</li>
                        <li><b>404:</b> Resource not found.</li>
                        <li><b>500:</b> Server error.</li>
                    </ul>
                `,

                syntax: `GET /index.html HTTP/1.1
Host: example.com`,

                code: `fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data.title))
    .catch(error => console.log("Error:", error));`,

                output: `The title of the requested sample task
is displayed in the browser console.`
            }
        ]
    },


    // UNIT 2
    {
        title: "Unit 2: HTML and CSS",

        topics: [

            {
                title: "2.1 Introduction to HTML",

                theory: `
                    <p>HTML stands for HyperText Markup Language.
                    It defines the structure and content of web pages
                    using elements and tags.</p>

                    <ul>
                        <li><b>h1:</b> Main heading.</li>
                        <li><b>p:</b> Paragraph.</li>
                        <li><b>a:</b> Hyperlink.</li>
                        <li><b>img:</b> Image.</li>
                        <li><b>ul:</b> Unordered list.</li>
                        <li><b>table:</b> Table structure.</li>
                    </ul>
                `,

                syntax: `<tagname>Content</tagname>`,

                code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
</head>
<body>
    <h1>My Website</h1>
    <p>HTML creates webpage structure.</p>
    <a href="https://example.com">Visit Website</a>
</body>
</html>`,

                output: `My Website

HTML creates webpage structure.

Visit Website`
            },

            {
                title: "2.2 HTML Lists, Tables and Links",

                theory: `
                    <p>HTML lists organise information. Ordered lists
                    display numbered items, while unordered lists
                    display bullet points. Tables show data in rows
                    and columns.</p>

                    <ul>
                        <li><b>ol:</b> Ordered list.</li>
                        <li><b>ul:</b> Unordered list.</li>
                        <li><b>li:</b> List item.</li>
                        <li><b>tr:</b> Table row.</li>
                        <li><b>th:</b> Table heading.</li>
                        <li><b>td:</b> Table cell.</li>
                        <li><b>a:</b> Hyperlink.</li>
                    </ul>
                `,

                syntax: `<a href="URL">Link Text</a>

<ul>
    <li>Item</li>
</ul>

<table>
    <tr><th>Name</th></tr>
    <tr><td>Parth</td></tr>
</table>`,

                code: `<h2>Student Details</h2>

<table border="1">
    <tr>
        <th>Name</th>
        <th>Course</th>
    </tr>
    <tr>
        <td>Parth</td>
        <td>B.Tech</td>
    </tr>
</table>`,

                output: `Student Details

Name: Parth
Course: B.Tech`
            },

            {
                title: "2.3 HTML Forms",

                theory: `
                    <p>HTML forms collect user information.
                    They are used in login pages, registration forms,
                    search boxes and feedback forms.</p>

                    <ul>
                        <li><b>text:</b> Accepts text.</li>
                        <li><b>email:</b> Accepts an email address.</li>
                        <li><b>password:</b> Hides typed characters.</li>
                        <li><b>radio:</b> Selects one option from a group.</li>
                        <li><b>checkbox:</b> Selects one or more options.</li>
                        <li><b>submit:</b> Submits a form.</li>
                    </ul>
                `,

                syntax: `<form>
    <label for="name">Name:</label>
    <input type="text" id="name">
    <button type="submit">Submit</button>
</form>`,

                code: `<form>
    <label for="studentName">Student Name:</label>
    <input type="text" id="studentName"
           placeholder="Enter your name" required>

    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required>

    <br><br>

    <button type="submit">Register</button>
</form>`,

                output: `A registration form appears with
name and email fields and a Register button.`
            },

            {
                title: "2.4 Introduction to CSS",

                theory: `
                    <p>CSS stands for Cascading Style Sheets.
                    It controls the appearance of HTML elements,
                    including colours, fonts, spacing and layout.</p>

                    <ul>
                        <li><b>Inline CSS:</b> Written inside an HTML element.</li>
                        <li><b>Internal CSS:</b> Written inside a style element.</li>
                        <li><b>External CSS:</b> Stored in a separate CSS file.</li>
                    </ul>

                    <p>External CSS is useful when the same styles
                    need to be applied to multiple web pages.</p>
                `,

                syntax: `selector {
    property: value;
}`,

                code: `<style>
    h1 {
        color: darkgreen;
        text-align: center;
    }

    p {
        font-size: 18px;
    }
</style>

<h1>Welcome</h1>
<p>This paragraph uses CSS.</p>`,

                output: `The heading appears dark green and centred.
The paragraph appears in a larger font.`
            },

            {
                title: "2.5 CSS Box Model and Layout",

                theory: `
                    <p>The CSS box model describes the space occupied
                    by an element. It consists of content, padding,
                    border and margin.</p>

                    <ul>
                        <li><b>Content:</b> Actual text or image.</li>
                        <li><b>Padding:</b> Space inside the border.</li>
                        <li><b>Border:</b> Boundary around an element.</li>
                        <li><b>Margin:</b> Space outside the border.</li>
                    </ul>

                    <p>Flexbox arranges items along one dimension.
                    CSS Grid creates layouts with rows and columns.</p>
                `,

                syntax: `.box {
    margin: 10px;
    padding: 20px;
    border: 2px solid green;
}`,

                code: `<style>
    .box {
        padding: 20px;
        margin: 15px;
        border: 2px solid green;
        background: #e7eee7;
    }
</style>

<div class="box">CSS Box Model</div>`,

                output: `A box appears with a green border,
internal padding and external margin.`
            }
        ]
    },


    // UNIT 3
    {
        title: "Unit 3: JavaScript Fundamentals",

        topics: [

            {
                title: "3.1 Introduction to JavaScript",

                theory: `
                    <p>JavaScript is a programming language used
                    to make web pages interactive. It can respond
                    to user actions, update content and validate forms.</p>

                    <ul>
                        <li>Changes webpage content dynamically.</li>
                        <li>Responds to clicks and other events.</li>
                        <li>Validates user input.</li>
                        <li>Communicates with web APIs.</li>
                    </ul>
                `,

                syntax: `<script>
    // JavaScript code
</script>`,

                code: `let name = "Parth";

console.log("Hello " + name);`,

                output: `Hello Parth`
            },

            {
                title: "3.2 Variables and Data Types",

                theory: `
                    <p>Variables store values used by a program.
                    JavaScript provides let and const to declare variables.</p>

                    <ul>
                        <li><b>String:</b> Text such as "Hello".</li>
                        <li><b>Number:</b> Numeric values.</li>
                        <li><b>Boolean:</b> true or false.</li>
                        <li><b>Undefined:</b> A variable without an assigned value.</li>
                        <li><b>Object:</b> A collection of properties.</li>
                        <li><b>Array:</b> An ordered collection of values.</li>
                    </ul>
                `,

                syntax: `let variableName = value;
const constantName = value;`,

                code: `let name = "Parth";
let age = 20;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);`,

                output: `Parth
20
true`
            },

            {
                title: "3.3 Operators and Conditional Statements",

                theory: `
                    <p>Operators perform operations on values.
                    Arithmetic operators include +, -, *, / and %.
                    Comparison operators compare values, while logical
                    operators combine conditions.</p>

                    <p>Conditional statements allow a program to
                    choose actions based on whether a condition is true
                    or false. Common statements are if, else if and else.</p>
                `,

                syntax: `if (condition) {
    // statements
} else {
    // alternative statements
}`,

                code: `const marks = 76;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}`,

                output: `Pass`
            },

            {
                title: "3.4 Loops and Functions",

                theory: `
                    <p>Loops repeat a block of code. Common loops
                    include for, while and do...while.</p>

                    <p>A function is a reusable block of code that
                    performs a task. It can accept parameters and
                    return a result.</p>
                `,

                syntax: `function functionName(parameter) {
    return parameter;
}`,

                code: `function add(a, b) {
    return a + b;
}

console.log(add(5, 3));

for (let i = 1; i <= 3; i++) {
    console.log(i);
}`,

                output: `8
1
2
3`
            },

            {
                title: "3.5 JavaScript Events",

                theory: `
                    <p>An event is an action that occurs in the
                    browser, such as a mouse click, key press or
                    form submission.</p>

                    <p>The addEventListener method allows JavaScript
                    to execute code when an event occurs.</p>
                `,

                syntax: `element.addEventListener("click", function() {
    // action
});`,

                code: `<button id="myButton">Click Me</button>
<p id="message"></p>

<script>
document.getElementById("myButton")
    .addEventListener("click", function() {
        document.getElementById("message")
            .textContent = "Button clicked!";
    });
</script>`,

                output: `After clicking the button,
the message "Button clicked!" appears.`
            }
        ]
    },


    // UNIT 4
    {
        title: "Unit 4: DOM and Forms",

        topics: [

            {
                title: "4.1 Document Object Model (DOM)",

                theory: `
                    <p>The Document Object Model represents an HTML
                    document as a tree of objects. JavaScript can
                    access these objects to read or change webpage
                    content, attributes and styles.</p>

                    <p>The DOM allows webpages to update dynamically
                    without reloading the entire document.</p>
                `,

                syntax: `document.getElementById("id");
document.querySelector("selector");`,

                code: `<h2 id="heading">Original Heading</h2>

<script>
document.getElementById("heading")
    .textContent = "Updated Heading";
</script>`,

                output: `Updated Heading`
            },

            {
                title: "4.2 DOM Manipulation",

                theory: `
                    <p>DOM manipulation means selecting HTML elements
                    and changing their content, styles, attributes
                    or structure using JavaScript.</p>

                    <ul>
                        <li><b>textContent:</b> Changes text.</li>
                        <li><b>innerHTML:</b> Reads or changes HTML content.</li>
                        <li><b>style:</b> Changes inline styles.</li>
                        <li><b>classList:</b> Adds or removes CSS classes.</li>
                        <li><b>createElement():</b> Creates a new element.</li>
                    </ul>
                `,

                syntax: `document.getElementById("id").textContent =
    "New text";`,

                code: `<h2 id="title">Hello</h2>
<button onclick="changeText()">Change</button>

<script>
function changeText() {
    document.getElementById("title").textContent =
        "Welcome to JavaScript";
}
</script>`,

                output: `Clicking Change updates the heading to
"Welcome to JavaScript".`
            },

            {
                title: "4.3 Form Validation",

                theory: `
                    <p>Form validation checks whether user input
                    meets specified requirements before processing.</p>

                    <p>HTML supports built-in validation through
                    attributes such as required, minlength and type.
                    JavaScript can implement additional validation.
                    Server-side validation is also important because
                    client-side checks can be bypassed.</p>
                `,

                syntax: `if (input.value.trim() === "") {
    // Show an error
}`,

                code: `function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }

    return "Name is valid";
}

console.log(validateName("Parth"));`,

                output: `Name is valid`
            },

            {
                title: "4.4 Arrays and Objects",

                theory: `
                    <p>An array stores an ordered collection of values.
                    Array indexes start at zero. Common array methods
                    include push(), pop() and includes().</p>

                    <p>An object stores related information as
                    key-value pairs. Objects can represent students,
                    products and employees.</p>
                `,

                syntax: `const arrayName = [value1, value2];

const objectName = {
    key: value
};`,

                code: `const subjects = ["HTML", "CSS", "JavaScript"];

console.log(subjects[0]);

const student = {
    name: "Parth",
    course: "B.Tech"
};

console.log(student.name);`,

                output: `HTML
Parth`
            }
        ]
    },


    // UNIT 5
    {
        title: "Unit 5: Hosting, Networking and Security",

        topics: [

            {
                title: "5.1 Domain Names, DNS and Web Hosting",

                theory: `
                    <p>A domain name is a readable address used to
                    access a website. DNS stands for Domain Name
                    System and helps translate domain names into
                    IP addresses.</p>

                    <p>Web hosting provides server resources where
                    website files or applications are stored and
                    made available over the Internet.</p>

                    <ul>
                        <li><b>Domain:</b> The website's readable address.</li>
                        <li><b>DNS:</b> Helps locate the server for a domain.</li>
                        <li><b>Hosting:</b> Stores and serves website resources.</li>
                        <li><b>IP address:</b> Identifies a device on a network.</li>
                    </ul>
                `,

                syntax: `Domain Name → DNS Lookup → Server IP
→ HTTP/HTTPS Request → Website Response`,

                code: `<!DOCTYPE html>
<html lang="en">
<body>
    <h1>My Hosted Website</h1>
    <p>This page is ready to publish.</p>
</body>
</html>`,

                output: `A basic webpage that can be uploaded
to a web hosting service.`
            },

            {
                title: "5.2 Web Security and HTTPS",

                theory: `
                    <p>Web security protects websites, systems and
                    user information from unauthorised access,
                    attacks and misuse.</p>

                    <p>HTTPS uses TLS to encrypt data travelling
                    between a browser and server.</p>

                    <ul>
                        <li>Use HTTPS for secure communication.</li>
                        <li>Never store passwords as plain text.</li>
                        <li>Validate user input on the server.</li>
                        <li>Use strong authentication and access control.</li>
                        <li>Keep software and dependencies updated.</li>
                    </ul>
                `,

                syntax: `if (inputIsValid) {
    processInput();
} else {
    showValidationError();
}`,

                code: `function validateName(name) {
    if (name.trim() === "") {
        return "Name is required";
    }

    return "Name is valid";
}

console.log(validateName("Parth"));`,

                output: `Name is valid`
            },

            {
                title: "5.3 APIs and JSON",

                theory: `
                    <p>API stands for Application Programming Interface.
                    It defines how software components communicate.
                    Web APIs allow applications to request and exchange data.</p>

                    <p>JSON stands for JavaScript Object Notation.
                    It is a lightweight text format used to exchange
                    structured data between systems.</p>

                    <ul>
                        <li>Objects contain key-value pairs.</li>
                        <li>Arrays contain ordered values.</li>
                        <li>JSON supports strings, numbers, booleans and null.</li>
                        <li>fetch() can request data from a web API.</li>
                    </ul>
                `,

                syntax: `fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data));`,

                code: `const student = {
    name: "Parth",
    course: "B.Tech",
    year: 3
};

console.log(JSON.stringify(student));`,

                output: `{"name":"Parth","course":"B.Tech","year":3}`
            },

            {
                title: "5.4 Responsive Design and Accessibility",

                theory: `
                    <p>Responsive design makes websites adapt to
                    different screen sizes, including phones,
                    tablets and desktop computers.</p>

                    <p>CSS media queries, flexible layouts, Flexbox
                    and Grid help create responsive pages.
                    Accessibility helps people with different
                    abilities use websites effectively.</p>

                    <ul>
                        <li>Use semantic HTML elements.</li>
                        <li>Provide labels for form controls.</li>
                        <li>Use descriptive text for links and images.</li>
                        <li>Ensure controls work with a keyboard.</li>
                        <li>Test layouts on different screen sizes.</li>
                    </ul>
                `,

                syntax: `@media (max-width: 600px) {
    .container {
        padding: 12px;
    }
}`,

                code: `<meta name="viewport"
      content="width=device-width, initial-scale=1">

<style>
.container {
    max-width: 900px;
    margin: auto;
    padding: 24px;
}

@media (max-width: 600px) {
    .container {
        padding: 12px;
    }
}
</style>

<div class="container">
    Responsive Website
</div>`,

                output: `The container adapts to smaller screens
and uses less padding on mobile devices.`
            }
        ]
    }

];


/* =====================================
   2. CURRENT PAGE VARIABLES
===================================== */

let currentUnit = 0;
let currentTopic = 0;


/* =====================================
   3. HTML ELEMENT REFERENCES
===================================== */

const coverPage = document.getElementById("coverPage");
const appPage = document.getElementById("appPage");

const exploreBtn = document.getElementById("exploreBtn");
const homeBtn = document.getElementById("homeBtn");

const unitList = document.getElementById("unitList");
const topicList = document.getElementById("topicList");

const pageHeading = document.getElementById("pageHeading");
const pageIntro = document.getElementById("pageIntro");

const noteContent = document.getElementById("noteContent");

const indexPage = document.getElementById("indexPage");
const backToCoverBtn = document.getElementById("backToCoverBtn");


/* =====================================
   4. ESCAPE CODE TEXT
===================================== */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function (char) {

        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return characters[char];

    });

}


/* =====================================
   5. OPEN SYLLABUS
===================================== */
function showApp() {
    coverPage.classList.add("hidden");
    indexPage.classList.remove("hidden");
    appPage.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showCover() {
    appPage.classList.add("hidden");
    indexPage.classList.add("hidden");
    coverPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   7. DISPLAY ALL UNITS
===================================== */

function renderUnits() {

    unitList.innerHTML = "";

    syllabus.forEach(function (unit, index) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "unit-button";

        if (index === currentUnit) {
            button.classList.add("active");
        }

        button.textContent = unit.title;

        button.addEventListener("click", function () {

            currentUnit = index;
            currentTopic = 0;

            renderUnits();
            renderTopics();
            renderNote();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

        unitList.appendChild(button);

    });

}


/* =====================================
   8. DISPLAY TOPICS FOR SELECTED UNIT
===================================== */

function renderTopics() {

    const unit = syllabus[currentUnit];

    pageHeading.textContent = unit.title;

    pageIntro.textContent =
        "Select a topic below to study its theory, syntax and examples.";

    topicList.innerHTML = "";

    unit.topics.forEach(function (topic, index) {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "topic-button";

        if (index === currentTopic) {
            button.classList.add("active");
        }

        const title = document.createElement("span");
        title.textContent = topic.title;

        const arrow = document.createElement("span");
        arrow.className = "topic-arrow";
        arrow.textContent = "→";

        button.appendChild(title);
        button.appendChild(arrow);

        button.addEventListener("click", function () {

            currentTopic = index;

            renderTopics();
            renderNote();

            noteContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

        topicList.appendChild(button);

    });

}


/* =====================================
   9. CALCULATE TOTAL TOPICS
===================================== */

function getTotalTopics() {

    return syllabus.reduce(function (total, unit) {

        return total + unit.topics.length;

    }, 0);

}


/* =====================================
   10. CALCULATE CURRENT TOPIC NUMBER
===================================== */

function getGlobalTopicIndex() {

    let count = 0;

    for (let i = 0; i < currentUnit; i++) {

        count += syllabus[i].topics.length;

    }

    return count + currentTopic;

}


/* =====================================
   11. DISPLAY TOPIC NOTES
===================================== */

function renderNote() {

    const unit = syllabus[currentUnit];
    const topic = unit.topics[currentTopic];

    const currentNumber = getGlobalTopicIndex() + 1;
    const totalTopics = getTotalTopics();

    noteContent.innerHTML = `

        <span class="badge">
            ${escapeHTML(unit.title)}
        </span>

        <h2>${escapeHTML(topic.title)}</h2>

        <h3>📖 Theory</h3>

        ${topic.theory}

        <h3>⌨️ Syntax</h3>

        <pre><code>${escapeHTML(topic.syntax)}</code></pre>

        <h3>💻 Code Example</h3>

        <pre><code>${escapeHTML(topic.code)}</code></pre>

        <h3>✅ Expected Output / Result</h3>

        <pre class="output"><code>${escapeHTML(topic.output)}</code></pre>

        <div class="navigation">

            <button
                type="button"
                class="secondary-btn"
                id="prevTopic"
                ${currentNumber === 1 ? "disabled" : ""}>
                ← Previous
            </button>

            <span class="progress">
                Topic ${currentNumber} of ${totalTopics}
            </span>

            <button
                type="button"
                class="primary-btn"
                id="nextTopic">
                ${currentNumber === totalTopics ? "Finish ✓" : "Next →"}
            </button>

        </div>

    `;

    document
        .getElementById("prevTopic")
        .addEventListener("click", previousTopic);

    document
        .getElementById("nextTopic")
        .addEventListener("click", nextTopic);

}


/* =====================================
   12. NEXT TOPIC
===================================== */

function nextTopic() {

    const currentUnitTopics = syllabus[currentUnit].topics;

    if (currentTopic < currentUnitTopics.length - 1) {

        // Move to the next topic in the same unit.
        currentTopic++;

    } else if (currentUnit < syllabus.length - 1) {

        // Move to the first topic of the next unit.
        currentUnit++;
        currentTopic = 0;

    } else {

        // All topics have been completed.
        noteContent.insertAdjacentHTML(
            "beforeend",
            `<p><b>🎉 You have reached the end of these notes!</b></p>`
        );

        return;

    }

    renderUnits();
    renderTopics();
    renderNote();

    noteContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================
   13. PREVIOUS TOPIC
===================================== */

function previousTopic() {

    if (currentTopic > 0) {

        // Move to the previous topic in the same unit.
        currentTopic--;

    } else if (currentUnit > 0) {

        // Move to the last topic of the previous unit.
        currentUnit--;

        currentTopic =
            syllabus[currentUnit].topics.length - 1;

    } else {

        // Already on the first topic.
        return;

    }

    renderUnits();
    renderTopics();
    renderNote();

    noteContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
/* INDEX PAGE NAVIGATION */

document.querySelectorAll(".index-unit").forEach(function(button) {

    button.addEventListener("click", function() {

        currentUnit = Number(button.dataset.unit);
        currentTopic = 0;

        indexPage.classList.add("hidden");
        appPage.classList.remove("hidden");

        renderUnits();
        renderTopics();
        renderNote();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

backToCoverBtn.addEventListener("click", showCover);


/* =====================================
   14. BUTTON EVENT LISTENERS
===================================== */

exploreBtn.addEventListener("click", showApp);

homeBtn.addEventListener("click", showCover);


/* =====================================
   END OF JAVASCRIPT
===================================== */