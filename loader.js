var plants = [
    {name: 'DECHEMA Gesellschaft für Chemische Technik und Biotechnologie e.V.', contact: 'Herr Dr.-Ing. Alexis Bazzanella', coords: [50.113176, 8.644545], coordinator: 'CO2Net+', partner: ['CO2Net+']},
    {name: 'Universität Kassel - Center for Environmental Systems Research', contact: 'Herr Prof. Dr. Stefan Bringezu', coords: [51.322753, 9.507594], partner: ['CO2Net+']},
    {name: 'Institute for Advanced Sustainability Studies e.V.', contact: 'Frau Dr. Barbara Olfe-Kräutlein', coords: [52.406065, 13.073215], partner: ['CO2Net+']},
	{name: 'Covestro Deutschland AG', contact: 'Herr Dr. Christoph Gürtler', coords: [51.368060, 6.662296], coordinator: 'Dream Resource', partner: ['Dream Resource']},
	{name: 'Rheinisch-Westfälische Technische Hochschule Aachen - CAT Catalytic Center', contact: 'Herr Dr. Marcel Langer', coords: [50.780078, 6.065687], partner: ['Dream Resource']},
	{name: 'Technische Universität Berlin - Institut für Chemie- Fachgebiet Physikalische Chemie / Molekulare Materialwissenschaften', contact: 'Herr Prof. Dr. Reinhard Schomäcker', coords: [52.512342, 13.329624], partner: ['Dream Resource']},
	{name: 'Puren GmbH', contact: 'Herr Dr. Thomas Bommer', coords: [47.777340, 9.198640], partner: ['Dream Resource']},
	{name: 'PSS Polymer Standards Service GmbH', contact: 'Herr Prof. Dr. Thorsten Hofe', coords: [50.026230, 8.216870], partner: ['Dream Resource']},
	{name: 'BYK-Chemie GmbH', contact: 'Herr Dr. Majdi Al-Masri', coords: [51.668250, 6.622900], partner: ['Dream Resource']},
	{name: 'Leibniz-Institut für Katalyse e.V. an der Universität Rostock', contact: 'Frau Prof. Dr. Jennifer Strunk', coords: [51.417767, 6.886584], coordinator: 'PROPHECY', partner: ['PROPHECY']},
	{name: 'Carl von Ossietzky Universität Oldenburg - Institut für Chemie - Technische Chemie 1', contact: 'Herr Prof. Dr. Michael Wark', coords: [53.146873, 8.181317], partner: ['PROPHECY']},
	{name: 'Karlsruher Institut für Technologie - Institut für Technikfolgenabschätzung und Systemanalyse', contact: 'Herr Dr. Andreas Patyk', coords: [49.011076, 8.395544], partner: ['PROPHECY']},
	{name: 'Technische Universität Berlin - Institut für Chemie- Fachgebiet Physikalische Chemie / Molekulare Materialwissenschaften', contact: 'Herr Prof. Dr. Reinhard Schomäcker', coords: [52.512342, 13.329624], partner: ['PROPHECY']},
	{name: 'Siemens AG, CT NTF COS', contact: 'Herr Dr. Günter Schmid', coords: [48.090022, 11.649246], coordinator: 'eEthylen', partner: ['eEthylen']},
	{name: 'Evonik Resource Efficiency GmbH', contact: 'Frau Dr. Dorit Wolf', coords: [51.463147, 7.018986], partner: ['eEthylen']},
	{name: 'Forschungszentrum Jülich GmbH - Helmholtz-Institut Erlangen-Nürnberg - Institut für Energie- und Klimaforschung (IEK 11)', contact: 'Herr Dr. Karl Mayrhofer', coords: [49.460062, 11.028939], partner: ['eEthylen']},
	{name: 'Ruhr-Universität Bochum - Institut für Experimentalphysik IV - Festkörperphysik', contact: 'Frau Prof. Dr. Beatriz Roldan ', coords: [51.445666, 7.261609], partner: ['eEthylen']},
	{name: 'Technische Universität Berlin - Institut für Chemie - Technische Chemie - Fachgebiet Elektrochemie (TC 03)', contact: 'Herr Prof. Dr. Peter Strasser', coords: [52.512532, 13.326945], partner: ['eEthylen']},
	{name: 'Zentrum für Sonnenenergie- und Wasserstoff-Forschung Baden-Württemberg', contact: 'Herr Dr. Ulrich Zuberbühler', coords: [48.738040, 9.107862], coordinator: 'CORAL', partner: ['CORAL']},
	{name: 'Universität Stuttgart - Institut für Polymerchemie - Lehrstuhl für Makromolekulare Stoffe und Faserchemie', contact: 'Herr Prof. Dr. Michael R. Buchmeiser', coords: [48.781647, 9.172498], partner: ['CORAL']},
	{name: 'ifeu - Institut für Energie- und Umweltforschung Heidelberg GmbH', contact: 'Herr Dr. Thomas Fröhlich', coords: [49.435565, 8.678927], partner: ['CORAL']},
	{name: 'Karlsruher Institut für Technologie, Institut für Angewandte Biowissenschaften, Angewandte Biologie', contact: 'Herr Prof. Dr. Johannes Gescher', coords: [49.011920, 8.417030], coordinator: 'BioElectroPlast', partner: ['BioElectroPlast']},
	{name: 'Albert-Ludwigs-Universität Freiburg - Institut für Mikrosystemtechnik', contact: 'Herr Prof. Dr. Sven Kerzenmacher', coords: [47.993544, 7.845950], partner: ['BioElectroPlast']},
	{name: 'Karlsruher Institut für Technologie - Engler-Bunte-Institut', contact: 'Herr Dr. Siegfried Bajohr', coords: [49.011920, 8.417030], coordinator: 'OptiMeOH', partner: ['OptiMeOH']},
	{name: 'Technische Universität Kaiserslautern - Lehrstuhl für Thermische Verfahrenstechnik', contact: 'Herr Prof. Dr. Hans-Jörg Bart', coords: [49.425377, 7.755550], partner: ['OptiMeOH']},
	{name: 'DVGW-Forschungsstelle am Engler-Bunte-Institut des Karlsruher Instituts für Technologie', contact: 'Herr Prof. Dr.-Ing. Thomas Kolb', coords: [49.014558, 8.415127], partner: ['OptiMeOH']},
	{name: 'Infraserv GmbH & Co. Höchst KG', contact: 'Herr Prof. Dr. Thomas Bayer', coords: [50.091051, 8.534681], partner: ['OptiMeOH']},
	{name: 'Mitsubishi Hitachi Power Systems Europe GmbH', contact: 'Herr Dr. Arthur Heberle', coords: [51.5459953, 6.6198574], partner: ['OptiMeOH']},
	{name: 'Universität Stuttgart - Institut für Akustik und Bauphysik - Abt. Ganzheitliche Bilanzierung (GaBi)', contact: 'Herr Aleksandar Lozanovski', coords: [48.781647, 9.172498], partner: ['OptiMeOH']},
	{name: 'Keep it green GmbH', contact: 'Herr Christian Kindsmüller', coords: [48.001270, 11.350840], partner: ['OptiMeOH']},
	{name: 'DBI Gas- und Umwelttechnik GmbH', contact: 'Herr Dipl.Chem. Udo Lubenau', coords: [51.328806, 12.324799], coordinator: 'CO2-Selekt', partner: ['CO2-Selekt']},
	{name: 'Fraunhofer-Institut für Keramische Technologien und Systeme - Institutsteil Hermsdorf', contact: 'Herr Dr. Norman Reger-Wagner', coords: [50.895050, 11.845542], partner: ['CO2-Selekt']},
	{name: 'Walhalla Kalk GmbH & Co. KG', contact: 'Herr Wolfgang Scheurer', coords: [49.03033,12.1348713], partner: ['CO2-Selekt']},
	{name: 'Wünschendorfer Dolomitwerk GmbH', contact: 'Herr Olaf Ortlepp', coords: [50.8031346,12.0897214], partner: ['CO2-Selekt']},
	{name: 'BGH Edelstahl Freital GmbH', contact: 'Herr Sönke Winterhager', coords: [50.9941311,13.6387161], partner: ['CO2-Selekt']},
	{name: 'Johann Bergmann GmbH & Co', contact: 'Herr Dr. Thomas Jendersie', coords: [50.027220, 11.308620], partner: ['CO2-Selekt']},
	{name: 'DECHEMA Forschungsinstitut', contact: 'Herr Dr. Dirk Holtmann', coords: [50.113728,8.63], coordinator: 'MIKE', partner: ['MIKE']},
	{name: 'ifn Forschungs- und Technologiezentrum GmbH', contact: 'Herr Dr. Rolf Hommel', coords: [51.071985, 12.195979], partner: ['MIKE']},
	{name: 'Infraserv GmbH & Co. Höchst KG', contact: 'Herr Prof. Dr. Thomas Bayer', coords: [50.076, 8.534681], partner: ['MIKE']},
	{name: 'Provadis School of International Management and Technology AG', contact: 'Herr Prof. Dr.-Ing. Ralf Ehret', coords: [50.098887, 8.538261], partner: ['MIKE']},
	{name: 'Innovations- und Bildungszentrum Hohen Luckow e.V.', contact: 'Herr Dr. Ralf Boback', coords: [53.9776247,11.9577735], coordinator: 'TherMemPlus', partner: ['TherMemPlus']},
	{name: 'Universität Rostock - Leibniz-Institut für Katalyse e.V.', contact: 'Herr Dr. Sebastian Wohlrab', coords: [54.078406,12.1095063], partner: ['TherMemPlus']},
	{name: 'Universität Duisburg-Essen - Institut für Energie- und Umwelttechnik e.V.', contact: 'Herr Dr. Egon Erich', coords: [51.3895639,6.7245417], partner: ['TherMemPlus']},
	{name: 'HS Apparatetechnik GmbH', contact: 'Herr Daniel Schuckert', coords: [51.8640358,12.6712428], partner: ['TherMemPlus']},
	{name: 'BASF SE, RCS/OH, M313', contact: 'Herr Dr. Thomas Schaub', coords: [49.4956015,8.4305842], coordinator: 'CO2Form', partner: ['CO2Form']},
	{name: 'Ruprecht-Karls-Universität Heidelberg - Anorganisch-Chemisches Institut', contact: 'Herr Prof. Dr. Peter Comba', coords: [49.4168806,8.6702987], partner: ['CO2Form']},
	{name: 'Ludwig-Maximilians-Universität München - Department Chemie und Biochemie - Bereich Organische Chemie', contact: 'Herr Prof. Dr. Oliver Trapp', coords: [48.150806,11.5782413], partner: ['CO2Form']},
	{name: 'hte GmbH', contact: 'Herr Dr. Andreas Kuschel', coords: [49.407192,8.6375833], partner: ['CO2Form']},
	{name: 'Klüber Lubrication München SE & Co. KG', contact: 'Dr. Stefan Grundei', coords: [48.0975029,11.517738], coordinator: 'CO2Lubricants', partner: ['CO2Lubricants']},
	{name: 'AUDI Aktiengesellschaft - I/EG-X1 - Nachhaltige Produktkonzepte / Werkstoffe / Recycling', contact: 'Frau Dr. Simone Müller-Hellwig', coords: [48.7829781,11.4116014], partner: ['CO2Lubricants']},
	{name: 'Subitec GmbH', contact: 'Herr Peter Bergmann', coords: [48.73811,9.1651213], partner: ['CO2Lubricants']},
	{name: 'Technische Universität München - Werner Siemens–Lehrstuhl für Synthetische Biotechnologie', contact: 'Herr Prof. Dr. Thomas Brück', coords: [48.2684505,11.6668315], partner: ['CO2Lubricants']},
	{name: 'Fraunhofer-Institut für Mikrotechnik und Mikrosysteme IMM', contact: 'Herr Dr. Thomas H. Rehm', coords: [49.96191,8.2577114], coordinator: 'CarbonCat', partner: ['CarbonCat']},
	{name: 'Julius-Maximilians-Universität Würzburg - Institut für Organische Chemie', contact: 'Frau Prof. Dr. Anke Krüger', coords: [49.7804649,9.9668576], partner: ['CarbonCat']},
	{name: 'Herr Dr. Benjamin Sahlmann', contact: 'Herr Dr. Benjamin Sahlmann', coords: [53.945032,10.291509], partner: ['CarbonCat']},
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
"#3f4610",
"#cbffa7",
"#289500",
"#d4f8ff",
"#203842",
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
			  cssClass: 'legendWhite',
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
			  cssClass: 'legendWhite',
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
