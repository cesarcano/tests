var creArray = '';
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
const gasolinerasArray = [
   {
     "marca": "G500",
     "direccion": "Prolongacion 4ta Av. Sur esquina Camino al Tubo SN, Fraccionamiento las Hortensias, Tapachula, Chiapas, 30797",
     "lat": 14.89253,
     "lng": -92.274864
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvrd. Chahue, Lote 23-A, Esquina Calle Mixteco",
     "lat": 15.761839,
     "lng": -96.12841
   },
   {
     "marca": "G500",
     "direccion": "Avenida Carlos Salinas de Gortari 1, Granjas del Pescador, Puerto Escondido, Oaxaca, 71980",
     "lat": 15.867636,
     "lng": -97.07998
   },
   {
     "marca": "G500",
     "direccion": "Carretera Federal Costera del Pacífico tramo Puerto Escondido - Pochutla Km 201 2, Pochutla, San Antonio Tonameca, Oaxaca, 70946",
     "lat": 15.87198,
     "lng": -97.07674
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 63 Carret. Del Pacifico S/N, Col. Loc. Santa Rosa de Lima",
     "lat": 16.08476,
     "lng": -97.65502
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Tercera Nte. y Segunda Ote. No.11",
     "lat": 16.23469,
     "lng": -93.89761
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Oaxaca-Pto.Angel Km.100, Col. No",
     "lat": 16.34075,
     "lng": -96.59983
   },
   {
     "marca": "G500",
     "direccion": "Km.1 Carretera Pinotepa Nacional - Acapulco 410, Sección Tercera, Pinotepa Nacional, Oaxaca, 71600",
     "lat": 16.34946,
     "lng": -98.06209
   },
   {
     "marca": "G500",
     "direccion": "Carretera Tuxtla Gutiérrez a Villaflores Km 66, Jesús María, Villaflores, Chiapas, 30493",
     "lat": 16.385612,
     "lng": -93.28347
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Cristobal Colon, Col. Sc",
     "lat": 16.439459,
     "lng": -95.45961
   },
   {
     "marca": "G500",
     "direccion": "Carretera Nacional Acapulco Pinotepa Km 20, San Francisco, Cuajinicuilapa, Guerrero, 41940",
     "lat": 16.581894,
     "lng": -98.8136
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Costera Del Pacifico Km. 80 Mas 800, Col. Sc",
     "lat": 16.583887,
     "lng": -94.94032
   },
   {
     "marca": "PEMEX",
     "direccion": "Periferico Sur Poniente # 22, Col. Fracc. San Jose Betania",
     "lat": 16.7213,
     "lng": -92.65286
   },
   {
     "marca": "G500",
     "direccion": "Av Quinta Norte Poniente 2285, Los Sabinos, Tuxtla Gutiérrez, Chiapas, 29030",
     "lat": 16.759233,
     "lng": -93.12046
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana #4655, Col. Fraccionamiento la Gloria",
     "lat": 16.76003,
     "lng": -93.177025
   },
   {
     "marca": "G500",
     "direccion": "Calzada al Sumidero esquina Libramiento Norte 1962, Lomas del Valle, Tuxtla Gutiérrez, Chiapas, 29060",
     "lat": 16.770344,
     "lng": -93.102776
   },
   {
     "marca": "G500",
     "direccion": "Km 1 Carr. San Luis Acatlán - Marquelia 35, Emiliano Zapata, San Luis Acatlán, Guerrero, 41600",
     "lat": 16.797915,
     "lng": -98.73914
   },
   {
     "marca": "PEMEX",
     "direccion": "Paraje Llano Rana Camino Rural San Sebastian Rio Dulce, Col. ",
     "lat": 16.799898,
     "lng": -97.077614
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. a Pto. Marquez Entrada Revolcadero S/N, Col. Granjas Del Marquez",
     "lat": 16.801718,
     "lng": -99.82241
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Acapulco-Pinotepa Nal. Km. 11+900 S/N, Col. Nicolas Bravo",
     "lat": 16.830105,
     "lng": -99.75737
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Cayaco-Puerto Marques No. 208, Col. Ejidos Cayaco O Coacoyular",
     "lat": 16.83136,
     "lng": -99.81325
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Fed.Acapulco-Pinotepanacional Km. 6 #217, Col. Cayaco",
     "lat": 16.852047,
     "lng": -99.79984
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 1610, Col. Fracc. Marroquin",
     "lat": 16.864635,
     "lng": -99.87893
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc # 1610, Col. Fracc. Marroquin",
     "lat": 16.864635,
     "lng": -99.87893
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Chilpancingo Acapulco Km.50, Col. El Reten",
     "lat": 16.918999,
     "lng": -99.8171
   },
   {
     "marca": "G500",
     "direccion": "Carretera Internacional Km 20.3 SN, Santiago Ixtaltepec, Teotitlán del Valle, Oaxaca, 70420",
     "lat": 17.003822,
     "lng": -96.5394
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Guadalupe Hinojosa de Murat # 302, Col. S/C",
     "lat": 17.019613,
     "lng": -96.73224
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Perez Gasga N0. 2025, Col. Guadalupe Yutee",
     "lat": 17.03598,
     "lng": -97.9187
   },
   {
     "marca": "G500",
     "direccion": "Carretera Alfonso Pérez Gasga 2050, Guadalupe Yutee, Putla Villa de Guerrero, Oaxaca, 71006",
     "lat": 17.037212,
     "lng": -97.91637
   },
   {
     "marca": "G500",
     "direccion": "Carretera a Zachila 100, Rufino Tamayo, Santa Cruz Xoxocotlán, Oaxaca, 71230",
     "lat": 17.051437,
     "lng": -96.71679
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Nal.Acapulco-Zihuatanejo Km.106+040 # 2, Col. Las Tunas",
     "lat": 17.23701,
     "lng": -100.63008
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida a Chalcatongo No. 410, Col. Barrio San Bartolo",
     "lat": 17.263449,
     "lng": -97.665924
   },
   {
     "marca": "G500",
     "direccion": "Carretera Luis Gil Perez 675, Ranchería Ixtacomitan 1ra Sección, Centro, Tabasco, 86280",
     "lat": 17.462223,
     "lng": -91.42933
   },
   {
     "marca": "ORSAN",
     "direccion": "Av. Juarez 199,Centro, PALENQUE, Chiapas.",
     "lat": 17.508137,
     "lng": -91.98829
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.25.5 Carret.Ixpantepec Nieves-Silacayoapam S/N, Col. Lado Izquierdo",
     "lat": 17.51684,
     "lng": -97.13497
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Chilapa Acatlan Km.1, Col. Valle Dorado",
     "lat": 17.605455,
     "lng": -99.17475
   },
   {
     "marca": "PEMEX",
     "direccion": "Paseo de las Salinas Lt 3 Mza 1 Supermanzana Ii, Col. Fracc. las Salinas",
     "lat": 17.639317,
     "lng": -101.5637
   },
   {
     "marca": "PEMEX",
     "direccion": "Division Del Norte # 1, Col. La Piedra",
     "lat": 17.66104,
     "lng": -99.67374
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Esq. Benito Juárez y Alatorre S/N, entre Circunvalación y Aquilés Serdán",
     "lat": 17.763506,
     "lng": -92.58788
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 135 Km. 120+300 Km. 120.300, Col. ",
     "lat": 17.783684,
     "lng": -96.95188
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 135 Km. 120+300 Km. 120.300, Col. ",
     "lat": 17.783684,
     "lng": -96.95188
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrte.Internacional Mexico-Oax.Km.313.400, Col. No",
     "lat": 17.813541,
     "lng": -97.78511
   },
   {
     "marca": "G500",
     "direccion": "Carretera Principal 1, La Curva, Ciudad Pemex Macuspana, Tabasco, 86721",
     "lat": 17.873924,
     "lng": -92.48655
   },
   {
     "marca": "G500",
     "direccion": "Carretera Estatal Villahermosa Reforma km20+0, Ranchería Río Tinto 1ra Sección, Tabasco, Tabasco, 86283",
     "lat": 17.89936,
     "lng": -93.057304
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera 195 Villahermosa Tuxtla Gutierrez Km. 7.000, Col. ",
     "lat": 17.945929,
     "lng": -92.91693
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Vilahermosa - Escarcega Km. 17+132, Col. Sc",
     "lat": 17.949326,
     "lng": -92.786804
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Coatz.-S.Cruz,Tramo Coatzacoalcos-Acayucan Km. 51.500, Col. ",
     "lat": 17.95906,
     "lng": -94.80954
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Melchor Ocampo No.77 y Privada de las Estrellas, Col. .",
     "lat": 17.961168,
     "lng": -102.213005
   },
   {
     "marca": "G500",
     "direccion": "Av. Periférico Carlos Pellicer 431, Tamulte de las Barrancas, Centro, Tabasco, 86090",
     "lat": 17.967886,
     "lng": -92.94804
   },
   {
     "marca": "G500",
     "direccion": "Periferico Carlos Pellicer Camara 1112, Primero de Mayo, Centro, Tabasco, 86190",
     "lat": 17.968231,
     "lng": -92.94186
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Periférico Carlos Pellicer No.205",
     "lat": 17.97126,
     "lng": -92.92356
   },
   {
     "marca": "G500",
     "direccion": "Adolfo Mateos, Esquina Niños Heroes 101, Poblado Chichicapa, Comalcalco, Tabasco, 86670",
     "lat": 17.974766,
     "lng": -92.93932
   },
   {
     "marca": "BP",
     "direccion": "Velodromo Cd. Deportiva Fracc. Des. Urb. Matias Leon S/N, Col. Primero De Mayo, CP 86190, Villahermosa, Tabasco, México.",
     "lat": 17.977188,
     "lng": -92.94336
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.7 Libramiento Sicartsa Lazaro Cardenas la Orilla, Col. Condesa",
     "lat": 17.98518,
     "lng": -102.23347
   },
   {
     "marca": "BP",
     "direccion": "Av Adolfo Ruiz Cortinez Esq. Periférico, Miguel Hidalgo, CP 86126, Centro, Tabasco, México.",
     "lat": 17.987328,
     "lng": -92.969955
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Rodolfo Ruiz Cortines 1418,Atasta, VILLAHERMOSA, Tabasco.",
     "lat": 17.989582,
     "lng": -92.94956
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Paseo Tabasco 906,Jesus Garcia, VILLAHERMOSA, Tabasco.",
     "lat": 17.991802,
     "lng": -92.93249
   },
   {
     "marca": "G500",
     "direccion": "Carretera Villahermosa-Nacajuca 1203, Saloya 1ra. Seccion, Nacajuca, Tabasco, 86245",
     "lat": 17.993202,
     "lng": -92.948975
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Avila Camacho No. 91, Col. Cuauhtemoc",
     "lat": 17.99486,
     "lng": -94.54125
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Cardenas Villahermosa Km 124 + 740,S/N, CARDENAS, Tabasco.",
     "lat": 17.998453,
     "lng": -93.34946
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Periférico Carlos Molina S/N, Esq. Con Carretera Federal Huimanguillo ",
     "lat": 17.998589,
     "lng": -93.386765
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera Federal Villahermosa-Cárdenas km 132, Cucuyulapa, Tabasco.",
     "lat": 17.999844,
     "lng": -93.280396
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera Transismica KM. 57.5 S/N,S/C, VILLAHERMOSA, Tabasco.",
     "lat": 18.007761,
     "lng": -92.97586
   },
   {
     "marca": "G500",
     "direccion": "Av. Revolución 910 1809, Tamulte de las Barrancas, Centro, Tabasco, 86150",
     "lat": 18.009394,
     "lng": -92.919136
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Reforma -Dos Bocas Km. 4.468, Col. Sc",
     "lat": 18.010748,
     "lng": -93143
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Agua Dulce-Cardenas Km 70, Col. Ejido Pejelagartero 2da Seccion",
     "lat": 18.0304,
     "lng": -93816
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Coatzacoalcos-Villahermosa Km. 37.5,S/N, AGUA DULCE, Veracruz.",
     "lat": 18.053225,
     "lng": -94.12266
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Villahermosa-Nacajuca, Margen Derecho, Col. .",
     "lat": 18.053686,
     "lng": -92.93501
   },
   {
     "marca": "PEMEX",
     "direccion": "Tramo Carretero Acalpican D Morelos-Colima # 200, Col. Sin Colonia",
     "lat": 18.076918,
     "lng": -102.74485
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Coatzacoalcos-Villahermosa Km. 6+383,S/N, COATZACOALCOS, Veracruz.",
     "lat": 18.09881,
     "lng": -94.38945
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Transismica Km. 57.5,S/N, COATZACOALCOS, Veracruz.",
     "lat": 18.114885,
     "lng": -94.446915
   },
   {
     "marca": "ORSAN",
     "direccion": "Juarez Esq. Abasolo S/N,Centro, COATZACOALCOS, Veracruz.",
     "lat": 18.138927,
     "lng": -94.43434
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolong. Av. Juarez Esq. Mariano Abasolo, Col. .",
     "lat": 18.14407,
     "lng": -94.42782
   },
   {
     "marca": "G500",
     "direccion": "Carretera Samaria-Amatitan Tramo Cunduacan - Jalpa Km 9+765, Ranchería Chacalapa 1ra sección, Jalpa de Méndez, Tabasco, 86208",
     "lat": 18.149067,
     "lng": -93.10667
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 0.5 Carret. Ajuchitlan-Cd. Altamirano, Col. .",
     "lat": 18.161684,
     "lng": -100.50499
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion de Constitucion #131, Col. Barrio la Guadalupe",
     "lat": 18.17562,
     "lng": -93.06413
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tehuacan - Huajapan de Leon Km. 64+300, Col. Sc",
     "lat": 18.195951,
     "lng": -97.6805
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Villahermosa-Escarcega Km 199, Col. S/D",
     "lat": 18.226088,
     "lng": -91.47983
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Federal y Camino las Delicias, Col. .",
     "lat": 18.245813,
     "lng": -93.210014
   },
   {
     "marca": "G500",
     "direccion": "Carretera Comalcalco a Tecolutilla 15, Miguel Hidalgo, Villa Tecolutilla Comalcalco, Tabasco, 86640",
     "lat": 18.269482,
     "lng": -93.3145
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 12+100 Carret. Comalcalco-Villa Tecolutilla, Col. Betania",
     "lat": 18.2759,
     "lng": -93.31953
   },
   {
     "marca": "BP",
     "direccion": "Km. 1 Carr. A Chiautla-Puebla S/N C.P. 74730 Chiautla, Puebla, México.",
     "lat": 18.315224,
     "lng": -98.618965
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Km. 114, Col. Seccion Tercera",
     "lat": 18.326971,
     "lng": -98.269485
   },
   {
     "marca": "PEMEX",
     "direccion": "Clzda. Del Panteon S/N Esq. Perif. Pte., Col. Guadalupe",
     "lat": 18.352608,
     "lng": -99.55355
   },
   {
     "marca": "PEMEX",
     "direccion": "Periferico Nte. S/N., Col. .",
     "lat": 18.354305,
     "lng": -99.52767
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 61+700  Carret. Iguala-Cd. Altamirano, Col. .",
     "lat": 18.36265,
     "lng": -99.85603
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Cd. Altamirano-San Lucas Km.1.5, Col. Vicente Riva Palacio",
     "lat": 18.377327,
     "lng": -100.669044
   },
   {
     "marca": "BP",
     "direccion": "Km. 25 Carr. Tehuacan-Teotitlan, Centro, C.P. 75910, Ajalpan, Puebla, México.",
     "lat": 18.37887,
     "lng": -97.268585
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.239 Villahermosa Escarcega En la Rancheria, Col. Infonavit Palmas Iii",
     "lat": 18.388002,
     "lng": -91.19202
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Jose Garcia Crespo No.1200, Col. Buenos Aires",
     "lat": 18.47259,
     "lng": -97.394554
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 249 Carret. Mexico-Tehuacan San Lorenzo Teotip, Col. .",
     "lat": 18.47523,
     "lng": -97.43257
   },
   {
     "marca": "PEMEX",
     "direccion": "Escarcega-Chetumal, Col. ",
     "lat": 18.499937,
     "lng": -89.342064
   },
   {
     "marca": "FULLGAS",
     "direccion": "Av. Héroes No. 282 y 282-A, Col. Adolfo López Mateos Chetumal, Camelias 282 y 282a, Adolfo Lopez Mateos, 77010 Chetumal, Q.R.",
     "lat": 18.509092,
     "lng": -88.29433
   },
   {
     "marca": "FULLGAS",
     "direccion": "Lote 67 del Ejido de Santa Elena poblado de Huay Pix, Othón P. Blanco, Q.R.",
     "lat": 18.519974,
     "lng": -88.42122
   },
   {
     "marca": "FULLGAS",
     "direccion": "Av. Maxuxac Lotes 8,9 y 10, Col. Solidaridad, Av. Machuxac 48, Proterritorio, 77086 Chetumal, Q.R.",
     "lat": 18.532043,
     "lng": -88.28579
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Nal. Mexico-Acapulco Km. 158+500, Col. Los Arcos",
     "lat": 18.568405,
     "lng": -99.603455
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Mex.-Tehuacan Km. 229, Col. .",
     "lat": 18.582676,
     "lng": -97.5851
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 44+400 Tramo Puente Ixtla-Iguala Auto. Mex-Aca, Col. S/C",
     "lat": 18.603447,
     "lng": -99.37382
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Suchiate Km. 65, Col. .",
     "lat": 18.608767,
     "lng": -98.46546
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Chinameca-Tepalcingo # 15, Col. Chinameca",
     "lat": 18.62763,
     "lng": -99003
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Chinameca-Tepalcingo # 15, Col. Chinameca",
     "lat": 18.62763,
     "lng": -99003
   },
   {
     "marca": "PEMEX",
     "direccion": "Frac.Pred.Urb.S/N Frac.A Carr.Fed.Carmen-Champoton Km. 42.000, Col. ",
     "lat": 18.6434,
     "lng": -91.79903
   },
   {
     "marca": "LA GAS",
     "direccion": "Av. Isla de Tris No. 111 Col. Francisco I. Madero, C.P. 24190, localidad Ciudad del Carmen, Campeche ",
     "lat": 18.64817,
     "lng": -91.80485
   },
   {
     "marca": "FULLGAS",
     "direccion": "Av. Nardos, Esquina Av. Palmeras S/N, Fracc. Palmira Cp: 24154.",
     "lat": 18.65947,
     "lng": -91.79413
   },
   {
     "marca": "G500",
     "direccion": "Mellado 21, Centro de Zongolica, Zongolica, Veracruz, 95000",
     "lat": 18.666895,
     "lng": -97.000694
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 40 Carrt. Tecoman-Playa Azul, Col. S/D",
     "lat": 18.674957,
     "lng": -103.68095
   },
   {
     "marca": "OXXO GAS",
     "direccion": "KM 40 CARRT. TECOMAN-PLAYA AZUL S/D 60800",
     "lat": 18.675045,
     "lng": -103.680855
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 30 Esq. Av. 19 (Libramiento) S/N, Col. S/C",
     "lat": 18.6849,
     "lng": -88.39508
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Iguala Km 97.7, Col. S/C",
     "lat": 18.72537,
     "lng": -99.257416
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Sta. Barbara -Izucar de Matamoroskm. 89+, Col. Sc",
     "lat": 18.736574,
     "lng": -98.82212
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Carret. Cuernavaca Chilpancingo  Km. 21.790 ",
     "lat": 18.756363,
     "lng": -99.24295
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 70 Carrt. Veracruz-Alvarado Calle J Carranza, Col. .",
     "lat": 18.77513,
     "lng": -95.76503
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 53.3 Carr. Tehuacan-Veracruz., Col. .",
     "lat": 18.791515,
     "lng": -97.193954
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km. 4+300 S/N",
     "lat": 18.796463,
     "lng": -98.91644
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Crucero de Tezoyuca Tepetzingo S/N",
     "lat": 18.802595,
     "lng": -99.19783
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera federal Carmen-Champoton Km. 42, Villa de la Isla Aguada, Libre Federal Ciudad del Carmen - Champotón km. 42+86, Isla Aguada, 24327 Carmen, Camp.",
     "lat": 18.808117,
     "lng": -91.470726
   },
   {
     "marca": "REPSOL",
     "direccion": "Autopista México-Cordoba Km 247",
     "lat": 18.81609,
     "lng": -97.21996
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 6 Carrt. Moralito-Cotaxtla, Col. S/D",
     "lat": 18.832706,
     "lng": -96.39247
   },
   {
     "marca": "G500",
     "direccion": "Carretera Aeropuerto - Mariano Matamoros Km. 0+200 13, Real del Puente, Xochitepec, Morelos, 62790",
     "lat": 18.83301,
     "lng": -99.26164
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol.de Sur 13/Primo de V. y T. Penafiel No. 1596, Col. Francisc Ferrer Guardia",
     "lat": 18.83758,
     "lng": -97.09373
   },
   {
     "marca": "BP",
     "direccion": "Camino Nacional 207, Union Obrera Campesina, C.P. 94732, Rio Blanco, Veracruz, México.",
     "lat": 18.838501,
     "lng": -97.136795
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Libramiento Cuautla-Izucar de Matamoros Km. 0.2 No.5",
     "lat": 18.85028,
     "lng": -98.9354
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. No Reeleccion Num. 385, Col. San Francisco",
     "lat": 18.850367,
     "lng": -99.179085
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Fdo. Gtz. Barrios T Calz. Ruiz Galindo #56-1, Col. S/D",
     "lat": 18.860428,
     "lng": -97.06161
   },
   {
     "marca": "PEMEX",
     "direccion": "Autop.Cordoba Veracruz Km.0+100 Cruce Carr. Fed., Col. .",
     "lat": 18.860771,
     "lng": -96.87331
   },
   {
     "marca": "BP",
     "direccion": "Carretera Cordoba-Potrero No.29 Km2+300, Amatlan De Los Reyes, Veracruz, México.",
     "lat": 18.873177,
     "lng": -96.86806
   },
   {
     "marca": "REPSOL",
     "direccion": "Boulevard Cordoba-Penuela No. 4358",
     "lat": 18.87498,
     "lng": -96.9162
   },
   {
     "marca": "REPSOL",
     "direccion": "Carretera Santa Ana-Orizaba No. 1188",
     "lat": 18.877115,
     "lng": -97.10839
   },
   {
     "marca": "BP",
     "direccion": "Blvd. Othon Arroniz N, Zona Industrial, C.P. 94690, Veracruz, Veracruz, México.",
     "lat": 18.880783,
     "lng": -96.9234
   },
   {
     "marca": "PEMEX",
     "direccion": "Par Vial Jiutepec # 44, Col. Atlacomulco",
     "lat": 18.889475,
     "lng": -99.199875
   },
   {
     "marca": "REPSOL",
     "direccion": "Avenida Ejercito Nacional No. 1",
     "lat": 18.8906,
     "lng": -96.80165
   },
   {
     "marca": "BP",
     "direccion": "Avenida 23, 1810, San Dimas, C.P. 94500, Veracruz, Veracruz, México.",
     "lat": 18.892101,
     "lng": -96.95189
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Puebla-Tehuacan Km. 52+100, Col. San Martin",
     "lat": 18.89596,
     "lng": -97.76967
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Niños Héroes No. 803",
     "lat": 18.89834,
     "lng": -98.43322
   },
   {
     "marca": "BP",
     "direccion": "Bulevar Cordoba-Fortin 4021-C, Santa Leticia, C. P. 94476, Fortín, Veracruz, México.",
     "lat": 18.901009,
     "lng": -96.9593
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle El Real Esquina Con Canal Amela S/N, Col. San Francisco Javier",
     "lat": 18.906485,
     "lng": -103.877495
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino a San Pedro Benito Juarez # 2, Col. S/C",
     "lat": 18.910791,
     "lng": -98.47414
   },
   {
     "marca": "PEMEX",
     "direccion": "Benito Juarez No.315, Col. Primera de San Miguel",
     "lat": 18.928513,
     "lng": -99.7688
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Netzahualcotl S/N Km.283+000 Carr.Libre Colima, Col. .",
     "lat": 18.934608,
     "lng": -103.970634
   },
   {
     "marca": "BP",
     "direccion": "Boulevard Atlixco 2808, C.P. 74367, Atlixco, Puebla, México.",
     "lat": 18.936049,
     "lng": -98.40535
   },
   {
     "marca": "BP",
     "direccion": "Carr. Xochimilco-Oaxtepec esq. Juan N. Mendez, C.P. 62540, Tlayacapan, Morelos, México.",
     "lat": 18.941422,
     "lng": -98.977394
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Colima-Manzanillo Km 43+100, Col. S/D",
     "lat": 18.943619,
     "lng": -103.92234
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Acapulco Km 84+330, Col. Pob. Ahuatepec",
     "lat": 18.957254,
     "lng": -99.20295
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion Avenida Madero S/N, Col. Rancho la Huerta",
     "lat": 18.961704,
     "lng": -99.576
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion 11 Sur # 14120, Col. Jardines de San Roman",
     "lat": 18.971914,
     "lng": -98.26225
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidlago S/N, Col. Benito Juarez",
     "lat": 18.977087,
     "lng": -96.727455
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Estatal Puerta de Caleras-Madrid Km 1, Col. .",
     "lat": 18.978241,
     "lng": -103.85855
   },
   {
     "marca": "SUPERCARGA",
     "direccion": "Prolongación dela 14 Sur 9302, Granjas de San Isidro, 72470 Puebla, Pue. ",
     "lat": 18.990597,
     "lng": -98.21616
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Morelia Lazaro Cardenas Km. 152+68, Col. Sc",
     "lat": 18.998287,
     "lng": -102.08045
   },
   {
     "marca": "BP",
     "direccion": "Autopista México-Córdoba, KM 158.2, C.P. 75119, Tepeaca, Puebla, México",
     "lat": 19.000422,
     "lng": -97.88308
   },
   {
     "marca": "BP",
     "direccion": "Blvd. Atlixcayotl 4504 Tonantzintla C.P. 72810, San Andrés Cholula, Puebla, México.",
     "lat": 19.015797,
     "lng": -98.25704
   },
   {
     "marca": "G500",
     "direccion": "Carretera Valsequillo esquina 16 de Septiembre SN, Las Palmas, Puebla, Puebla, 72550",
     "lat": 19.0206,
     "lng": -98.211655
   },
   {
     "marca": "SUPERCARGA",
     "direccion": "Calle 11 Sur 1-A, Mayorazgo, 72492 Puebla, Pue. ",
     "lat": 19.022112,
     "lng": -98.22686
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Orizaba Cuerpo B No. 1308, Col. La Venta",
     "lat": 19.031654,
     "lng": -98.03172
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Villa Madero-Caracuaro Km 82.5 # 1833, Col. S/C",
     "lat": 19.03169,
     "lng": -101.12949
   },
   {
     "marca": "BP",
     "direccion": "Carretera Federal Puebla-Tehuacan 1590, Col. Ex  Hcienda las Ánimas, Puebla, Puebla, México.",
     "lat": 19.044878,
     "lng": -98.07069
   },
   {
     "marca": "G500",
     "direccion": "Avenida Juarez 2914, La Paz, Puebla, Puebla, 72160",
     "lat": 19.046045,
     "lng": -98.20956
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Cuatro Caminos-Apatzingan Km. 196.300, Col. ",
     "lat": 19.057142,
     "lng": -102.32456
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Héroes del 5 de Mayo No.1101",
     "lat": 19.066093,
     "lng": -98.13752
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 18+500 Carr. Mexico-Santiago Tianguistenco, Col. .",
     "lat": 19.07038,
     "lng": -99.3871
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. a San Felipe # 2615-B, Col. Rancho Colorado",
     "lat": 19.07309,
     "lng": -98.219086
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Esteban Antuñano No. 243, Col. Libertad",
     "lat": 19.073956,
     "lng": -98.23904
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel de la Madrid Hurtado # 384, Col. Tapeixtles",
     "lat": 19.074095,
     "lng": -104.284096
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico Veracruz Ex Rancho San Pablo de Orteg, Col. .",
     "lat": 19.07458,
     "lng": -98.16069
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Carretera Veracruz-El Tejar no. 6114",
     "lat": 19.089188,
     "lng": -96.153465
   },
   {
     "marca": "BP",
     "direccion": "Lateral De Autopista Mexico Puebla 6304, Puebla, Puebla, México.",
     "lat": 19.090626,
     "lng": -98.22145
   },
   {
     "marca": "BP",
     "direccion": "4 Oriente 2427, Resurgimiento Cd Norte, C.P. 72370, Puebla, Puebla, México.",
     "lat": 19.092487,
     "lng": -98.2314
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Amozoc-Teziutlan Km 9+650, Col. S/C",
     "lat": 19.093172,
     "lng": -97.96824
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Fed.Puebla-Tlaxcala San Pablo Xochimehuapan, Col. Ninguna",
     "lat": 19.09401,
     "lng": -98.20636
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Real a San Jeronimo # 1216, Col. San Jeronimo Calera",
     "lat": 19.099054,
     "lng": -98.22254
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Francisco I. Madero Num. 1240, Col. Las Delicias",
     "lat": 19.113943,
     "lng": -102.37596
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Principal S/N., Col. S/D",
     "lat": 19.12391,
     "lng": -97.69666
   },
   {
     "marca": "BP",
     "direccion": "Km. 11.5 Carretera Puebla-Tlaxcala 222, 5 de mayo, C.P. 72270 Cuautlancingo, Puebla. México.",
     "lat": 19.135145,
     "lng": -98.222595
   },
   {
     "marca": "REPSOL",
     "direccion": "Paseo del Ejército Mexicano, 217",
     "lat": 19.141014,
     "lng": -96.11887
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas Esq. Manuel Nieto, Col. Tamsa",
     "lat": 19.14973,
     "lng": -96.12769
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Jardines de Virginia L-280 # 243, Col. Fracc. Jardines de Virginia",
     "lat": 19.1558,
     "lng": -96.111046
   },
   {
     "marca": "BP",
     "direccion": "Av. Eje 1 Poniente #1252, C.P. 91779, Col. Las Palmas El Coyol, Veracruz, México.",
     "lat": 19.161339,
     "lng": -96.15348
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Stgo. Tianguistengo-Chapultepec, Col. San Bartolito Tlaltelolco",
     "lat": 19.193684,
     "lng": -99.537796
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.12 Carr. Huamantla-La Venta, Col. Trinidad Sanchez Santos",
     "lat": 19.217342,
     "lng": -97.91415
   },
   {
     "marca": "SUPERCARGA",
     "direccion": "Autopista México-Puebla, Santa Ana Xalmimilulco, 74169 Santa Ana Xalmimilulco, Pue. ",
     "lat": 19.227573,
     "lng": -98.376724
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Acámbaro #350, Col. Santa Amalia. Colima, Colima",
     "lat": 19.229858,
     "lng": -103.70381
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Federal No. 80 Santa Cruz Melaque Km.258+200, Col. .",
     "lat": 19.239246,
     "lng": -104.70965
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 2 Carretera Tacambaro-Patzcuaro, Col. .",
     "lat": 19.246555,
     "lng": -101.46561
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida San Fernando Num. 175, Col. Guadalajarita",
     "lat": 19.249865,
     "lng": -103.719025
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Estado de Mexico # 433 Ote., Col. Barrio de Santiaguito",
     "lat": 19.25067,
     "lng": -99.590195
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Benito Juarez # 784, Col. Villas Del Rio",
     "lat": 19.252256,
     "lng": -103.74553
   },
   {
     "marca": "BP",
     "direccion": "Jose Maria Luis Mora (Calzada Pacifico) 1312, Col. San Antonio Buenavista, C.P. 50266, Toluca, Estado de México.",
     "lat": 19.25677,
     "lng": -99.70833
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Maria Luis Mora #148, Col. Ocho Cedros. Toluca, Estado de México",
     "lat": 19.256962,
     "lng": -99.66717
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Jose Maria Luis Mora Numero 148, Col. Ocho Cedros",
     "lat": 19.257084,
     "lng": -99.6671
   },
   {
     "marca": "TOTAL",
     "direccion": "Heriberto Enríquez 1017, Emiliano Zapata, 50261 Toluca de Lerdo, Méx.",
     "lat": 19.258587,
     "lng": -99.64335
   },
   {
     "marca": "PEMEX",
     "direccion": "Plan de Labores No. 219, Col. Barrio de Santa Maria",
     "lat": 19.259085,
     "lng": -99.47444
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Fed. Amozoc-Teziutlan Km 40+710, Col. S/C",
     "lat": 19.259172,
     "lng": -97.74858
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Cuauhtemoc Mz.167,Lt.33,No.1, Col. San Miguel Xico Iv Seccion",
     "lat": 19.26252,
     "lng": -98.95477
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Nacional No.319, Col. Tanda Grande",
     "lat": 19.267263,
     "lng": -98.417206
   },
   {
     "marca": "TOTAL",
     "direccion": "82 Av de Las Partidas Lerma de Villada, Isidro Fabela, 52004 Toluca de Lerdo, Méx.",
     "lat": 19.268847,
     "lng": -99.61047
   },
   {
     "marca": "BP",
     "direccion": "Carret. Mexico-Toluca Km. 52.125, C.P. 52140, San Mateo Atenco, Estado de México.",
     "lat": 19.269905,
     "lng": -99.73962
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Maria Ahumada de Gomez N 40, Col. La Frontera",
     "lat": 19.271149,
     "lng": -103.7328
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. 5 de Mayo Esq. Av. de las Torres, San Francisco Coaxusco. Metepec, Estado de México",
     "lat": 19.272293,
     "lng": -99.630844
   },
   {
     "marca": "PEMEX",
     "direccion": "Felipe Angeles S/N Lt. 12 Mz. 45, Col. Emiliano Zapata",
     "lat": 19.273687,
     "lng": -98.888435
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Solidaridad #605, Santa Ana Tlapaltitla. Metepec, Estado de México",
     "lat": 19.273857,
     "lng": -99.629005
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Federal a Cuernavaca y Vicente Guerrero No.2, Col. Chimalcoyotl",
     "lat": 19.276201,
     "lng": -99.16678
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Benito Juarez # 39, Col. Barrio de San Pedro",
     "lat": 19.278439,
     "lng": -99.528755
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Venustiano Carranza No. 400 Ote., Col. Universidad",
     "lat": 19.27884,
     "lng": -99.6516
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Fed. Mexico-Toluca Km 48+700, Col. Amomolulco",
     "lat": 19.2813,
     "lng": -99.4896
   },
   {
     "marca": "NEXUM",
     "direccion": "Paseo San Buenaventura #201, Col. Vicente Guerrero, Toluca, Edo. Méx.",
     "lat": 19.281893,
     "lng": -99.67314
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 88.5 Autopista Mexico-Puebla, Col. Santa Catarina Hueyatzacoalco",
     "lat": 19.282732,
     "lng": -98.45135
   },
   {
     "marca": "BP",
     "direccion": "Av Las Torres 1200, La Deportiva, C.P. 51350, Zinacantepec, Estado de México.",
     "lat": 19.28307,
     "lng": -99.70039
   },
   {
     "marca": "BP",
     "direccion": "Carretera México  Toluca km 52 125 San Mateo Atenco, C.P. 52104, San Mateo Atenco, Estado de México, México.",
     "lat": 19.285067,
     "lng": -99.529976
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Alfredo Del Mazo 208 A-Lote 04 Mza.361, Col. Santa Cruz",
     "lat": 19.28573,
     "lng": -98.94111
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.de las Partidas Esq.Antigua Carr.Mex-Toluca # 1, Col. Parque Industrial Lerma",
     "lat": 19.286345,
     "lng": -99.52667
   },
   {
     "marca": "PEMEX",
     "direccion": "Paseo Tollocan Km. 56, Col. Loc. San Pedro Totoltepec",
     "lat": 19.28745,
     "lng": -99.55722
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera México-Toluca Km. 42.5, San Juan Coapanoaya, Ocoyoacac, Estado de México.",
     "lat": 19.28814,
     "lng": -99.444084
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Toluca Km. 42.5, Col. Loc. San Juan Coapanoaya",
     "lat": 19.288563,
     "lng": -99.444275
   },
   {
     "marca": "G500",
     "direccion": "Carretera San Martín - Tlaxcala 525, San Damian, San Martín Texmelucan, Puebla, 74059",
     "lat": 19.288729,
     "lng": -98.44349
   },
   {
     "marca": "PEMEX",
     "direccion": "Paseo Adolfo Lopez Mateos # 102, Col. Ojuelos",
     "lat": 19.289501,
     "lng": -99.69608
   },
   {
     "marca": "SHELL",
     "direccion": "TIZMIN HEROES DE PADIERNA, TLAL 121",
     "lat": 19.289719,
     "lng": -99.21712
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Tlahuac No. 7081, Col. San Francisco Tlaltenco",
     "lat": 19.289848,
     "lng": -99.01558
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo No.508 y Josefa Ortiz de Dominguez, Col. Centro",
     "lat": 19.289854,
     "lng": -99.647446
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Cuauhtemoc Esq.Sebastian Lerdo de Tejada N0.468, Col. Concepcion",
     "lat": 19.29261,
     "lng": -98.94987
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Acoxpa # 722, Col. Villa Coapa",
     "lat": 19.293015,
     "lng": -99.124985
   },
   {
     "marca": "G500",
     "direccion": "Av. Principal a la Joya 2, Rancho la Joya, San Cristobal Tepatlaxco, San Martín Texmelucan, Puebla, 74120",
     "lat": 19.293692,
     "lng": -98.44783
   },
   {
     "marca": "TOTAL",
     "direccion": "Francisco Javier Mina, Santa Cruz Azcapotzaltongo, Delegación Santa Cruz Atzcapotzaltongo, 50030 Calixtlahuaca, Méx.",
     "lat": 19.295078,
     "lng": -99.67833
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaxcala-Texoloc Num. 42, Col. S/C",
     "lat": 19.296293,
     "lng": -98.24804
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera a Valle de Bravo S/N, S/C, Almoloya de Juárez, Edo. Méx.",
     "lat": 19.297367,
     "lng": -99.77095
   },
   {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Calz Xochimilco No 4352, Col. San Lorenzo Huipulco",
     "lat": 19.297499,
     "lng": -99.15184
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Calzada Del Hueso No. 971, Col. Granjas Coapa",
     "lat": 19.299225,
     "lng": -99.1076
   },
   {
     "marca": "G500",
     "direccion": "Carretera Puerto Rico -Totutla Parcela 258 Z1, P, Entre Ejido de Pinillos y Tramo Carretero, Tlaltetela, Veracruz, 94020",
     "lat": 19.303349,
     "lng": -96.91364
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Puebla 36+600, Col. San Marcos  Huixtoco",
     "lat": 19.304373,
     "lng": -98.84117
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Tlahuac No.5243, Col. Granjas Cabrera",
     "lat": 19.30509,
     "lng": -99.062935
   },
   {
     "marca": "G500",
     "direccion": "Rinconada Uranio 1, Lomas del Pedregal, Tlalpan, Ciudad de México, 14150",
     "lat": 19.306322,
     "lng": -99.22022
   },
   {
     "marca": "REPSOL",
     "direccion": "Autopista México-Puebla KM 35+500 S/N, San Marcos Huixtoco",
     "lat": 19.30877,
     "lng": -98.83326
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Manuel de La Peña No. 148",
     "lat": 19.31035,
     "lng": -98.94748
   },
   {
     "marca": "G500",
     "direccion": "Av. Luis Cabrera 480, Barrio de San Francisco, La Magdalena Contreras, Ciudad de México, 10810",
     "lat": 19.315918,
     "lng": -99.23406
   },
   {
     "marca": "G500",
     "direccion": "Carretera Ocotlan -Santa Ana Mz 34, El Sabinal, Santa Ana Nopalucan, Tlaxcala, 90802",
     "lat": 19.317623,
     "lng": -98.21551
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion Venustiano Carranza # 180, Col. S/D",
     "lat": 19.319386,
     "lng": -103.75994
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. Zaragoza S/N, Col. .",
     "lat": 19.319897,
     "lng": -98.26826
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. Zaragoza S/N, Col. .",
     "lat": 19.319897,
     "lng": -98.26826
   },
   {
     "marca": "G500",
     "direccion": "Av. Tlahuac 4344, Lomas Estrella 1ra Seccion, Iztapalapa, Ciudad de México, 9890",
     "lat": 19.32224,
     "lng": -99.09698
   },
   {
     "marca": "G500",
     "direccion": "Camino los Berros-Valle de Bravo Km- 12.6  S/N, Ranchería de San Martin Obispo, Donato Guerra, Estado de México, 51030",
     "lat": 19.323776,
     "lng": -100.09404
   },
   {
     "marca": "SHELL",
     "direccion": "CARRETERA FEDERAL PUEBLA-MEXICO 150",
     "lat": 19.326197,
     "lng": -98.52191
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. San Jeronimo 914, Col. San Jeronimo Lidice",
     "lat": 19.328045,
     "lng": -99.21813
   },
   {
     "marca": "PEMEX",
     "direccion": "Vialidad Toluca-Naucalpan No. 732, Col. San Mateo Otzacatipan",
     "lat": 19.330652,
     "lng": -99.61311
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 1+400 Carretera Pareo-El Limon, Col. S/C",
     "lat": 19.33262,
     "lng": -102.4644
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.de las Torres, Eje 10 Sur, Esq.Cerrada Churintz, Col. Pedregal de San Francisco",
     "lat": 19.336256,
     "lng": -99.17327
   },
   {
     "marca": "PEMEX",
     "direccion": "Tlalpan y Retorno 816 No. 8, Col. Centinela",
     "lat": 19.336945,
     "lng": -99.14169
   },
   {
     "marca": "TOTAL",
     "direccion": "Azcapotzaltongo, Av. Isidro Fabela, Santa Cruz, 50030 Calixtlahuaca, Méx.",
     "lat": 19.337719,
     "lng": -99.67174
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Benito Juarez No. 1, Col. Presidentes de Mexico",
     "lat": 19.337822,
     "lng": -99.06478
   },
   {
     "marca": "G500",
     "direccion": "Boulevard Adolfo Lopez Mateos 2491, San Angel Inn, Álvaro Obregón, Ciudad de México, 1060",
     "lat": 19.34673,
     "lng": -99.20238
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 66+965 Carrt. Fed.Mexico-Veracruz Via Xalapa, Col. S/C",
     "lat": 19.35009,
     "lng": -97.45354
   },
   {
     "marca": "REPSOL",
     "direccion": "Carretera a Coatepec KM 4.4 S/N, San Francisco Acuautla",
     "lat": 19.351437,
     "lng": -98.85688
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 42+500 Carr. Federal Mexico-Puebla, Col. Rio Frio",
     "lat": 19.352444,
     "lng": -98.66718
   },
   {
     "marca": "SHELL",
     "direccion": "AV. MEXIQUENSE SIN NUMERO PARCE S/N",
     "lat": 19.353891,
     "lng": -99.15324
   },
   {
     "marca": "G500",
     "direccion": "Av. Tamaulipas 3790, Prados de la Montaña, Cuajimalpa de Morelos, Ciudad de México, 5619",
     "lat": 19.354048,
     "lng": -99.276276
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Toluca No. 5693, Col. Cuajimalpa",
     "lat": 19.354647,
     "lng": -99.29335
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Federal Mexico-Texcoco Km. 21.5, Col. Tecamachalco",
     "lat": 19.355078,
     "lng": -98.95822
   },
   {
     "marca": "G500",
     "direccion": "Av. Javier Rojo Gomez Mz. 2, Ejidos del Moral Zona Norte, Iztapalapa, Ciudad de México, 9030",
     "lat": 19.356207,
     "lng": -99.086426
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Toluca-Zitacuaro Km 17.5, Col. Paraje Yukon",
     "lat": 19.358154,
     "lng": -99.803116
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Toluca-Zitacuaro Km 17.5, Col. Paraje Yukon. Almoloya de Juarez, Estado de México",
     "lat": 19.358717,
     "lng": -99.80317
   },
   {
     "marca": "PEMEX",
     "direccion": "Francisco Villa Num. 19, Col. Santa Maria Aztahuacan",
     "lat": 19.360468,
     "lng": -99.03545
   },
   {
     "marca": "SHELL",
     "direccion": "SAGREDO 265",
     "lat": 19.360968,
     "lng": -99.18894
   },
   {
     "marca": "G500",
     "direccion": "Carretera Mexico-Toluca 5397, El Molino, Cuajimalpa de Morelos, Ciudad de México, 5310",
     "lat": 19.362803,
     "lng": -99.2855
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Toluca-V.Cuauhtemoc S/N, Col. San Mateo Otzacatipan",
     "lat": 19.367104,
     "lng": -99.569695
   },
   {
     "marca": "PEMEX",
     "direccion": "Ajusco y Tlalpan No 1395, Col. Portales",
     "lat": 19.367516,
     "lng": -99.14226
   },
   {
     "marca": "G500",
     "direccion": "Carretera Toluca - Atlacomulco 1855, San Martin Toltepec, Toluca, Estado de México, 50285",
     "lat": 19.367592,
     "lng": -99.693596
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Transp.Cond.Rojo,Lts.Juno,Dos,Tres,Cuatro.N.15, Col. Alvaro Obregon",
     "lat": 19.373129,
     "lng": -99.040375
   },
   {
     "marca": "G500",
     "direccion": "Eje 6 Sur 110, San Simón Ticumac, Benito Juárez, Ciudad de México, 3630",
     "lat": 19.378565,
     "lng": -99.14539
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Canal de Tezontle 126 Esq. 22 de Diciembre 1860, Col. Leyes de Reforma",
     "lat": 19.383257,
     "lng": -99.066475
   },
   {
     "marca": "G500",
     "direccion": "Avenida Ignacio Zaragoza 1900, Juan Escutia, Iztapalapa, Ciudad de México, 9100",
     "lat": 19.387112,
     "lng": -99.038445
   },
   {
     "marca": "REPSOL",
     "direccion": "Basílica de Guadalupe 3, Metropolitana 2nda sección",
     "lat": 19.388199,
     "lng": -99.02986
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Luz Saviñon y  Div. del Norte No. 804",
     "lat": 19.392336,
     "lng": -99.16559
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Baja California No.  148",
     "lat": 19.393967,
     "lng": -98.97209
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Coyoacán No.107,  Esq. Providencia y Xola ",
     "lat": 19.39716,
     "lng": -99.16729
   },
   {
     "marca": "PEMEX",
     "direccion": "Dr. Vertiz No. 640, Col. Vertiz",
     "lat": 19.397568,
     "lng": -99.15057
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Dr. Vertiz No. 640",
     "lat": 19.397625,
     "lng": -99.15064
   },
   {
     "marca": "REPSOL",
     "direccion": "Avenida Plutarco Elías Calles 430, Los Reyes",
     "lat": 19.398033,
     "lng": -99.11682
   },
   {
     "marca": "REPSOL",
     "direccion": "Ángel de la Independencia 292, Evolución",
     "lat": 19.399097,
     "lng": -99.02602
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.47 Carr.Toluca-San Bartolo Naucalpan,Edo.Mex., Col. .",
     "lat": 19.40027,
     "lng": -99.52801
   },
   {
     "marca": "G500",
     "direccion": "Rio Hondo - Huixquilucan  401, San Bartolome Coatepec, Huixquilucan, Estado de México, 52796",
     "lat": 19.402077,
     "lng": -99.3235
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Pantitlan #276, Col. Porfirio Diaz",
     "lat": 19.402376,
     "lng": -99.03369
   },
   {
     "marca": "PEMEX",
     "direccion": "Observatorio y Ex-Arzobispado N0 198, Col. Daniel Garza",
     "lat": 19.403496,
     "lng": -99.197075
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Pantitlan No.145, Col. Mexico 2a. Seccion",
     "lat": 19.405457,
     "lng": -99.0423
   },
   {
     "marca": "G500",
     "direccion": "Av. 16 esquina Rio Churubusco 13, Ignacio Zaragoza, Venustiano Carranza, Ciudad de México, 15000",
     "lat": 19.408796,
     "lng": -99.09249
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Nezahualcoyotl No 172",
     "lat": 19.40926,
     "lng": -98.92709
   },
   {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata # 4, Col. Barrio San Miguel",
     "lat": 19.410809,
     "lng": -98.91233
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Real #808, Col. Ex-Hacienda de Santa Catarina",
     "lat": 19.41228,
     "lng": -102.0162
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Yucatán No. 125, Esq. Chiapas y Tonalá ",
     "lat": 19.412836,
     "lng": -99.16119
   },
   {
     "marca": "TOTAL",
     "direccion": "México 15, Morelia Km 105, 50960 Villa Victoria, Méx.",
     "lat": 19.413374,
     "lng": -99.9164
   },
   {
     "marca": "REPSOL",
     "direccion": "Chimalhuacán 234, Agua Azul",
     "lat": 19.41447,
     "lng": -99.03223
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Nuevo León No. 8, Esq.  Sonora ",
     "lat": 19.415556,
     "lng": -99.16998
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Protasio Tagle No. 2 y 4, Esq. Maderos",
     "lat": 19.416084,
     "lng": -99.18245
   },
   {
     "marca": "PEMEX",
     "direccion": "Independencia No. 307, Col. San Miguel",
     "lat": 19.416885,
     "lng": -98.1469
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Arca de Noe # 3 M-277,L-35 Esq.Av. Carranza, Col. San Miguel Acuitlapilco",
     "lat": 19.417234,
     "lng": -98.93101
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Arca de Noe # 3 M-277,L-35 Esq.Av. Carranza, Col. San Miguel Acuitlapilco",
     "lat": 19.417234,
     "lng": -98.93101
   },
   {
     "marca": "PEMEX",
     "direccion": "Chapultepec y Veracruz No. 2, Col. Hipodromo de la Condesa",
     "lat": 19.420301,
     "lng": -99.17624
   },
   {
     "marca": "PEMEX",
     "direccion": "El Gran Canal No. 623 Villa Cuauhtemoc, Col. Sin Colonia",
     "lat": 19.4208,
     "lng": -99.5619
   },
   {
     "marca": "PEMEX",
     "direccion": "Viga Num 44, Col. Esperanza",
     "lat": 19.42106,
     "lng": -99.1272
   },
   {
     "marca": "PEMEX",
     "direccion": "Eje Central Lazaro Cardenas # 15, Col. Doctores",
     "lat": 19.422003,
     "lng": -99.14363
   },
   {
     "marca": "TOTAL",
     "direccion": "Av. Rio Consulado 2884, Pensador Mexicano, 15510 Ciudad de México, CDMX",
     "lat": 19.423328,
     "lng": -99.162704
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Morelia y Puebla No. 137 ",
     "lat": 19.423992,
     "lng": -99.15596
   },
   {
     "marca": "BP",
     "direccion": "Boulevard Puerto Aereo 134, Moctezuma 2Da. Sección, C.P. 15530, CDMX.",
     "lat": 19.424515,
     "lng": -99.09643
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 1 Carrt. Uruapan-Patzcuaro Margen Izquierdo, Col. El Periodista",
     "lat": 19.42607,
     "lng": -102.04079
   },
   {
     "marca": "PEMEX",
     "direccion": "Car.Mexico-Huixquilucan Mz.41 L.2 y 3 No.1081 1083, Col. Las Canteras",
     "lat": 19.427591,
     "lng": -99.2693
   },
   {
     "marca": "G500",
     "direccion": "Rio de la Plata 2, Cuauhtémoc, Cuauhtémoc, Ciudad de México, 6500",
     "lat": 19.427912,
     "lng": -99.17463
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Barcelona No.37,  Esq. Versalles",
     "lat": 19.428547,
     "lng": -99.155205
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Puente de Tecamachalco 22, Reforma Soc, 11200 Ciudad de México, CDMX, México",
     "lat": 19.430132,
     "lng": -99.22453
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Villalongín No. 6 Esq. Insurgentes y Reforma",
     "lat": 19.43159,
     "lng": -99.15962
   },
   {
     "marca": "PEMEX",
     "direccion": "Bahia de Santa Barbara 182, Col. Veronica Anzures",
     "lat": 19.434862,
     "lng": -99.17183
   },
   {
     "marca": "PEMEX",
     "direccion": "Ejido de Santa Juana Seccion Primera S/N Km. 18.500, Col. ",
     "lat": 19.43491,
     "lng": -99.73783
   },
   {
     "marca": "PEMEX",
     "direccion": "Peña y Peña # 86, Col. Morelos",
     "lat": 19.440393,
     "lng": -99.12089
   },
   {
     "marca": "G500",
     "direccion": "Avenida del Trabajo 60, Morelos, Venustiano Carranza, Ciudad de México, 15270",
     "lat": 19.441679,
     "lng": -99.12191
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion No. 6, Col. .",
     "lat": 19.44331,
     "lng": -100.35123
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Cedro No. 238, Esq. Carpio",
     "lat": 19.45128,
     "lng": -99.161964
   },
   {
     "marca": "PEMEX",
     "direccion": "Zaragoza # 55 Esq. Ignacio Allende, Col. Centro",
     "lat": 19.456867,
     "lng": -96.95311
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Lago Argentina No. 7 y Calz. México Tacuba ",
     "lat": 19.458006,
     "lng": -99.200356
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Mar Mediterráneo y Okostsk",
     "lat": 19.459913,
     "lng": -99.187035
   },
   {
     "marca": "PEMEX",
     "direccion": "San Jose de Los Leones #6, Col. San Francisco Cuautlalpan",
     "lat": 19.46363,
     "lng": -99.22439
   },
   {
     "marca": "BP",
     "direccion": "Av Federalismo 449 Centro, C.P. 44100, Guadalajara, Jalisco.",
     "lat": 19.463657,
     "lng": -99.11795
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd Ignacio Zaragoza Esq Carret Apizaco Tlaxcala #31, Col. 5 Seccion Agricola Dolores",
     "lat": 19.464321,
     "lng": -98.11314
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Boulevard Toluca No. 9",
     "lat": 19.464699,
     "lng": -99.21891
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.510 No.340, Col. San Juan de Aragon",
     "lat": 19.465042,
     "lng": -99.08414
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Tezozómoc #51 y 53",
     "lat": 19.474173,
     "lng": -99.200584
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Calz. Guadalupe n°517",
     "lat": 19.4749,
     "lng": -99.12139
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Ferroc. Hgo. S/N Esq. Gral.J.V.Villada # 180, Col. Aragon",
     "lat": 19.47922,
     "lng": -99.10912
   },
   {
     "marca": "G500",
     "direccion": "Av. Adolfo Lopez Mateos 201, Santa Cruz Acatlán, Naucalpan de Juárez, Estado de México, 54030",
     "lat": 19.480486,
     "lng": -99.24913
   },
   {
     "marca": "TOTAL",
     "direccion": "Miguel Planas 55, Vallejo Poniente, 07790 Ciudad de México, CDMX",
     "lat": 19.483017,
     "lng": -99.24925
   },
   {
     "marca": "TOTAL",
     "direccion": "Calle Sabino 494, Col del Gas, 02950 Ciudad de México, CDMX",
     "lat": 19.483315,
     "lng": -99.24925
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.Manuel A.Camacho 810 Sobre Perif de Nte a Sur, Col. Sta.Cruz Acatlan",
     "lat": 19.484581,
     "lng": -99.23629
   },
   {
     "marca": "TOTAL",
     "direccion": "Cantera 134, Martín Carrera, 07070 Ciudad de México, CDMX",
     "lat": 19.484682,
     "lng": -99.11313
   },
   {
     "marca": "G500",
     "direccion": "Av. Montevideo 99, Tepeyac Insurgentes, Gustavo A. Madero, Ciudad de México, 7020",
     "lat": 19.486721,
     "lng": -99.12285
   },
   {
     "marca": "REPSOL",
     "direccion": "Plaza San Marcos 4105 S/N, Plaza de Aragón",
     "lat": 19.486942,
     "lng": -99.03712
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Calzada  Vallejo No. 1055 y Poniente ",
     "lat": 19.487614,
     "lng": -99.15097
   },
   {
     "marca": "TOTAL",
     "direccion": "Norte 45 970, Industrial Vallejo, 02300 Ciudad de México, CDMX",
     "lat": 19.490763,
     "lng": -99.16732
   },
   {
     "marca": "G500",
     "direccion": "Montevideo 424, Lindavista Vallejo, Gustavo A. Madero, Ciudad de México, 7720",
     "lat": 19.49135,
     "lng": -99.13655
   },
   {
     "marca": "PEMEX",
     "direccion": "Balcones Del Lago #67, Col. Ejido Patzcuaro",
     "lat": 19.497368,
     "lng": -101.600105
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Periban-Buenavista Km. 2.5, Col. Centro",
     "lat": 19.50224,
     "lng": -102.42687
   },
   {
     "marca": "BP",
     "direccion": "Alfredo Zarate Albarran 221, Granjas valle de Guadalupe, C.P. 55270, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.5036,
     "lng": -99.052055
   },
   {
     "marca": "PEMEX",
     "direccion": "Poniente 140 No.1010, Col. Santa Barbara",
     "lat": 19.50419,
     "lng": -99.18274
   },
   {
     "marca": "BP",
     "direccion": "Via Morelos 140, Altavilla, C.P. 55390, Ecatepec De Morelos, Estado de México, México.",
     "lat": 19.511301,
     "lng": -99.09132
   },
   {
     "marca": "SHELL",
     "direccion": "MIGUEL HIDALGO 39",
     "lat": 19.520107,
     "lng": -99.23011
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Queretaro #2247, Col. Plazas de la Colina",
     "lat": 19.520428,
     "lng": -99.22886
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Pachuca Km. 11.5 Fraccion 1,2 Sn.Jos, Col. Pueblo de San Jose Ixhuatepec",
     "lat": 19.52164,
     "lng": -99.09286
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Central No. 218, Col. Rustica Xalostoc",
     "lat": 19.521893,
     "lng": -99.07495
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Autopista México Queretaro  No.  1973",
     "lat": 19.533884,
     "lng": -99.219765
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Morelia -- Patzacuaro Km. 37+900, Col. Sc",
     "lat": 19.53451,
     "lng": -101.47054
   },
   {
     "marca": "G500",
     "direccion": "Autopista Mexico - Queretaro 2598, Valle de los Pinos, Tlalnepantla de Baz, Estado de México, 54040",
     "lat": 19.538456,
     "lng": -99.21607
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Av. Jesús Reyes Heroles No. 32 Col. Valle Ceylán Tlalnepantla, Estado de México C.P 54150",
     "lat": 19.538544,
     "lng": -99.18191
   },
   {
     "marca": "PEMEX",
     "direccion": "Iguala No. 1, Col. San Lucas Patoni",
     "lat": 19.539541,
     "lng": -99.15462
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Central, No. 140, Col. Ciudad Azteca, 1a. Seccion",
     "lat": 19.54076,
     "lng": -99.02561
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman #33, Col. El Aguacatal",
     "lat": 19.542643,
     "lng": -96.92021
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Adolfo López Mateos No. 65 Int. Mz 1 Lt 17",
     "lat": 19.542713,
     "lng": -99.23333
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd.  Manuel Avila Camacho No. 3067",
     "lat": 19.544622,
     "lng": -99.211136
   },
   {
     "marca": "G500",
     "direccion": "Carretera lecheria Texcoco Km 45, El Carmen, Ecatepec de Morelos, Estado de México, 55020",
     "lat": 19.547516,
     "lng": -98.91351
   },
   {
     "marca": "G500",
     "direccion": "Avenida Jorge Jimenez Cantu 30, Bosque Esmeralda, Atizapán, Estado de México, 52930",
     "lat": 19.54953,
     "lng": -99.28406
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Jesus Reyes Heroles # 20, Col. Tabla Honda",
     "lat": 19.550566,
     "lng": -99.18352
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Autopista de cuota Arco Norte Km. 98+345.659 al 98+706.346 del cuerpo de Atlacomulco a San Martín Texmelucan",
     "lat": 19.55112,
     "lng": -98.49473
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Autopista de cuota Arco Norte Km. 98+706.346 al 98+345.659 del cuerpo de San Martín Texmelucan a Atlacomulco",
     "lat": 19.551344,
     "lng": -98.49366
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 98+345.659 Al 98+706.346 Autopista Arco Norte, Col. Sin Colonia",
     "lat": 19.551382,
     "lng": -98.49485
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Dr. Jimenez Cantu S/N., Lote 5-2, Col. Rancho Viejo",
     "lat": 19.557896,
     "lng": -99.29659
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av Vía Morelos No 300",
     "lat": 19.559532,
     "lng": -99.04775
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas # 81 Esq. Gildardo Aviles, Col. Rafael Lucio",
     "lat": 19.560408,
     "lng": -96.92282
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr . Ixtlahuaca - San Felipe del Progreso. Ixtlahuaca de Rayón, Estado de México.",
     "lat": 19.574898,
     "lng": -99.7827
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 1 Carrt. Erongaricuaro-Patzcuaro, Col. S/C",
     "lat": 19.57997,
     "lng": -101.72109
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Pachuca Km 20+084, Col. Tulpetlac",
     "lat": 19.580019,
     "lng": -99.04434
   },
   {
     "marca": "G500",
     "direccion": "Carretera Villa Nicólas Romero 83, Ex Hacienda del Pedregal, Atizapán, Estado de México, 52918",
     "lat": 19.580132,
     "lng": -99.26152
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 79 881, Leona Vicario, 77210 Felipe Carrillo Puerto, Q.R., México, 77220, Calle 79 808, Jesús Martínez Ross, Felipe Carrillo Puerto, Q.R.",
     "lat": 19.584383,
     "lng": -88.04262
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Lazaro Cardenas No. 59, Col. ",
     "lat": 19.58624,
     "lng": -98.42831
   },
   {
     "marca": "SHELL",
     "direccion": "VIA GUSTAVO BAZ 49 LOTE 4",
     "lat": 19.588108,
     "lng": -99.19421
   },
   {
     "marca": "BP",
     "direccion": "Prolongacion Av. Jose Lopez Portillo S/N, Col. Santa Cruz Venta de Carpio, C.P. 55065, Ecatepec de Morelos, Estado de México. ",
     "lat": 19.588156,
     "lng": -99.00664
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Ignacio Zaragoza No. 185, Col. Lomas de las Torres",
     "lat": 19.592989,
     "lng": -99.25842
   },
   {
     "marca": "PEMEX",
     "direccion": "Ramal Calpulapan, Col. S/C",
     "lat": 19.595451,
     "lng": -98.57319
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Zacan - San Jose de la Palma Km 3 + 972, Col. S/C",
     "lat": 19.598879,
     "lng": -102.47457
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 99+932 Carrt. Oriental-Nautla, Col. .-",
     "lat": 19.599722,
     "lng": -97.61695
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 282 Carr.Mexico-Ver., Col. .-",
     "lat": 19.600203,
     "lng": -97.20995
   },
   {
     "marca": "PEMEX",
     "direccion": "Tlaxcala-Huachinango, Tramo Apizaco-Lim. Edos. Tla Km. 4.335, Col. ",
     "lat": 19.606924,
     "lng": -98.14301
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Del Lago No. 1-A, Mza. 1 Lote 3, Col. Geovillas de Terranova",
     "lat": 19.607529,
     "lng": -98.973526
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida de las Bombas S/N, Col. San Isidro Atlautenco",
     "lat": 19.607548,
     "lng": -98.99508
   },
   {
     "marca": "BP",
     "direccion": "Carretera a Qro. Matamoros S/N Tepetlixpan C.P. 54763 Cuautitlán Izcalli Estado de México, México.",
     "lat": 19.610731,
     "lng": -99.19286
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Palomas, Esquina Alondras No. 56, Col. Llano de Los Baez",
     "lat": 19.611156,
     "lng": -99.02026
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Casimiro Castillo #501-1, Col. S/C",
     "lat": 19.61142,
     "lng": -104.45064
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Xalapa Perote 130+300 Lado Derecho, Col. Sin Colonia",
     "lat": 19.611609,
     "lng": -97.03168
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion Lerdo de Tejada 42, Col. El Zapote",
     "lat": 19.616629,
     "lng": -96.94136
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Hidalgo No. 24 Lt 1 y Lt 2",
     "lat": 19.620142,
     "lng": -99.21125
   },
   {
     "marca": "G500",
     "direccion": "Av. Hidalgo 1, Hidalgo, Nicolás Romero, Estado de México, 54400",
     "lat": 19.620544,
     "lng": -99.32406
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Av. Adolfo Lopez Mateos 96, Santiago Tepalcapa, 54768 Cuautitlán Izcalli, Méx.",
     "lat": 19.623951,
     "lng": -99.19868
   },
   {
     "marca": "PEMEX",
     "direccion": "Recursos Hidraulicos Esq Cipres L 13 14 15 16 S/N, Col. Poblado San Cristobal",
     "lat": 19.624447,
     "lng": -99.04854
   },
   {
     "marca": "SHELL",
     "direccion": "PLAN DE GUADALUPE VICTORIA",
     "lat": 19.62796,
     "lng": -99.23725
   },
   {
     "marca": "PEMEX",
     "direccion": "Via Lopez Portillo Esq. Eje 8 S/N, Col. Santa Maria Magdalena",
     "lat": 19.632202,
     "lng": -99.0914
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Mexiquense N° 31",
     "lat": 19.633469,
     "lng": -99.033516
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Vía José López Portillo No. 37",
     "lat": 19.635042,
     "lng": -99.1144
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Ozumbilla No. 185, Mz. 25, Lt. 1 Seccion Jardines, Col. Conjunto Urbano Los Heroes Tecamac",
     "lat": 19.635605,
     "lng": -99.02748
   },
   {
     "marca": "TOTAL",
     "direccion": "Carretera Federal, México Pirámides 3, San Agustin Acolman, Acolman, 55870 Estado de México, Méx.",
     "lat": 19.64101,
     "lng": -98.9105
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Km. 31.5 Carretera México- Cuautitlan ",
     "lat": 19.65057,
     "lng": -99.18348
   },
   {
     "marca": "G500",
     "direccion": "Avenida Atecuaro 200, Loma Larga, Morelia, Michoacan, 58095",
     "lat": 19.654902,
     "lng": -101.202484
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. la Joya y Av. Venustiano Carranza # 2, Col. Barrio San Jose",
     "lat": 19.657673,
     "lng": -99.173775
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Veracruz S/N /Prolong. Agustin Iturbide y Pr, Col. Gral. Platon Sanchez",
     "lat": 19.658499,
     "lng": -96.86542
   },
   {
     "marca": "BP",
     "direccion": "Calle de James Watt, Esq.Carr. Mexico, Cuautitlán, C.P. 54800, Cuautitlán, Estado de México.",
     "lat": 19.659342,
     "lng": -99.19759
   },
   {
     "marca": "SHELL",
     "direccion": "TOLUCA S/N",
     "lat": 19.664679,
     "lng": -99.12888
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Cheran-Nahuatzen Km 2.5, Col. S/C",
     "lat": 19.66584,
     "lng": -101.9404
   },
   {
     "marca": "G500",
     "direccion": "Av. Santa Cruz Ojo de Agua 39 A, San Francisco Cuautlixca, Tecámac, Estado de México, 55760",
     "lat": 19.666227,
     "lng": -99.01524
   },
   {
     "marca": "G500",
     "direccion": "Carretera Cuautitlan-Melchor Ocampo 5, Fraccionamiento los Olivos, Cuautitlán, Estado de México, 54800",
     "lat": 19.671297,
     "lng": -99.17406
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Cerrada Ayapango 10, Col. San Lorenzo Tlal.",
     "lat": 19.671776,
     "lng": -98.867096
   },
   {
     "marca": "SHELL",
     "direccion": "AV. RECURSOS HIDRAULICOS 202",
     "lat": 19.672255,
     "lng": -99.11678
   },
   {
     "marca": "G500",
     "direccion": "Carretera Pachuca-Tuxpan Km 95, El Potro, Huauchinango, Puebla, 73160",
     "lat": 19.672739,
     "lng": -99.18408
   },
   {
     "marca": "G500",
     "direccion": "Carretera Federal México - Puebla Km 95, Huejotzingo, Huejotzingo, Puebla, 74160",
     "lat": 19.672739,
     "lng": -99.18408
   },
   {
     "marca": "G500",
     "direccion": "Av Juan Pablo II 1200, Santa María de Guido, Morelia, Michoacan, 58090",
     "lat": 19.675776,
     "lng": -101.184425
   },
   {
     "marca": "PEMEX",
     "direccion": "Lib.Sur.Pte.No.3970 Ex-Hacienda Sn.J.La Huerta, Col. .",
     "lat": 19.677576,
     "lng": -101.22992
   },
   {
     "marca": "SHELL",
     "direccion": "AVENIDA 16 DE SEPTIEMBRE",
     "lat": 19.679583,
     "lng": -99.1435
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tonanitla S/N, Col. Ejido Santa María Tonanitla",
     "lat": 19.682745,
     "lng": -99.04284
   },
   {
     "marca": "SHELL",
     "direccion": "CARRETERA A CUAUTITL 1-82A, MANZANA",
     "lat": 19.683956,
     "lng": -99.18574
   },
   {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero No. 2, Col. Tultepec",
     "lat": 19.684597,
     "lng": -99.130066
   },
   {
     "marca": "BP",
     "direccion": "Distribuidor Vial Autopista México-Querétaro y Avenida Huehuetoca Fraccionamiento Sur Valle de la Hacienda C.P 54701 Cuautitlan Izcalli, Estado de México, México.",
     "lat": 19.684858,
     "lng": -99.22038
   },
   {
     "marca": "PEMEX",
     "direccion": "Francisco I Madero Poniente No.9570, Col. Tacicuaro",
     "lat": 19.687983,
     "lng": -101.3011
   },
   {
     "marca": "BP",
     "direccion": "Carretera Federal Mexico-Pachuca Km. 39.2, Centro, C.P. 55740, Tecamac, Estado de México, México.",
     "lat": 19.699465,
     "lng": -98.97348
   },
   {
     "marca": "PEMEX",
     "direccion": "Mexico-Tulancingo-Otumba, Limites Mexico-Hidalgo Km. 23.500, Col. ",
     "lat": 19.706654,
     "lng": -98.7746
   },
   {
     "marca": "PEMEX",
     "direccion": "Aut.Mex-Qro.Km.43.5 Cd.de Mexico a Tepozotlan a Cc, Col. Tepotzotlan Mex.",
     "lat": 19.709585,
     "lng": -99.207
   },
   {
     "marca": "G500",
     "direccion": "Avenida Francisco I Madero Oriente 1935, Elias Peréz Avalos, Morelia, Michoacan, 58218",
     "lat": 19.711687,
     "lng": -101.1643
   },
   {
     "marca": "G500",
     "direccion": "Carretera Morelia Salamanca 1935, Tarímbaro, Tarímbaro, Michoacan, 58880",
     "lat": 19.711687,
     "lng": -101.1643
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Insurgentes Esq.Calle Manuel Acuña, Col. Bo. Texcacoa",
     "lat": 19.712002,
     "lng": -99.21624
   },
   {
     "marca": "TOTAL",
     "direccion": "Tepotzotlán-Coyotepec, Cedros, 54605 Tepotzotlán, Méx.",
     "lat": 19.712029,
     "lng": -99.22909
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalajara - Colima Km. 83.600, Col. ",
     "lat": 19.727825,
     "lng": -103.50929
   },
   {
     "marca": "PEMEX",
     "direccion": "Barrio de Los Alanis Domicilio Conocido S/N, Col. San Jeronimo Zacapexco",
     "lat": 19.72979,
     "lng": -99.48136
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Morelia-Aeropuerto No.1100, Col. Tres Marias",
     "lat": 19.73093,
     "lng": -101.114586
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Francisco I Madero Oriente #6490, Col. V Etapa de Ciudad Industrial",
     "lat": 19.733644,
     "lng": -101.12997
   },
   {
     "marca": "G500",
     "direccion": "Cereal 11, Real Erandeni, Tarímbaro, Michoacan, 58880",
     "lat": 19.752232,
     "lng": -101.17841
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Cd. Sahagun - Emiliano Zapata Km. 0.000, Col. ",
     "lat": 19.756645,
     "lng": -98.58968
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Queretaro Km. 48.000 S-N Mza 204, Col. Barrio San Sebastian",
     "lat": 19.760475,
     "lng": -99.21586
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico Queretaro Km. 48.000 S-N Mza 204, Col. Barrio San Sebastian",
     "lat": 19.760475,
     "lng": -99.21586
   },
   {
     "marca": "PEMEX",
     "direccion": "Bo. Acuaco 5a. Secc., Col. 5a  Seccion  Acuaco",
     "lat": 19.762074,
     "lng": -97.56541
   },
   {
     "marca": "PEMEX",
     "direccion": "Bo. Acuaco 5a. Secc., Col. 5a  Seccion  Acuaco",
     "lat": 19.762074,
     "lng": -97.56541
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Pachuca Km. 44.50, Col. San Pedro Potzohuacan",
     "lat": 19.762814,
     "lng": -98.973816
   },
   {
     "marca": "BP",
     "direccion": "Carretera Zumpango-Cuautitlan No. 1200, Col. San Pedro de la Laguna, Col. San Pedro de la Laguna, Zumpango C.P.55609, Estado de México.",
     "lat": 19.76724,
     "lng": -99.12327
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Cd.Guzman-Autlan No.50, Col. .",
     "lat": 19.77838,
     "lng": -103.9754
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. 470 Tlanepantla-San Gabriel-Atlacomulco Km. 3.300, Col. ",
     "lat": 19.78174,
     "lng": -99.8389
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Atlacomulco-El Oro S/N. Lote-1, Mz-13, Col. Zona Industrial Atlacomulco",
     "lat": 19.78295,
     "lng": -99.90294
   },
   {
     "marca": "G500",
     "direccion": "La Presa Carretera Pachuca-Cd. Sahagun Km 44, Morelos, Cd Sahagun, Hidalgo, 43999",
     "lat": 19.783674,
     "lng": -98.5781
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Isidro Fabela Sur No. 600, Col. San Martin",
     "lat": 19.78615,
     "lng": -99.86644
   },
   {
     "marca": "LA GAS",
     "direccion": "Carretera Campeche Tenabo Km. 12.070, c.p. 24520  en China Campeche, Campeche ",
     "lat": 19.791843,
     "lng": -90.612755
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Zumpango a Cuautitlan 80, Col. Barrio de Santiago Primera Seccion",
     "lat": 19.794117,
     "lng": -99.08214
   },
   {
     "marca": "PEMEX",
     "direccion": "5 de Mayo #172, Col. S/C",
     "lat": 19.801306,
     "lng": -97.30963
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Carretero Cd.Guzman y El Grullo Sector, Col. .",
     "lat": 19.804712,
     "lng": -104.20438
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 399+400 Carr. Mexico-Guadalajara, Col. ,",
     "lat": 19.81322,
     "lng": -101.79706
   },
   {
     "marca": "PEMEX",
     "direccion": "Guadalajara-Ciudad Guzman, Col. ",
     "lat": 19.815079,
     "lng": -103.49131
   },
   {
     "marca": "LA GAS",
     "direccion": "Av. Lazaro cardenas s/n entre calle peru y solidaridad col. Las flores, san francisco campeche, campeche cp 24097",
     "lat": 19.821337,
     "lng": -90.52585
   },
   {
     "marca": "PEMEX",
     "direccion": "Eje Norte Sur # 1 Mnz Iii Lope 1, Col. Zona Industrial",
     "lat": 19.826418,
     "lng": -98.97701
   },
   {
     "marca": "BP",
     "direccion": "Boulevard Jorobas-Huehuetoca S/N Barrio De Jorobas C.P. 54680 Huehuetoca, Estado de México, Mexico.",
     "lat": 19.831636,
     "lng": -99.21299
   },
   {
     "marca": "BP",
     "direccion": "Carr. Tepojaco-Temascalapa 79 Tepojaco, C.P. 43810 Tizayuca, Hidalgo, México.",
     "lat": 19.834179,
     "lng": -98.944145
   },
   {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas # 55, Col. Loc. Adolfo Ruiz Cortinez",
     "lat": 19.836926,
     "lng": -102.21952
   },
   {
     "marca": "TOTAL",
     "direccion": "Tula-Jorobas, 54680 Santa Teresa, Méx.",
     "lat": 19.846529,
     "lng": -99.24454
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.118+050 Carr.Conc.Atlacomulcto-Maravatio Sta.M., Col. .",
     "lat": 19.856388,
     "lng": -100.0421
   },
   {
     "marca": "PEMEX",
     "direccion": "Salinas de Gortari No.75y21 de Marzo Carr.B.Navida, Col. .",
     "lat": 19.87043,
     "lng": -105.33677
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexico-Guadalajara Km. 129.730, Col. ",
     "lat": 19.88024,
     "lng": -100.1469
   },
   {
     "marca": "G500",
     "direccion": "Carretera Libre Copándaro-Chucandiro 398, Sin Colonia, Copándaro, Michoacan, 58870",
     "lat": 19.892128,
     "lng": -101.21472
   },
   {
     "marca": "PEMEX",
     "direccion": "Revolucion Mexicana Lote 1, Col. Tepeji Del Rio",
     "lat": 19.903376,
     "lng": -99.33716
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt.Colipa-Misantla Coli.Juchique D'Ferrer N.791, Col. S/C",
     "lat": 19.90453,
     "lng": -96.74223
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Juarez Sur 27, Col. .",
     "lat": 19.96845,
     "lng": -99.17396
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 72 Carrt. Mexico-Tuxpan, Col. .",
     "lat": 19.974085,
     "lng": -98.524445
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Alcalde No. 57 y Rafael Urzua, Col. .",
     "lat": 19.981691,
     "lng": -103.2579
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Tula-Tepeji # 86, Col. La Pila de San Lucas Teacalco",
     "lat": 19.981764,
     "lng": -99.344444
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Morelia-Jiquilpan Km.191.5, Col. .",
     "lat": 19.98185,
     "lng": -102.612595
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Morelia-Jiquilpan Km.191.5, Col. .",
     "lat": 19.98185,
     "lng": -102.612595
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Federal Jorobas - Tula Km. 20, C.P. 42980, Atotonilco de Tula Hidalgo, México",
     "lat": 20.000202,
     "lng": -99.24758
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "REP. Dominicana Atotonilco, Boxfi, 42980 Atotonilco de Tula, Hgo., México",
     "lat": 20.000662,
     "lng": -99.21514
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Acambaro-Morelia No. 9, Col. Everardo Morales",
     "lat": 20.00397,
     "lng": -100.7303
   },
   {
     "marca": "G500",
     "direccion": "Carretera Atitalaquia Apaxco 37, Centro El Refugio, Atotonilco de Tula, Hidalgo, 42980",
     "lat": 20.00969,
     "lng": -99.22037
   },
   {
     "marca": "PEMEX",
     "direccion": "Vasco de Quiroga 2, Col. .",
     "lat": 20.018017,
     "lng": -101.03458
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol. Miguel Alvarado Esq. Pinolaco No. 134, Col. S/C",
     "lat": 20.023684,
     "lng": -97.52851
   },
   {
     "marca": "G500",
     "direccion": "Tramo Carretero Estación Paty-Visita Hermosa Km 14, Sin colonia, Yurécuaro, Michoacan, 59250",
     "lat": 20.025974,
     "lng": -102.336365
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. a Brise¬As Km 5, Col. La Florida",
     "lat": 20.033388,
     "lng": -102.2776
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 10 S/N, esq. Calle 23, Colonia, Tenabo",
     "lat": 20.03475,
     "lng": -90.22667
   },
   {
     "marca": "TOTAL",
     "direccion": "Libramiento a Palomas km 2 No. 511, Colonia Palma Mocha, El Portezuelo Colonia Palma Mocha, El Portezuelo, 42181 Pachuca de Soto, Hgo.",
     "lat": 20.035868,
     "lng": -100.86223
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Emilio Carranza No. 790, Col. Emilio Carranza",
     "lat": 20.039402,
     "lng": -100.70346
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Mexico-Pachuca Km80.270 Parc.55z1 P2/4 #4406, Col. San Antonio El Desmonte",
     "lat": 20.04187,
     "lng": -98.795235
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Lazara Cardenas Sur y Esq. Matamoros, Col. Centro",
     "lat": 20.055573,
     "lng": -102.716576
   },
   {
     "marca": "SHELL",
     "direccion": "CARRETERA TULA - JOROBAS KM 31. S/N",
     "lat": 20.057158,
     "lng": -99.29766
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Tula Iturbe No.  118,  Esq. Tulipanes ",
     "lat": 20.058306,
     "lng": -99.33467
   },
   {
     "marca": "PEMEX",
     "direccion": "Acambaro-Jerecuaro S/N Km 4, Col. S/C",
     "lat": 20.061073,
     "lng": -100.6915
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Santa Cecilia No. 169, Col. Fracc. la Providencia Siglo Xxi",
     "lat": 20.068808,
     "lng": -98.7173
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Bicentenario No. 735, Col. Jardines Del Sur Tercera Seccion",
     "lat": 20.073587,
     "lng": -98.37736
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Tuxpan Km. 139, Col. Fracc. Santa Ana",
     "lat": 20.077625,
     "lng": -98.380585
   },
   {
     "marca": "REPSOL",
     "direccion": "Lt.2- Mza-1 Zona-7 No. 600 (Km 2 Mtz-Torre-S.Raf), Martínez de la Torre",
     "lat": 20.080235,
     "lng": -97.03356
   },
   {
     "marca": "BP",
     "direccion": "Carretera Jilotepec-Huichapan Km. 26 S/N Tecolapan, Estado de México, México.",
     "lat": 20.083118,
     "lng": -99.632286
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Autopista Arco norte km.  78 + 100 hacia aplacomulco 7 mezquites ",
     "lat": 20.095098,
     "lng": -99.29945
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Luis Donaldo Colosio # 1501, Col. S/D",
     "lat": 20.098024,
     "lng": -98.76154
   },
   {
     "marca": "PEMEX",
     "direccion": "Rodolfo Guzman Huerta # 1200, Col. Santa Maria El Chico",
     "lat": 20.102087,
     "lng": -98.39648
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Everardo Marquez # 506, Col. Lomas Residencial Pachuca",
     "lat": 20.106907,
     "lng": -98.74724
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Ramon G. Bonfil Andador \"A\" # 102, Col. Plutarco Elias Calles",
     "lat": 20.115053,
     "lng": -98.761154
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 14.4 de la Carret. San Clemente-Ayutla, Col. .",
     "lat": 20.120205,
     "lng": -104.33568
   },
   {
     "marca": "PEMEX",
     "direccion": "Xicotencatl Esquina Matamoros No. 114, Col. Centro",
     "lat": 20.123219,
     "lng": -98.734116
   },
   {
     "marca": "OXXO GAS",
     "direccion": "KM 1 Carr-Moroleón-Morelia. Moroleón, Guanajuato",
     "lat": 20.125652,
     "lng": -101.18079
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 31 # 245, Peto Yucatán",
     "lat": 20.127476,
     "lng": -88.92972
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico -Queretaro Km. 119, Col. Sc",
     "lat": 20.130142,
     "lng": -99.72759
   },
   {
     "marca": "PEMEX",
     "direccion": "Morelos No. 90, Col. .",
     "lat": 20.13503,
     "lng": -101.17927
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Puruandiro-Zinaparo Km.21, Col. .",
     "lat": 20.14731,
     "lng": -101.71434
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Tezontepec-Tinaco Km. 3, Col. .",
     "lat": 20.167372,
     "lng": -99.26662
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Zamora-La Barca Km. 27, Col. .",
     "lat": 20.16992,
     "lng": -102.38486
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Tuxpan Km. 192 y la Fragua, Col. La Fragua",
     "lat": 20.173405,
     "lng": -98.059525
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mixquiahuala Tlahuelilpan Km.5 S/N, Col. Cinta Larga",
     "lat": 20.18159,
     "lng": -99.227036
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.29 Carr.Estancia a Amealco, Col. .",
     "lat": 20.196905,
     "lng": -100.15084
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Jose Velazquez Zepeda Poniente #6, Col. Centro",
     "lat": 20.197372,
     "lng": -100.366776
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tulancingo Huasca Km.24.925, Col. La Yerbabuena",
     "lat": 20.2107,
     "lng": -98.5393
   },
   {
     "marca": "PEMEX",
     "direccion": "Localidad 903,Region 11 Smza 002, Mza 001,Lote 002, Col. Sc",
     "lat": 20.21626,
     "lng": -87.446
   },
   {
     "marca": "PEMEX",
     "direccion": "Entrq. Carret. Salvatierra-Acambaro-Yuriria No 100, Col. .",
     "lat": 20.21673,
     "lng": -100.89526
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carrt. Actopan-Tula Km. 16.6, Col. Tercera Demarcacion, Unidad Magisterial, 42661 Francisco I. Madrero, Hgo., México",
     "lat": 20.246513,
     "lng": -99.10005
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Papantla-Espinal, Col. .",
     "lat": 20.257515,
     "lng": -97.39012
   },
   {
     "marca": "BP",
     "direccion": "Carretera Mexico-Laredo Km. 118, La Estación C.P. 42500 Actopan, Hidalgo, México.",
     "lat": 20.26111,
     "lng": -98.94522
   },
   {
     "marca": "PEMEX",
     "direccion": "Pensador Mexicano No. 61, Col. Centro Norte",
     "lat": 20.275522,
     "lng": -98.94063
   },
   {
     "marca": "PEMEX",
     "direccion": "Pensador Mexicano No. 61, Col. Centro Norte",
     "lat": 20.275522,
     "lng": -98.94063
   },
   {
     "marca": "BP",
     "direccion": "Carrt. Guadalajara-Morelia 1000, C.P. 45800, Jocotepec, Jalisco.",
     "lat": 20.27707,
     "lng": -103.44661
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Francisco I. Madero, Panteón, 42640 San Salvador, Hgo., México",
     "lat": 20.283243,
     "lng": -99.016754
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Francisco I. Madero, Panteón, 42640 San Salvador, Hgo., México",
     "lat": 20.283548,
     "lng": -99.01678
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "San Juan del Río-Huichapan km 77+220, 76837 San Juan del Rio, Qro., México",
     "lat": 20.299675,
     "lng": -99.899155
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera ixmikilpa ixmiquilpam palmilla km 58.5, Vallo Largo, 42420 Huichapan, Hgo., México",
     "lat": 20.303799,
     "lng": 99.74488
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol.Av. Hidalgo No.1091, Col. Banquetes",
     "lat": 20.323153,
     "lng": -102.01809
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Progreso-Ixmiquilpan Km. 10.725, Col. ",
     "lat": 20.337809,
     "lng": -99.20573
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Niños Héroes #129 Col. Centro. Ocotlán, Jalisco",
     "lat": 20.346825,
     "lng": -102.77731
   },
   {
     "marca": "FULLGAS",
     "direccion": "Nuevo San Juan, 76807 San Juan del Rio, Qro.",
     "lat": 20.360386,
     "lng": -99.962524
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Pedro Ma. Anaya No. 56 Col. Centro Huichapan, Hgo C.P 42400",
     "lat": 20.369524,
     "lng": -99.65198
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Camp-Merida Km 84+970, Col. S/C",
     "lat": 20.37281,
     "lng": -90.03973
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Michoacan No.1, Col. .-",
     "lat": 20.376625,
     "lng": -102.93015
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 39 Numero 191, Col. Santiago",
     "lat": 20.384806,
     "lng": -89.528435
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Universidad 364, Col. Banthi",
     "lat": 20.387976,
     "lng": -99.949554
   },
   {
     "marca": "BP",
     "direccion": "Blvd. Peña Flor Fracción F2A-151, Col. Desarrollo Ciudad Del Sol, C.P. 76229, San Juan Del Río, Querétaro, México.",
     "lat": 20.390327,
     "lng": -99.986725
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Valle de Santiago-Guarapo Km. 2, Col. .",
     "lat": 20.393633,
     "lng": -101.21346
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Constituyentes No 27 Col. Centro , San Juan del Rio, Queretaro.",
     "lat": 20.395231,
     "lng": -99.98854
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Guadalajara-Ocotlan Km. 36, Col. Fracc. Atequiza y la Capilla",
     "lat": 20.403854,
     "lng": -103.17395
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Guadalajara-Barra de Navidad Km 25+800 #115, Col. S/C",
     "lat": 20.41684,
     "lng": -103.7641
   },
   {
     "marca": "PEMEX",
     "direccion": "Lote Agricola No.2359 S/No., Col. Comunidad Del Espiritu",
     "lat": 20.42649,
     "lng": -99.35248
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Apaseo El Alto-Jerecuaro Km.1+850, Col. Comunidad la Luisiada",
     "lat": 20.433722,
     "lng": -100.599556
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Celaya-Salvatierra Km 8.2 Fracc.Parcela, Col. Sc",
     "lat": 20.435246,
     "lng": -100.79571
   },
   {
     "marca": "PEMEX",
     "direccion": "Avila Camacho No. 141, Col. Centro",
     "lat": 20.461803,
     "lng": -97.08257
   },
   {
     "marca": "SMARTGAS",
     "direccion": "México Querétaro KM 175. Querétaro, Carretera Federal 45 de Cuota 177, Sauz Alto, 76729 Alto Querétaro, Qro.",
     "lat": 20.462402,
     "lng": -100.098885
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Constitucion # 105, Col. Centro",
     "lat": 20.471674,
     "lng": -103.441956
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Pachuca-Cd.Valles.Km.72+150.Lad.derec.Insurg.119, Col. Fitzhi",
     "lat": 20.47522,
     "lng": -99.21201
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Cortazar-Jaral Del Progreso Km. 1, Col. Los Fresnos",
     "lat": 20.47596,
     "lng": -100.97198
   },
   {
     "marca": "BP",
     "direccion": "Carretera México-Laredo Km 159 Barrio de Jesús C.P. 42300, Ixmiquilpan, Hidalgo, México.",
     "lat": 20.477648,
     "lng": -99.22354
   },
   {
     "marca": "G500",
     "direccion": "Carretera San Isidro Mazatepec 798, Santa Cruz de las Flores, Tlajomulco de Zúñiga, Jalisco, 45460",
     "lat": 20.48443,
     "lng": -103.50978
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 19 Carretera a San Isidro Mazatepec No. 798, Col. Santa Cruz de las Flores",
     "lat": 20.485437,
     "lng": -103.51028
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Carretera Mexico Laredo km. 167, Portezuelo, 42380 Tasquillo, Hgo., México",
     "lat": 20.486065,
     "lng": -99.29688
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Panamericana # 123, Col. Estrella",
     "lat": 20.494497,
     "lng": -100.136635
   },
   {
     "marca": "G500",
     "direccion": "Eje Juan Pablo II 295, Santa María, Celaya, Guanajuato, 38090",
     "lat": 20.496286,
     "lng": -100.82006
   },
   {
     "marca": "LA GAS",
     "direccion": "Lote 2, Manzana 29, Plano 03, Bahía Akumal, Puerto, Aventuras, Q. Roo",
     "lat": 20.50601,
     "lng": -87.22917
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Revolucion #10 Col. San Vicente. Tlajomulco de Zuñiga, Jalisco",
     "lat": 20.50662,
     "lng": -103.281944
   },
   {
     "marca": "OXXO GAS",
     "direccion": "KM. 9 CARR.GUADALAJARA-EL SALTO CENTRO 45680",
     "lat": 20.511742,
     "lng": -103.19269
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. Celaya-Salamanca Km 5.5 S/N, Col. S/C",
     "lat": 20.515224,
     "lng": -100.889
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Manuel Doblado #700, Col. Centro. Villagrán, Gto. ",
     "lat": 20.515882,
     "lng": -101.00056
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Al Aeropuerto Municipal No. 501, Col. Ejido Cd. de Celaya",
     "lat": 20.517317,
     "lng": -100.89541
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.5 Carr. Federal Cleya-Queretaro Poblado Rancho, Col. .",
     "lat": 20.51901,
     "lng": -100.75481
   },
   {
     "marca": "PEMEX",
     "direccion": "Niños Heroes S/N, Col. S/D",
     "lat": 20.51929,
     "lng": -99.89711
   },
   {
     "marca": "GASMEX",
     "direccion": "Carretera Km. 17.5 Int. Aeropuerto 45659 Tlajomulco De Zuñiga Jalisco MX, Guadalajara - Chapala, Jal.",
     "lat": 20.528173,
     "lng": -103.29781
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. 12 de Octubre No. 200, Col. Fraccionamiento Celaya",
     "lat": 20.531485,
     "lng": -100.83623
   },
   {
     "marca": "PEMEX",
     "direccion": "Nuevo Trazo Periferico Km 10.100, Col. S/C",
     "lat": 20.534338,
     "lng": -103.2326
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Prol.Constituyentes Lote 33 Mzn. 100 Etapa Uno, Col. Las Trojes. Corregidora, Queretaro",
     "lat": 20.53441,
     "lng": -100.450676
   },
   {
     "marca": "PEMEX",
     "direccion": "Av Irrigacion 156 Esq. Presa Alvaro Obregon, Col. Benito Juarez Zona 1",
     "lat": 20.53688,
     "lng": -100.8043
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Celaya - Querétaro, 76900 Los Ángeles, Qro., México",
     "lat": 20.537268,
     "lng": -100.489586
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera Estatal 200 #265 Hacienda Grande, Tequisquiapan, Queretaro.",
     "lat": 20.53792,
     "lng": -99.89267
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Km. 6 Carr. Atotonilco-Guadalajara. Atotonilco El Alto, Jalisco",
     "lat": 20.540447,
     "lng": -102.56406
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Libre a Celaya Km 5, Col. El Pueblito, C.P. 76900, Corregidora, Queretaro",
     "lat": 20.542007,
     "lng": -100.43137
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Qro. Leon T. Qro.Lim. Edos. Qro7gto Km11+160, Col. Corregidora",
     "lat": 20.542213,
     "lng": -100.45231
   },
   {
     "marca": "COSTCO",
     "direccion": "Av Tecnológico 651, Cd Industrial de Celaya, 38010 Celaya, Gto.",
     "lat": 20.54417,
     "lng": -100.82037
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Mexico-Guadalajara y Calz. Est. Ff.Cc., Col. .-",
     "lat": 20.547386,
     "lng": -102.511566
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. El Sauz #1496, Col. Las Casas. Celaya, Guanajuato. ",
     "lat": 20.549498,
     "lng": -100.846634
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Manuel J Clouthier #262, Col. 15 de Mayo. Celaya, Guanajuato",
     "lat": 20.55011,
     "lng": -100.83919
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Aldama No. 70, Col. Santa Anita",
     "lat": 20.55017,
     "lng": -103.4389
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Queretaro-Irapuato Km. 40.600, Col. ",
     "lat": 20.553947,
     "lng": -100.778854
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Avenida Hidalgo #2704, Col. Ejido de Valtierrilla. Salamanca, Guanajuato",
     "lat": 20.557259,
     "lng": -101.16509
   },
   {
     "marca": "PEMEX",
     "direccion": "Lopez Mateos Sur S/N, Col. Santa Anita",
     "lat": 20.558632,
     "lng": -103.4635
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera a Los Cues Km. 1+532, Col. Sc",
     "lat": 20.561348,
     "lng": -100.267235
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera El Verde-San Martin Km 00001, Col. Lomas de San Martin",
     "lat": 20.56245,
     "lng": -103.28341
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. San Sebastian El Grande-Tlajocomulco Km 2, Col. La Calerilla",
     "lat": 20.563122,
     "lng": -103.413185
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Miguel Hidalgo No. 1919, Col. Barrio San Juan de la Presa",
     "lat": 20.5632,
     "lng": -101179
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Acueducto No. 3507, Col. Toluquilla",
     "lat": 20.566196,
     "lng": -103.36515
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Queretaro-Celaya km7+000, Corregidora, Queretaro.",
     "lat": 20.572186,
     "lng": -100.46989
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Bernardo Quintana Arrioja Sur No. 431, Col. Desarrollo Zona Centro Sur",
     "lat": 20.575949,
     "lng": -100.36043
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Queretaro-Irapuato Km. 4.319, Col. ",
     "lat": 20.57619,
     "lng": -100444
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Luis Vega y Monroy No 400,  Col. Plazas del Sol, Queretaro, Queretaro.",
     "lat": 20.577232,
     "lng": -100.37368
   },
   {
     "marca": "ORSAN",
     "direccion": "Av. Constituyentes No. 177 Pte. Col. Casa Blanca, Queretaro, Queretaro.",
     "lat": 20.579268,
     "lng": -100.39999
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol. Gobernador Curiel No. 6809, Col. Los Artesanos",
     "lat": 20.582445,
     "lng": -103.354195
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Constituyentes 22 Ote.,Centro, QUERETARO, Queretaro.",
     "lat": 20.585258,
     "lng": -100.39189
   },
   {
     "marca": "PEMEX",
     "direccion": "Faja de Oro No. 1642, Col. Predio El Pirul",
     "lat": 20.58555,
     "lng": -101.22134
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD.J.M CLOUTHIER #1140,COL.PREDIO DEL MONTE, C.P.36720",
     "lat": 20.592546,
     "lng": -101.18399
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Salamanca-Irapuato Km. 98+200, Col. 4to. Fraccionamiento Rancho Crucita",
     "lat": 20.59519,
     "lng": -101.23439
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Mexico-Irapuato km 300, Salamanca, Guanajuato.",
     "lat": 20.598785,
     "lng": -101.18034
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Universidad Oriente #337-A, Col. Las Brujas",
     "lat": 20.60106,
     "lng": -100.38114
   },
   {
     "marca": "RUTA GASOLINERA",
     "direccion": "Avenida Universidad 337, Villas del Oriente, 76160 Santiago de Querétaro, Qro., México",
     "lat": 20.601114,
     "lng": -100.38099
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Jesus Maria-Ayotlan S/N., Col. Los Pocitos",
     "lat": 20.604134,
     "lng": -102.220116
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Epigmenio González, San Pablo Tecnologico, 76150 Santiago de Querétaro, Qro.",
     "lat": 20.613268,
     "lng": -100.39966
   },
   {
     "marca": "ORSAN",
     "direccion": "Prolongacion Corregidora Nte. No 911 Col. Hacienda La Laborcilla, Queretaro, Queretaro.",
     "lat": 20.613647,
     "lng": -100389
   },
   {
     "marca": "PEMEX",
     "direccion": "Batalla de Celaya Num. 3340, Col. Fracc. Residencial El Tapatio",
     "lat": 20.61555,
     "lng": -103.3205
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD.BERNARDO QUINTANA 2402-A, COL. EL ARCANGEL",
     "lat": 20.617897,
     "lng": -100.45268
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD.PROLONGACION JUAREZ 312,COL.CENTRO,CP.36960",
     "lat": 20.619553,
     "lng": -101.668015
   },
   {
     "marca": "G500",
     "direccion": "Prolong. Bernardo Quintana 2601, Don Manuel, Queretaro, Queretaro, 76114",
     "lat": 20.62044,
     "lng": -100.457596
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera a San Bernardo, Kopomá, Yucatán",
     "lat": 20.620564,
     "lng": -89.94667
   },
   {
     "marca": "PEMEX",
     "direccion": "Lopez Mateos No. 6000, Col. Fracc. las Fuentes",
     "lat": 20.623264,
     "lng": -103.42179
   },
   {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata No. 420, Col. Loma Dorada",
     "lat": 20.626461,
     "lng": -103.25134
   },
   {
     "marca": "BP",
     "direccion": "Av. Dr. R. Michel 3029, Col. Alamo Oriente, C.P. 45560, San Pedro Tlaquepaque, Jalisco.",
     "lat": 20.626877,
     "lng": -103.32382
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Irapuato-Abasolo #6063 Col Granja Mexicalli. Irapuato, Gto",
     "lat": 20.6276,
     "lng": -101.3938
   },
   {
     "marca": "PEMEX",
     "direccion": "Sierra de Tapalpa Esq.Av.18 de Marzo No.1545, Col. Las Aguilas",
     "lat": 20.628399,
     "lng": -103.40993
   },
   {
     "marca": "PEMEX",
     "direccion": "Sierra de Tapalpa Esq.Av.18 de Marzo No.1545, Col. Las Aguilas",
     "lat": 20.628399,
     "lng": -103.40993
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Pie de la Cuesta No. 1203, Col. Desarrollo San Pablo",
     "lat": 20.630098,
     "lng": -100407
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Celaya-Juventino Rosas Km. 17.400, Col. ",
     "lat": 20.630764,
     "lng": -100.97195
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Juarez Manzana 32, Lt 8, Esq. Av. 115 Sur, Col. Ejidal",
     "lat": 20.63434,
     "lng": -87.095695
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Francisco Villa No. 783, Col. Versalles",
     "lat": 20.634686,
     "lng": -105.22491
   },
   {
     "marca": "PEMEX",
     "direccion": "Gonzalez Gallo Num. 2561, Col. El Rosario",
     "lat": 20.634928,
     "lng": -103.32666
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Colon Num.2776, Col. Jardines de la Cruz",
     "lat": 20.640394,
     "lng": -103.37559
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Mompani # 30, Col. La Pena C.T.M.",
     "lat": 20.643068,
     "lng": -100.4597
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Malecon Num. 836, Col. La Presa",
     "lat": 20.646313,
     "lng": -103.27305
   },
   {
     "marca": "PEMEX",
     "direccion": "Chamizal No.505 Esq. Con la Av. Revolucion, Col. .-",
     "lat": 20.647621,
     "lng": -103.30608
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Constitucion #240 Esq. Cipres, Col. Loma Bonita. Tonala, Jalisco",
     "lat": 20.64962,
     "lng": -103.26112
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Patria, Moctezuma y Sta. Catalina, Col. El Mirador Del Sol. Zapopan, Jalisco",
     "lat": 20.650772,
     "lng": -103.42272
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz.G.Gonzalez Nu.1000 Sector Reforma, Col. Sector Reforma",
     "lat": 20.651926,
     "lng": -103.33748
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Queretaro-Leon Tramo Lib. Norte de Irapuato Km. 7.653, Col. ",
     "lat": 20.65216,
     "lng": -101.3587
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Lateral Camino Mompani",
     "lat": 20.652613,
     "lng": -100.47287
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Monterrey #902, Col. San Jose El Alto",
     "lat": 20.654037,
     "lng": -100.38151
   },
   {
     "marca": "LA GAS",
     "direccion": "Av. 45 norte col. Luis Donaldo Colosio II, Mz 559, Lote 03,04,05 y 06 Playa del Carmen Quintana Roo. Cp 77710",
     "lat": 20.655146,
     "lng": -87.06439
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carr. Costera del Golfo, 97770 Chemax, Yuc.",
     "lat": 20.657623,
     "lng": -87.94832
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolong. Avenida Gigantes No. 340, Col. Loma Bonita",
     "lat": 20.65852,
     "lng": -103.25269
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Calle 5 de Febrero # 142 Col las Conchas. Guadalajara, Jalisco",
     "lat": 20.65951,
     "lng": -103.33862
   },
   {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Sur 1805, Col. Chapalita, Guadalajara Jalisco",
     "lat": 20.660578,
     "lng": -103.39628
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Solidaridad # 6828, Col. Fraccionamiento Los Olivos. Irapuato, Guanajuato",
     "lat": 20.662422,
     "lng": -101.31583
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.98+350 Carr. Pachuca-Tampico, Col. S/C",
     "lat": 20.662977,
     "lng": -98.66314
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Estatal Irapuato-Cueramaro Km. 4.5, Col. Ejido San Javier",
     "lat": 20.663961,
     "lng": -101.43437
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera Valladolid-Mérida, Tablaje Catastral 9545, Carr. Costera del Golfo, Ebtún, Yuc.",
     "lat": 20.668028,
     "lng": -88.25707
   },
   {
     "marca": "PEMEX",
     "direccion": "Exiquio Corona S/N, Col. El Conejo Frac.Club Hipodromo Resid",
     "lat": 20.669859,
     "lng": -105.21395
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mexico Tuxpam Km. 213, Col. Sc",
     "lat": 20.67015,
     "lng": -97.52332
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Mexico Tuxpam Km. 213, Col. Sc",
     "lat": 20.67015,
     "lng": -97.52332
   },
   {
     "marca": "GASMEX",
     "direccion": "Periferico Ote. Esq. Av. Matatlan, Tonala, Jal.",
     "lat": 20.670462,
     "lng": -103.22207
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 40, Lote 25, Tablaje Catastral 3996",
     "lat": 20.671675,
     "lng": -88.20485
   },
   {
     "marca": "BP",
     "direccion": "Av. República 2082, Col. Blanco y Cuellar, C.P. 44730, Guadalajara, Jalisco.",
     "lat": 20.671682,
     "lng": -103.307495
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Gustavo Diaz Ordaz No. 727, Col. Barrio de San Jose",
     "lat": 20.67281,
     "lng": -101.33983
   },
   {
     "marca": "PEMEX",
     "direccion": "Pablo Valdez No. 3602 y 3608, Col. San Joaquin",
     "lat": 20.673729,
     "lng": -103.28253
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Hidalgo No.705 Entre Calz. del Federalismo y Calle Mezquitan",
     "lat": 20.677073,
     "lng": -103.35354
   },
   {
     "marca": "PEMEX",
     "direccion": "Industria No. 755, Col. Belisario Dominguez",
     "lat": 20.679083,
     "lng": -103.32662
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera Queretaro - San Luis Potosi #12717 Col. Parcela Ejido Jurica, Queretaro, Queretaro.",
     "lat": 20.680841,
     "lng": -100.43564
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 6 Carrt. Ezequiel Montes-Queretaro, Col. S/D",
     "lat": 20.682432,
     "lng": -99.93388
   },
   {
     "marca": "PEMEX",
     "direccion": "Guerrero 1240, Col. Centro",
     "lat": 20.682507,
     "lng": -101.353355
   },
   {
     "marca": "PEMEX",
     "direccion": "Manuel Doblado Nos. 691, 693, 695 y 697, Col. Zona Centro",
     "lat": 20.683035,
     "lng": -103.33123
   },
   {
     "marca": "GASMEX",
     "direccion": "Av. López Mateos Nte. 541, Esqu. Manuel Acuña Col. Ladron de Guevara, Guadalajara, Jal.",
     "lat": 20.684063,
     "lng": -103.38116
   },
   {
     "marca": "GASMEX",
     "direccion": "Calle Mezquitan No. 500 Col. Centro, Guadalajara, Jal. C.p. 44200",
     "lat": 20.684399,
     "lng": -103.35289
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Villas de Irapuato 2839, Col. Ejido San Jose de Jorge Lopez",
     "lat": 20.684772,
     "lng": -101.392365
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Constituyentes #14, Col. La Cuchara. Tonala, Jalisco",
     "lat": 20.687405,
     "lng": -103.33523
   },
   {
     "marca": "REPSOL",
     "direccion": "Avenida Americas No.666",
     "lat": 20.68849,
     "lng": -103373
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 41, Tablaje Catastral 4104 X 62, Col. Bacalar, Calle 16 A Tab. 14177, Carretera Mérida - Umán, Umán, Yuc.",
     "lat": 20.690578,
     "lng": -88.218346
   },
   {
     "marca": "PEMEX",
     "direccion": "Calzada Del Obrero No 1635 Sector Libertad, Col. Postes Cuates",
     "lat": 20.69171,
     "lng": -103.311844
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera Valladolid Puerto Juarez Km 41 S/N, Desconocida, Militar, 97782 Valladolid, Yuc.",
     "lat": 20.692781,
     "lng": -88.173096
   },
   {
     "marca": "PEMEX",
     "direccion": "Circunvalacion y Puerto Melaque, Col. .",
     "lat": 20.693308,
     "lng": -103.32234
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Nororiente #5578 Col. El Carrizalito. Irapuato, Guanajuato",
     "lat": 20.694427,
     "lng": -101.312805
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino a Matatlan, Av.Ninos Heroes #375 Km. 10.200, Col. ",
     "lat": 20.695278,
     "lng": -103.147224
   },
   {
     "marca": "GASMEX",
     "direccion": "Carretera a Matatlan Km. 1, Zapotlanejo, Jalisco",
     "lat": 20.695585,
     "lng": -103.14763
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Celaya-Comonfort Km 17+700, Col. S/C",
     "lat": 20.699001,
     "lng": -100.75269
   },
   {
     "marca": "ORSAN",
     "direccion": "Libramiento Noroeste De Queretaro Km. 19.5,Lado Sur El Marques, EL MARQUES, Queretaro.",
     "lat": 20.699736,
     "lng": -100.33802
   },
   {
     "marca": "ORSAN",
     "direccion": "Libramiento Noroeste De Queretaro Km. 19.5,Lado Norte El Marques, EL MARQUES, Queretaro.",
     "lat": 20.69985,
     "lng": -100.33707
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Noreste Km.19+700 Lado Sur, Col. No",
     "lat": 20.700111,
     "lng": -100.33887
   },
   {
     "marca": "PEMEX",
     "direccion": "Mar Negro No. 1460, Col. Lomas Del Country",
     "lat": 20.701912,
     "lng": -103.366005
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Nororiente No.- 7541 Carretera Federal, Col. Km. 7",
     "lat": 20.703257,
     "lng": -101.32155
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 151.5 Carrt. Fed. 200 Tepic-Puerto Vallarta, Col. Loc. Jarretaderas",
     "lat": 20.7042,
     "lng": -105.27286
   },
   {
     "marca": "PEMEX",
     "direccion": "No.899 Ent.Calles Prolongacion y Felix Palavacini, Col. .",
     "lat": 20.704378,
     "lng": -103.346855
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 9 Carret. Fed. Guadalajara-Tepic, Col. .",
     "lat": 20.706047,
     "lng": -103.463196
   },
   {
     "marca": "PEMEX",
     "direccion": "Vialidad Neutla Comonfort 10, Col. ",
     "lat": 20.70815,
     "lng": -100.8349
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Tepic No.1508 Sur, Col. Las Parotas",
     "lat": 20.710724,
     "lng": -105.275955
   },
   {
     "marca": "PEMEX",
     "direccion": "Eutimio Pinzon No. 845, Col. Flores Magon",
     "lat": 20.717081,
     "lng": -103.32885
   },
   {
     "marca": "GASMART",
     "direccion": "Libramiento Nororiente, Granja Isabelita, 36821 Irapuato, Gto.",
     "lat": 20.72188,
     "lng": -101.33809
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Libramiento Nororiente, Granja Isabelita, 36821 Irapuato, Gto.",
     "lat": 20.72188,
     "lng": -101.33809
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera a Chichimequillas Km. 19+800, Col. Ejido Amazcala",
     "lat": 20.727507,
     "lng": -100.28822
   },
   {
     "marca": "GASMEX",
     "direccion": "Periferico Nte. 4600, Col. Benito Juarez, Zapopan, Jalisco.",
     "lat": 20.72802,
     "lng": -103.34238
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 698 Carr. Mexico-Nogales, Col. Loc. la Venta Del Astillero",
     "lat": 20.729261,
     "lng": -103.54031
   },
   {
     "marca": "PEMEX",
     "direccion": "Plata # 1701, Col. San Isidro Ejidal",
     "lat": 20.73529,
     "lng": -103.399994
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Carretera Mezcales - San Vicente No. 9 Oriente San Clemente de Lima, Valle Dorado, 63735 Bahía de Banderas, Nay.",
     "lat": 20.737503,
     "lng": -105.27309
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol. B.Juarez Esq.Carr.M.Dobado-P.Negr Km. 0.000, Col. ",
     "lat": 20.73808,
     "lng": -101.9534
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.5.0 Carr.Zapopan-Tesistan  y Dr. Angel Leaño, Col. .",
     "lat": 20.748146,
     "lng": -103.416145
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tepic Puerto Vallarta No. 1273 Sur, Col. Residencial Flamingos",
     "lat": 20.748951,
     "lng": -105.31596
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Mexico-Laredo Km. 206, Col. .",
     "lat": 20.754313,
     "lng": -99.329926
   },
   {
     "marca": "GASMART",
     "direccion": "Carretera Porvenir San Jose DEL Valle KM 5.6 San José, 63733 Bahía de Banderas, Nay.",
     "lat": 20.756334,
     "lng": -105.237465
   },
   {
     "marca": "GASMART",
     "direccion": "Av. Playas los picos No. 96 Playa de Huanacaxtle, 63732 Bahía de Banderas, Nay.",
     "lat": 20.760796,
     "lng": -105.3521
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Av. Playas los picos No. 96 Playa de Huanacaxtle, 63732 Bahía de Banderas, Nay.",
     "lat": 20.760796,
     "lng": -105.3521
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. a la Base Aerea # 330 M-3,L-Fracc. C y B, Col. Fracc. Jardines de Nuevo Mexico",
     "lat": 20.760815,
     "lng": -103.43997
   },
   {
     "marca": "SMARTGAS",
     "direccion": "KM 140., México 200, Bucerias, 63732 Bucerías, Nay.",
     "lat": 20.76207,
     "lng": -105.3494
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tepatitlan-Tototlan Km. 26.320, Col. ",
     "lat": 20.76336,
     "lng": -102723
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Cruz de Huanacaxtle-Punta de Mita No.1606, Col. Higuera Blanca-41",
     "lat": 20.765306,
     "lng": -105.486206
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No. 5 Esq. Javier Mina, Col. S/D",
     "lat": 20.77818,
     "lng": -103.69205
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. a Tesistan No. 8920, Col. Tesistan",
     "lat": 20.788565,
     "lng": -103.47178
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 39  Carretera Zapotlanejo - Lagos de Moreno, Col. Tepatitlan de Morelos",
     "lat": 20.815445,
     "lng": -102.80235
   },
   {
     "marca": "PEMEX",
     "direccion": "Javir Mina # 451, Col. El Refugio",
     "lat": 20.81704,
     "lng": -102.58845
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guadalajara - Saltillo Km. 46.6 S/N, Col. La Hacienda de Guadalupe. Ixtlahuacan Del Rio, Jalisco",
     "lat": 20.848755,
     "lng": -103.2575
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD.SALIDA A CUERAMARO #45,COL.PRIVADA DE REYES C.P. 36200",
     "lat": 20.872295,
     "lng": -101.52685
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Atotonilco-Encarnacion de Diaz # 2002, Col. S/C",
     "lat": 20.87473,
     "lng": -102.38877
   },
   {
     "marca": "FULLGAS",
     "direccion": "Fracción Suroeste del predio San Pedro, El Ideal, Carr. Costera del Golfo, Quintana Roo",
     "lat": 20.88045,
     "lng": -87.54023
   },
   {
     "marca": "TOTAL",
     "direccion": "PARROQUIA #1 Fracc. La Parroquia, 37793 San Miguel de Allende, Gto.",
     "lat": 20.88857,
     "lng": -101.323364
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Salida a Celaya Km.1 #77, Col. La Lejona",
     "lat": 20.89893,
     "lng": -100.75315
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Irapuato - Silao Predio La Fortuna. Silao, Guanajuato.",
     "lat": 20.90117,
     "lng": -101.36859
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Federal 45 Silao - Irapuato, Km. 142 + 358. Silao Guanajuato.",
     "lat": 20.905392,
     "lng": -101.37455
   },
   {
     "marca": "PEMEX",
     "direccion": "Francisco Zarco # 7, Col. Centro",
     "lat": 20.91007,
     "lng": -99.56765
   },
   {
     "marca": "LA GAS",
     "direccion": "Km 19.5 Carretera Merida-Uman c. 21 No 471 Col. Ampliación Ciudad Industrial (a un costado de la empresa Dypaq ) ",
     "lat": 20.919079,
     "lng": -89.700584
   },
   {
     "marca": "G500",
     "direccion": "Calle 60 X 119 Y 21 896, Mercedes Barrera, Mérida, Yucatan, 97297",
     "lat": 20.933172,
     "lng": -89.630295
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera Mérida-Valladolid km 9.5 Municipio Kanasín, Yucatán",
     "lat": 20.939402,
     "lng": -89.542915
   },
   {
     "marca": "G500",
     "direccion": "Calle 69 X 48 Y 50 188 y, Mulchechen II, Kanasín, Yucatan, 97370",
     "lat": 20.941738,
     "lng": -89.57387
   },
   {
     "marca": "PEMEX",
     "direccion": "5 de Mayo No. 94, Col. Centro",
     "lat": 20.94397,
     "lng": -101.42108
   },
   {
     "marca": "PEMEX",
     "direccion": "5 de Mayo No. 17, Col. Santiago de la Pena",
     "lat": 20.944555,
     "lng": -97.40015
   },
   {
     "marca": "LA GAS",
     "direccion": "Anillo Periférico Manuel Berzunza Colonia Felipe Carillo Puerto Ampliación Cd. Industrial Tablaje Catastral 19016 Mérida, Yucatán, C.P. 97288",
     "lat": 20.95006,
     "lng": -89703
   },
   {
     "marca": "OXXO GAS",
     "direccion": "ALVARO OBREGON #194, COL. CENTRO C.P 36100",
     "lat": 20.951597,
     "lng": -101.43537
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Federal 45 Silao - Irapuato, Km. 157 + 570, Col. Nuevo México. Silao Guanajuato. ",
     "lat": 20.954733,
     "lng": -101.48977
   },
   {
     "marca": "PEMEX",
     "direccion": "Lote 1 Mza. 7; Carrt. y Periferico, Col. Benito Juarez Ote.",
     "lat": 20.956945,
     "lng": -89.56856
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD. EMILIANO ZAPATA NUM. 4 LORENZO MOSQUEDA 36000",
     "lat": 20.958103,
     "lng": -101.60906
   },
   {
     "marca": "PEMEX",
     "direccion": "Lote 23 Manzana \"C\" Carrt. Tuxpan-La Barra # 33, Col. La Calzada",
     "lat": 20.958946,
     "lng": -97.34013
   },
   {
     "marca": "LA GAS",
     "direccion": "Calle 63 No. 302A Fracc. Juan Pablo II entre calle 18 y calle 20 Mérida, Yucatán, C.P. 97246",
     "lat": 20.95944,
     "lng": -89.67609
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Guanajuato- Puentecillas Km 0+480, comunidad de Yerbabuena, Guanajuato, Guanajuato.",
     "lat": 20.964003,
     "lng": -101.280205
   },
   {
     "marca": "PEMEX",
     "direccion": "., Col. ",
     "lat": 20.968826,
     "lng": -102.64866
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Bicentenario 457, Col. ",
     "lat": 20.97563,
     "lng": -100.42599
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico Laredo Km. 175.66, Col. Centro",
     "lat": 20.9778,
     "lng": -99.2128
   },
   {
     "marca": "LA GAS",
     "direccion": "MZA. 13 LOTE 3, SM48,  Benito Juarez, Cancún, Q. Roo CP. 77506",
     "lat": 20.979004,
     "lng": -86.86025
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. 39 #433-435, Merida Yucatan",
     "lat": 20.981133,
     "lng": -89.5895
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Guanajuato - Juventino Rosas, Col. Arroyo Verde. Guanajuato, Gto",
     "lat": 20.981764,
     "lng": -101.28311
   },
   {
     "marca": "G500",
     "direccion": "Calle 59 Tablaje Catastral por Anillo Periferico 38011, Jacinto Canek, Mérida, Yucatan, 97227",
     "lat": 20.993761,
     "lng": -89.68285
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Federal Merida-Cancun km 273",
     "lat": 20.99428,
     "lng": -87.187164
   },
   {
     "marca": "G500",
     "direccion": "Av. Jacinto Canek x 136 A S/N, Ampliación Porvenir, Mérida, Yucatan, 97226",
     "lat": 20.994871,
     "lng": -89.671974
   },
   {
     "marca": "G500",
     "direccion": "Calle 62 por 23 y 62 653 y, Diagonal Fraccionamiento, Ciudad Caucel, Yucatan, 97314",
     "lat": 20.998056,
     "lng": -89.70761
   },
   {
     "marca": "FULLGAS",
     "direccion": "Calle 25 No 111, esquina calle 20, Col. Chuburná de Hidalgo, Mérida, Yucatán.",
     "lat": 21.00839,
     "lng": -89.63154
   },
   {
     "marca": "PEMEX",
     "direccion": "Juarez # 105, Col. La Pinera",
     "lat": 21.01569,
     "lng": -103.72052
   },
   {
     "marca": "G500",
     "direccion": "Circuito Colonias (Matriz) 180, Yucatán, Mérida, Yucatan, 97000",
     "lat": 21.020472,
     "lng": -89.56866
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Estatal Manuel Doblado  Km. 12, Col. Ejidop  San Roque",
     "lat": 21.025633,
     "lng": -101.78408
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Lázaro Cárdenas, Concepción 743, 36320 San Francisco del Rincón, Gto.",
     "lat": 21.028652,
     "lng": -101.85687
   },
   {
     "marca": "GASMART",
     "direccion": "Lázaro Cárdenas, Concepción 743, 36320 San Francisco del Rincón, Gto.",
     "lat": 21.0287,
     "lng": -101.85652
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.Aeropuerto Pred.Rustico Sauz de Arriba #3315, Col. Ex-Hacienda",
     "lat": 21.030506,
     "lng": -101.54544
   },
   {
     "marca": "LA GAS",
     "direccion": "Periferico Tab. Cat. No. 13950. Fcon de Montejo (al lado de transo yucarro) bajo el puente de Dzitia",
     "lat": 21.034021,
     "lng": -89.65586
   },
   {
     "marca": "PEMEX",
     "direccion": "Zaragoza Oriente No.  441, Col. Mexpan",
     "lat": 21.036165,
     "lng": -104.40472
   },
   {
     "marca": "LA GAS",
     "direccion": "Calle 51 No. 640 entre Calle 53 y Calle 51B Real Montejo, Mérida, Yucatán C.P. 97302",
     "lat": 21.03826,
     "lng": -89.66869
   },
   {
     "marca": "LA GAS",
     "direccion": "Calle 3 # 239 x 34 y 60 Col. Xcumpich, Merida Yucatan Mexico, CP. 97204",
     "lat": 21.0407,
     "lng": -89.631805
   },
   {
     "marca": "LA GAS",
     "direccion": "Anillo Periférico Manuel Berzunza x 19 diagonal y 26 Tablaje catastral 38980 CP 97302 Col Sodzil Mérida Yucatán (A un costado de Acerofertas)",
     "lat": 21.043976,
     "lng": -89.613716
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 1 No. 218 T, Col. Chuburna de Hidalgo",
     "lat": 21.047977,
     "lng": -89.645004
   },
   {
     "marca": "FULLGAS",
     "direccion": "Carretera Progreso-Mérida, Carretera Merida-Progreso km10, Temozon Norte, Temozón Nte, Mérida, Yuc.",
     "lat": 21.057137,
     "lng": -89.63123
   },
   {
     "marca": "PEMEX",
     "direccion": "Iturbide Encarnacion Carret. San Juan-San Miguel, Col. San Juan de Los Reynoso",
     "lat": 21.070253,
     "lng": -102.29064
   },
   {
     "marca": "G500",
     "direccion": "Circuito Colonias 101 X, Dzytya, Mérida, Yucatan, 97345",
     "lat": 21.075163,
     "lng": -89.51673
   },
   {
     "marca": "GASMART",
     "direccion": "Boulevard Timoteo Lozano Oriente No. 3001, Col. Granjero Plus, El Granjeno Iveg, 37138 León, Gto.",
     "lat": 21.07658,
     "lng": -101.653946
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Boulevard Timoteo Lozano Oriente No. 3001, Col. Granjero Plus, El Granjeno Iveg, 37138 León, Gto.",
     "lat": 21.07658,
     "lng": -101.653946
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. No. 57 Km 62.5 Tramo Qro-S.L.Paz, Col. S/D",
     "lat": 21.079689,
     "lng": -100.51465
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Francisco Villa Num. 1322-1324-1326-1328, Col. Santo Domingo Seccion 11",
     "lat": 21.089539,
     "lng": -101.66533
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Delta No. 102, Col. San Jose de Santa Julia, Leon Guanajuato",
     "lat": 21.092575,
     "lng": -101.61695
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd Jose Torres Landa, Esq. con Calle San Marcial ",
     "lat": 21.09994,
     "lng": -101.62534
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Juan Jose Torres Landa #901,Prados Verdes. León, Gto.",
     "lat": 21.100683,
     "lng": -101.672585
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Escobedo Num. 4702, Col. Jardines de Jerez",
     "lat": 21.103617,
     "lng": -101.64115
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. la Luz 5115, Fracciones de San Nicolas de los Gonzalez, 37670 León, Gto.",
     "lat": 21.109232,
     "lng": -101.594925
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Mariano Escobedo No. 700, Col. San Nicolas",
     "lat": 21.111542,
     "lng": -101.67646
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. Paseo de Jerez 809, Granjas Ceres, 37289 León, Gto.",
     "lat": 21.112501,
     "lng": -101.6372
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. Adolfo López Mateos 902, Coecillo, 37219 León, Gto.",
     "lat": 21.12053,
     "lng": -101.67204
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de Cervantes Saavedra Num. 102, Col. Lomas de Arbide",
     "lat": 21.12446,
     "lng": -101.705986
   },
   {
     "marca": "LA GAS",
     "direccion": "Blvd. Luis Donaldo Colosio Smz. 57, Mza. 03, Lote 18-04 (entrada al Fracc. Las Americas) Cancun, Benito Juarez, Quintana Roo",
     "lat": 21.126272,
     "lng": -86.83244
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Vicente Valtierra No. 3708, Col. Congregacion de San Pedro de Los Her",
     "lat": 21.127539,
     "lng": -101.64458
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Vicente Valtierra #4101, Col. Jardines de Oriente 4° sección. León, Guanajuato.",
     "lat": 21.128454,
     "lng": -101.645325
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Vicente Valtierra Esq. Porto Alegre 2101, Col. La Carmona",
     "lat": 21.131327,
     "lng": -101.6608
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Federal Merida-Cancun Km 309",
     "lat": 21.135172,
     "lng": -86.90611
   },
   {
     "marca": "PEMEX",
     "direccion": "Cuauhtemoc Esq. Con Carr Huejutla- San Felipe Ori, Col. Capitan Antonio Reyes",
     "lat": 21.136118,
     "lng": -98.43022
   },
   {
     "marca": "BP",
     "direccion": "Blvd. Francisco Villa 2411, Ángeles Y Medina C.P. 37235, León Guanajuato, México.",
     "lat": 21.138294,
     "lng": -101.6437
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Juan del Bosco #101, Col. Ejido La Joya. León Guanajuato. ",
     "lat": 21.139172,
     "lng": -101.724976
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Aristóteles 1965, La Piedad, 37358 León, Gto.",
     "lat": 21.13966,
     "lng": -101.74649
   },
   {
     "marca": "LA GAS",
     "direccion": "Av. Nichupte y Kinik Mza 1 Lote 1 Smza 51 Cancun Q.Roo (Gran Plaza) ",
     "lat": 21.14064,
     "lng": -86.8558
   },
   {
     "marca": "PEMEX",
     "direccion": "Hierro No. 301, Col. San Joseobrero",
     "lat": 21.141232,
     "lng": -101.70223
   },
   {
     "marca": "LA GAS",
     "direccion": "MZA 8 MZA 1 LOTE 3 INT B AV. TULUM ESQ. NICHUPTE (PLAZA LAS AMERICAS)",
     "lat": 21.14392,
     "lng": -86.82313
   },
   {
     "marca": "PEMEX",
     "direccion": "Mayapan Lotes 11 y 12 Mz-11 Supermz-97 # 1611, Col. Cd. Industrial",
     "lat": 21.14502,
     "lng": -86.86171
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Yaxchilan Ls-8 y 9 S/N Suprmz-17 Mz-1, Col. Loc. Cancun",
     "lat": 21.14533,
     "lng": -86.83726
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Miguel Hidalgo #1602, esq. José Ma. Belauz, Villa Insurgentes. León, Gto.",
     "lat": 21.147028,
     "lng": -101.67186
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvr. Agustin Tellez Cruces Num. 3001, Col. Deportiva Ii",
     "lat": 21.150696,
     "lng": -101.64303
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Juan Bosco #2934 Col. El Mirador. León, Gto.",
     "lat": 21.151752,
     "lng": -101.72916
   },
   {
     "marca": "GASMART",
     "direccion": "Col., Blvd. Antonio Madrazo 3701, San Jose del Consuelo, 37200 León, Gto.",
     "lat": 21.153358,
     "lng": -101.65626
   },
   {
     "marca": "BP",
     "direccion": "Cerro Gordo 604 Villas del Campestre C.P. 37129 Guanajuato, Guanajuato, México.",
     "lat": 21.159342,
     "lng": -101.709435
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 218+100 Carrt. Nac. Pachuca-Tampico, Col. El Pintor",
     "lat": 21.162657,
     "lng": -98.400795
   },
   {
     "marca": "FULLGAS",
     "direccion": "Av. Fco. I Madero, Ruta 4 S/N Zona 6 RegiÓN 92 Cp. 77516",
     "lat": 21.166927,
     "lng": -86.84861
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Manuel J. Clouthier No. 702 Fracc. Cerro Gordo, Leon Guanajuato",
     "lat": 21.16732,
     "lng": -101693
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Fed. Tres Huastecas Km. 25.9, Col. .",
     "lat": 21.174122,
     "lng": -98.600975
   },
   {
     "marca": "LA GAS",
     "direccion": "Region 228, Mza. 104, Lotes 14,15 y 16, Cancun Quintana Roo",
     "lat": 21.175064,
     "lng": -86.86041
   },
   {
     "marca": "PEMEX",
     "direccion": "Salida Carr Aguascalientes, Col. .",
     "lat": 21.18877,
     "lng": -102.88532
   },
   {
     "marca": "PEMEX",
     "direccion": "Salida Carr Aguascalientes, Col. .",
     "lat": 21.18877,
     "lng": -102.88532
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Dolores San Diego de la Union Km. 0+279, Col. Sc",
     "lat": 21.19457,
     "lng": -100.867676
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. # 200 Tepic-Puerto Vallarta Km 67+900, Col. S/D",
     "lat": 21.19652,
     "lng": -105.09382
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr, Fed. San Juan Del Rio-Xilitla Xil Km. 184.700, Col. ",
     "lat": 21.20044,
     "lng": -99.44738
   },
   {
     "marca": "LA GAS",
     "direccion": "Calle Heberto Castillo MartinezL, Lote 451-05, Manzana 01, Smza 244, C.P. 77500, Cancun, Quintana Roo.",
     "lat": 21.2056,
     "lng": -86.84255
   },
   {
     "marca": "PEMEX",
     "direccion": "Ninos Heroes 116, Col. Sin Nombre",
     "lat": 21.20643,
     "lng": -102.12393
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas 148, Col. El Rosario",
     "lat": 21.24133,
     "lng": -102.32598
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Al Garrafon S/N",
     "lat": 21.243984,
     "lng": -86.73837
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 24 X 23 No 107-C, Col. ",
     "lat": 21.24507,
     "lng": -89.04654
   },
   {
     "marca": "PEMEX",
     "direccion": "Gonzalez Ortega No. 60, Col. Juarez",
     "lat": 21.273848,
     "lng": -98.3709
   },
   {
     "marca": "GASORED",
     "direccion": "Paseo de la República, San Luis de la Paz, Gto.",
     "lat": 21.285147,
     "lng": -100.59315
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Lagos - León, Km 354-460 #5000, Ejido La Moya. Lagos de Moreno, Jalisco. ",
     "lat": 21.320065,
     "lng": -101.88325
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Nacional y Enrique Rebsamen Num.1002, Col. .",
     "lat": 21.366268,
     "lng": -98.22805
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Encarnacion de Diaz-San Juan de Lagos Km 10, Col. Loc. Encarnacion de Diaz",
     "lat": 21.42043,
     "lng": -102.25504
   },
   {
     "marca": "PEMEX",
     "direccion": "Hidalgo 447 Carr. Jaramillo-Teocaltiche Km. 1, Col. .",
     "lat": 21.445168,
     "lng": -102.57349
   },
   {
     "marca": "PEMEX",
     "direccion": "Hgo.91 Nte.Ent.Las Calles Leandeo Ocampo y Guerrer, Col. .",
     "lat": 21.448929,
     "lng": -104.89966
   },
   {
     "marca": "PEMEX",
     "direccion": "Platino No. 57 Ote., Col. Ciudad Industrial Microindustria",
     "lat": 21.47532,
     "lng": -104.8526
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Num.101, Llano Grande,Tempoal,Ver.",
     "lat": 21.492882,
     "lng": -98.35686
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Tepic-Jacocotan Km 23+430, Col. S/D",
     "lat": 21.49516,
     "lng": -105.08258
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Praxedis Guerrero No.128 Sur, Esq.Av.Insurge, Col. Emiliano Zapata",
     "lat": 21.514578,
     "lng": -104.909325
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 139 Carr. Tuxpan-Tampico, Col. .",
     "lat": 21.52619,
     "lng": -98.38217
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Tlaltenango-Guadalajara Km. 1, Col. Sin Colonia",
     "lat": 21.620468,
     "lng": -103.04116
   },
   {
     "marca": "PEMEX",
     "direccion": "Carranza S/N, Col. Barrio Progreso",
     "lat": 21.63416,
     "lng": -98.65864
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km.126+532.8, Ozuluama, Ver.",
     "lat": 21.685448,
     "lng": -97.85377
   },
   {
     "marca": "GASORED",
     "direccion": "México 57, San Luis Potosí",
     "lat": 21.697449,
     "lng": -100.65324
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.176+136 Carr. Zacatecas-Guadalajara, Col. .",
     "lat": 21.757313,
     "lng": -102.97357
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. la Presa-Leandro B. Flores Km 2 # 201, Col. Leandro B. Flores",
     "lat": 21.78453,
     "lng": -105.17939
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.1 Carr. Atolinga-Tlaltenango, Col. .",
     "lat": 21.799175,
     "lng": -103.29718
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.22 Carr. Ags-Ojuelos Entroq.Carr.A Sn.Bartolo, Col. .",
     "lat": 21.820473,
     "lng": -102.100174
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.22 Carr. Ags-Ojuelos Entroq.Carr.A Sn.Bartolo, Col. .",
     "lat": 21.820473,
     "lng": -102.100174
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret.Int. Km.51,Crucero de Yago No.5 Sur,Capomal, Col. .",
     "lat": 21.834345,
     "lng": -105.11705
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 0.500 de la Carret. Yago Entrq. Internacional, Col. .",
     "lat": 21.839277,
     "lng": -105.06911
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km. 148+583 Ozuluama, Ver.",
     "lat": 21.85086,
     "lng": -97.749146
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Siglo Xxi, Col. Lomas Del Chapulin",
     "lat": 21.862066,
     "lng": -102.24806
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Cd. Valles - San Luis Potosí, Tramo Cd. Valles - Río Verde KM. 91+870",
     "lat": 21.86476,
     "lng": -99.60798
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Saltillo-Guadalajara Km.190, Col. .",
     "lat": 21.865847,
     "lng": -102.90904
   },
   {
     "marca": "PEMEX",
     "direccion": "Jose Ma Chavez y Placeres, Col. .",
     "lat": 21.867922,
     "lng": -102.294304
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Federal 69 Jalpan-Rioverde Km.99+200, Col. Maria Del Rosario",
     "lat": 21.87409,
     "lng": -99.97285
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Adolfo López Mateos Ote. N° 1502",
     "lat": 21.878613,
     "lng": -102.27138
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Alzán Canoas KM. 136  Tramo Pánuco Tempoal, Pánuco, Ver.",
     "lat": 21.896994,
     "lng": -98.30386
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Alazan-Canoas Km 1300 Tramo Panuco-Tempoal, Col. .",
     "lat": 21.897045,
     "lng": -98.3066
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Aguascalientes No. 601, Col. El Cobano",
     "lat": 21.910034,
     "lng": -102.27437
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt.Fed.70 Valles-Rioverde Km 130+300 Esq.Super, Col. S/C",
     "lat": 21.921547,
     "lng": -99.95867
   },
   {
     "marca": "PEMEX",
     "direccion": "Bernabe Ballesteros Numero 124, Col. Villa de Nuestra Sra. de la Ascuncion",
     "lat": 21.924706,
     "lng": -102.26287
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - San Luis Potosí Km 31.500, Mpio. De Aquismón, S.L.P.",
     "lat": 21.925453,
     "lng": -99.2263
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.12 Carretera Rio Verde-San Luis, Col. .",
     "lat": 21.93292,
     "lng": -100.02767
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de la Madrid No. 986, Col. ",
     "lat": 21.937822,
     "lng": -102.32483
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera México-Laredo #5216 S-C, Cd. Valles, S.L.P.",
     "lat": 21.937883,
     "lng": -98.9788
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel de la Madrid, esq. Paseo de las Maravillas #986, Col. Corral de Barrancos. Jesus María, Aguascalientes.",
     "lat": 21.938131,
     "lng": -102.32577
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Siglo Xxi Esq. Av. Independencia No. 3006, Col. Trojes de Alonso",
     "lat": 21.961609,
     "lng": -102.33092
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard la Guayana - Loreto No 170, Col. Macario J. Gomez",
     "lat": 21.98016,
     "lng": -102.25747
   },
   {
     "marca": "NEXUM",
     "direccion": "Miguel Hidalgo #523-B, Zona Centro, Cd. Valles,, S.L.P.",
     "lat": 21.984941,
     "lng": -99.01245
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Lazaro Cardenas Del Rio #413, Col. Cuauhtemoc",
     "lat": 21.992779,
     "lng": -99.03042
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Valles-Rio Verde Esq. Con Colombia, Col. Cuauhtemoc",
     "lat": 21.994152,
     "lng": -99.02771
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Tuxpam-Tampico, Col. .",
     "lat": 22.045542,
     "lng": -98.184715
   },
   {
     "marca": "NEXUM",
     "direccion": "Blvd. Salvador Díaz Mirón S/N, Pánuco, Ver.",
     "lat": 22.045803,
     "lng": -98.191154
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Valles - Tampico km 45+800, Col. Ejido Centinela, Tamuín, S.L.P.",
     "lat": 22.077557,
     "lng": -98.65136
   },
   {
     "marca": "GASORED",
     "direccion": "Acceso a La Pila 185, El Aguaje, 78422 San Luis, S.L.P.",
     "lat": 22.085648,
     "lng": -100.98923
   },
   {
     "marca": "PEMEX",
     "direccion": "Calzada de Guadalupe # 4500, Col. Satelite",
     "lat": 22.109835,
     "lng": -100.96066
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Internacional Mexico-Nogales Km 1000, Col. Ejido Rosamorada",
     "lat": 22.121157,
     "lng": -105.22905
   },
   {
     "marca": "PEMEX",
     "direccion": "Margen Der.del Rio Panuco E.Cadenamien.19-200a-300, Col. Congregacion Anahuac",
     "lat": 22.121536,
     "lng": -97.92119
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Mexico-Queretaro-S.L.P Km 420, Col. .",
     "lat": 22.134085,
     "lng": -100.93516
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Mexico-Queretaro-S.L.P Km 420, Col. .",
     "lat": 22.134085,
     "lng": -100.93516
   },
   {
     "marca": "GASORED",
     "direccion": "Calle San Luis Potosí-México 420, Sur, 78395 San Luis, S.L.P.",
     "lat": 22.13515,
     "lng": -100.93538
   },
   {
     "marca": "GASORED",
     "direccion": "Av Industrias 1565, Jardines del Sur, 78399 San Luis, S.L.P.",
     "lat": 22.135475,
     "lng": -100.937065
   },
   {
     "marca": "GASORED",
     "direccion": "Sirconio 1090, De Valle Dorado, Esmeralda, San Luis, S.L.P.",
     "lat": 22.13627,
     "lng": -100.95035
   },
   {
     "marca": "COSTCO",
     "direccion": "Av. Parque Chapultepec 195, Colinas del Parque, 78260 San Luis, S.L.P.",
     "lat": 22.137287,
     "lng": -101.00553
   },
   {
     "marca": "COSTCO",
     "direccion": "Sta Fe 20, Colinas del Parque, 78260 San Luis, S.L.P.",
     "lat": 22.137499,
     "lng": -101.00582
   },
   {
     "marca": "GASORED",
     "direccion": "Av Himno Nacional 1901, Tangamanga, 78269 San Luis, S.L.P.",
     "lat": 22.142307,
     "lng": -100.998344
   },
   {
     "marca": "COMBURED",
     "direccion": "Golfo de México 112",
     "lat": 22.144978,
     "lng": -100.94629
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Aguascalientes-Zacatecas Km.31+072,Pabel, Col. S/C.",
     "lat": 22.147364,
     "lng": -102.29391
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Vecinal entre Ejido San Elias y Soledad (Co Km. 23.500, Col. ",
     "lat": 22.15273,
     "lng": -100956
   },
   {
     "marca": "PEMEX",
     "direccion": "Reforma N0. 1153, Col. Centro",
     "lat": 22.153908,
     "lng": -100.98151
   },
   {
     "marca": "GASORED",
     "direccion": "Hacienda de las Cruces, 78438 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.155296,
     "lng": -100.91651
   },
   {
     "marca": "PEMEX",
     "direccion": "Nereo Rodriguez Barragan 450, Col. Del Valle",
     "lat": 22.155666,
     "lng": -101.00649
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Prol. Muñoz No. 205 , Col. Villa Campestre, Cp. 78190, San Luis Potosi, S.L.P.",
     "lat": 22.161137,
     "lng": -101.000175
   },
   {
     "marca": "GASORED",
     "direccion": "Av. Fray Diego de la Magdalena 159, Damian Carmona, 78174 San Luis, S.L.P.",
     "lat": 22.16425,
     "lng": -100.99203
   },
   {
     "marca": "GASORED",
     "direccion": "Av Morales Saucito 1893, Las Camelinas, San Luis, S.L.P.",
     "lat": 22.168661,
     "lng": -101.03938
   },
   {
     "marca": "GASORED",
     "direccion": "Km 7.390, Carr Matehuala, Fracc Zapote, 78430 Soledad de Graciano Sánchez, S.L.P.",
     "lat": 22.16962,
     "lng": -101.02992
   },
   {
     "marca": "PEMEX",
     "direccion": "Av 20 de Noviembre No 1825, Col. Barrio de Tlaxcala",
     "lat": 22.170044,
     "lng": -100.97179
   },
   {
     "marca": "GASORED",
     "direccion": "Acceso Norte 441, Industrial Mexicana, 78309 San Luis, S.L.P.",
     "lat": 22.170588,
     "lng": -100.96194
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Tuxpan - Tampico Km. 175+600, S/C, Cd. Cuauhtémoc, Ver.",
     "lat": 22.19479,
     "lng": -97.8253
   },
   {
     "marca": "PEMEX",
     "direccion": "Periferico Norte Km 56 Tramo Zacatecas-Matehuala, Col. La Angostura",
     "lat": 22.206451,
     "lng": -101.01055
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Rivera y Camelia S/N, Col. Loc. Congregacion Anahuac",
     "lat": 22.20828,
     "lng": -97.85985
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Cd. Valles-El Naranjo Km. 37+500, Col. Ejido la Hincada",
     "lat": 22.2118,
     "lng": -99.22935
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Tampico-Valles Km.57, Col. S/C",
     "lat": 22.217497,
     "lng": -98.37779
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Carlos Salinas de Gortari # 301, Col. Fracc. Industrial",
     "lat": 22.21874,
     "lng": -100.9689
   },
   {
     "marca": "NEXUM",
     "direccion": "Gil Blvd. Emilio Portes Gil #1009, Col. Tamaulipas, Tampico, Tam.",
     "lat": 22.222466,
     "lng": -97.848206
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  la Providencia - Luis Moya Km. 20+373, Col. San Antonio",
     "lat": 22.224031,
     "lng": -102.2426
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 702 Esq. Torreon, Col. Campbell",
     "lat": 22.22684,
     "lng": -97.865135
   },
   {
     "marca": "NEXUM",
     "direccion": "Francisco Sarabia #1010 Pte., Col. Primero de Mayo, Cd. Madero, Tam.",
     "lat": 22.239285,
     "lng": -97.86961
   },
   {
     "marca": "NEXUM",
     "direccion": "Av. Hidalgo #1913, Col. Smith, Tampico, Tam,",
     "lat": 22.25029,
     "lng": -97.84511
   },
   {
     "marca": "NEXUM",
     "direccion": "La Loma Chihuahua S/N, Col. Hidalgo Pte., Cd. Madero, Tam.",
     "lat": 22.253134,
     "lng": -97.8254
   },
   {
     "marca": "NEXUM",
     "direccion": "1ro. de Mayo #1401 Pte., Col. Lázaro Cárdenas, Cd. Madero Tam ",
     "lat": 22.253359,
     "lng": -97.84737
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Real Num. 1001, Col. Localidad Pedregoso",
     "lat": 22.25938,
     "lng": -101.77282
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Real Num. 1001, Col. Localidad Pedregoso",
     "lat": 22.25938,
     "lng": -101.77282
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Adolfo Lopez Mateos No. 1001 Sur Esq.Calle 8, Col. Jardin 20 de Noviembre",
     "lat": 22.26255,
     "lng": -97.85053
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Universidad entre Calles 9 y 10, Col. .",
     "lat": 22.266834,
     "lng": -97.86003
   },
   {
     "marca": "NEXUM",
     "direccion": "Av. Valles #212, Col. Flamboyanes, Tampico, Tam.",
     "lat": 22.274832,
     "lng": -97.867615
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey No. 601 Pte., Col. Ampliacion Unidad Nacional",
     "lat": 22.281187,
     "lng": -97.84775
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Enrique Torres Miranda 301, Col. Unidad Modelo",
     "lat": 22.284958,
     "lng": -97.88623
   },
   {
     "marca": "PEMEX",
     "direccion": "Corredor Urbano Luis Donaldo Colosio No. 102 Pte., Col. Miramar",
     "lat": 22.288967,
     "lng": -97.81304
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 6905, Col. Francisco Javier Mina",
     "lat": 22.297632,
     "lng": -97.87677
   },
   {
     "marca": "NEXUM",
     "direccion": "Calle Benito Juárez #300, Col. Laguna de la Puerta, Tampico, Tam.",
     "lat": 22.301346,
     "lng": -97.81715
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Monterrey # 817, Col. Enrique Cardenas Gonzalez",
     "lat": 22.306671,
     "lng": -97.85804
   },
   {
     "marca": "NEXUM",
     "direccion": "Corredor Urbano Luis Donaldo Colosio Murrieta Km.3+715, Cd. Madero, Tam.,",
     "lat": 22.30893,
     "lng": -97.87205
   },
   {
     "marca": "NEXUM",
     "direccion": "Av. Las Torres #103, Col. Petroquímicas, Tampico, Tam.",
     "lat": 22.30899,
     "lng": -97.887566
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Fed. San Luis Potosi-Zacatecas Km.29+657, Col. Sc",
     "lat": 22.312569,
     "lng": -101.1606
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.3 Carr.Tierra Blanca-Loreto, Col. .",
     "lat": 22.314075,
     "lng": -102.02949
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo Esq. Calle Corcega No. 1714, Col. Roma",
     "lat": 22.314882,
     "lng": -97.8793
   },
   {
     "marca": "NEXUM",
     "direccion": "Calle Campánula #239, Col. Jardines de Champayán, Tampico, Tam.",
     "lat": 22.31667,
     "lng": -97.8927
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Tampico-Mante Km.142, Col. .",
     "lat": 22.329159,
     "lng": -97.87445
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Tampico-Mante, Km. 13, Col. .",
     "lat": 22.33802,
     "lng": -97.87337
   },
   {
     "marca": "PEMEX",
     "direccion": "Durango y Mina, Col. .",
     "lat": 22.396982,
     "lng": -105.464005
   },
   {
     "marca": "GASORED",
     "direccion": "La Villa, 79303 Cd del Maíz, S.L.P.",
     "lat": 22.405794,
     "lng": -99.61309
   },
   {
     "marca": "GASORED",
     "direccion": "Carretera a El Naranjo 33, Santo Niño, 79300 Cd del Maíz, S.L.P.",
     "lat": 22.410986,
     "lng": -99.59814
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 52.5 Carrt. Jerez-Tepetongo, Col. S/D",
     "lat": 22.430672,
     "lng": -103.508675
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Km 118.18, Autopista Cuota Mazatlán - Tepic S/N",
     "lat": 22.44235,
     "lng": -105.41632
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mexico-Piedras Negras Km.473-860, Col. .",
     "lat": 22.466358,
     "lng": -100.66777
   },
   {
     "marca": "PEMEX",
     "direccion": "Morelos Esq. Quintana Roo No. 149, Col. Centro",
     "lat": 22.489735,
     "lng": -105.37359
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Intern.Mexico-Nogales Km.1042, Col. .",
     "lat": 22.490517,
     "lng": -105.38531
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. Mexico-Laredo Km 534, Col. S/D",
     "lat": 22.553473,
     "lng": -99.07803
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Panam. Km. 613, Col. .",
     "lat": 22.560257,
     "lng": -102.2521
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Panam. Km. 613, Col. .",
     "lat": 22.560257,
     "lng": -102.2521
   },
   {
     "marca": "GASORED",
     "direccion": "Matehuala - San Luis Potosí 2414, Peyote, S.L.P.",
     "lat": 22.564236,
     "lng": -100.63208
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Zacatecas Tepetongo Ent. Malpaso Tr. Tepetong Km. 255.800, Col. ",
     "lat": 22.63628,
     "lng": -102.9988
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Nacional Mexico - Laredo Km 555 + 150, Ej. Camotero, Cd. Mante, Tam.",
     "lat": 22.71111,
     "lng": -98.98991
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Guadalupe-Cd. Cuauhtemoc Km. 2.200, Col. ",
     "lat": 22.726486,
     "lng": -102.49372
   },
   {
     "marca": "PEMEX",
     "direccion": "Juarez No 501 Poniente, Col. .",
     "lat": 22.745022,
     "lng": -98.9764
   },
   {
     "marca": "PEMEX",
     "direccion": "Clzda. Francisco Garcia Salinas # 29, Col. S/C",
     "lat": 22.752844,
     "lng": -102.52951
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Juventud No 3, Col. .",
     "lat": 22.754585,
     "lng": -101.07536
   },
   {
     "marca": "NEXUM",
     "direccion": "Libramiento Manuel Gonzalez KM 7+300 S/N, González, Tam.",
     "lat": 22.760471,
     "lng": -98.3154
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Guadalajara - Zacatecas Km. 306.5. Zacatecas, Zacatecas",
     "lat": 22.761644,
     "lng": -102.65338
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Miguel Aleman y Carr.Panamericana, Col. .",
     "lat": 22.770039,
     "lng": -102.58186
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Netzahualcoyotl esq. Toltecas, Col. Buenos Aires. Zacatecas, Zacatecas",
     "lat": 22.77117,
     "lng": -102.59247
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Nacional México - Laredo Sur #300, Poblado El Limón, Cd. Mante, Tam.",
     "lat": 22.82171,
     "lng": -99.0106
   },
   {
     "marca": "GASORED",
     "direccion": "Guadalcázar, S.L.P.",
     "lat": 22.824402,
     "lng": -100.55515
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Ocampo-Limón #705, Col. Paso Ancho, Ocampo, Tam.",
     "lat": 22.866053,
     "lng": -99.251175
   },
   {
     "marca": "PEMEX",
     "direccion": "Lote 10-A de la Darsena S/N., Col. .",
     "lat": 22.882317,
     "lng": -109.91028
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. a San Jose del Cabo Km 2,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.892742,
     "lng": -109.908134
   },
   {
     "marca": "ORSAN",
     "direccion": "Diagonal Morelos y Zaragoza,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.89609,
     "lng": -109.91876
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida las Brisas 3004, Col. Brisas Del Pacifico",
     "lat": 22.904625,
     "lng": -109.93737
   },
   {
     "marca": "ORSAN",
     "direccion": "Manzana B10 Lote 11,S/N, CABO SAN LUCAS, Baja California Sur.",
     "lat": 22.905222,
     "lng": -109.92185
   },
   {
     "marca": "ORSAN",
     "direccion": "CALLE DIAGONAL MORELOS No. 3717 COL. MATAMOROS, Cabo San Lucas, Baja California Sur.",
     "lat": 22.90735,
     "lng": -109.9642
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Avenida los aguajitos, no. 1938, colonia arcos del sol, c.p. 23478",
     "lat": 22.910826,
     "lng": -109.92851
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Manuel Soto la Marina Km 35.5, Aldama, Tam.",
     "lat": 22.921295,
     "lng": -98.08443
   },
   {
     "marca": "GASORED",
     "direccion": "Calle Melchor Ocampo 136A, Venado, S.L.P.",
     "lat": 22.921486,
     "lng": -101.099785
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 10, Col. Ampliacion El Centenario",
     "lat": 22.928648,
     "lng": -109.98352
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Nicolas tamaral lote 3, fracc a de el potrero s/n las palmas c.p. 23477, los cabos",
     "lat": 22.938074,
     "lng": -109.938225
   },
   {
     "marca": "GASORED",
     "direccion": "Venado, S.L.P.",
     "lat": 22.942482,
     "lng": -101.09547
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Panamericana Km. 31+600, Col. Sc",
     "lat": 22.972136,
     "lng": -102.721466
   },
   {
     "marca": "PEMEX",
     "direccion": "Mineros No. 102, Col. El Panteon",
     "lat": 22.993391,
     "lng": -105.860405
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Km 24.5 de Carretera Transpeninsular, Los Cabos",
     "lat": 23.002275,
     "lng": -109.733
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Km. 5 de la carretera Transpeninsular",
     "lat": 23.047108,
     "lng": -109.70577
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera a la playita manz 4 lotes 2 y 5 la choya c.p. 23410, los cabos",
     "lat": 23.064047,
     "lng": -109.68098
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Transpeninsular 2466, Col. Guaymitas",
     "lat": 23.076164,
     "lng": -109.706184
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Carretera Transpeninsular Km 35.7 y Camino de Acceso s/n",
     "lat": 23.086853,
     "lng": -109.70704
   },
   {
     "marca": "ORSAN",
     "direccion": "CARRETERA TRANSPENINSULAR No 5380 Col. El Zacatal, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.098862,
     "lng": -109.7104
   },
   {
     "marca": "ORSAN",
     "direccion": "CARRETERA TRANSPENINSULAR 8600,EL ZACATAL, SAN JOSE DEL CABO, Baja California Sur.",
     "lat": 23.105965,
     "lng": -109.7118
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr a Matehuala y Calle Tampico, Col. Ninguna",
     "lat": 23.127625,
     "lng": -101.10756
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Del Datil No. 7404, Col. Buenos Aires",
     "lat": 23.137047,
     "lng": -109.709755
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.22 Carret. Fresnillo Valparaiso., Col. Col. Guanajuato.",
     "lat": 23.140953,
     "lng": -103.0382
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Calle Julio Pimentel S/N",
     "lat": 23.151352,
     "lng": -109.70903
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. J. Jesus Varela Rico Sur No. 714, Col. Ricardo Monreal Avila",
     "lat": 23.1652,
     "lng": -102.88815
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Mazatlan Km. 25.306, Col. ",
     "lat": 23.19661,
     "lng": -106.1957
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional Al Nte Esq.Lucio Vlanco #2201, Col. S/D",
     "lat": 23.245714,
     "lng": -106.42158
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Luis Donaldo Colosio No. 17710, Col. Huertos Familiares",
     "lat": 23.250189,
     "lng": -106.39885
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 739.5 Carret. Panamericana Ent. Durango-Torreon, Col. .",
     "lat": 23.297668,
     "lng": -102.95837
   },
   {
     "marca": "REPSOL",
     "direccion": "Frente a La Plaza Principal de La Localidad Santiago",
     "lat": 23.481606,
     "lng": -109.71452
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Central 57 Slp-Matehuala Km 179+605 # 3805, Col. S/D",
     "lat": 23.556547,
     "lng": -100.62756
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Panamericana-Fresnillo Sombrerete Km.122+135, Col. S/C",
     "lat": 23.57936,
     "lng": -103.27347
   },
   {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido, Col. Loc. la Rivera",
     "lat": 23.594381,
     "lng": -109.59184
   },
   {
     "marca": "PEMEX",
     "direccion": "Juarez # 1521, Col. Centro",
     "lat": 23.636145,
     "lng": -100.6439
   },
   {
     "marca": "ORSAN",
     "direccion": "Av. 5 de febrero # 235, Zona Industrial Felipe Carrillo Puerto, QUERETARO, QRO, .",
     "lat": 23.651953,
     "lng": -100.34315
   },
   {
     "marca": "GASORED",
     "direccion": "Avenida de las Americas 101, La Finca, 78717 Matehuala, S.L.P.",
     "lat": 23.672869,
     "lng": -100.63286
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Victoria-Matamoros Km 1, Col. S/D",
     "lat": 23.740902,
     "lng": -99.132866
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Victoria-Matamoros Km 1, Col. S/D",
     "lat": 23.740902,
     "lng": -99.132866
   },
   {
     "marca": "PEMEX",
     "direccion": "Ccarretera de Salida a Matehuala, Col. Centro",
     "lat": 23.815996,
     "lng": -100.716515
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Vicente Guerrero Villa Union Km. 9, Col. Pob. Gabriel Hernandez",
     "lat": 23.824526,
     "lng": -103.998245
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.62.4 Carr.A Torreon, Col. .",
     "lat": 23.835205,
     "lng": -103.05255
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mazatlan - Culiacan Km. 90, Col. Sc",
     "lat": 23.920166,
     "lng": -106.92905
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Mazatlan - Culiacan Km. 90, Col. Sc",
     "lat": 23.920166,
     "lng": -106.92905
   },
   {
     "marca": "PEMEX",
     "direccion": "Sss, Col. Sss",
     "lat": 23.93001,
     "lng": -104.92139
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Domingo Arrieta No. 222, Col. La Arboleda",
     "lat": 23.999187,
     "lng": -104.66262
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Durango-Mazatlan Km 3.2, Col. El Saltito",
     "lat": 24.010464,
     "lng": -104.69255
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Cuauhtemoc No.331 Sur, Col. Zona Centro",
     "lat": 24.025944,
     "lng": -104.65569
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolong. Pino Suarez # 126, Col. Fracc. Villas de San Francisco",
     "lat": 24.029562,
     "lng": -104.62168
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. Transpeninsular la Paz- Los Cabos Km. 201, Col. C",
     "lat": 24.040796,
     "lng": -110.29999
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Magnolia No.100",
     "lat": 24.042105,
     "lng": -104.62983
   },
   {
     "marca": "PEMEX",
     "direccion": "Magnolias # 100, Col. Jardines de Durango",
     "lat": 24.042189,
     "lng": -104.62984
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Luis Donaldo Colosio Num. 919, Col. Parque Industrial Korian",
     "lat": 24.055573,
     "lng": -104.65636
   },
   {
     "marca": "REDCO",
     "direccion": "Blvd. Constituyentes De 1975 No. 115 Col. Fidepaz",
     "lat": 24.091122,
     "lng": -110.39941
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Forjadores N° 260",
     "lat": 24.09288,
     "lng": -110.30952
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Camino al calandrio, s/n, colonia el mezquitito, c.p. 23083",
     "lat": 24.094019,
     "lng": -110.31241
   },
   {
     "marca": "REDCO",
     "direccion": "México 1 km 8+540, 23205 El Zacatal, B.C.S.",
     "lat": 24.105268,
     "lng": -110.36877
   },
   {
     "marca": "PEMEX",
     "direccion": "Km 8+540 de la Carrt. Transpeninsular Al Norte, Col. Chametla",
     "lat": 24.105312,
     "lng": -110.36901
   },
   {
     "marca": "REDCO",
     "direccion": "Esmeralda No. 112, Fraccionamiento del Mar Residencial",
     "lat": 24.106213,
     "lng": -110.31885
   },
   {
     "marca": "REPSOL",
     "direccion": "Avenida Santa Ana S/N, Col. Santa María",
     "lat": 24.118816,
     "lng": -110.33535
   },
   {
     "marca": "REDCO",
     "direccion": "Luis Donaldo Colosio 110 Tecnológico La Paz 23080",
     "lat": 24.12409,
     "lng": -110.31153
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.Forjadores de Sudcalif.Esq.L.D.Colosio #4390, Col. Ex-Base Aerea",
     "lat": 24.12819,
     "lng": -110.3133
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. Agustin Olachea # 4615, Col. Las Garzas",
     "lat": 24.129343,
     "lng": -110.32871
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.Luis Donaldo Colosio S/N A.Serdan y G.Prieto, Col. Inalapa",
     "lat": 24.135717,
     "lng": -110.33247
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Luis Donaldo Colosio S/n, E. Serdan y G. Prieto",
     "lat": 24.13577,
     "lng": -110.33231
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calle 5 de mayo no.3210 francisco villa c.p. 23040, la paz",
     "lat": 24.141998,
     "lng": -110.28371
   },
   {
     "marca": "REDCO",
     "direccion": "Melchor Ocampo No. 2490 Esq. Juan D. Cota Col. Vicente Guerrero.",
     "lat": 24.14342,
     "lng": -110.29439
   },
   {
     "marca": "HIDROSINA",
     "direccion": "BLVD. PADRE KINO S/N",
     "lat": 24.144028,
     "lng": -110.30223
   },
   {
     "marca": "REPSOL",
     "direccion": "Blvd Mariano Abasolo entre Jalisco y Oaxaca",
     "lat": 24.145464,
     "lng": -110.331085
   },
   {
     "marca": "PEMEX",
     "direccion": "Nicolas Bravo y Gomez Farias, Col. Centro",
     "lat": 24.154108,
     "lng": -110.311646
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calle nicolas bravo no. 710, esq. Con valentin gomez farias colonia centro c.p. 23000",
     "lat": 24.154114,
     "lng": -110.311905
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calle aquiles serdan no. 316, esq. Con avenida 5 de mayo colonia centro c.p. 23000",
     "lat": 24.1617,
     "lng": -110.31206
   },
   {
     "marca": "REPSOL",
     "direccion": "Carretera La Paz - Pichilingue, S/N. Col. Lomas de Palmira",
     "lat": 24.184061,
     "lng": -110.30082
   },
   {
     "marca": "PEMEX",
     "direccion": "Av  J Cruz Gomez y 5 de Mayo, Col. .",
     "lat": 24.189949,
     "lng": -103.62796
   },
   {
     "marca": "PEMEX",
     "direccion": "Pino Suarez y Fco Villa, Col. .",
     "lat": 24.40319,
     "lng": -104.312546
   },
   {
     "marca": "PEMEX",
     "direccion": "Av Aviacion Nac  E Insurgentes, Col. .",
     "lat": 24.475231,
     "lng": -104.0007
   },
   {
     "marca": "PEMEX",
     "direccion": "Enrique W Sanchez No. 1000, Col. .",
     "lat": 24.527151,
     "lng": -104.76942
   },
   {
     "marca": "PEMEX",
     "direccion": "Mocorito # 612, Col. Costa Rica",
     "lat": 24.589876,
     "lng": -107.39975
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Marfil No. 10 Calle Sn. Felipe, Col. .",
     "lat": 24.633158,
     "lng": -102.78057
   },
   {
     "marca": "PEMEX",
     "direccion": "Isla Paraiso No. 408 Sur, Col. ",
     "lat": 24.64427,
     "lng": -107.9238
   },
   {
     "marca": "PEMEX",
     "direccion": "Entronque Carrets. la 50 Con Al 20, Col. Loc. Villa Benito Juarez",
     "lat": 24.660831,
     "lng": -107.543495
   },
   {
     "marca": "PEMEX",
     "direccion": "Torreo-Yerbanis Km. 144.970, Col. ",
     "lat": 24.74878,
     "lng": -103.8424
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lic. Benito Juarez Num. 455, Col. Ampliacion Primavera Secc. Ii",
     "lat": 24.76239,
     "lng": -107.69846
   },
   {
     "marca": "GASMART",
     "direccion": "Manuel J. Clouthier y o Av. Internacional 4044, Buenos Aires, 80199 Culiacán Rosales, Sin.",
     "lat": 24.768246,
     "lng": -107.39786
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Cruz Gálvez 4044 Sur, Buenos Aires, 80199 Culiacán Rosales, Sin.",
     "lat": 24.768345,
     "lng": -107.398
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Novolato Culiacan No. 813, Col. Sin Colonia",
     "lat": 24.76883,
     "lng": -107.54414
   },
   {
     "marca": "PEMEX",
     "direccion": "Dom.Con.Carr.S.J.del Rio Con Carr.Panam. Km. 4, Col. Francisco Villa",
     "lat": 24.783327,
     "lng": -104.47049
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Nicolas Bravo # 1646 Sur, Col. Morelos",
     "lat": 24.787838,
     "lng": -107.400696
   },
   {
     "marca": "GASMART",
     "direccion": "Río Ameca esquina Pascual Orozco No. 1601",
     "lat": 24.78825,
     "lng": -107.41106
   },
   {
     "marca": "PEMEX",
     "direccion": "Puerto la Paz Esq. Puerto Loreto S/N, Col. S/D",
     "lat": 24.793322,
     "lng": -112.11251
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. H. Colegio Militar No 1820 Sur, Col. .",
     "lat": 24.793734,
     "lng": -107.37489
   },
   {
     "marca": "COSTCO",
     "direccion": "Congreso del Estado, Culiacán Rosales, Sin.",
     "lat": 24.798409,
     "lng": -107.424355
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Eldorado No.544 Esq. Blvd. de Los Alamos, Col. Las Quintas",
     "lat": 24.811543,
     "lng": -107.36562
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av.Hidalgo #985-A Entre Libram. Mty-Victoria,Centro,Linares,Nuevo Leon",
     "lat": 24.850136,
     "lng": -99.57198
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Hidalgo # 803 Norte, Col. Centro",
     "lat": 24.86033,
     "lng": -99.57065
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Cda. Victoria-Matamoros Km. 222mas 277, Col. Sc",
     "lat": 24.863716,
     "lng": -98.13974
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Díaz Ordaz S/N Esq. Av. Marqueta Col. Potrero Santa Teresa Linares N.L",
     "lat": 24.8725,
     "lng": -99.57889
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Nal. y Chapultepec, Col. Zona Centro",
     "lat": 24.88844,
     "lng": -99.6723
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Miguel Hidalgo y Calle Ferrocarril, Esq. Miguel Alemán",
     "lat": 24.889906,
     "lng": -105.06949
   },
   {
     "marca": "PEMEX",
     "direccion": "Gral. Emiliano Zapata y Vicente Suarez, Col. N.C.P.Plan de Ayala",
     "lat": 24.950352,
     "lng": -98.794075
   },
   {
     "marca": "PEMEX",
     "direccion": "Alvarez Rico # F19 Pte., Col. Centro",
     "lat": 25.02252,
     "lng": -111.66356
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Francisco i madero s/n 4 de marzo c.p. 23641, comondu",
     "lat": 25.038534,
     "lng": -111.64851
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Enrique W. Sánchez S/N",
     "lat": 25.04764,
     "lng": -105.42181
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.74.4 Carr.Costera \"Lic.Benito Juarez\" Laguna P., Col. .",
     "lat": 25.14405,
     "lng": -107.956985
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera 57 No. 1000-A Km. 202.780, Col. ",
     "lat": 25.168535,
     "lng": -100.72269
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Saltillo - Matehuala km. 57. Galeana N.L.",
     "lat": 25.168625,
     "lng": -100.72284
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret.Badiraguato Km.11,000, Col. Comunidad Chicorato",
     "lat": 25.179838,
     "lng": -107.65007
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Carlos Cantu 704,Centro, MONTEMORELOS, Nuevo Leon.",
     "lat": 25.18958,
     "lng": -99.838005
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Pedriceña-Nazas, Col. S/C",
     "lat": 25.23041,
     "lng": -104.10765
   },
   {
     "marca": "PEMEX",
     "direccion": "Call.300 Nte.Carr.Angostura Reforma Ejido Agustina, Col. .",
     "lat": 25.241777,
     "lng": -108.088
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Blvd.Benito Juarez s/c c.p. 23700, comondu",
     "lat": 25.258718,
     "lng": -111.778145
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional # 2004 Sur, Col. Buena Vista",
     "lat": 25.26259,
     "lng": -100.01178
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 35.0 Carr. Pedriceña-Nazas,Tramo P.Nal.25 Dic., Col. .",
     "lat": 25.263945,
     "lng": -104.02688
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 330 Carr. Concepcion Del Oro Saltillo, Col. .",
     "lat": 25.26543,
     "lng": -101.09039
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Allende-Monterrey, Km. 4+800, Col. No",
     "lat": 25.298574,
     "lng": -100.04918
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 1.5 Carrt. Allende-Cadereyta, Col. .",
     "lat": 25.303976,
     "lng": -100.00166
   },
   {
     "marca": "PEMEX",
     "direccion": "Libram.Perif.Torreon-Gomezpalacio-Lerdo Km. 13.320, Col. ",
     "lat": 25.32523,
     "lng": -103.3154
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD. EMILIO ARIZPE DE LA MAZA #2335, COL. LOMAS DEL SUR, SALTILLO, COAHUILA",
     "lat": 25.36907,
     "lng": -101.00323
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd Antonio Cardenas Numero 961, Col. Lourdes",
     "lat": 25.392727,
     "lng": -101.002556
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Cardenas # 2020, Col. Bellavista",
     "lat": 25.400438,
     "lng": -101.00108
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Antonio Cardenas No. 1564 Col. Lomas de Chapultepec, Saltillo Coahuila",
     "lat": 25.404036,
     "lng": -100.99933
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Luis Echeverria Alvarez #1800, Col. Santa Teresita. Saltillo, Coahuila.",
     "lat": 25.40805,
     "lng": -101.029396
   },
   {
     "marca": "OXXO GAS",
     "direccion": "CARRT. NACIONAL # 103 EL CERCADO 67320",
     "lat": 25.41361,
     "lng": -100.139725
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Mirasierra No. 2085, Col. Nuevo Mirasierra Segunda Etapa",
     "lat": 25.41731,
     "lng": -100.91991
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Presidente Cardenas Y Allende, Saltillo,Coahuila De Zaragoza",
     "lat": 25.430897,
     "lng": -100.99757
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Luis Donaldo Colosio, Num 214 Col Ciudas Mirasierra Saltillo Coahuila",
     "lat": 25.431488,
     "lng": -100.925354
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Francisco Coss e Hidalgo,.,Saltillo,Coahuila De Zaragoza",
     "lat": 25.431625,
     "lng": -100.99369
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Centenario de Torreon No. 7025, Col. Los Zacatones",
     "lat": 25.434868,
     "lng": -100.91327
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Isidro Lopez Zertuche No. 1340, Col. Republica Poniente",
     "lat": 25.43617,
     "lng": -101.003944
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD. LUIS DONALDO COLOSIO NO. 8051 . 25305",
     "lat": 25.438433,
     "lng": -100.9263
   },
   {
     "marca": "PEMEX",
     "direccion": "Benito Juarez Num. 215, Col. Centro",
     "lat": 25.440447,
     "lng": -101.24782
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Jose Maria Morelos No 68, Col. Las Glorias Guamuchil",
     "lat": 25.445583,
     "lng": -108.068794
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Perif. Luis Echeverria Esq. Blvd. Carranza No. 140,Latinoamericana,Saltillo,Coahuila de Zaragoza",
     "lat": 25.447336,
     "lng": -100.98895
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD. 16 DE SEPTIEMBRE NO. 601 . 27980",
     "lat": 25.447584,
     "lng": -102.17228
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Los Gonzalez Esquina el Rosario Fracc Santa Susana",
     "lat": 25.454447,
     "lng": -100.954796
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Periferico Luis Echavarria Alvarez No. 2252 Col. Ciudad Satelite Norte",
     "lat": 25.455576,
     "lng": -100.009735
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Nacional Km 255, Col. No",
     "lat": 25.460915,
     "lng": -100.170494
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Internacional Km 1531 S/N Salida Norte, Col. S/D",
     "lat": 25.470255,
     "lng": -108.1038
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera a Los Gonzalez Numero 4368, Col. Los Gonzalez",
     "lat": 25.471949,
     "lng": -100.94799
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Venustiano Carranza # 5530,Fraccionamiento Las Haciendas,Saltillo,Coahuila",
     "lat": 25.472622,
     "lng": -100.97656
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 500 y Carret. a las Glorias, Col. El Cubilete",
     "lat": 25.48066,
     "lng": -108.52341
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Del Bosque # 2055, Col. Villas la Merced",
     "lat": 25.505268,
     "lng": -103.394905
   },
   {
     "marca": "PEMEX",
     "direccion": "Molinero # 101, Col. El Faisan",
     "lat": 25.50925,
     "lng": -100.1956
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Molinero # 101, Col. El Faisan, C.P. 67300, Santiago, Nuevo León",
     "lat": 25.509342,
     "lng": -100.19427
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Matamoros  Victoria Km. 256+313, Col. Sc",
     "lat": 25.51485,
     "lng": -97.732475
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Lib. Oscar Flores Tapia #22250, Col. Antigua Hacienda El Jaral. Ramos Arizpe, Coahuila.",
     "lat": 25.522842,
     "lng": -100.92124
   },
   {
     "marca": "PEMEX",
     "direccion": "Benito Juarez E Ignacio Zaragoza 149, Col. El Saucito",
     "lat": 25.524275,
     "lng": -97.30293
   },
   {
     "marca": "OXXO GAS",
     "direccion": "BLVD. MATAMOROS # 5720 LUIS HORACIO SALINAS 27440",
     "lat": 25.534803,
     "lng": -103.383804
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Torreon-Matamoros # 5000, Col. La Merced",
     "lat": 25.534826,
     "lng": -103.394875
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Torreon-Matamoros # 5000, Col. La Merced",
     "lat": 25.534826,
     "lng": -103.394875
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Juarez Esq. Calle de la Pepena, Col. Parque Industrial Lagunero",
     "lat": 25.537666,
     "lng": -103.399574
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Camino de Los Cristales Carret.Nacional Km.263, Col. Los Cristales",
     "lat": 25.537992,
     "lng": -100.21901
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Calle Morelos No. 603, Col. San Juan, C.P. 64500, Cadereyta Jimenez, Nuevo León",
     "lat": 25.540995,
     "lng": -99.84135
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Miguel Ramos Arizpe No. 157, Col. Parque Industrial",
     "lat": 25.544174,
     "lng": -100.93941
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Idependencia y R. Corona, Col. Centro",
     "lat": 25.544336,
     "lng": -103.453964
   },
   {
     "marca": "PEMEX",
     "direccion": "Clzda, Guadalupe Victoria # 1185 Nte., Col. Ampliacion Villa Jardin",
     "lat": 25.547215,
     "lng": -103.502335
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Presidente Carranza # 458 Ote., Col. Centro",
     "lat": 25.558622,
     "lng": -103.38012
   },
   {
     "marca": "OXXO GAS",
     "direccion": "CALLEINDUSTRIA AGROQUIMICA #890, PARQUE INDUSTRIAL SALTILLO-RAMOS ARIZPE, RAMOS ARIZPE, COAHUILA",
     "lat": 25.559746,
     "lng": -100.92298
   },
   {
     "marca": "PEMEX",
     "direccion": "Industria Agroquimica No. 890, Col. Parque Industrial Saltillo-Ramos Ar",
     "lat": 25.55982,
     "lng": -100.92314
   },
   {
     "marca": "PEMEX",
     "direccion": "Raul Cervantes Ahumada  320, Col. Callejones de Guasavito",
     "lat": 25.568968,
     "lng": -108.44861
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Fco.I.Madero y Centenario, Col. Centro",
     "lat": 25.568996,
     "lng": -103.49604
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Ejercito Mexicano Km 1.6, Col. Ampliacion Santa Rosa",
     "lat": 25.572187,
     "lng": -103.46981
   },
   {
     "marca": "PEMEX",
     "direccion": "Libram. Gomez-Lerdo Km.9.5 No.347, Col. Fidel Velazquez",
     "lat": 25.573648,
     "lng": -103.52007
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Revolucion Km. 900, Col. Centro",
     "lat": 25.5821,
     "lng": -100.0024
   },
   {
     "marca": "PEMEX",
     "direccion": "Periferico Raul Lopez Ent.Blvd.8888 Sc, Col. .",
     "lat": 25.582531,
     "lng": -103.41636
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Nacional 2000, Col. La Estanzuela. Monterrey, N.L.",
     "lat": 25.587255,
     "lng": -100.25873
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. la Estanzuela No. 102, Col. La Estanzuela",
     "lat": 25.589153,
     "lng": -100.25291
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida la Luz # 6113, 6113-1, Col. La Estanzuela",
     "lat": 25.589708,
     "lng": -100.24952
   },
   {
     "marca": "PEMEX",
     "direccion": "Gladiolas Esq. Av. Roble, Col. Miguel de la Madrid",
     "lat": 25.596903,
     "lng": -103.47535
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Garza Sada 7105-D Salida a Carr. Nacional",
     "lat": 25.5975,
     "lng": -100.263054
   },
   {
     "marca": "PEMEX",
     "direccion": "Cadereyta-Reynosa Km.27, Col. No",
     "lat": 25.598661,
     "lng": -100.02774
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Gomez Palacio-Jimenez Km2 Manzana 2, Lote 5, Col. Valle de Guadiana. Gómez Palacio, Durango",
     "lat": 25.61214,
     "lng": -103.51216
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Autopista Mty-Saltillo #25000-B. Ramos Arizpe, Coahuila",
     "lat": 25.613087,
     "lng": -100.847084
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Lazaro Cardenas 3808,Las Torres, MONTERREY, Nuevo Leon.",
     "lat": 25.621359,
     "lng": -100.286476
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Acapulco #4600, Col. Las Brisas. Monterrey, N.L.",
     "lat": 25.622295,
     "lng": 100.28129
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Juárez-Cadereyta Km. 23, Col. La Puerta. Juárez, Nuevo León",
     "lat": 25.62405,
     "lng": -100.06517
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Eugenio Garza Sada 4379,Contry, MONTERREY, Nuevo Leon.",
     "lat": 25.62433,
     "lng": -100.2747
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Lazaro Cardenas 2885,Valle Marquez, MONTERREY, Nuevo Leon.",
     "lat": 25.628868,
     "lng": -100.296394
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas 2885, Col. No",
     "lat": 25.62923,
     "lng": -100.296585
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol. Eloy Cavazos No. 3200, Col. Hector Caballero",
     "lat": 25.63159,
     "lng": -100128
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Revolucion # 3804, Col. La Silla",
     "lat": 25.634026,
     "lng": -100.272835
   },
   {
     "marca": "PEMEX",
     "direccion": "Acueducto No. 801 y 803, Col. Santa Isabel",
     "lat": 25.636126,
     "lng": -100.177895
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Lazaro Cardenas Esq. Alfareros No. 1590,Alfareros,Monterrey,Nuevo Leon",
     "lat": 25.637222,
     "lng": -100.311386
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Lázaro Cárdenas #2517.Monterrey, N.L.",
     "lat": 25.648693,
     "lng": -100.32956
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. San Roque 103 Fracc. América Unida, Cd. Benito Juarez ",
     "lat": 25.64889,
     "lng": -100.14361
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 9 S/N, Col. Ampliacion",
     "lat": 25.650452,
     "lng": -108.64439
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Arturo B de la Garza # 1506, Col. 20 de Septiembre",
     "lat": 25.651543,
     "lng": -100.107315
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera las Yescas Km. 83.675 No. 2503-A, Col. Fraccionamiento Los Fresnos",
     "lat": 25.65157,
     "lng": -97.81623
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Coahuila Lote 1 Col. Paseo Guadalupe. Guadalupe, Nuevo León.",
     "lat": 25.651861,
     "lng": -100.15993
   },
   {
     "marca": "ORSAN",
     "direccion": "Av. Jose Vasconcelos 398 Pte.,Del Valle, SAN PEDRO, Nuevo Leon.",
     "lat": 25.653908,
     "lng": -100.38087
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Eugenio Garza Sada #220, Col. Roma. Monterrey, N.L.",
     "lat": 25.655447,
     "lng": -100.29452
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Ignacio Morones Prieto #117, Col. La Banda. Santa Catarina, Nuevo León",
     "lat": 25.656178,
     "lng": -100.44957
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Los Ebanitos-Sanroque Cruz Carr.Mty-Reyno 500, Col. Las Sabinas",
     "lat": 25.656836,
     "lng": -100.13606
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Vasconcelos #667, Col. Centro, San Pedro Garza Garcia, Nuevo Leon",
     "lat": 25.660833,
     "lng": -100.39833
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Carretera Monterrey - Reynosa  No.101",
     "lat": 25.661863,
     "lng": -100.152466
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Pedro Martinez Ote #1807 Col. Nuevo Repueblo. Monterrey N.L.",
     "lat": 25.662989,
     "lng": -100.297585
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Constitucion 1030, Col. Centro",
     "lat": 25.664326,
     "lng": -100.30636
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Gral. Pablo Livas No. 4640, Col. Valles de la Silla, Fomerrey No. 19",
     "lat": 25.664774,
     "lng": -100.20895
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Hidalgo #1477 Pte., Col. Ex-Seminario. Monterrey, Nuevo Leon",
     "lat": 25.670225,
     "lng": -100.33591
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Torreon  San Pedro 15000, Col. Ejido Alba",
     "lat": 25.671568,
     "lng": -103.34949
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Constitucion # 3111, Col. Santa Maria",
     "lat": 25.673483,
     "lng": -100.39207
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Reynosa No. 5480, Col. Sc",
     "lat": 25.674034,
     "lng": -100.191086
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Reynosa No. 5480, Col. Sc",
     "lat": 25.674034,
     "lng": -100.191086
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Monterrey Reynosa No. 5480",
     "lat": 25.674109,
     "lng": -100.19076
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.Diaz Ordaz Km. 335 y Av. Corregidora, Col. La Leona",
     "lat": 25.674522,
     "lng": -100.40491
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. San Jeronimo Num. 513, Col. San Jeronimo",
     "lat": 25.674768,
     "lng": -100.35766
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Francisco Marquez # 450,Obrera,Monterrey,Nuevo Leon",
     "lat": 25.676706,
     "lng": -100.29083
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Manuel Ordoñes #1423 Pte. Col. Zimix Sur. Santa Catarina, Nuevo León",
     "lat": 25.677168,
     "lng": 25.677168
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardena No. 100, Col. El Sabino",
     "lat": 25.67811,
     "lng": -100.231445
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Morones Prieto # 812, Col. Esmeralda",
     "lat": 25.680128,
     "lng": -100.267624
   },
   {
     "marca": "ORSAN",
     "direccion": "Insurgentes 3991,S/N, MONTERREY, Nuevo Leon.",
     "lat": 25.680567,
     "lng": -100.357445
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.Insurgentes No.3991 Pte. y Pablo Moncayo, Col. Colinas de San Jeronimo",
     "lat": 25.6806,
     "lng": -100.35761
   },
   {
     "marca": "ORSAN",
     "direccion": "Ramón Del Valle 101, Colinas de San Jeronimo, MONTERREY, Nuevo Leon.",
     "lat": 25.681175,
     "lng": -100.35765
   },
   {
     "marca": "PEMEX",
     "direccion": "Urano # 2620, Col. La Puerta Del Sol",
     "lat": 25.682978,
     "lng": -100.48524
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Urano No.2620 ",
     "lat": 25.683052,
     "lng": -100.485245
   },
   {
     "marca": "PEMEX",
     "direccion": "Francisco I. Madero y Guerrero, Col. No",
     "lat": 25.683353,
     "lng": -100.31256
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Manuel J. Clouthier S/N,San Humberto,Santa Catarina,Nuevo Leon",
     "lat": 25.684166,
     "lng": -100.43584
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av.Cuauhtemoc y Prol. Blvd.C.T.M., Col. Fracc. Residencial Cuauhtemoc. Santa Catarina, N.L.",
     "lat": 25.685158,
     "lng": -100.44381
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Mty-Saltillo km 23.5 Col.Las Aanacuas, Santa Catarina Nuevo Leon",
     "lat": 25.686111,
     "lng": -100.492775
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr La Union - La Partida 850 ejido Ana Torreon Coah CP 27410",
     "lat": 25.686388,
     "lng": -103.36895
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Colón #100 Ote., esq. Bernardo Reyes, Col. Central. Monterrey, N.L.",
     "lat": 25.686718,
     "lng": -100.32293
   },
   {
     "marca": "BP",
     "direccion": "Av. Colón 2435, C.P. 64000, Monterrey, Nuevo León, México.",
     "lat": 25.687506,
     "lng": -100.336044
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Alfonso Reyes # 1581, 1581-A, 1581-B, Col. Sarabia, C.P. 64490, Monterrey, Nuevo León",
     "lat": 25.688793,
     "lng": -100.31639
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Alfonso Reyes Y Calz. Victoria,.,Monterrey,Nuevo Leon",
     "lat": 25.689552,
     "lng": -100.31708
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Adolfo Lopez Mateos # 301, Col. Fracc. Hacienda San Rafael",
     "lat": 25.690195,
     "lng": -100.21262
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey-Saltillo No. 3253, Col. Al Pte. de Col Puerta de las Mitras",
     "lat": 25.690565,
     "lng": -100.50221
   },
   {
     "marca": "PEMEX",
     "direccion": "Rayon No. 401, Col. San Rafael",
     "lat": 25.691648,
     "lng": -100.22148
   },
   {
     "marca": "PEMEX",
     "direccion": "Acceso Km 9+200 Autopista Monterrey-Cadereyta, Col. S/C",
     "lat": 25.693027,
     "lng": -100.183105
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Acceso km 9+200 Autopista Monterrey-Cadereyta, SC, Guadalupe, Nuevo León",
     "lat": 25.693195,
     "lng": -100.183655
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Torreon El Coyote Km. 4, Col. .",
     "lat": 25.693546,
     "lng": -103.33187
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Jose Angel Conchello # 2409, Col. Reforma. Monterrey, Nuevo León",
     "lat": 25.694798,
     "lng": -100.29769
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Miguel de la Madrid # 1321, Col. Jardines de Guadalupe",
     "lat": 25.694946,
     "lng": -100.173256
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Constituyentes De Nuevo León #103,Escamilla. Guadalupe, N.L.",
     "lat": 25.696365,
     "lng": -100.261696
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Bonifacio Salinas No. 114-A, Col. Fracc. Industrial las Americas, C.P. 67100, Guadalupe, Nuevo León",
     "lat": 25.701021,
     "lng": -100.24005
   },
   {
     "marca": "PEMEX",
     "direccion": "Emiliano Zapata No. 207, Col. Emiliano Zapata",
     "lat": 25.701607,
     "lng": -100.36158
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortinez # 1400-A,Nueva Linda Vista,Guadalupe,Nuevo Leon",
     "lat": 25.703009,
     "lng": -100.23142
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortines #620, Col. Central de Carga. Guadalupe, Nuevo León",
     "lat": 25.703176,
     "lng": -100.2393
   },
   {
     "marca": "ORSAN",
     "direccion": "Ruiz Cortines 3428 Ote.,Moderna, MONTERREY, Nuevo Leon.",
     "lat": 25.703403,
     "lng": -100.279655
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Ruiz Cortinez # 700 Esq. Amado Nervo, Col. S/D",
     "lat": 25.703918,
     "lng": -100.319595
   },
   {
     "marca": "PEMEX",
     "direccion": "Av.A.Ruiz Cortinez No.3505, Col. Mitras Norte",
     "lat": 25.705137,
     "lng": -100.34874
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Ruiz Cortines #2001, Guadalupe N.L",
     "lat": 25.707962,
     "lng": -100.17919
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Camino Real No. 7726, Col. Topo Chico, C.P. 64260, Monterrey, Nuevo León",
     "lat": 25.710928,
     "lng": -100.22118
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Felix Galvan No. 520, Col. Fidel Velazquez",
     "lat": 25.71227,
     "lng": -100.26063
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Huinala-Villa de Juarez No. 300 Apodaca, N.L.",
     "lat": 25.71416,
     "lng": -100.137955
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Nogalar Sur 351,Industrial Nogalar, SAN NICOLAS, Nuevo Leon.",
     "lat": 25.715536,
     "lng": -100.284256
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Matamoros - Cd. Victoria Km 18 #18000, Col. Ejido El Saucito, Matamoros, Tam",
     "lat": 25.716166,
     "lng": -97.57152
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AV. FIDEL VELAZQUEZ # 3234 MITRAS NORTE 64320",
     "lat": 25.716736,
     "lng": -100.34689
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Rodrigo Gomez No. 1445 Nte. Esq. Gfo. de Mex., Col. Central",
     "lat": 25.716913,
     "lng": -100.342285
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lopez Mateos # 300, Col. Lagrange",
     "lat": 25.718367,
     "lng": -100.26641
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Nogalar # 105, Col. S/D",
     "lat": 25.722479,
     "lng": -100.29249
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Alemán esquina con Av. Acapulco, Col. La Fe, C.P. 66477, San Nicolás de Los Garza, Nuevo León",
     "lat": 25.723976,
     "lng": -100.21391
   },
   {
     "marca": "OXXO GAS",
     "direccion": "LIBRAMIENTO NORESTE 3.875 EN GARCIA, N.L. ",
     "lat": 25.726826,
     "lng": -100.534454
   },
   {
     "marca": "ORSAN",
     "direccion": "Av. Raul Rangel Frias 3500,Rangel Frias, MONTERREY, Nuevo Leon.",
     "lat": 25.727678,
     "lng": -100.34945
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Solidaridad Pte. R. Frias Y 5 Ene 7070 16 Sep.,.,Monterrey,Nuevo Leon",
     "lat": 25.730082,
     "lng": -100.346176
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Hermosillo # 501, Col. Deportivo Huinala 5to. Sector. Apodaca, Nuevo León",
     "lat": 25.730417,
     "lng": -100.186775
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Rhodesia Del Norte # 501 Esq. Gaspar Castano, Col. Ex Hda. Huinala",
     "lat": 25.730656,
     "lng": -100.16251
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Lopez Mateos, No. 4200, Col. Rincon de Oriente, San Nicolás de los Garza, N.L.",
     "lat": 25.731945,
     "lng": -100.24834
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. No Reeleccion Num. 5521 Cruz Con Valle Del Nog, Col. Colinas Del Valle Verde, C.P. 64360, Monterrey, Nuevo León",
     "lat": 25.736937,
     "lng": -100.367226
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AZTLAN # 7113 GRANJA SANITARIA 30523",
     "lat": 25.7375,
     "lng": -100.35028
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Prolong. Av. Bernardo Reyes # 6765, Col. Topo Chico, C.P. 64280, Monterrey, Nuevo León",
     "lat": 25.737574,
     "lng": -100.33246
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Antigua Carr. A Roma #8001, entre entronque con Mezquital, Col. Mezquital. Apodaca, N.L. ",
     "lat": 25.739775,
     "lng": -100.2392
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Lopez Mateos y Av. Mezquital, Col. .",
     "lat": 25.74002,
     "lng": -100.23901
   },
   {
     "marca": "ORSAN",
     "direccion": "Paseo de Leones S/N,Cerradas De Cumbres, MONTERREY, Nuevo Leon.",
     "lat": 25.741516,
     "lng": -100.414246
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Libramiento Noreste #8000 Esq. Luis Donaldo Colosio Col. El Puerto del Durazno, García, N.L.",
     "lat": 25.741945,
     "lng": -100.513885
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Cristobal Colon y la Zarca-Torreon, Col. .",
     "lat": 25.742556,
     "lng": -104.77241
   },
   {
     "marca": "PEMEX",
     "direccion": "Manuel L. Barragan y Fray Bartolome Casas No. 200, Col. Roble Norte",
     "lat": 25.742682,
     "lng": -100.31199
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carrt. Huinala # 398,Villas De Huinala,Apodaca,Nuevo Leon",
     "lat": 25.746603,
     "lng": -100.194115
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carrt. a Huinala y Camino Al Milagro # 300, Col. Apodaca, C.P. 66600, Apodaca, Nuevo León",
     "lat": 25.746841,
     "lng": -100.19186
   },
   {
     "marca": "PEMEX",
     "direccion": "Julian Trevino Elizondo 100-04-A, Col. Sc",
     "lat": 25.74715,
     "lng": -100.199265
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Cam.Huinala-Mezquital #510, esq. Carr. Miguel Aleman. Apodaca, Nuevo León",
     "lat": 25.747282,
     "lng": -100.20219
   },
   {
     "marca": "OXXO GAS",
     "direccion": "CARR A GARCIA KM6 PUERTO DURAZNO GARCIA, NL.",
     "lat": 25.748056,
     "lng": -100.52778
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Huinala-Pesqueria # 200, Col. S/C",
     "lat": 25.748531,
     "lng": -100.129654
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AV. CRISTINA LARRALDE NUM. 600 ESQ. SIERRA DE IGUANA FRACC. SAN IGNACIO COL. LAS PUENTES 7o SECTOR SAN NICOLAS DE LOS GARZA",
     "lat": 25.749445,
     "lng": -100.27917
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Santo Domingo Esq.Con Palomas No. 1429, Col. .",
     "lat": 25.752253,
     "lng": -100.26239
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Rio Orinoco No. 708, Col. Lomas de San Isidro",
     "lat": 25.75644,
     "lng": -100.1535
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera San Pedro - Torreon No. 504, Col. Ejidal El Ancora",
     "lat": 25.7576,
     "lng": -103.0004
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Universidad No. 1011, Col. Casa Bella",
     "lat": 25.758999,
     "lng": -100.29638
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. a Laredo Norte 101,Centro, SAN NICOLAS, Nuevo Leon.",
     "lat": 25.761806,
     "lng": -100.294174
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Manuel L. Barragan # 1300 \"A, Col. Las Misiones",
     "lat": 25.762877,
     "lng": -100.30513
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Manuel L. Barragan # 1300 \"A, Col. Las Misiones, C.P. 66428, San Nicolas de Los Garza, Nuevo León",
     "lat": 25.763054,
     "lng": -100.305374
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Constitucion # 240, Col. Residencial las Palmas",
     "lat": 25.763342,
     "lng": -100.24245
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Acueducto #401 Col. Balcones de Anáhuac. Escobedo N.L.",
     "lat": 25.765244,
     "lng": -100.32286
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Maria Concepcion Barragan # 203, Col. Enramada V Sector 2a. Etapa",
     "lat": 25.765715,
     "lng": -100.25733
   },
   {
     "marca": "PEMEX",
     "direccion": "Luis Donaldo Colosio S/N, Col. Barrio San Carlos",
     "lat": 25.76801,
     "lng": -100.39387
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Lopez Portillo # 18. General Escobedo, Nuevo Leon",
     "lat": 25.768225,
     "lng": -100.29141
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Abraham Lincoln No. 5797, Col. San Bernabe Topo Chico",
     "lat": 25.768377,
     "lng": -100.415115
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AV. MORENITA MIA N° 100 A COL. VALLE SOL, SAN NICOLÁS DE LOS GARZA, NUEVO LEÓN",
     "lat": 25.76889,
     "lng": -100.27915
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. R. G. Castro No. 2239, Col. Ejido Jiquilpan",
     "lat": 25.772451,
     "lng": -108.96933
   },
   {
     "marca": "BP",
     "direccion": "Ant. Camino Apodaca-Mezquital 200, Centro Santa Rosa, C.P.66600, Monterrey,  Nuevo León, México.",
     "lat": 25.774649,
     "lng": -100.21965
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. a las Grutas Km 11.1 a Garcia ",
     "lat": 25.775555,
     "lng": -100.56556
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Miguel Aleman #300, Col. Centro. Apodaca, N.L.",
     "lat": 25.777447,
     "lng": -100.182594
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Corea Esq. Con Av. Bosque Real Col. Bosque Real Dos ",
     "lat": 25.777779,
     "lng": -100.24084
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Miguel Aleman #603, Col. Centro. Apodaca, N.L.",
     "lat": 25.777832,
     "lng": -100.18376
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Cabezada # 1307, Col. Barrio la Moderna, C.P. 64100, Monterrey, Nuevo León",
     "lat": 25.77805,
     "lng": 100.38473
   },
   {
     "marca": "BP",
     "direccion": "Carretera Monterrey Saltillo km 339, C.P. 66023, García, Nuevo León, México.",
     "lat": 25.779352,
     "lng": -100.45594
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AV. BOULEVARD BENITO JUAREZ NO. 511 S/C ESCOBEDO NUEVO LEON",
     "lat": 25.780556,
     "lng": -100.28528
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Heriberto Castillo Num. 1000 García, N.L. ",
     "lat": 25.78225,
     "lng": -100.57613
   },
   {
     "marca": "NEXUM",
     "direccion": "Carretera Matamoros - Cd. Victoria Km 7.500, Matamoros, Tam.",
     "lat": 25.7824,
     "lng": -97.53269
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Matamoros-Cd. Victoria Km. 7.5 Sur No. 7501, Col. .",
     "lat": 25.78265,
     "lng": -97.53257
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Lincoln No. 3000, Garcia, N.L.",
     "lat": 25.78389,
     "lng": -100.461945
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Afganistan # 1163, Col. Hda. Santa Rosa",
     "lat": 25.78408,
     "lng": -100.24865
   },
   {
     "marca": "PEMEX",
     "direccion": "Gral Bravo  Domicilio Conocido, Col. .",
     "lat": 25.78435,
     "lng": -99.18458
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Las Palmas #430, Col. Valle de las Palmas. Apodaca, N.L.",
     "lat": 25.784563,
     "lng": -100.266624
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Marcial Ordoñez Esq. Con G. Leyva, Col. Bienestar",
     "lat": 25.784725,
     "lng": -108.99785
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Casa Del Obrero Mundial 5007, Col. C.R.O.C., C.P. 64200, Monterrey, Nuevo León",
     "lat": 25.786015,
     "lng": -100.37703
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Libramiento Pesqueria Los Ramones No. 117, Col. Centro",
     "lat": 25.787258,
     "lng": -100.03997
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd.B.Juarez y Av.Hacienda Del Rey, Col. Haciendas de Escobedo",
     "lat": 25.789618,
     "lng": -100.30525
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd.B.Juarez y Av.Hacienda Del Rey, Col. Haciendas de Escobedo, C.P. 0, General Escobedo, Nuevo León",
     "lat": 25.789743,
     "lng": -100.30513
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Raul Salinas # 714,Felipe Carrillo,General Escobedo,Nuevo Leon",
     "lat": 25.790556,
     "lng": -100325
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. a Colombia #804 Col. Ampliación Lázaro Cárdenas. Escobedo N.L.",
     "lat": 25.795246,
     "lng": -100.293495
   },
   {
     "marca": "PEMEX",
     "direccion": "Independencia y Blvd. Rio de las Canas, Col. Jardines Del Valle",
     "lat": 25.797531,
     "lng": -109.0067
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Miguel Aleman-Pesqueria, Km. 0.80, Col. .",
     "lat": 25.79861,
     "lng": -100.09119
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Monterrey - Laredo No. 1701, Col. Sc",
     "lat": 25.802849,
     "lng": -100.276634
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle a Bacurato y Calle Al Campamento 001, Col. S/C",
     "lat": 25.810457,
     "lng": -107.91405
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolg. Macario Gaxiola y Carrt. Int.Mexico-Nogales, Col. Zona Industrial",
     "lat": 25.812092,
     "lng": -108.959984
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Santa Rosa-Apodaca No. 200, Col. Fracc. Valle Del Salduero",
     "lat": 25.814798,
     "lng": -100.2172
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Autopista de Cuota Saltillo-Laredo No. 6700, Escobedo N.L.",
     "lat": 25.817015,
     "lng": -100.39526
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Del Nino # 50, Col. Villa las Torres",
     "lat": 25.8177,
     "lng": -97.5057
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Victoria Km. 3.5, Col. Centro",
     "lat": 25.818438,
     "lng": -97.51727
   },
   {
     "marca": "NEXUM",
     "direccion": "12 de Marzo S/N, Ejido Cabras Pintas, Matamoros, Tam.",
     "lat": 25.82697,
     "lng": -97.545815
   },
   {
     "marca": "PEMEX",
     "direccion": "Juarez Libertad y J.M.Flores, Col. .",
     "lat": 25.83431,
     "lng": -103.84723
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera a Monclova Km 5.5, Col. S/C",
     "lat": 25.834806,
     "lng": -100.31187
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Monterrey-Miguel Aleman Km 38 # 7, Col. Ejido Marin",
     "lat": 25.85587,
     "lng": -100.2245
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Constituyentes Num.213, Col. Casa Blanca",
     "lat": 25.86276,
     "lng": -97.54191
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Sendero Nacional Km 7.5, Col. S/C",
     "lat": 25.86591,
     "lng": -97.57241
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Lauro Villar Km.1, Col. .",
     "lat": 25.868774,
     "lng": -97.48675
   },
   {
     "marca": "NEXUM",
     "direccion": "Calle Primera esq. con Calle Mina, Col. Centro Matamoros, Tam. ",
     "lat": 25.87213,
     "lng": -97.499695
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Salinas Victoria, No. 3096, Apodaca N.L.",
     "lat": 25.8775,
     "lng": -100.25306
   },
   {
     "marca": "NEXUM",
     "direccion": "Av. Rigo Tovar #84, Col. Zona Industrial, Matamoros, Tam.",
     "lat": 25.878021,
     "lng": -97.52795
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Tamaulipas No. 56, Col. Modelo",
     "lat": 25.879011,
     "lng": -97.49475
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Los Mochis - Ahome Km. 16, Col. Bagojo Colectivo",
     "lat": 25.884682,
     "lng": -109.133766
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 3.0 Carr.A Reynosa, Col. .",
     "lat": 25.893242,
     "lng": -97.53246
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Reynosa-San Fernando Km 101 Brecha Jacalito, Col. S/C",
     "lat": 25.92335,
     "lng": -98.26932
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera a Monclova km25 y Porfirio Diaz Num. 203 nte Col. Centro Hgo.",
     "lat": 25.974642,
     "lng": -100.44247
   },
   {
     "marca": "PEMEX",
     "direccion": "Tamaulipas y Madero, Col. .",
     "lat": 25.986822,
     "lng": -98.10734
   },
   {
     "marca": "PEMEX",
     "direccion": "Notri entre Ligui y Tecomajac, Col. Zona Industrial",
     "lat": 26.007353,
     "lng": -111.36613
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Reynosa-Matamoros Parcela 128,Z-1,P2/2, Col. Ejido El Guerreno",
     "lat": 26.013895,
     "lng": -98.20425
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.A Matamoros Km.92 entre V.Huerta y L.Vicario, Col. Lopez Portillo",
     "lat": 26.038263,
     "lng": -98.28171
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Matamoros-Monterrey # 600, Col. Jacinto Lopez",
     "lat": 26.044733,
     "lng": -98.314766
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr Matamoros-Reynosa  Km 93, Col. Doctores",
     "lat": 26.059696,
     "lng": -98.295074
   },
   {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocodo # 621, Col. S/D",
     "lat": 26.064035,
     "lng": -108.77815
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 208 Carrt. Reynosa-Monterrey, Col. .",
     "lat": 26.067596,
     "lng": -98.33872
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Hidalgo Km. 101 S/N.",
     "lat": 26.076052,
     "lng": -98.31553
   },
   {
     "marca": "PEMEX",
     "direccion": "Avenida Mexico No. 103, Col. Fraccionamiento Villas Los Nogales",
     "lat": 26.077112,
     "lng": -98.325714
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Blvd. Virreyes  S/N",
     "lat": 26.086235,
     "lng": -98.30163
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Camargo S/N Cd Diaz Ordaz, Col. Zona Industrial",
     "lat": 26.214403,
     "lng": -98.590004
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 4ta. y 5ta. Manzana No. 74, Col. Loc. Villa Gustavo Diaz Ordaz",
     "lat": 26.269516,
     "lng": -109.04168
   },
   {
     "marca": "PEMEX",
     "direccion": "Del Tramo Carretero Los Mochis Sinaloa-Navojoa Km. 70.100, Col. ",
     "lat": 26.409721,
     "lng": -109.01722
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Sabinas-Paras Km. 1, Col. .",
     "lat": 26.503716,
     "lng": -100.1637
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Parral-Guadalupe y Calvo Km 108+594, Col. S/D",
     "lat": 26.532585,
     "lng": -106.35341
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Juarez # 20, Col. Centro",
     "lat": 26.783613,
     "lng": -101.427864
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Monclova-Castaños, Km182. Monclova, Coahuila.",
     "lat": 26.804836,
     "lng": -101.42065
   },
   {
     "marca": "PEMEX",
     "direccion": "Juarez y Obregon S/N., Col. Centro",
     "lat": 26.82416,
     "lng": -109.6378
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Gustavo Galaz Km 182 # 320, Col. Asturias. Monclova, Coahuila",
     "lat": 26.838865,
     "lng": -101.42403
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Harold. R. Pape y Ave. Industrial, Col. Fracc. Benavides",
     "lat": 26.884348,
     "lng": -101.42542
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera Saltillo-Piedra Negras KM 1065.5 Col. Centro, MONCLOVA, Coahuila.",
     "lat": 26.892235,
     "lng": -101.42354
   },
   {
     "marca": "ORSAN",
     "direccion": "Calle de la Fuente 108 Oriente Col. Centro, MONCLOVA, Coahuila.",
     "lat": 26.90241,
     "lng": -101.4229
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Cuauhtemoc Esq Con Aldama y Privada Jesus Sil, Col. Zona Centro. Monclova, Coahuila.",
     "lat": 26.907328,
     "lng": -101.418846
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. San Buenaventura # 1900, Col. Fracc. Magisterio. Monclova, Coahuila",
     "lat": 26.907328,
     "lng": -101.418846
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret. a Piedras Negras Km 1067, Col. Guadalupe",
     "lat": 26.915173,
     "lng": -101.42778
   },
   {
     "marca": "ORSAN",
     "direccion": "Boulevard Harold R. Pape #1912 Col. Del Prado, MONCLOVA, Coahuila.",
     "lat": 26.9267,
     "lng": -101.41762
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Prolongacion Independencia, Col. Vella Vista. Hidalgo Del Parral, Chihuahua",
     "lat": 26.928125,
     "lng": -105.650955
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Tecnologico Num. 29, Col. .",
     "lat": 26.932161,
     "lng": -105.64954
   },
   {
     "marca": "PEMEX",
     "direccion": "Prol.Hidalgo S/N, Col. Granja CordereºA",
     "lat": 26.942514,
     "lng": -105.39898
   },
   {
     "marca": "ORSAN",
     "direccion": "Carretera 57 KM 6.5 #1400 Col. Estancia San Juan Bautista, MONCLOVA, Coahuila.",
     "lat": 26.957344,
     "lng": -101.409744
   },
   {
     "marca": "PEMEX",
     "direccion": "Lib. Carlos Salinas de Gortari # 184 Nte., Col. San Juan Bautista",
     "lat": 26.969063,
     "lng": -101.448425
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera 57 No. 6100, Col. Estancias de Santa Ana",
     "lat": 26.975143,
     "lng": -101.37708
   },
   {
     "marca": "PEMEX",
     "direccion": "Carre. Navojoa-Huatabampo # 65, Col. S-C",
     "lat": 26.982903,
     "lng": -109.54962
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera 30 Tramo Monclova-Cuatro Cienegas # 201, Col. Ampliacion Oriente",
     "lat": 27.005938,
     "lng": -101.72042
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Lazaro Cardenas No.1104, Col. S.O.P.",
     "lat": 27.073109,
     "lng": -109.427
   },
   {
     "marca": "PEMEX",
     "direccion": "Allende y Dr. Quiroz Cuaron No. 1400, Col. Abraham  Gonzalez",
     "lat": 27.12373,
     "lng": -104.90875
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 0.6 Carretera Jimenez-Zavalza, Col. .",
     "lat": 27.1263,
     "lng": -104.90165
   },
   {
     "marca": "ORSAN",
     "direccion": "Carr. Nuevo Laredo - Monterrey Km. 27,S/N, NUEVO LAREDO, Tamaulipas.",
     "lat": 27.276325,
     "lng": -99.61212
   },
   {
     "marca": "PEMEX",
     "direccion": "Escobedo # 95, Col. Zona Centro",
     "lat": 27.32268,
     "lng": -102.40078
   },
   {
     "marca": "GASMART",
     "direccion": "Carretera Cd. Obregón Navojoa No. 1826 A, Fundidora, 85233 Navojoa, Son.",
     "lat": 27.335266,
     "lng": -109.74178
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Tramo municipal salida al norte km 0 + 500 fundidora el boleo c.p. 23935, mulege",
     "lat": 27.343758,
     "lng": -112.267975
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Nacional Km. 10.2 No. 809, Col. Fracc. Granjas Guzman",
     "lat": 27.406616,
     "lng": -99.54102
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolongacion Monterrey # 5401, Col. Los Encinos",
     "lat": 27.453352,
     "lng": -99.53296
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calle Michoacán 5202, Cajeme, 85119 Cd Obregón, Son.",
     "lat": 27.457577,
     "lng": -109.95371
   },
   {
     "marca": "ORSAN",
     "direccion": "Ave. Reforma 4400,Mexico, NUEVO LAREDO, Tamaulipas.",
     "lat": 27.46203,
     "lng": -99.51171
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 9 entre Canal Revestido y Rodolfo Santa Liz, Col. Ejido Francisco Javier Mina",
     "lat": 27.463825,
     "lng": -110.11673
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Fed. # 1000 Ote., Col. S/D",
     "lat": 27.474365,
     "lng": -109.91917
   },
   {
     "marca": "PEMEX",
     "direccion": "Ave. Cesar Lopez de Lara 2702, Col. San Rafael",
     "lat": 27.47477,
     "lng": -99.517685
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calle Coahuila, Campestre, 85160 Cd Obregón, Son.",
     "lat": 27.478163,
     "lng": -109.94051
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Av. Francisco Munguía N° 2121",
     "lat": 27.48026,
     "lng": -99.5409
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Jalisco y Carretera Internacional No. 1150, Col. Municipio Libre",
     "lat": 27.481009,
     "lng": -109.92879
   },
   {
     "marca": "PEMEX",
     "direccion": "Coahuila # 1034 Sur, Col. Campestre",
     "lat": 27.48114,
     "lng": -109.94028
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calle Jalisco # 950 Sur, Centro, Central de Abastos, 85000 Cajene, Son.",
     "lat": 27.481447,
     "lng": -109.92978
   },
   {
     "marca": "PEMEX",
     "direccion": "Callejon a Nonoava S/N, Col. Barrio de Los Moros",
     "lat": 27.48201,
     "lng": -106.73718
   },
   {
     "marca": "PEMEX",
     "direccion": "Guatemala # 1903, Col. Guerrero",
     "lat": 27.482578,
     "lng": -99.507225
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Guatemala # 1903, Col. Guerrero. Nuevo Laredo, Tamaulipas",
     "lat": 27.482828,
     "lng": -99.507454
   },
   {
     "marca": "PEMEX",
     "direccion": "No Reeleccion 2602 Ote, Col. Las Haciendas Secc. Los Monjes Iii",
     "lat": 27.491505,
     "lng": -109.9052
   },
   {
     "marca": "PEMEX",
     "direccion": "V.Guerrero Pte. No. 702, Col. Del Valle",
     "lat": 27.494265,
     "lng": -109.94551
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Pino Suarez # 6322, Col. Buena Vista",
     "lat": 27.495567,
     "lng": -99.540115
   },
   {
     "marca": "G500",
     "direccion": "Avenida Revolución 7627, Buenavista, Nuevo Laredo, Tamaulipas, 88120",
     "lat": 27.49889,
     "lng": -99.55267
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 137 s/c c.p. 23935, mulege",
     "lat": 27.625551,
     "lng": -113.37496
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Ave. Luis H. Alvarez #902, Col. La Pila. Camargo, Chihuahua",
     "lat": 27.668447,
     "lng": -105.17023
   },
   {
     "marca": "G500",
     "direccion": "Agustin Melgar 903, Obrera, Camargo, Chihuahua, 33000",
     "lat": 27.67736,
     "lng": -105.17312
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 1308 Carr. Panamericana a Cd. Juarez., Col. .",
     "lat": 27.678074,
     "lng": -105.161545
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Km. 1308 Carr. Panamericana a Cd. Juarez, Col. Lagunilla. Camargo, Chihuahua",
     "lat": 27.67829,
     "lng": -105.16152
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Benito Juárez y Comonfort, Col. Centro. Camargo, Chihuahua",
     "lat": 27.692137,
     "lng": -105.17269
   },
   {
     "marca": "G500",
     "direccion": "Avenida San Isidro Labrador S/N, Omachique, Bocoyna, Chihuahua, 33200",
     "lat": 27.736046,
     "lng": -107.64025
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Gran Vision 902, Col. Barrio Rochivo",
     "lat": 27.763477,
     "lng": -107.63747
   },
   {
     "marca": "GASTOP",
     "direccion": "Blvd. Faustino Félix Serna 2, 13 de Enero, Nacionalización del Golfo de California, 85477 Heroica Guaymas, Son.",
     "lat": 27.905956,
     "lng": -110.92165
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Internacional Km. 1980, Col. Delicias",
     "lat": 27.924677,
     "lng": -110.912224
   },
   {
     "marca": "PEMEX",
     "direccion": "Presidente Carranza # 75, Col. Comecial",
     "lat": 27.936913,
     "lng": -101.22772
   },
   {
     "marca": "GASTOP",
     "direccion": "Carretera salida a Hermosillo km 135, Santa Clara, Guaymas, Sonora ",
     "lat": 28.007065,
     "lng": -110.94808
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Int. Tramo Guaymas-Hermosillo Km. 1992.000, Col. ",
     "lat": 28.0432,
     "lng": -110.9398
   },
   {
     "marca": "G500",
     "direccion": "Avenida Plutarco Elias Calles 3600, Fraccionamiento Vencedores del Desierto, Delicias, Chihuahua, 33089",
     "lat": 28.175158,
     "lng": -105.45338
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Calle 7a. Poniente No. 1503. Delicias, Chih.",
     "lat": 28.187708,
     "lng": -105.48756
   },
   {
     "marca": "G500",
     "direccion": "Carretera Panamericana Km 13, N/A, Delicias, Chihuahua, N/A",
     "lat": 28.19095,
     "lng": -105.459114
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av Rio San Pedro Sur 412, Sur 1, 33000 Delicias, Chih.",
     "lat": 28.194405,
     "lng": -105.46972
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carrt. 45 Tramo Delicias-Chih. Km 138+168.69, Col. S/D. Delicias, Chihuahua",
     "lat": 28.20039,
     "lng": -105.45352
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calle Aldama 89, Col. Centro, Centro, 33130 Meoqui, Chih.",
     "lat": 28.26922,
     "lng": -105.483284
   },
   {
     "marca": "G500",
     "direccion": "Calle Aldama 2107, Zona Industrial, Meoqui, Chihuahua, 33130",
     "lat": 28.27647,
     "lng": -105.486244
   },
   {
     "marca": "PEMEX",
     "direccion": "El Mirador Domicilio Conocido, Col. .",
     "lat": 28.30627,
     "lng": -106.47914
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret.Intern.Tramo-Guaymas-Hermosillo Km.171.3, Col. .",
     "lat": 28.320057,
     "lng": -111.04293
   },
   {
     "marca": "PEMEX",
     "direccion": "Carret.Intern.Tramo-Guaymas-Hermosillo Km.171.3, Col. .",
     "lat": 28.320057,
     "lng": -111.04293
   },
   {
     "marca": "PEMEX",
     "direccion": "Ignacio Ramirez No. 701, Col. Centro",
     "lat": 28.381857,
     "lng": -105.62426
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 6a No. 445 Esq. Ave. Tlaxcala, Col. Reforma",
     "lat": 28.38504,
     "lng": -106852
   },
   {
     "marca": "G500",
     "direccion": "Av. Hidalgo y C. 15 1380, Independencia, Cuauhtémoc, Chihuahua, 31530",
     "lat": 28.3998,
     "lng": -106.85882
   },
   {
     "marca": "G500",
     "direccion": "Av. Agustin Melgar y Av. Coahuila 2285, República, Cuauhtémoc, Chihuahua, 31590",
     "lat": 28.413666,
     "lng": -106.86891
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Agustin Melgar y Av. California No. 1685, Col. Zona Centro",
     "lat": 28.425032,
     "lng": -106.8421
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera  Chihuahua Delicias Km. 206, Col. Sc",
     "lat": 28.560032,
     "lng": -105.954575
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carretera Chihuahua Delicias Km. 206. Aquiles Serdan, Chihuahua",
     "lat": 28.560242,
     "lng": -105.954094
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Silvestre Terrazas # 13001, Col. Labor de Terrazas",
     "lat": 28.583202,
     "lng": -106.119865
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Chihuahua-Delicias, Km.209. Chihuahua, Chihuahua",
     "lat": 28.58384,
     "lng": -105.96031
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Silvestre Terrazas s/n, Begonias, 31410 Chihuahua, Chih.",
     "lat": 28.603815,
     "lng": -106.101494
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr.Mex-Chihuahua Calle Fco. Marquez, Col. Veteranos. Chihuahua, Chih.",
     "lat": 28.604803,
     "lng": -105.99604
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Mex-Chihuahua Calle Fco. Marquez, Col. Veteranos",
     "lat": 28.604832,
     "lng": -105.99588
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Antonio Ortiz Mena No. 5007, Col. Avicola 2a. Etapa",
     "lat": 28.612944,
     "lng": -106.10724
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Antonio Ochoa # 4411, Dale, RUTA SUR II, 31203 Chihuahua, Chih.",
     "lat": 28.61389,
     "lng": -106.07375
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av. Nueva España s/n, Misael Núñez, 31064 Chihuahua, Chih.",
     "lat": 28.617962,
     "lng": -106.03165
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av. Francisco Zarco 2828, Zarco, 31020 Chihuahua, Chih.",
     "lat": 28.620201,
     "lng": -106.0878
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y Calle 22, Col. Centro",
     "lat": 28.627682,
     "lng": -106.086464
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Independencia # 2800 Esq. Av. 20 de Noviembre, Col. Santa Rosa",
     "lat": 28.63051,
     "lng": -106.067795
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Haciendas Del Valle No. 6705, Col. Haciendas Del Valle. Chihuahua, Chihuahua",
     "lat": 28.633497,
     "lng": -106.119064
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Venuestiano Carranza No. 2000, Col. Lomas de la Villa",
     "lat": 28.654009,
     "lng": -100.535286
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Venuestiano Carranza No. 2000, Col. Lomas de la Villa",
     "lat": 28.654009,
     "lng": -100.535286
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. las Americas y Libramiento Perimetral, Col. .",
     "lat": 28.658619,
     "lng": -106.10074
   },
   {
     "marca": "OXXO GAS",
     "direccion": "José María Iglesias No. 5512, Col. Granjas, C.P. 31100, Chihuahua, Chihuahua.",
     "lat": 28.667286,
     "lng": -106.11168
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Periférico de la Juventud s/n Fracc. Barrancas. Chihuahua, Chih.",
     "lat": 28.670721,
     "lng": -106.13293
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av. Paseo del Pastizal 9416, Paseos Camino Real Etapa 1ª, 31109 Chihuahua, Chih.",
     "lat": 28.673014,
     "lng": -105.9865
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av Tecnológico esq. Pinabete #6514, Col. Parral, Chihuahua, Chih.",
     "lat": 28.676653,
     "lng": -106.102196
   },
   {
     "marca": "G500",
     "direccion": "Fausto Z Martinez 900, Burocratas, Piedras Negras, Coahuila, 26020",
     "lat": 28.67983,
     "lng": -100.541374
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Principal y Carr.Chihuahua y Aldama, Col. .",
     "lat": 28.680874,
     "lng": -106.00242
   },
   {
     "marca": "PEMEX",
     "direccion": "Lazaro Cardenas No. 2600 Central, Col. .",
     "lat": 28.688076,
     "lng": -100.542915
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Tecnológico, esq. Elias Muller #10313, Col. Deportistas. Chihuahua, Chih.",
     "lat": 28.692327,
     "lng": -106.1152
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Republica No.1729, Col. Fracc. Tecnologico",
     "lat": 28.69528,
     "lng": -100.56273
   },
   {
     "marca": "G500",
     "direccion": "Galeana 505 Sur SN, Centro, Piedras Negras, Coahuila, 26000",
     "lat": 28.697803,
     "lng": -100.51855
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Vialidad Sacramento y Potrero Viejo No. 6303, Col. Nombre de Dios. Chihuahua, Chihuahua",
     "lat": 28.70996,
     "lng": -106.08313
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Homero No. 3101, Col. Cond. Parque Complejo Ind. Chihuahua",
     "lat": 28.71295,
     "lng": -106.10502
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Los Nogales Norte # 1101 Esq. Alfonso Sosa V., Col. Pedro Dominguez",
     "lat": 28.732416,
     "lng": -106.12155
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Los Nogales Norte # 1101 Esq. Alfonso Sosa V., Col. Pedro Dominguez",
     "lat": 28.732416,
     "lng": -106.12155
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y David Alfaro Siqueiros S/N, Col. Parque Industrial San Jose Bachiniva",
     "lat": 28.78048,
     "lng": -107.24301
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Morelos 26 Frente Ff.Cc., Col. Matachic",
     "lat": 28.845762,
     "lng": -107.75423
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Km 31+498 Carrt.Mex-Cd.Juarez Trm.Chih-El Sueco, Col. Sacramento. Chihuahua, Chih.",
     "lat": 28.865465,
     "lng": -106.226105
   },
   {
     "marca": "GASTOP",
     "direccion": "Blvd. Manuel J. Clouthier No. 275, Costa del Sol, 83284 Hermosillo, Son.",
     "lat": 29.015886,
     "lng": -110.96457
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av. Xólotl No. 244, Altares, 83294 Hermosillo, Son.",
     "lat": 29.017033,
     "lng": -110.94934
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Agustín de Vildósola, Villa de Seris, 83280 Hermosillo, Son.",
     "lat": 29.061813,
     "lng": -110.956825
   },
   {
     "marca": "GASTOP",
     "direccion": "Jardines de Monaco, 83078 Hermosillo, Son.",
     "lat": 29.069859,
     "lng": -110.97983
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "83078, Ernesto Salazar Girón 32, Revolucion, 83078 Hermosillo, Son.",
     "lat": 29.077713,
     "lng": -110.93639
   },
   {
     "marca": "PEMEX",
     "direccion": "Sonora y Matamoros_Esq., Col. Centro",
     "lat": 29.082293,
     "lng": -110.952415
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Blvd. Jesús Garcia Morales 961, La Manga, 83220 Hermosillo, Son.",
     "lat": 29.091867,
     "lng": -111.03992
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av. Reforma 79, Esq. Av. Aguascalientes, Col. San Benito",
     "lat": 29.094507,
     "lng": -110.96983
   },
   {
     "marca": "GASTOP",
     "direccion": "Carretera a Nogales Kilómetro 1.7, San Luis, 83160 Hermosillo, Son.",
     "lat": 29.103312,
     "lng": -110.915115
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Entronque Blvd. Lazaro Cardenas con Blvd Lopez Portillo, Benito Juarez, Benito Juárez, 83110 Hermosillo, Son.",
     "lat": 29.108997,
     "lng": -110.95536
   },
   {
     "marca": "PEMEX",
     "direccion": "Dr. Domingo Olivares # 395 y Angel Gcia. Aburto, Col. Olivares",
     "lat": 29.10932,
     "lng": -110.98012
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas # 531, Col. Santa Isabel",
     "lat": 29.120567,
     "lng": -110.98536
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Lazaro Cardenas # 531, Col. Santa Isabel",
     "lat": 29.120567,
     "lng": -110.98536
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Paseo Rio Sonora Norte No.567, Col. Proyecto Rio Sonora",
     "lat": 29.123611,
     "lng": -111.004166
   },
   {
     "marca": "PEMEX",
     "direccion": "Nuevo Predio de Campo Menonita No. 87, Col. Sta. Rita",
     "lat": 29.123932,
     "lng": -106.72117
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Solidaridad esq. Pueblo de Álamos, Col. Miguel Hidalgo",
     "lat": 29.133562,
     "lng": -110.99563
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Agustin F. Zamora No. 29, Col. Privadas Del Bosque",
     "lat": 29.148184,
     "lng": -111.00644
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Namiquipa-Chihuahua, En Sta.Catalina Villela, Col. .",
     "lat": 29.183203,
     "lng": -106.96153
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 5a. No. 1601, Col. S/C",
     "lat": 29.18877,
     "lng": -108.14218
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 3a. No. 304 Esquina Con Calle Morelos, Col. Centro",
     "lat": 29.19452,
     "lng": -108.14337
   },
   {
     "marca": "PEMEX",
     "direccion": "Campo Menonita No 51-A, Col. Santa Clara",
     "lat": 29.250057,
     "lng": -107.40927
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Calle Heroico Colegio Militar 490, 11 de Octubre, 26278 Cd Acuña, Coah.",
     "lat": 29.309404,
     "lng": -100.9372
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Noche Buena 1005, El Cedro, 26237 Cd Acuña, Coah.",
     "lat": 29.324928,
     "lng": -100.982254
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Tratado de Libre Comercio No. 1009, Col. Constitucion",
     "lat": 29.55801,
     "lng": -104.40475
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Blvd. Oscar Flores No.12, Col. Constitucion. Ojinaga, Chihuahua",
     "lat": 29.558353,
     "lng": -104.411995
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera san felipe a laguna chapala km. 172, colonia puertecitos, c.p. 22917",
     "lat": 29.797178,
     "lng": -114.396996
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 135 de la Carr. Hermosillo-Cananea, Col. S/C",
     "lat": 29.818115,
     "lng": -110.227264
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 135 de la Carr. Hermosillo-Cananea, Col. S/C",
     "lat": 29.818115,
     "lng": -110.227264
   },
   {
     "marca": "PEMEX",
     "direccion": "Buena Aventura Chih 3a, Col. S/C",
     "lat": 29.847162,
     "lng": -107.46126
   },
   {
     "marca": "PEMEX",
     "direccion": "La Fortuna Lote 2, Col. Ejido San Lorenzito (La Fortuna)",
     "lat": 30.102713,
     "lng": -106.31803
   },
   {
     "marca": "PEMEX",
     "direccion": "# 5720 Carrt. Nuevo Casas Grandes-Sueco, Col. S/C",
     "lat": 30.38473,
     "lng": -107.88608
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Panamericana Chihuahua-Juarez Km 217, Col. Sin Colonia",
     "lat": 30.442152,
     "lng": -106.52159
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Carretera Internacional SantaAna-Caborca Km. 2.5, Sonora",
     "lat": 30.55568,
     "lng": -111.14011
   },
   {
     "marca": "PEMEX",
     "direccion": "Prolg. Obregon # 620 Carrt. Caborca-Desemboque, Col. S/D",
     "lat": 30.70829,
     "lng": -112.18453
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Santa Ana-Mexicali Av.Prolongacion Fco.I., Col. Centro de Altar",
     "lat": 30.715008,
     "lng": -111.83655
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle Pitiquito, entre Avenidas \"N\" y \"P\", Col. Deportiva",
     "lat": 30.719887,
     "lng": -112.16425
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Av. Benito juárez # 500 col. Vicente guerrero",
     "lat": 30.721695,
     "lng": -115.98901
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Internacional Km.205, Col. Campo Carretero",
     "lat": 30.781942,
     "lng": -110.85413
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calle profesor hector lizarraga no. 59, colonia el sahuaral c.p. 84120",
     "lat": 30.792168,
     "lng": -110.84039
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr. Transpeninsular S/N Col.Benito Juarez, Col. Camalu",
     "lat": 30.838982,
     "lng": -116.06055
   },
   {
     "marca": "PEMEX",
     "direccion": "Domicilio Conocido Ascencion, Col. .",
     "lat": 31.10041,
     "lng": -107.992546
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera federal km. 180-2",
     "lat": 31.117012,
     "lng": -114.90133
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Presidio Numero 3, Zona Industrial, 84100 Nogales, Son.",
     "lat": 31.18424,
     "lng": -110.970825
   },
   {
     "marca": "PEMEX",
     "direccion": "Libramiento Fiscal 4365, Col. Recinto Fiscalizado",
     "lat": 31.243725,
     "lng": -110.970856
   },
   {
     "marca": "GASMART",
     "direccion": "Av. de los Nogales 392, San Carlos Primera Etapa, 84090 Nogales, Son.",
     "lat": 31.27438,
     "lng": -110.93211
   },
   {
     "marca": "SMARTGAS",
     "direccion": "EJE Vial Numero 3203 Colonia Greco, Luis Donaldo Colosio Murrieta, 84066 Nogales, Son.",
     "lat": 31.28509,
     "lng": -110.941864
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Ave. De los maestros 250 col. Jardines de la montaña",
     "lat": 31.290318,
     "lng": -110.9683
   },
   {
     "marca": "PEMEX",
     "direccion": "Boulevard Freemont S/N y Av. Sinaloa No. 91, Col. Benito Juarez",
     "lat": 31.3058,
     "lng": -113.53375
   },
   {
     "marca": "PEMEX",
     "direccion": "Calle 35  N2901, Col. Armando  Lopez Nogales",
     "lat": 31.30865,
     "lng": -109.60429
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Av. De los nogales #315 colonia colinas del yaqui 84093",
     "lat": 31.311995,
     "lng": -110.95365
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Obregon ave. Alvaro obregón # 1140 col. Moderna 84000",
     "lat": 31.312078,
     "lng": -110.9449
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera transpeninsular km. 190 22900",
     "lat": 31.326082,
     "lng": -116.247955
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera valle de la trinidad",
     "lat": 31.407038,
     "lng": -115.72431
   },
   {
     "marca": "PEMEX",
     "direccion": "Hacienda Del Retiro No.3220, Col. Hacienda las Torres Universidad I",
     "lat": 31.594973,
     "lng": -106.399765
   },
   {
     "marca": "PEMEX",
     "direccion": "Custodia de la Republica No. 1015, Col. Fray Garcia de San Francisco",
     "lat": 31.607298,
     "lng": -106.36249
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Tecnologico #9581, Esq. Calle Santos, Col. Zacate Blanco. Cd. Juárez, Chihuahua",
     "lat": 31.621496,
     "lng": -106.44569
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Juarez-Porvenir No. 1657, Col. Ejido Zaragoza",
     "lat": 31.624,
     "lng": -106.327576
   },
   {
     "marca": "PEMEX",
     "direccion": "Carretera Juarez-Porvenir No. 1657, Col. Ejido Zaragoza",
     "lat": 31.624,
     "lng": -106.327576
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Santiago Troncoso No.314, Col. Praderas Del Sur",
     "lat": 31.626873,
     "lng": -106.371445
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Eje Vial Juan Gabriel No.9805, Col. Puente Alto. Cd. Juarez, Chihuahua",
     "lat": 31.629297,
     "lng": -106.46155
   },
   {
     "marca": "PEMEX",
     "direccion": "Blvd. Independencia # 360, Col. Zaragoza",
     "lat": 31.643026,
     "lng": -106.346565
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av. Henequén #10114, Esq. José M. Torres, Col. Fideicomiso Salvacar. Cd. Juárez, Chihuahua.",
     "lat": 31.648348,
     "lng": -106.39115
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Calle Jilotepec No.10104_Y_Calle Hiedra, Col. Ampliacion Infonavit-Aeropuerto. Cd. Juárez, Chihuahua",
     "lat": 31.660137,
     "lng": -106.39161
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. de Los Aztecas No. 9109, Esq. Blvd. Zaragoza, Col. Fracc. Ciudad Moderna",
     "lat": 31.66301,
     "lng": -106.4735
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Carr. Cd. Juarez Casas Grandes #5450, Col. Fracc. Jarudo Del Norte. Cd.Juarez, Chihuahua",
     "lat": 31.674976,
     "lng": -106.43837
   },
   {
     "marca": "PEMEX",
     "direccion": "Perimetral Carlos Amaya # 1395, Col. Azteca",
     "lat": 31.699986,
     "lng": -106.46307
   },
   {
     "marca": "PEMEX",
     "direccion": "Km. 10 Carr.Panamericana y Calle Ruiseñor, Col. Fracc.Alameda",
     "lat": 31.700682,
     "lng": -106.42492
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera estatal la bufadora #141 z-1 ejido nacionalista de sanchez taboada",
     "lat": 31.707687,
     "lng": -116.611115
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. 5 de Febrero No. 1960, Col. ChaveºA",
     "lat": 31.724123,
     "lng": -106.482315
   },
   {
     "marca": "PEMEX",
     "direccion": "5 de Mayo y Tlaxcala, Col. Hidalgo",
     "lat": 31.744156,
     "lng": -106.47331
   },
   {
     "marca": "PEMEX",
     "direccion": "5 de Mayo y Tlaxcala, Col. Hidalgo",
     "lat": 31.744156,
     "lng": -106.47331
   },
   {
     "marca": "BP",
     "direccion": "Boulevard Plinta 397 Valle Dorado, C.P. 22890, Ensenada, Baja California, México.",
     "lat": 31.837484,
     "lng": -116.60382
   },
   {
     "marca": "BP",
     "direccion": "Carretera Transpeninsular Ensenada-La Paz 6531 Chapultepec II Poligono III C.P. 22785 Ensenada, Baja California.",
     "lat": 31.844288,
     "lng": -116.614685
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Eusebio kino # 80",
     "lat": 31.855343,
     "lng": -112.85484
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Argentina # 28 y Calle Tercera, Col. Est. Coahuila",
     "lat": 32.199142,
     "lng": -114.99949
   },
   {
     "marca": "BP",
     "direccion": "Boulevard Benito Juarez Sur 16804 Fraccionamiento Cantamar C.P. 22710, Playas de Rosarito, Baja California, México.",
     "lat": 32.22714,
     "lng": -116.92277
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. # 23, Sánchez Taboada, Desarrollo Urbano Ex-Ejido Orizaba 1, 21700 Mexicali, B.C.",
     "lat": 32.357063,
     "lng": -115.19176
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Blvd. # 23, Sánchez Taboada, Desarrollo Urbano Ex-Ejido Orizaba 1, 21700 Mexicali, B.C.",
     "lat": 32.357063,
     "lng": -115.19176
   },
   {
     "marca": "BP",
     "direccion": "Carretera Libre Tijuana-Ensenada 501 Independencia C.P. 22705 Playas de Rosarito, Baja California, México.",
     "lat": 32.399895,
     "lng": -117.05262
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Km 6 ejido nuevo león s/n ejido saltillo",
     "lat": 32.421814,
     "lng": -115.12898
   },
   {
     "marca": "CHEVRON",
     "direccion": "Avenida del Roble No. 14058",
     "lat": 32.43441,
     "lng": -116953
   },
   {
     "marca": "GASMART",
     "direccion": "Carretera Federal No. 2, Km. 183.5 SN Cuauhtémoc, Cuauhtémoc, 83400 San Luis RC, Son.",
     "lat": 32.435097,
     "lng": -114.623856
   },
   {
     "marca": "BP",
     "direccion": "Avenida Tlaxcala Y Calle 34 3308 Campestre C.P. 83499 San Luis Río Colorado, Sonora, México.",
     "lat": 32.446514,
     "lng": -114.750824
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.25 Carr. Tijuana-Tecate No.12300, Col. Fracc. El Florido",
     "lat": 32.456306,
     "lng": -116.826256
   },
   {
     "marca": "PEMEX",
     "direccion": "Av. Revolucion y Calle 34 # 3401, Col. Burocratas",
     "lat": 32.46253,
     "lng": -114.74199
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Maclovio Rojas, 22254 Tijuana, B.C.",
     "lat": 32.467224,
     "lng": -116.807625
   },
   {
     "marca": "GASMART",
     "direccion": "Av Alvaro Obregon & Calle 26, Burócrata, 83450, Colonia Burocrata, Burócrata, 83450 San Luis Río Colorado, Son.",
     "lat": 32.46776,
     "lng": -114.74593
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Vía rápida poniente # 16995 méxico lindo",
     "lat": 32.46852,
     "lng": -116.92552
   },
   {
     "marca": "BP",
     "direccion": "Calzada Constitución 418 La Mesa C.P. 83420 San Luis Río Colorado, Sonora, México.",
     "lat": 32.468845,
     "lng": -114.79781
   },
   {
     "marca": "CHEVRON",
     "direccion": "Cañadas del Florido 30 No 23460",
     "lat": 32.4689,
     "lng": -116.84603
   },
   {
     "marca": "PEMEX",
     "direccion": "Lore Noroeste Manz.1, Col. Ejido Michoacan de Ocampo",
     "lat": 32.47156,
     "lng": -115.31059
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Av Alvaro Obregon & Calle 26, Burócrata, 83450, Colonia Burocrata, Burócrata, 83450 San Luis Río Colorado, Son.",
     "lat": 32.473846,
     "lng": -114.75172
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Av de los Insurgentes 1910, Libramiento, 22225 Tijuana, B.C.",
     "lat": 32.47639,
     "lng": -116.92348
   },
   {
     "marca": "BP",
     "direccion": "San Luis Río Colorado Obregón y Calle 16 S/N, Ganadera, C.P. 83400 San Luis Río Colorado, Sonora México.",
     "lat": 32.477978,
     "lng": -114.76451
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. Gustavo Diaz Ordaz 3153, Paseo Los Reyes, 22650 Tijuana, B.C.",
     "lat": 32.48,
     "lng": -116.9393
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calle Sonora 26, Francisco Villa 2da Secc, Tijuana, B.C.",
     "lat": 32.480896,
     "lng": -116.84917
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Matamoros 9683, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22206 Tijuana, B.C.",
     "lat": 32.482204,
     "lng": -116.88183
   },
   {
     "marca": "BP",
     "direccion": "Ocampo 6040 Zona Centro C.P. 22000 Tijuana, Baja California, México.",
     "lat": 32.483475,
     "lng": -117.02199
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Hidalgo, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22689 Tijuana, B.C.",
     "lat": 32.48354,
     "lng": -116.87252
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Calle Camino Tulum 22086, Mariano Matamoros, 22234 Tijuana, B.C.",
     "lat": 32.486576,
     "lng": -116.88321
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Av Flores Magón 6980, El Jibarito, 22606 Tijuana, B.C.",
     "lat": 32.486965,
     "lng": -117.06172
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Tijuana-Ensenada # 10290, Col. Tejamen",
     "lat": 32.49097,
     "lng": -117.014725
   },
   {
     "marca": "CHEVRON",
     "direccion": "Boulevard Manuel J. Clouthier No. 18378",
     "lat": 32.49483,
     "lng": -116924
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Km 144.000 de la, Tecate - Tijuana, Rancho El Gandl, 21400 Tecate, B.C.",
     "lat": 32.499516,
     "lng": -116.71815
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Avenida tecolote #18603 col. Ampliacion guaycura 22216",
     "lat": 32.499542,
     "lng": -116.919075
   },
   {
     "marca": "CHEVRON",
     "direccion": "Circuito Loma Dorada No. 19161",
     "lat": 32.49984,
     "lng": -116909
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Ruta Matamoros 9683, Matamoros Norte-Centro-Sur, Mariano Matamoros, 22206 Tijuana, B.C.",
     "lat": 32.500786,
     "lng": -116.8865
   },
   {
     "marca": "CHEVRON",
     "direccion": "Boulevard Insurgentes No. 16500",
     "lat": 32.50465,
     "lng": -116952
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Aranjuez # 7576, fracc. Villa fontana deleg. La presa  ",
     "lat": 32.50519,
     "lng": -116.866295
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Nogal 3478, El Cortez, 22600 Tijuana, B.C.",
     "lat": 32.505947,
     "lng": -117.06361
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Periférico y o Libramiento Sur, El Cortez, 22600 Tijuana, B.C.",
     "lat": 32.508343,
     "lng": -117.06655
   },
   {
     "marca": "GASMART",
     "direccion": "Blvd. Cuauhtemoc Sur 3658, Madero Sur, 22045 Tijuana, B.C.",
     "lat": 32.510284,
     "lng": -117.022705
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. Lazaro Cardenas # 3520, Col. Alamar la Mesa",
     "lat": 32.513,
     "lng": -116.96144
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Paseo del campo no. 5782 col. Villa del campo",
     "lat": 32.513073,
     "lng": -116.73562
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Blvd. Cucapah #21791, Granjas Fam., Lomas del Matamoros, 22204 Tijuana, B.C.",
     "lat": 32.513363,
     "lng": -116.879715
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Blvd Paseo del Alamo, Playas, Costa de Oro, 22200 Tijuana, B.C.",
     "lat": 32.51353,
     "lng": -117.12021
   },
   {
     "marca": "APPRO",
     "direccion": "BLVD. DE LAS AMERICAS #2560 COL. BUENA VISTA C.P.22414 TIJUANA, BAJA CALIFORNIA ",
     "lat": 32.51379,
     "lng": -116.987206
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Rampa de bajada central camionera",
     "lat": 32.518375,
     "lng": -116.963196
   },
   {
     "marca": "GASMART",
     "direccion": "Independencia 7371, Independencia, 22055 Tijuana, B.C.",
     "lat": 32.52279,
     "lng": -117.04551
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calz del Tecnológico 13277, Tomas Aquino, 22414 Tijuana, B.C.",
     "lat": 32.528522,
     "lng": -116.98468
   },
   {
     "marca": "BP",
     "direccion": "Calzada Tecnológico 14501, Otay universidad, C.P. 22150, Tijuana, Baja California, México.",
     "lat": 32.531395,
     "lng": -116.96093
   },
   {
     "marca": "BP",
     "direccion": "Libramiento Playas De Tijuana 2916, El Mirador, C.P.22204, Tijuana, Baja California, México.",
     "lat": 32.536198,
     "lng": -117.09616
   },
   {
     "marca": "CHEVRON",
     "direccion": "Calle 4ta. Sur No. 902",
     "lat": 32.53723,
     "lng": -116923
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera libre a tecate km 109 rancho loma tova",
     "lat": 32.54079,
     "lng": -116.41687
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. de las Bellas Artes 17615, Garita de Otay, 22430 Tijuana, B.C.",
     "lat": 32.54361,
     "lng": -116.94199
   },
   {
     "marca": "APPRO",
     "direccion": "AV. JOSÉ LOPEZ PORTILLO PONIENTE #410 COL. NUEVA TIJUANA C.P. 22435. TIJUANA, BAJA CALIFORNIA",
     "lat": 32.543873,
     "lng": -116.93081
   },
   {
     "marca": "GASMART",
     "direccion": "Aeropuerto, 22435 Tijuana, B.C.",
     "lat": 32.546974,
     "lng": -116.97169
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Aeropuerto, 22435 Tijuana, B.C.",
     "lat": 32.546974,
     "lng": -116.97169
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Carretera a san luis río colorado km. 26.5 ejido sinaloa",
     "lat": 32.553192,
     "lng": -115.25448
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Blvd. Benito juarez no. 800, colonia el encanto norte c.p. 21447",
     "lat": 32.56167,
     "lng": -116.6542
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Paseo José María Morelos y Pavón, 21400 Tecate, B.C.",
     "lat": 32.56574,
     "lng": -116.58744
   },
   {
     "marca": "PEMEX",
     "direccion": "Autopista Mexicali-Tijuana,Tramo Centinela-Rumoros Km. 42.500, Col. ",
     "lat": 32.56707,
     "lng": -115.9441
   },
   {
     "marca": "PEMEX",
     "direccion": "Carr.Vecinal a Algodones, Col. Poblado Benito Juarez",
     "lat": 32.56931,
     "lng": -114.99922
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "3598 Calz. Gustavo Vildósola, Mexicali, Baja California",
     "lat": 32.58332,
     "lng": -115.37711
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calz Anáhuac 2175, Quinta del Rey, 21355 Mexicali, B.C.",
     "lat": 32.58471,
     "lng": -115.47293
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Carretera Tijuana-Mexicali No. Kilómetro 4.5, Libertad, 21324 Mexicali, B.C.",
     "lat": 32.59267,
     "lng": -115.557396
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calz Anáhuac 1199, Casa Magna, Villa Residencial Casa Magna, 21235 Mexicali, B.C.",
     "lat": 32.5964,
     "lng": -115.47759
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Calzada Manuel Gómez Morín, Mexicali, B.C.",
     "lat": 32.59855,
     "lng": -115.461205
   },
   {
     "marca": "CHEVRON",
     "direccion": "Carretera a San Felipe No. 199",
     "lat": 32.60459,
     "lng": -115436
   },
   {
     "marca": "PEMEX",
     "direccion": "Km.59.5 Carr. Santa Rosa -Algodones, Col. Ej Torreon",
     "lat": 32.60688,
     "lng": -114.92889
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Calz Anáhuac 398, Villa del Rey Tercera Etapa, 21354 Mexicali, B.C.",
     "lat": 32.609978,
     "lng": -115.46041
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calzada anahuac # 2101 conjunto urbano esperanza 21350",
     "lat": 32.612057,
     "lng": -115.479004
   },
   {
     "marca": "BP",
     "direccion": "Calzada Rotario Internacional 2998 Diez División Dos C.P. 21397, Mexicali, Baja California, México.",
     "lat": 32.61383,
     "lng": -115.38415
   },
   {
     "marca": "RENDICHICAS",
     "direccion": "Blvd. Lazaro Cardenas 1201, Col. Esperanza Agrícola, Río Nuevo, 21140 Mexicali, B.C.",
     "lat": 32.614655,
     "lng": -115.44503
   },
   {
     "marca": "GASMART",
     "direccion": "Blvrd Islas Agrarias 2957, Plutarco Elías Calles, 21376 Mexicali, B.C.",
     "lat": 32.614803,
     "lng": -115.38771
   },
   {
     "marca": "PEMEX",
     "direccion": "Calz. Benito Juarez Num. 2260, Col. Ex-Ejido Coahuila",
     "lat": 32.621185,
     "lng": -115.4428
   },
   {
     "marca": "PEMEX",
     "direccion": "Guatemala No, 900, Col. Cd, Morelos Valle",
     "lat": 32.63555,
     "lng": -114.85038
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Ave. Guatemala #900 entre ave. López rayón y calle méxico 21960",
     "lat": 32.635967,
     "lng": -114.85031
   },
   {
     "marca": "BP",
     "direccion": "Calz. Independencia y Calle Alamo 884 Centro Cívico C.P. 2109, Mexicali, Baja California, México.  ",
     "lat": 32.637924,
     "lng": -115.48563
   },
   {
     "marca": "EL REY GASOLINERAS",
     "direccion": "Aeropuerto, Carretera de Mexicali Km 1, Fraccionamiento Saturno, 21230 Mexicali, B.C.",
     "lat": 32.652863,
     "lng": -115.36439
   },
   {
     "marca": "BP",
     "direccion": "Calzada Justo Sierra 700 Burócrata C.P. 21020, Mexicali, Baja California, México.",
     "lat": 32.653053,
     "lng": -115.45502
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Calle Rio Presidio 1299, Colonia Santa María, Sta María, 21240 Mexicali,, B.C., M, Sta María, 21240 Mexicali, B.C.",
     "lat": 32.65708,
     "lng": -115.42686
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Calzada de las americas #1194, esquina juan caballero col. San gabriel, cp 21210",
     "lat": 32.662285,
     "lng": -115.42652
   },
   {
     "marca": "GASMART",
     "direccion": "Río Fuerte No 1887, Cuauhtemoc Norte, Cuauhtémoc Nte, 21200 Mexicali, B.C.",
     "lat": 32.663208,
     "lng": -115.4423
   },
   {
     "marca": "SMARTGAS",
     "direccion": "Río Fuerte No 1887, Cuauhtemoc Norte, Cuauhtémoc Nte, 21200 Mexicali, B.C.",
     "lat": 32.663208,
     "lng": -115.4423
   },
   {
     "marca": "GRUPO ECO",
     "direccion": "Boulevard forjadores, no. 3506, colonia santa rosa, c.p. 23400",
     "lat": 2308.8745,
     "lng": -109.71163
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Pachuca-Huejutla Km 25.5, Col. Santo Tomas de Allende",
     "lat": 20222,
     "lng": -98.6328
   },
   {
     "marca": "PEMEX",
     "direccion": "Carrt. Federal Pachuca-Huejutla Km 49+050, Col. S/C",
     "lat": 20402,
     "lng": -98.7149
   },
   {
     "marca": "HIDROSINA",
     "direccion": "Héroes Colegio Militar",
     "lat": 24166,
     "lng": -110.30066
   },
   {
     "marca": "OXXO GAS",
     "direccion": "AV. CUAUHTEMOC # 1280 RESIDENCIAL CUAUHTEMOC 66360",
     "lat": 25685,
     "lng": -100.44334
   },
   {
     "marca": "OXXO GAS",
     "direccion": "Av.A.Ruiz Cortinez No.3505,Mitras Norte,Monterrey,Nuevo Leon",
     "lat": 25705,
     "lng": -100.34805
   },
   {
     "marca": "PEMEX",
     "direccion": "Camino Real S/N, Col. Palo Verde",
     "lat": 25843,
     "lng": -97.45779
   }
 ] ;


var newGasArray = [];
var newGasArrayErrorCre = []; 
var newGasArrayErrorGas = [];
const main_url = "https://raw.githubusercontent.com/cesarcano/tests/master/cre_error.json";

$(document).ready(function () {
   $.ajax({
      type: "GET",
      url: main_url,
      dataType: "JSON",
      success: function (response) {
        creArray = response;
        for (let i = 0; i < creArray.length; i++) {
         //console.log(i);
         for (let j = 0; j < gasolinerasArray.length; j++) {     
           let creElement = creArray[i];
           let gasElemet = gasolinerasArray[j];
           
             if (compare(creElement, gasElemet)) {
               //setProtoGas(creArray[i], gasolinerasArray[j]);
               let protoGas = {};
               protoGas.marca = gasElemet.marca;
               protoGas.actualizacion = Date.now();
               protoGas.direccion = creElement.direccion;
               protoGas.lat = gasElemet.lat;
               protoGas.lng = gasElemet.lng;
               protoGas.nombre = creElement.nombre;
               protoGas.cre_id = creElement.cre_id
               // Push a newGasArray
               newGasArray.push(protoGas);
     
               mSplice(i,j);
             } 
         }
       }
       imprimir();
      }
    }); 
  
});

function compare(creElement, gasElement) {
  //console.log(creElement.lat + " | " + creElement.lng + " | " + gasElement.lat + " | " + gasElement.lng);
  
  //console.log(creElement);
  //console.log(gasElement);
  if (compLatLng(creElement.lat, creElement.lng, gasElement.lat, gasElement.lng)) {  
    if (compDireccion(creElement.direccion, gasElement.direccion)) {
      return true;
    }
  }
  return false;
}
/**
 *  Coordenadas iguales o está muy cerca
*/
function compLatLng(creLat, creLng, gLat, gLng) {  
  //console.log(creLat +" | " + creLng +" | " + gLat +" | " + gLng);
  let distancia = getDistancia(creLat, creLng, gLat, gLng);
  let distance = 500;
  //if (((Math.trunc(gLat * 100) / 100) === (Math.trunc(creLat * 100) / 100)) 
  //&&  ((Math.trunc(gLng * 100) / 100) === (Math.trunc(creLng * 100) / 100))) {
    if ((distancia <= distance)) {
       return true;
    } 
  //} 
  return false;
}
/**
 * Comparar dirección
*/
function compDireccion(main_direccion, direccion) {
  // descompone las palabras de direccion en
  let palabras2 = main_direccion.split(" ");
  let palabras1 = direccion.split(" ");
  let cont = 0;
  palabras2.forEach(word1 => {
    palabras1.forEach(word2 => {
      if (word1.toLowerCase() === word2.toLowerCase()) {
        cont += 1;
      }
    });
  });
  if (cont > 0) {
    return true; 
  }
  return false;
}

/**
 * GET DISTANCIA
 */
function getDistancia(lat1,lon1,lat2,lon2) {
  rad = function(x) {return x * Math.PI/180;}
  var R = 6378137; //Radio de la tierra en metros
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  
  return parseInt(d); 
}
/**
 * PEGAR EN TEXTAREA
 */
function imprimir() {
  // Borrar textarea
  $("#textarea").val("");
  $("#textarea1").val("");
  $("#textarea2").val("");
  // imprimir newGasArea
  $("#textarea").val(JSON.stringify(newGasArray));
  $("#textarea1").val(JSON.stringify(creArray));
  $("#textarea2").val(JSON.stringify(gasolinerasArray));
}

function mSplice(gas_index, cre_index) {
  creArray.splice(gas_index, 1);
  gasolinerasArray.splice(cre_index, 1);
}