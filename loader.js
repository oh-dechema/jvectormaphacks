var plants = [
    {name: 'DECHEMA Gesellschaft für Chemische Technik und Biotechnologie e.V.', coords: [50.113176, 8.644545], coordinator: 'CO2Net+', partner: ['CO2Net+']},
    {name: 'Universität Kassel', coords: [51.322753, 9.507594], partner: ['CO2Net+']},
    {name: 'Institute for Advanced Sustainability Studies e.V. Potsdam', coords: [52.406065, 13.073215], partner: ['CO2Net+']},
	{name: 'Covestro Deutschland AG', coords: [51.368060, 6.662296], coordinator: 'Dream Resource', partner: ['Dream Resource']},
	{name: 'Rheinisch-Westfälische Technische Hochschule Aachen', coords: [50.780078, 6.065687], partner: ['Dream Resource']},
	{name: 'Technische Universität Berlin, Institut für Chemie', coords: [52.512342, 13.329624], partner: ['Dream Resource']},
	{name: 'Puren GmbH', coords: [47.777340, 9.198640], partner: ['Dream Resource']},
	{name: 'PSS Polymer Standards Service GmbH', coords: [50.026230, 8.216870], partner: ['Dream Resource']},
	{name: 'BYK-Chemie GmbH', coords: [51.668250, 6.622900], partner: ['Dream Resource']},
	{name: 'Max-Planck-Institut für Chemische Energiekonversion', coords: [51.417767, 6.886584], coordinator: 'PROPHECY', partner: ['PROPHECY']},
	{name: 'Carl von Ossietzky Universität Oldenburg', coords: [53.146873, 8.181317], partner: ['PROPHECY']},
	{name: 'Karlsruher Institut für Technologie, Institut für Technikfolgenabschätzung und Systemanalyse', coords: [49.011076, 8.395544], partner: ['PROPHECY']},
	{name: 'Siemens AG', coords: [48.090022, 11.649246], coordinator: 'eEthylen', partner: ['eEthylen']},
	{name: 'Evonik Resource Efficiency GmbH', coords: [51.463147, 7.018986], partner: ['eEthylen']},
	{name: 'Forschungszentrum Jülich GmbH, Helmholtz-Institut Erlangen-Nürnberg / IEK 11', coords: [49.460062, 11.028939], partner: ['eEthylen']},
	{name: 'Ruhr-Universität Bochum', coords: [51.445666, 7.261609], partner: ['eEthylen']},
	{name: 'Technische Universität Berlin', coords: [52.512532, 13.326945], partner: ['eEthylen']},
	{name: 'ZSW Stuttgart', coords: [48.738040, 9.107862], coordinator: 'CORAL', partner: ['CORAL']},
	{name: 'Universität Stuttgart', coords: [48.781647, 9.172498], partner: ['CORAL']},
	{name: 'Institut für Energie- und Umweltforschung (ifeu)', coords: [49.435565, 8.678927], partner: ['CORAL']},
	{name: 'Karlsruher Institut für Technologie, Institut für Angewandte Biowissenschaften, Angewandte Biologie', coords: [49.011920, 8.417030], coordinator: 'BioElectroPlast', partner: ['BioElectroPlast']},
	{name: 'Universität Freiburg', coords: [47.993544, 7.845950], partner: ['BioElectroPlast']},
	{name: 'Karlsruher Institut für Technologie, Engler-Bunte-Institut, Bereich Chemische Energieträger - Brennstofftechnologie', coords: [49.011920, 8.417030], coordinator: 'OptiMeOH', partner: ['OptiMeOH']},
	{name: 'TU Kaiserslautern', coords: [49.425377, 7.755550], partner: ['OptiMeOH']},
	{name: 'Karlsruher Institut für Technologie, DVGW-Forschungsstelle am Engler-Bunte-Institut', coords: [49.014558, 8.415127], partner: ['OptiMeOH']},
	{name: 'Infraserv GmbH & Co. Höchst KG', coords: [50.091051, 8.534681], partner: ['OptiMeOH']},
	{name: 'Mitsubishi Hitachi Power Systems Europe GmbH', coords: [51.5459953, 6.6198574], partner: ['OptiMeOH']},
	{name: 'Universität Stuttgart', coords: [48.781647, 9.172498], partner: ['OptiMeOH']},
	{name: 'Keep it green GmbH', coords: [48.001270, 11.350840], partner: ['OptiMeOH']},
	{name: 'DBI Gas- und Umwelttechnik GmbH', coords: [51.328806, 12.324799], coordinator: 'CO2-Selekt', partner: ['CO2-Selekt']},
	{name: 'Fraunhofer IKTS', coords: [50.895050, 11.845542], partner: ['CO2-Selekt']},
	{name: 'Johann Bergmann GmbH', coords: [50.027220, 11.308620], partner: ['CO2-Selekt']},
	{name: 'DECHEMA Forschungsinstitut', coords: [50.113728,8.63], coordinator: 'MIKE', partner: ['MIKE']},
	{name: 'Ifn FTZ GmbH', coords: [51.071985, 12.195979], partner: ['MIKE']},
	{name: 'Infraserv GmbH & Co. Höchst KG', coords: [50.076, 8.534681], partner: ['MIKE']},
	{name: 'PROVADIS Hochschule', coords: [50.098887, 8.538261], partner: ['MIKE']},
	{name: 'Innovations- und Bildungszentrum Hohen Luckow e.V.', coords: [53.9776247,11.9577735], coordinator: 'TherMemPlus', partner: ['TherMemPlus']},
	{name: 'Leibniz-Institut für Katalyse e. V.', coords: [54.078406,12.1095063], partner: ['TherMemPlus']},
	{name: 'Institut für Energie- und Umwelttechnik e. V.', coords: [51.3895639,6.7245417], partner: ['TherMemPlus']},
	{name: 'HS Apparatetechnik GmbH', coords: [51.8640358,12.6712428], partner: ['TherMemPlus']},
	{name: 'BASF SE', coords: [49.4956015,8.4305842], coordinator: 'CO2Form', partner: ['CO2Form']},
	{name: 'Universität Heidelberg, Organisch-Chemisches Institut; Anorganisch-Chemisches Institut', coords: [49.4168806,8.6702987], partner: ['CO2Form']},
	{name: 'Ludwig-Maximilians-Universität München, Institut für organische Chemie', coords: [48.150806,11.5782413], partner: ['CO2Form']},
	{name: 'hte GmbH', coords: [49.407192,8.6375833], partner: ['CO2Form']},
	{name: 'Klüber Lubrication München SE & Co. KG', coords: [48.0975029,11.517738], coordinator: 'CO2Lubricants', partner: ['CO2Lubricants']},
	{name: 'Audi AG', coords: [48.7829781,11.4116014], partner: ['CO2Lubricants']},
	{name: 'provenion GmbH', coords: [48.09275,11.8232113], partner: ['CO2Lubricants']},
	{name: 'Subitec GmbH', coords: [48.73811,9.1651213], partner: ['CO2Lubricants']},
	{name: 'Technische Universität München, Fakultät für Chemie, Fachgebiet Industrielle Biokatalyse', coords: [48.2684505,11.6668315], partner: ['CO2Lubricants']},
	{name: 'Fraunhofer ICT-IMM', coords: [49.96191,8.2577114], coordinator: 'CarbonCat', partner: ['CarbonCat']},
	{name: 'Julius-Maximilians-Universität Würzburg - Fakultät für Chemie und Pharmazie - Institut für Organische Chemie', coords: [49.7804649,9.9668576], partner: ['CarbonCat']},
  ];
/** Extend Number object with method to convert numeric degrees to radians */
if (Number.prototype.toRadians === undefined) {
    Number.prototype.toRadians = function() { return this * Math.PI / 180; };
}

/** Extend Number object with method to convert radians to numeric (signed) degrees */
if (Number.prototype.toDegrees === undefined) {
    Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
}

var spaceMarkers = true;

var partnerMap;
var setCoords = [];
var colors = ["#ff9f91",
"#490c00",
"#ffb931",
"#2f3600",
"#cbffa7",
"#289500",
"#d4f8ff",
"#001822",
"#001f57",
"#ad75ff",
"#eacbff",
"#610066",
"#af0061"];

function spaceMarker(h){	
	let lat1 = h.coords[0],
	    lon1 = h.coords[1];
	const R = 6371e3; // metres
	for(let i=0;i<setCoords.length;i++){
		const lat2 = setCoords[i][0],
		      lon2 = setCoords[i][1],
		      φ1 = lat1.toRadians(),
		      φ2 = lat2.toRadians(),
		      Δφ = (lat2-lat1).toRadians(),
		      Δλ = (lon2-lon1).toRadians();
		var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
			Math.cos(φ1) * Math.cos(φ2) *
			Math.sin(Δλ/2) * Math.sin(Δλ/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		if(d<10000){
			lat1 = lat1 + 0.02;
			i = 0;
		}
	}
	setCoords.push([lat1, lon1]);
	return [lat1, lon1];
}

$(document).ready(function() {
    // jQuery code goes here
	partnerMap = $('#map').vectorMap({
		backgroundColor: 'transparent',
		regionStyle: {
			initial: {
				"fill": 'rgba(170, 180, 180, 0.1)',
				"fill-opacity": 1,
				"stroke": 'rgb(120, 120, 120)',
				"stroke-width": 0.5,
				"stroke-opacity": 1
			  }
		},
		markerStyle: {
			initial: {
				"stroke-width": 0.3,
			  },
			  hover: {
				"fill-opacity": 0.9,
				"r": 10,
				"cursor": 'pointer'
			  },
		},
		map: 'de_merc',
		markers: plants.map(h => {
			let hmod;
			if (spaceMarkers) {
				hmod = spaceMarker(h);
			}
			return {name: h.name, latLng: hmod}
		}),
		series: {
		  markers: [
			{
			attribute: 'fill',
			values: plants.reduce((p, c, i) => { p[i] = c.partner[0]; return p }, {}),
			scale: {
				'CO2Net+': colors[0],
				
				'CORAL': colors[1],
				'CO2-Selekt': colors[2],
				'TherMemPlus': colors[3],
				
				'Dream Resource': colors[4],
				'CO2Form': colors[5],
				'CO2Lubricants': colors[6],
				'OptiMeOH': colors[7],
				
				'PROPHECY': colors[8],
				'BioElectroPlast': colors[9],
				'MIKE': colors[10],
				'CarbonCat': colors[11],
				'eEthylen': colors[12],
			},
			legend: {
			  vertical: true,
			  title: 'Projekte',
			}
		  },
		  {
			attribute: 'r',
			values: plants.reduce((p, c, i) => { p[i] = c.coordinator == undefined ? 'partner' : 'coordinator'; return p }, {}),
			scale: {
			  'coordinator': 7,
			  'partner': 4,
			},
			legend: {
			  vertical: true,
			  labelRender: function(v){
				return {
				  'coordinator': 'Koordinator',
				  'partner': 'Partner',
				}[v];
			  }
			}
		  }]
		},
		onMarkerTipShow: function(event, label, index){
			var labelText = '<b>'+plants[index].name+'</b><br/>';
			if(plants[index].coordinator != undefined){
				labelText += "Koordinator von " + plants[index].coordinator + "<br/>";
			}
			for(i in plants[index].partner){
				if(plants[index].partner[i] != plants[index].coordinator){
					labelText += "Partner in "+plants[index].partner[i]+"<br/>";
				}
			}
			label.html(labelText);
		},	
	});
});
