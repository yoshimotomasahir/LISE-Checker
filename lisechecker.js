const validTitles = [
"20250228_Standard-SAMURAI_18O_woCSfile_momOFF_cutNO",
"20250228_Standard-LAA_18O_woCSfile_momOFF_cutNO",
"20250228_Standard-SAMURAI_48Ca_wCSfile_momOFF_cutNO",
"20250228_Standard-LAA_48Ca_wCSfile_momOFF_cutNO",
"20250228_Standard-SAMURAI_70Zn_woCSfile_momOFF_cutNO",
"20250228_Standard-LAA_70Zn_woCSfile_momOFF_cutNO",
"20250601_Standard-SAMURAI_78Kr_wCSfile_momOFF_cutNO_momAsym",
"20250601_Standard-LAA_78Kr_wCSfile_momOFF_cutNO_momAsym",
"20250228_Standard-SAMURAI_Other_woCSfile_momOFF_cutNO",
"20250228_Standard-LAA_Other_woCSfile_momOFF_cutNO",
"20260301_Standard-SAMURAI_238U-Prich_wCSfile_momOFF_cutNO",
"20260301_Standard-LAA_238U-Prich_wCSfile_momOFF_cutNO",
"20260625_Standard0.6-SAMURAI_238U_wCSfile_cutNO",
"20260625_Standard0.6-LAA_238U_wCSfile_cutNO",
"20260625_Standard-SAMURAI_238U-Nrich_wCSfile_momOFF_cutNO",
"20260625_Standard-LAA_238U-Nrich_wCSfile_momOFF_cutNO",
"20260715_Standard-SAMURAI_124Xe_wCSfile_momOFF_cutNO",
"20260715_Standard-LAA_124Xe_wCSfile_momOFF_cutNO",
"20260715_Standard-SAMURAI_208Pb-Nrich_woCSfile_momOFF_cutNO",
"20260715_Standard-LAA_208Pb-Nrich_woCSfile_momOFF_cutNO",
"20260715_Standard-SAMURAI_208Pb-Prich_woCSfile_momOFF_cutNO",
"20260715_Standard-LAA_208Pb-Prich_woCSfile_momOFF_cutNO"];

const primaryBeamAZQs = ["18O8+", "18O8+", "18O8+", "40Ca20+", "48Ca20+", "70Zn30+", "78Kr36+", "124Xe52+", "136Xe52+", "208Pb79+", "238U86+"];
const primaryBeamEnergies = [230, 250, 345, 345, 345, 345, 345, 345, 345, 345, 345];
const primaryBeamIntensities = [400, 200, 500, 200, 500, 500, 500, 140, 20, 80, 70];

const targetThicknessesBe = [0.1, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 20, 30, 40];
const targetThicknessesW = [0.1, 0.2, 0.3, 0.5, 1, 1.4, 2.1, 2.8];

const beamDumpApiUrl = "https://script.google.com/macros/s/AKfycbyzGZokl4P6YV3OuzEa6RmNsSsGj3dHelzlOhH4k8YPcrekterTi96GmdDNrfdjYjqZNQ/exec";

const standard3EERParameters = {
    "HML_show": ["7"],
    "AF_Ex_choice": ["0"],
    "BoundaryLow": ["40 MeV"],
    "BoundaryHigh": ["180 MeV"],
    "Velocity": ["1"],
    "LowEx_nucleus": ["236U 92+", "236U"],
    "L_CS_Ex": ["1.927e+02 23.50 11.24"],
    "MidEx_nucleus": ["226Th90+", "226Th"],
    "M_CS_Ex": ["5.000e+02 100.00 53.06"],
    "HighEx_nucleus": ["220Ra88+", "220Ra"],
    "H_CS_Ex": ["3.500e+02 250.00 64.40"]
};

const wedgeValidSettingsF1 = [
    { symbol: "Al", thickness: 1.0, angle: -1.212 },
    { symbol: "Al", thickness: 1.4, angle: -1.76 },
    { symbol: "Al", thickness: 2, angle: -2.44 },
    { symbol: "Al", thickness: 3, angle: -3.6069 },
    { symbol: "Al", thickness: 3, angle: -3.61 },
    { symbol: "Al", thickness: 3.5, angle: -4.2 },
    { symbol: "Al", thickness: 4, angle: -4.75 },
    { symbol: "Al", thickness: 4.5, angle: -5.35 },
    { symbol: "Al", thickness: 5, angle: -5.986 },
    { symbol: "Al", thickness: 6, angle: -7.31 },
    { symbol: "Al", thickness: 7, angle: -8.465 },
    { symbol: "Al", thickness: 8, angle: -9.845 },
    { symbol: "Al", thickness: 9, angle: -10.751 },
    { symbol: "Al", thickness: 10, angle: -12.419 },
    { symbol: "Al", thickness: 11, angle: -13.177 },
    { symbol: "Al", thickness: 12, angle: -15.082 },
    { symbol: "Al", thickness: 15, angle: -18.66 },
    { symbol: "Al", thickness: 20, angle: -25 },
    { symbol: "Al", thickness: 0.3, angle: -0.356 },
    { symbol: "Al", thickness: 0.5, angle: -0.62 },
    { symbol: "Al", thickness: 1.0, angle: -1.212 },
    { symbol: "Al", thickness: 1.2, angle: -1.38 },
    { symbol: "Al", thickness: 2, angle: -2.24 },
    { symbol: "Al", thickness: 0.446, angle: -0.51 },
    { symbol: "Ta", thickness: 0.110, angle: -0.126 },
    { symbol: "Ta", thickness: 0.010, angle: 0 }
];
const wedgeValidSettingsF5 = [
    { symbol: "Al", thickness: 1.5, angle: 1.187 },
    { symbol: "Al", thickness: 2, angle: 1.6 },
    { symbol: "Al", thickness: 2.2, angle: 1.8 },
    { symbol: "Al", thickness: 2.5, angle: 2.14 },
    { symbol: "Al", thickness: 3, angle: 2.62 },
    { symbol: "Al", thickness: 3.5, angle: 2.8 },
    { symbol: "Al", thickness: 3.5, angle: 3 },
    { symbol: "Al", thickness: 4.5, angle: 3.7 },
    { symbol: "Al", thickness: 5, angle: 4.25 },
    { symbol: "Al", thickness: 7, angle: 5.969 },
    { symbol: "Al", thickness: 8, angle: 7.3129 },
    { symbol: "Al", thickness: 9, angle: 7.714 },
    { symbol: "Al", thickness: 10, angle: 8.587 },
    { symbol: "Al", thickness: 0.7, angle: 0.61 },
    { symbol: "Al", thickness: 1, angle: 0.43 },
    { symbol: "Al", thickness: 1, angle: 0.95 }
];

const dropArea = document.getElementById('drop-area');
const dropFilename = document.getElementById('drop-filename');
const fileInput = document.getElementById('file-input');
const output = document.getElementById('output');
const input = document.getElementById('input');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', handleInput, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFile(files[0]);
}

function handleInput() {
    if (fileInput.files.length == 0) { return; }
    handleFile(fileInput.files[0])
}

const periodicTable = [
    "H", "He",
    "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba",
    "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
    "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
    "Fr", "Ra",
    "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr",
    "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const z2symbol = {};
const symbol2z = {};

for (let z = 1; z <= periodicTable.length; z++) {
    const symbol = periodicTable[z - 1];
    z2symbol[z] = symbol;
    symbol2z[symbol] = z;
}

let isotopeData = [];
function handleFile(file) {
    // dropFilename.textContent = file.name;

    const reader = new FileReader();

    reader.onload = function (e) {
        const contents = e.target.result;
        let obj = {};

        let lines = contents.split(/\n/);
        obj["Version"] = lines[0].trim();

        let category = null;
        const hasMainPart = lines.some(line => /^\{.*Main Part.*\}$/.test(line.trim()));
        let inMainPart = !hasMainPart;

        for (let i = 1; i < lines.length; i++) {
            let line = lines[i].trim();

            if (line === "") { continue; }

            // section
            if (line[0] === "{" && line.slice(-1) === "}") {
                category = null;
                if (/Info Part/i.test(line)) { inMainPart = false; }
                if (/Main Part/i.test(line)) { inMainPart = true; }
                continue;
            }

            if (!inMainPart) { continue; }

            // category
            if (line[0] === "[" && line.slice(-1) === "]") {
                category = line.slice(1, -1);
                obj[category] = {};
                continue;
            }

            // comment
            if (line.includes(";")) {
                line = line.split(";")[0].trim();
            }

            // key and value
            let equal_pos = line.indexOf("=");
            let key = line.slice(0, equal_pos).trim().replace(/\s+/g, " ");
            let value = line.slice(equal_pos + 1).trim().replace(/\s+/g, " ");
            if (category === "Calculations") {
                obj[category][key + " " + i] = value;
            }
            else {
                obj[category][key] = value;
            }
        }
        input.innerHTML = JSON.stringify(obj, null, " ");
        output.innerHTML = "";
        isotopeData = [];
        d3.select("#chart").selectAll("*").remove();

        // Render the parsed JSON before starting the blocking beam dump request.
        requestAnimationFrame(() => setTimeout(() => {
            let text = "<table>";
            text += `<tr><td>File Name\t</td><td><small>${file.name}</small></td><td></td></tr>`;
            const result = readLiseLppFile(obj);
            text += result.text;
            isotopeData = result.isotopeData;
            displayTable();
            output.innerHTML = text;
        }, 0));
    };
    reader.readAsText(file, 'windows-1252');
}

function readLiseLppFile(obj) {
    let text = "";
    text += `<tr><td>Original\t</td><td><small>${obj["general"]["Title"]}</small></td><td><b><a href="https://www.nishina.riken.jp/ribf/BigRIPS/intensity.html" target="_blank">${checkTitle(obj)}</b></a></td></tr>`;
    text += `<tr><td>LISE++ ver.\t</td><td>${obj["Version"]}</td><td><b>${checkVersion(obj)}</b></td></tr>`;
    text += "<tr><td> </td><td> </td><td></td></tr>";

    const matchResult = obj.settings['Settings on A,Z'].match(/([0-9]+)([A-Za-z]+)/);
    const fZ = symbol2z[matchResult ? matchResult[2] : null];
    const Qs = Array.from({ length: 8 }, (_, d) => {
        const dKey = `D${d + 1}_General`;
        if (obj[dKey]) {
            return fZ - parseInt(obj[dKey].ZmQ);
        } else { return null; }
    }).filter(q => q !== null);

    text += `<tr><td>Primary Beam\t</td><td>${obj["settings"]["A,Z,Q"]} ${obj["settings"]["Energy"]}</td><td></td></tr>`;
    text += `<tr><td>Beam Intensity\t</td><td>${obj["settings"]["Intensity"]}\t</td><td><a href="https://www.nishina.riken.jp/ribf/accelerator/tecinfo.html" target="_blank"><b>${checkPrimaryBeam(obj)}</b></a></td></tr>`;

    const fragment = obj["settings"]["Settings on A,Z"];
    text += `<tr><td>Fragment\t</td><td>${fragment} (Z=${fZ})</td><td></td></tr>`;
    text += `<tr><td>Fragment q\t</td><td>${Qs.join(" ")}</td><td></td></tr>`;
    text += "<tr><td> </td><td> </td><td></td></tr>";

    text += `<tr><td>F0 Target\t\t</td><td>${getTarget(obj).targetElement} ${getTarget(obj).targetThickness} mm\t</td><td><a href="https://ribf.riken.jp/BigRIPSInfo/chamber/target.html" target="_blank"><b>${checkTarget(obj)}</b></a></td></tr>`;

    const checkDeg = checkWedgeInfo(obj);
    const f1deg = getWedgeInfo(obj, "F1");
    if (f1deg !== null) {
        text += `<tr><td>F1 Degrader\t</td><td>${f1deg.symbol}\t${f1deg.thickness} mm\t${f1deg.angle}\t</td><td><a href="https://ribf.riken.jp/BigRIPSInfo/chamber/f1deg.html" target="_blank"><b>${checkDeg[0]}</b></a></td></tr>`;
    }
    else { text += `<tr><td>F1 Degrader\t</td><td>Not installed</td><td></td></tr>`; }
    const f5deg = getWedgeInfo(obj, "F5");
    if (f5deg !== null) {
        text += `<tr><td>F5 Degrader\t</td><td>${f5deg.symbol}\t${f5deg.thickness} mm\t${f5deg.angle}\t</td><td><a href="https://ribf.riken.jp/BigRIPSInfo/chamber/f5deg.html" target="_blank"><b>${checkDeg[1]}</b></a></td></tr>`;
    }
    else { text += `<tr><td>F5 Degrader\t</td><td>Not installed</td><td></td></tr>`; }
    text += `<tr><td>Br01\t\t</td><td>${obj["D1_DipoleSettings"]["Brho"]}</td><td><b>${checkD1(obj)}</b></td></tr>`;
    const beamDumpResults = getBeamDump(obj);
    text += `<tr><td>Beam dump\t</td><td>L${(formatVal(obj["S1_slits"]["X_size"].split(",")[1]))} R${(formatVal(obj["S1_slits"]["X_size"].split(",")[3]))}</td><td><a href="https://ribf.riken.jp/BigRIPSInfo/beamdump/" target="_blank"><b>${beamDumpResults[0]}</b></a></td></tr>`;

    let slitTexts = [];
    slitTexts.push('<tr><td>F1(LR)\t\t</td><td>' + getSlit(obj, 'F1').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>');
    slitTexts.push('<tr><td>F2(LR)\t\t</td><td>' + getSlit(obj, 'F2').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>');
    slitTexts.push('<tr><td>F2.5(LRBT)\t</td><td>' + getSlit(obj, 'F2.5').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>');
    slitTexts.push('<tr><td>F5(LR)\t\t</td><td>' + getSlit(obj, 'F5').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>');
    try { slitTexts.push('<tr><td>uF7(LR)\t\t</td><td>' + getSlit(obj, 'uF7').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    try { slitTexts.push('<tr><td>F7(LR) \t\t</td><td>' + getSlit(obj, 'F7').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } 
    catch { slitTexts.push('<tr><td>F7(LR) \t\t</td><td></td><td><b>Unable to read</b></td></tr>'); }

    try { slitTexts.push('<tr><td>F8(LR)\t\t</td><td>' + getSlit(obj, 'F8').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    try { slitTexts.push('<tr><td>F9(LR)\t\t</td><td>' + getSlit(obj, 'F9').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    try { slitTexts.push('<tr><td>F10(LR)\t\t</td><td>' + getSlit(obj, 'F10').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    try { slitTexts.push('<tr><td>F11(LR)\t\t</td><td>' + getSlit(obj, 'F11').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    try { slitTexts.push('<tr><td>F12(LR)\t\t</td><td>' + getSlit(obj, 'F12').map(value => value.toString().padStart(10)).join(' ') + '</td><td></td></tr>'); } catch { }
    text += slitTexts.join('');
    text += "<tr><td> </td><td> </td><td></td></tr>";

    text += `<tr><td>User CS\t\t</td><td>${getCrossSection(obj, fragment)} mb for ${fragment}</td><td></td></tr>`;
    text += `<tr><td>Reaction Mech.\t</td><td>${getReactionMechanism(obj)}</td><td></td></tr>`;
    if (obj["mechanism"]["Reaction"] === "4") {
        const result3EER = check3EERParameters(obj);
        text += `<tr><td>3EER parameters\t</td><td><span title="${escapeHtmlAttribute(result3EER.details)}">${result3EER.description}</span></td><td><b><a href="https://doi.org/10.1016/j.nimb.2013.08.049" target="_blank">${result3EER.status}</a></b></td></tr>`;
    }
    text += `<tr><td>Cross-section model\t</td><td>${getEPAXCrossSection(obj)}</td><td></td></tr>`;
    text += `<tr><td>Charge states\t</td><td>${obj["options"]["Charge states"]}</td><td><b>${checkChargeStates(obj)}</b></td></tr>`;
    text += `<tr><td>CentralCut\t</td><td>${getCentralCut(obj)}</td><td><b><a href="https://www.nishina.riken.jp/ribf/BigRIPS/intensity.html" target="_blank">${checkCentralCut(obj)}</b></a></td></tr>`;
    text += "</table>";
    text += `<pre>Beam dump calc.\t${beamDumpResults[1]}</pre>`;

    const isotopeRate = getIsotopeRate(obj);
    const reactionResults = getReaction(obj);
    const transmissions = reactionResults.transmissions;
    const mainQStates = reactionResults.mainQStates;
    const mainCrossSections = reactionResults.mainCrossSections;
    const totalRate = getTotalRate(obj);
    text += "<table>";
    text += `<tr><td>Total Rate\t</td><td>${totalRate.toExponential(3)} cps  purity     trans. main_CS(mb)  main_(Z-q)</td></tr>`;
    Object.entries(isotopeRate).slice(0, 100).forEach(([isotope, rate], index) => {
        purity = (rate / totalRate * 100).toFixed(1).padStart(6);
        transmission = (transmissions[isotope] * 100).toFixed(3).padStart(9);
        mainCrossSection = mainCrossSections[isotope].toExponential(3).padStart(10);
        mainQState = mainQStates[isotope];
        text += `<tr><td>${isotope}\t\t</td><td>${rate.toExponential(3)} cps ${purity}% ${transmission}%  ${mainCrossSection}  ${mainQState}</td></tr>`;
    });
    text += "</table>";

    const isotopeData = [];
    Object.entries(isotopeRate).forEach(([isotope, rate]) => {
        const match = isotope.match(/^(\d+)([A-Za-z]+)$/);
    
        const A = parseInt(match[1]);
        const symbol = match[2];
        const Z = periodicTable.indexOf(symbol) + 1;
        const N = A - Z;
        const transmission = transmissions[isotope] * 100;
        const crossSection = mainCrossSections[isotope];
        isotopeData.push({ isotope, Z, N, rate, transmission, crossSection });
    });

    text += "<table>";
    try { text += `<tr><td>Br12\t\t</td><td>${obj["D2_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br34\t\t</td><td>${obj["D3_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br45\t\t</td><td>${obj["D4_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br56\t\t</td><td>${obj["D5_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br67\t\t</td><td>${obj["D6_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br89\t\t</td><td>${obj["D7_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    try { text += `<tr><td>Br10-11\t\t</td><td>${obj["D8_DipoleSettings"]["Brho"]}</td></tr>` } catch { };
    text += "</table>";

    return {text, isotopeData};
}

function formatVal(val) {
    if (val === 0) {
        return '0';
    } else if (val > 0) {
        return '+' + val;
    } else {
        return val;
    }
}

function getSlit(obj, focal = "F1") {
    let iSlits = [0];

    switch (focal) {
        case "F1":
            iSlits = [3];
            break;
        case "F2":
            iSlits = [4];
            break;
        case "F2.5":
            iSlits = [6];
            break;
        case "F5":
            iSlits = [8];
            break;
        case "uF7":
            iSlits = [9];
            break;
        case "F7":
            iSlits = [9,11];
            break;
        case "F8":
            iSlits = [11,13];
            break;
        case "F9":
            iSlits = [12,14];
            break;
        case "F10":
            iSlits = [15,17];
            break;
        case "F11":
            iSlits = [16,18];
            break;
        case "F12":
            iSlits = [13,15];
            break;
        default:
            throw new Error("Invalid focal plane");
    }

    for (const iSlit of iSlits) {
        if (obj[`S${iSlit}_General`]["Name"].toLowerCase() === `${focal} slit,1`.toLowerCase()) {
            const xSlit = obj[`S${iSlit}_slits`]["X_size"].split(",");
            if (focal === "F2.5") {
                const ySlit = obj[`S${iSlit}_slits`]["Y_size"].split(",");
                return [formatVal(xSlit[1]) + " mm", formatVal(xSlit[3]) + " mm", formatVal(ySlit[1]) + " mm", formatVal(ySlit[3]) + " mm"];
            } else {
                return [formatVal(xSlit[1]) + " mm", formatVal(xSlit[3]) + " mm"];
            }
        }
    }
    const message = `Slit name of "S[${iSlits}]_General" does not match "${focal} slit,1"`;
    console.log(message);
    throw new Error(message);
}

function checkTitle(obj) {
    if (validTitles.includes(obj["general"]["Title"])){
        return "OK";
    }
    else{
        return "Not supported"
    }
}

function checkD1(obj) {
    const D1 = parseFloat(obj["D1_DipoleSettings"]["Brho"].split(" ")[0]);
    if (D1<=9.71) {
        return "OK";
    }
    else{
        return "Maximum Br01 is 9.71";
    }
}

function checkCentralCut(obj) {
    if (getCentralCut(obj) == "NO"){
        return "OK";
    }
    else{
        return 'Set to "NO"'
    }
}

function checkChargeStates(obj) {
    if (obj["options"]["Charge states"] === "Yes") {
        return "OK";
    }
    return 'Check "Charge states"';
}

function checkVersion(obj) {
    if(parseInt(obj["Version"].replace("Version", "").split(".")[0]) > 16){
        return "OK";
    }
    else if(parseInt(obj["Version"].replace("Version", "").split(".")[0]) == 16){
        if(parseInt(obj["Version"].replace("Version", "").split(".")[1]) >= 16) {
            return "OK";
        }
    }
    return "Check LISE++ version";
}

function checkPrimaryBeam(obj) {
    const AZQ = obj["settings"]["A,Z,Q"].replace(/\s+/g, "");
    const energy = parseFloat(obj["settings"]["Energy"].split(" ")[0]);
    const energyUnit = obj["settings"]["Energy"].split(" ")[1];
    const intensity = parseFloat(obj["settings"]["Intensity"].split(" ")[0]);
    const intensityUnit = obj["settings"]["Intensity"].split(" ")[1];
    let judge = "Not listed in this script";
    if (intensityUnit != "pnA") { return judge; }
    if (energyUnit != "MeV/u") { return judge; }
    for (let i = 0; i < primaryBeamAZQs.length; i++) {
        if (AZQ == primaryBeamAZQs[i] && energy == primaryBeamEnergies[i] && intensity <= primaryBeamIntensities[i]) { judge = "OK"; break; }
    }
    console.log(AZQ);
    console.log(energy);
    console.log(intensity);
    return judge;
}


function checkWedgeInfo(obj) {
    const resultsF1 = getWedgeInfo(obj, "F1");
    const resultsF5 = getWedgeInfo(obj, "F5");
    console.log(resultsF1);
    console.log(resultsF5);
    let judges = [];
    for (let j = 0; j < 2; j++) {
        let results = (j === 0) ? resultsF1 : resultsF5;
        if (results === null) { judges.push("---"); continue; }
        if (results.angle === "Not supported") { judges.push("Angle not supported"); continue; }
        const symbol = results.symbol;
        const thickness = results.thickness;
        const [angle, angleUnit] = results.angle.split(" ");
        if (angleUnit != "mrad") { judges.push("NG"); continue; }

        const validSettings = (j === 0) ? wedgeValidSettingsF1 : wedgeValidSettingsF5;
        let judge = "Not listed";
        for (const setting of validSettings) {
            if (symbol === setting.symbol && thickness == setting.thickness && parseFloat(angle) == setting.angle) {
                judge = "OK";
                break;
            }
        }
        judges.push(judge);
    }
    return judges;
}
function getWedgeInfo(obj, focal = "F1") {
    let iWedge = 0;

    if (focal === "F1") {
        iWedge = 1;
    } else if (focal === "F5") {
        iWedge = 2;
    } else {
        throw new Error("Invalid focal plane");
    }

    if (obj[`W${iWedge}_General`]["Name"].toLowerCase() !== `${focal} wedge,1`.toLowerCase()) {
        const message = `Wedge name of "W${iWedge}_General" does not match "${focal} wedge,1"`;
        console.log(message);
        throw new Error(message);
    }

    if (obj[`W${iWedge}_General`]["Available"] === "0") {
        return null;
    }

    const contents1Split = obj[`W${iWedge}_Compound`]["contents1"].split(",");
    const thicknessSplit = obj[`W${iWedge}_Compound`]["thickness"].split(",");

    const symbol = z2symbol[parseInt(contents1Split[1])];
    let thickness = null;
    if (thicknessSplit[0] === "4") {
        thickness = thicknessSplit[1];
    }
    else if (thicknessSplit[0] === "0") {
        thickness = thicknessSplit[1] * 0.001;
    }

    let angle = 0;
    if (obj[`W${iWedge}_WedgeSettings`]["ProfileMode"] == "0") { angle = obj[`W${iWedge}_WedgeSettings`]["Angle"]; }
    else if (obj[`W${iWedge}_WedgeSettings`]["ProfileMode"] == "1") { angle = "0 mrad"; }
    else { angle = "Not supported"; }
    if (thickness === "0") {
        return null;
    }
    return {symbol, thickness, angle};
}

function checkTarget(obj) {
    let results = getTarget(obj);
    let element = results.targetElement;
    let thickness = results.targetThickness;

    for (let i = 0; i < targetThicknessesBe.length; i++) {
        if (element == "Be" && thickness == targetThicknessesBe[i]) { return "OK"; }
    }

    for (let i = 0; i < targetThicknessesW.length; i++) {
        if (element == "W" && thickness == targetThicknessesW[i]) { return "OK"; }
    }
    return "Not listed";
}

function getTarget(obj) {
    targetContents = obj["target"]["Target contents"]
    targetThickness = obj["target"]["Target thickness"].split(",")[1]
    if (targetContents == '0,4,1,9.012')
        targetElement = 'Be'
    else if (targetContents == '0,74,1,183.85')
        targetElement = 'W'
    else { throw new Error("Invalid Target contents"); }
    return {targetElement, targetThickness}
}

function getTotalRate(obj) {
    const isotopeRate = getIsotopeRate(obj);
    let totalRate = 0;
    for (const key in isotopeRate) {
        totalRate += isotopeRate[key];
    }
    return totalRate;
}

function getReaction(obj) {
    const isotopeRate = {};
    const transmissions = {};
    const mainQStates = {};
    const mainCrossSections = {};
    const reactions = {};
    const reactionTypes = {};
    const rates = {}
    const crossSections = {};
    const qStates = {};
    for (const key in obj["Calculations"]) {
        let val = obj["Calculations"][key];
        const isotope = key.split(' ')[0];
        var parts = key.split(' ');
        parts.shift();
        parts.pop();
        const qState = parts;

        const rate = parseFloat(val.split(',')[0]);                 //Rate for this reaction and Q states
        const totalRateForReaction = parseFloat(val.split(',')[1]); //Total rate for this reaction
        const reactionType = parseInt(val.split(',')[2]);           //Reaction type: 4=AFlow,5=AFmid,6=AFhigh
        const totalRate = parseFloat(val.split(',')[3]);            //Total rate across all reactions
        const crossSection = parseFloat(val.split(',')[4]);         //Cross section for this reaction 
        const transmission = parseFloat(val.split(',')[6]);         //Transmission for this reaction and Q states

        isotopeRate[isotope] = totalRate;
        if (!reactions.hasOwnProperty(isotope)) {
            reactions[isotope] = 0;
            rates[isotope] = [];
            reactionTypes[isotope] = [];
            crossSections[isotope] = [];
            qStates[isotope] = [];
        }
        if (!reactionTypes[isotope].includes(reactionType)) {
            reactions[isotope] += rate / transmission;
        }
        rates[isotope].push(rate);
        reactionTypes[isotope].push(reactionType);
        crossSections[isotope].push(crossSection);
        qStates[isotope].push(qState);
    }
    for (const isotope in isotopeRate) {
        transmissions[isotope] = isotopeRate[isotope] / reactions[isotope];
        const maxIndex = rates[isotope].indexOf(Math.max(...rates[isotope]));
        const qState = qStates[isotope][maxIndex];
        mainCrossSections[isotope] = crossSections[isotope][maxIndex];
        const Z = symbol2z[isotope.replace(/\d/g, '')];
        var qState2 = [];
        for (let i = 0; i < qState.length; i++) {
            qState2.push(Z - parseInt(qState[i].slice(0, -1)));
        }
        mainQStates[isotope] = qState2;
    }
    return {isotopeRate, transmissions, mainQStates, mainCrossSections};
}


function getIsotopeRate(obj) {
    let isotopeRate = getReaction(obj).isotopeRate;
    isotopeRate = Object.fromEntries(Object.entries(isotopeRate).sort((a, b) => b[1] - a[1]));
    return isotopeRate;
}

function getCentralCut(obj) {
    if (obj["options"]["CentralCut"] == "0") {
        return "NO";
    }
    else if (obj["options"]["CentralCut"] == "1") {
        return "moderate";
    }
    else if (obj["options"]["CentralCut"] == "2") {
        return "strong";
    }
    else {
        return obj["options"]["CentralCut"];
    }
}

function getCrossSection(obj, nuclide) {
    let crossSection = -9999;
    for (const key in obj["cross sections"]) {
        if (key.split(" ")[1] == nuclide) {
            if (parseFloat(crossSection) < parseFloat(obj["cross sections"][key].split(" ")[0])) {
                crossSection = obj["cross sections"][key].split(" ")[0];
            }
        }
    }
    return crossSection;
}

function getReactionMechanism(obj) {
    if (obj["mechanism"]["Reaction"] == "0") {
        return "Projectile Fragmentation";
    }
    else if (obj["mechanism"]["Reaction"] == "4") {
        return "Abrasion-Fission";
    }
    else { return "Not supported"; }
}

function check3EERParameters(obj) {
    const parameters = obj["abrasion_fission"];
    const parameterDetails = Object.entries(standard3EERParameters)
        .map(([key, values]) => `${key}: ${parameters?.[key] ?? "missing"} (expected: ${values.join(" or ")})`);
    const matched = Object.entries(standard3EERParameters)
        .every(([key, values]) => values.includes(parameters?.[key]));
    return {
        status: matched ? "OK" : "NG",
        description: matched ? "Matches Suzuki et al. (2013)" : "Does not match Suzuki et al. (2013)",
        details: parameterDetails.join("\n")
    };
}

function escapeHtmlAttribute(value) {
    return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getEPAXCrossSection(obj) {
    if (obj["mechanism"]["EPAX Cross Section"] == "4") {
        return "EPAX 3.1a";
    }
    else if (obj["mechanism"]["EPAX Cross Section"] == "2") {
        return "EPAX 2.15";
    }
    else if (obj["mechanism"]["EPAX Cross Section"] == "5") {
        return "FRACS 1.1";
    }
    else { return "Not supported"; }
}

function displayTable(){
    if (isotopeData.length === 0) { return; }
    const member = document.querySelector('input[name="metric"]:checked').value;
    const scale = document.querySelector('input[name="scale"]:checked').value;
    const cellSize = 40;

    const minN = d3.min(isotopeData, d => d.N);
    const maxN = d3.max(isotopeData, d => d.N);
    const minZ = d3.min(isotopeData, d => d.Z);
    const maxZ = d3.max(isotopeData, d => d.Z);

    const chartWidth = (maxN - minN + 1) * cellSize;
    const chartHeight = (maxZ - minZ + 1) * cellSize;

    const svg = d3.select("#chart")
        .attr("width", chartWidth)
        .attr("height", chartHeight);
    svg.selectAll("*").remove();

    const chartGroup = svg.append("g")
        .attr("transform", `translate(0,0)`);

    const maxVal = d3.max(isotopeData, d => d[member]);
    const color = (scale === "log")
        ? d3.scaleSequentialLog(d3.interpolateBlues).domain([maxVal * 1e-6, maxVal])
        : d3.scaleSequential(d3.interpolateBlues).domain([0, maxVal]);

    chartGroup.selectAll("rect")
        .data(isotopeData)
        .enter()
        .append("rect")
        .attr("x", d => (d.N - minN) * cellSize)
        .attr("y", d => (maxZ - d.Z) * cellSize)
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("fill", d => color(d[member]))
        .attr("class", "cell");

    chartGroup.selectAll("text")
        .data(isotopeData)
        .enter()
        .append("text")
        .attr("x", d => (d.N - minN) * cellSize + cellSize / 2)
        .attr("y", d => (maxZ - d.Z) * cellSize + cellSize / 2)
        .attr("text-anchor", "middle")
        .attr("class", "label")
        .html(d => `
          <tspan x="${(d.N - minN) * cellSize + cellSize / 2}" dy="0em">${d.isotope}</tspan>
          <tspan x="${(d.N - minN) * cellSize + cellSize / 2}" dy="1.2em">${d[member].toExponential(0)}</tspan>
        `);
}

function getBeamDump(obj) {
    const AZ = obj["settings"]["A,Z,Q"].replace(" ", "").slice(0, -1).replace(/\d+$/, "");
    const energy = obj["settings"]["Energy"];
    const D1 = parseFloat(obj["D1_DipoleSettings"]["Brho"].split(" ")[0]);
    const targetSetting = getTarget(obj);
    const targetElement = targetSetting.targetElement;
    const targetThickness = targetSetting.targetThickness;

    const query = new URLSearchParams({
        Beam: AZ,
        Energy: energy,
        Target: targetElement,
        Thickness: targetThickness,
        D1: D1
    });
    const xhr = new XMLHttpRequest();

    try {
        xhr.open('GET', `${beamDumpApiUrl}?${query.toString()}`, false);
        xhr.send();
    }
    catch (error) {
        return [`Communication error: ${error.message}`, ""];
    }

    if (xhr.status !== 200) {
        return [`HTTP error: ${xhr.status}`, xhr.responseText || ""];
    }

    let data;
    try {
        data = JSON.parse(xhr.responseText);
    }
    catch (error) {
        return [`Invalid response: ${error.message}`, xhr.responseText || ""];
    }
    console.log(data);

    if (data.Status !== "OK") {
        return [`Beam dump error: ${data.Message || "Unknown error"}`, xhr.responseText];
    }

    const Left = parseFloat(obj["S1_slits"]["X_size"].split(",")[1]);
    const Right = parseFloat(obj["S1_slits"]["X_size"].split(",")[3]);
    if ("---" === data.Left.split(" ")[0]) { return ["The primary beam CANNOT be stopped", xhr.responseText]; }
    if (Left < parseFloat(data.Left.split(" ")[0]) && Right > parseFloat(data.Right.split(" ")[0])) { return ["Left/Right NG", xhr.responseText]; }
    if (Left < parseFloat(data.Left.split(" ")[0])) { return [`Left NG (Should be ${data.Left.split(" ")[0]} mm)`, xhr.responseText]; }
    if (Right > parseFloat(data.Right.split(" ")[0])) { return [`Right NG (Should be ${data.Right.split(" ")[0]} mm)`, xhr.responseText]; }
    return ["OK", xhr.responseText];
}

document.getElementById("data-selector").addEventListener("change", (event) => {
    if (event.target.name === "metric" || event.target.name === "scale") {
      displayTable();
    }
});
