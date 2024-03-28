enum Case {
    CAMEL,
    PASCAL,
    UPPER,
    SNAKE,
}
function caseConvert(str: string, from: Case, to: Case): string {

    let medium: string[] = [];
    let result: string = "";

    switch (from) {
        case Case.CAMEL:
            medium = str.replace(/[A-Z]/g, function (match) { return "#" + match; }).toLowerCase().split("#");
            break;
        case Case.PASCAL:
            medium = str.replace(/[A-Z]/g, function (match) { return "#" + match; }).toLowerCase().trim().split("#").filter(x => x!="");
            break;
        case Case.UPPER:
            medium = str.toLowerCase().split("_");
            break;
        case Case.SNAKE:
            medium = str.split("_");
            break;
    }

    console.log(medium);

    switch (to) {
        case Case.CAMEL:
            for (let i = 0; i < medium.length; i++) {
                if (i == 0) continue;
                let chars = medium[i].split("");
                medium[i] = chars[0].toUpperCase() + chars.slice(1).join("");
                console.log(medium[i]);
            }
            result = medium.join("");
            break;
        case Case.PASCAL:
            for (let i = 0; i < medium.length; i++) {
                let chars = medium[i].split("")
                medium[i] = chars[0].toUpperCase() + chars.slice(1).join("");
                console.log(medium[i]);
            }
            result = medium.join("");
            break;
        case Case.UPPER:
            for (let i = 0; i < medium.length; i++) {
                medium[i] = medium[i].toUpperCase();
            }
            result = medium.join("_");
            break;
        case Case.SNAKE:
            for (let i = 0; i < medium.length; i++) {
                medium[i] = medium[i].toLowerCase();
            }
            result = medium.join("_");
            break;
    }

    return result;
}

export { caseConvert, Case};