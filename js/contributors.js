/* ------------------------
THIS FILE IS AUTOMATICALLY GENERATED
WITH THE node generate-stats COMMAND
!!!DO NOT EDIT IT HERE!!!
USE generate-stats.js for adjustments.
------------------------*/
var contributors = [["hxalid",1],["tessellator",2],["nichochen",1],["diddledan",6],["roncrivera",4],["Marcus-Smallman",1],["kacole2",1],["s8sg",10],["sberryman",1],["elebeaup",1],["k33g",2],["feifeiiiiiiiiiii",9],["pmlopes",3],["james65535",2],["jonasrosland",2],["lucasalexander",1],["tsangste",1],["wwsean08",1],["tarunmangukiya",2],["Rillian-Grant",1],["dvdmuckle",1],["Da5hes",1],["imikushin",1],["kfukuyama",2],["herochinese",1],["imumesh18",9],["grangerp",1],["mfarachepiksel",1],["abhi",2],["VincenzoFerme",1],["lizrice",1],["thom8",1],["Lewiscowles1986",3],["chanwit",1],["haru01",1],["kinghuang",1],["markpeek",1],["itscaro",41],["fharding1",1],["DMajrekar",1],["TsuyoshiUshio",1],["wgliang",1],["fabienheureux",1],["morsik",2],["JockDaRock",3],["stevelacy",1],["actuino",1],["chanezon",1],["cpanato",2],["andmos",3],["staal-it",2],["bartsmykla",41],["TPei",5],["fpommerening",3],["xmudrii",3],["dmrub",3],["affix",5],["rorpage",12],["marcosnils",2],["willhallonline",2],["mlabouardy",2],["lucj",2],["mrchypark",2],["stealthybox",2],["sebgl",2],["amirmc",2],["tleyden",2],["laurentgrangeau",4],["stantonxu",4],["ovation22",3],["jrevillas",3],["developius",6],["realbot",3],["padiazg",5],["telackey",5],["jmkhael",5],["matipan",14],["zeerorg",22],["wahyuoi",5],["mjhea0",6],["elliott-beach",20],["acornies",13],["stefanprodan",122],["Templum",16],["vegasbrianc",7],["austinfrey",9],["jonocodes",10],["nullseed",9],["ericstoekl",39],["ewilde",47],["ivanayov",111],["martindekov",120],["rgee0",101],["kenfdev",57],["viveksyngh",120],["LucasRoesler",171],["rdimitrov",49],["burtonr",70],["johnmccabe",119],["alexellis",2948],["kturcios",7],["ghostinthewires",1],["rajatjindal",2],["ssx",1],["luxifer",1],["dmcclory",1],["rosti",1],["shorsher",1],["gardlt",1],["iphilpot",2],["mario-mazo",5],["ganesshkumar",2],["james-r-smith",5],["nenadilic84",5],["tommysolsen",5],["leodido",7],["nicholasjackson",10],["amirkarimi",15],["marbar3778",3],["hullarb",1],["berndtj",1],["simonpasquier",1],["martin-liu",1],["jcscottiii",1],["kars7e",2],["blu3gui7ar",1],["InTheCloudDan",1],["kirecek",2],["zouyee",2],["luxas",2],["milsonian",3],["weikinhuang",4],["rimusz",6],["rawkode",18],["jpauwels",1],["vaputa",1],["wonderxboy",1],["ruanbekker",1],["saldistefano",1],["wub",1],["aliniacb",3],["Qfist",3],["sterchelen",1],["toshi0607",1],["kyeett",1],["martinbeentjes",1],["kakakakakku",1],["psyked",1],["idvoretskyi",1],["iflowfor8hours",1],["mikejwhitehead",1],["mikebywater",1],["cboecking",1],["NabheetCloud",1],["dpayne-ytel",1],["paurosello",1],["ryanbascom",1],["tmiklas",2],["Jerome1337",1],["ben181231",1],["tsupertramp",1],["srvaroa",1],["feri",1],["janwillies",1],["amn41",1],["rvanzon",1],["ScottG489",1],["richsanders",1],["rajatjin",1],["mylesagray",1],["alishir",1],["kamaln7",1],["Hades32",1],["msteiner-at",1],["walbus",1],["pjimanov",1],["michaelvlaar",1],["avneesh91",1],["trippel",1],["tianyizheng",1],["nwiizo",1],["jkrol2",1],["cpitkin",5],["zhuzhenfeng-finogeeks",1],["joaopluigi",1],["fntlnz",1],["dvhart",1],["alexcourouble",1],["andresguisado",1],["lmxia",1],["doowb",2],["jagreehal",3],["AkihiroSuda",3],["kvuchkov",4],["jaigouk",5],["distantcam",2],["dergoegge",1],["Pentusha",1],["mattnelson",1],["richierich1610",1],["rosskevin",1],["omerzamir",2],["andrew-s",5],["michaelmior",1],["esimov",3],["ivoreis",1],["mikesir87",1],["jmo808",1],["lduivenbode",1],["c00w",1],["sargun",2]];
        var userRows;
var rows = [14, 14, 14, 14]; // users/row;
var maxRowSize = rows.slice().sort().reverse()[0];

var rowsString = '';

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];
	}
}

function userTemplate(userData) {
	var link = 'https://github.com/' + userData[0];
	var img = '<img src="' + link + '.png">';
	var figure = '<figure class="image">' + img + '</figure>';
	var a = '<a href="' + link + '">' + figure + '</a>';

	return a;
}

shuffle(contributors);

function buildRows(rowSet) {
            rows.forEach(r => {
    			rowsString += '<div class="user-row">';

    			for (var i = 0; i < r; i++) {
    				rowsString += userTemplate(contributors.shift());
    			}

    			rowsString += '</div>';
    		});

            return rowsString
        }

document.addEventListener('DOMContentLoaded', function() {
    userRows = document.getElementById('github-users');

	userRows.innerHTML = buildRows(rows);
});