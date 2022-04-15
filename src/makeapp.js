
const fs = require('fs')
const path = require('path')
const readline = require('readline')

function unwrap_string(s) {
    if ((s[0] == s[-1]) && ((s[0] == '"') || (s[0] == '\'')))
        return s.substr(1,-1);
    return s;
}


async function loadAppJs(path) {
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const beginSectionRegex = /(^\s*)\/\/@@\s+BeginSection\s+([a-zA-Z0-9_]+)/;
    const endSectionRegex = /(^\s*)\/\/@@\s+EndSection/;
    const tagSectionRegex = /^(\s*)<([a-z0-9]+)\s+.*BeginSection=([a-zA-Z0-9_'"]+)/;
    const endTagRegex = /^(\s*)<\/([a-z0-9]+)>\s*$/;

    let linebuffer = [];
    let insection = false;
    let tagsection = null;
    let indent = '';
    let m = null;
    for await (const line of rl) {
        //console.log("insection", insection)
        if (!insection) {
            m = line.match(beginSectionRegex);
            if (m != null) {
                indent = m[1];
                let section = m[2];
                linebuffer.push({"indent":indent,"section":section});
                insection = true;
                tagsection = null;
                //console.log("insection SWITCH", insection)
                continue;
            }
            m = line.match(tagSectionRegex);
            if (m != null) {
                indent = m[1];
                let tag = m[2];
                let sec = unwrap_string(m[3]);
                linebuffer.push(line)
                linebuffer.push({"indent":indent,"tag":tag, "section":sec});
                insection = true;
                tagsection = tag;
                continue;
            }
            linebuffer.push(line);
        } else {
            if (tagsection === null) {
                //console.log('NOT TAGSECTION, PARSING', line)
                m = line.match(endSectionRegex);
                if (m != null) {
                    insection = false;
                    //console.log('insection SWITCH', insection)
                    continue;
                }
            } else {
                m = line.match(endTagRegex);
                if (m != null) {
                    linebuffer.push(line);
                    if ((indent == m[1]) && (m[2] == tagsection)) {
                        insection = false;
                        tagsection = null;
                    }
                    continue;
                }
            }
            //linebuffer.push(line)
        }
    }
    return linebuffer;
}

let APPJS_TEMPLATE;

console.log("Loading App.js ... ")
loadAppJs('./App.js').then(
    (data) => {
        APPJS_TEMPLATE = data;
        console.log("App.js loaded.")
    }
);



