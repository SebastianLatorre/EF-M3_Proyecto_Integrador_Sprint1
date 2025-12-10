const recetas = [
    {
        id: '52930',
        nombre: 'Pastel Chino',
        categoria: 'Carne de Res',
        area: 'Canadiense',
        ingredientes: [
            '4 tazas de Papas',
            '60ml de Mantequilla',
            '½ taza de Leche',
            '450g de Carne Molida',
            '1 Cebolla picada finamente',
            '500ml de Maíz Cremoso',
            'Al gusto Pimentón',
            'Al gusto Perejil',
            'Pizca de Sal',
            'Pizca de Pimienta',
        ],
        instrucciones:
            'En una olla grande con agua salada, cocine las papas hasta que estén muy tiernas. Escurra.Con un prensapapas, triture las papas con al menos 30 ml (2 cucharadas) de mantequilla. Con una batidora eléctrica, haga puré con la leche. Sazone con sal y pimienta. Reserve.Con la rejilla en la posición central, precaliente el horno a 190 °C (375 °F).En una sartén grande, dore la cebolla en la mantequilla restante. Agregue la carne y cocine hasta que esté dorada. Sazone con sal y pimienta. Retire del fuego.Presione ligeramente la carne en el fondo de un molde cuadrado de 20 cm. Cubra con el maíz y el puré de papas. Espolvoree con pimentón y perejil.Hornee durante unos 30 minutos. Termine de cocinar bajo el asador. Deje enfriar durante 10 minutos.',
        imagen: 'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg',
    },
    {
        id: '53093',
        nombre: 'Espaguetis Sirios',
        categoria: 'Pasta',
        area: 'Siria',
        ingredientes: ['450g de Espaguetis', '225g de Salsa de Tomate', '170g de Puré de Tomate', '1 cucharadita de Canela', '60ml de Aceite Vegetal', 'Pizca de Sal', 'Pizca de Pimienta'],
        instrucciones:
            'Precaliente el horno a 175 °C. Engrase un molde de 23x33 cm.Lleve a ebullición una olla grande con agua ligeramente salada. Agregue los espaguetis y cocine durante 8 a 10 minutos o hasta que estén al dente; escurra y mezcle con la salsa de tomate, el puré de tomate, la canela, el aceite, la sal y la pimienta. Transfiera al molde preparado.Hornee en el horno precalentado durante 1 hora, o hasta que la parte superior esté crujiente.',
        imagen: 'https://www.themealdb.com/images/media/meals/5fu4ew1760524857.jpg',
    },
    {
        id: '53183',
        nombre: 'Albóndigas Españolas con Almejas, Chorizo y Calamar',
        categoria: 'Varios',
        area: 'España',
        ingredientes: [
            '25g de Mantequilla',
            '3 Chalotas cortadas en cubitos',
            '1 cucharadita de Pimentón Ahumado',
            '2 dientes de Ajo picados',
            '1 diente de Ajo picado finamente',
            '2 cucharadas de Jerez Seco',
            '50g de Pan Rallado',
            '300g de Carne de Cerdo',
            '1 Yema de Huevo',
            '50ml de Aceite de Oliva',
            '300g de Chorizo',
            '300g de Calamar',
            '100ml de Vino Blanco',
            '300g de Tomate',
            '400g de Almejas',
            'Puñado de Perejil',
            'Chorrito de Aceite de Oliva Virgen Extra',
        ],
        instrucciones:
            'Paso 1Derrita la mantequilla en una cacerola de fondo grueso, luego ablande las chalotas durante 5 minutos. Agregue el pimentón y el ajo triturado y cocine durante 1 minuto hasta que el pimentón se vuelva fragante. Agregue el jerez, luego vierta todo en un tazón con el pan rallado. Sazone y deje enfriar.Paso 2Agregue la carne de cerdo molida y la yema de huevo al tazón, luego bata bien. Forme 18 albóndigas pequeñas. Limpie la sartén, póngala a fuego medio-alto, luego agregue el aceite. Fría las albóndigas durante 5 minutos, solo para darles color, luego levántelas en un plato, pero mantenga el aceite en la sartén. Saltee el chorizo con el ajo en rodajas. Agregue el calamar y fría para darle un poco de color. Ahora agregue el vino blanco y lleve a ebullición, raspando el fondo. Agregue los tomates triturados, lleve a ebullición, luego agregue las albóndigas y las almejas. Cubra y cocine durante 5 minutos hasta que las conchas de las almejas se abran. Deseche las que permanezcan cerradas. Espolvoree con el perejil picado, rocíe con el aceite virgen extra, luego sirva con pan crujiente.',
        imagen: 'https://www.themealdb.com/images/media/meals/2wt8721763334199.jpg',
    },
    {
        id: '53169',
        nombre: 'Ajo Blanco',
        categoria: 'Entrada',
        area: 'España',
        ingredientes: ['150g de Pan Blanco', '200g de Almendras', '50ml de Aceite de Oliva Virgen Extra', '1 Diente de Ajo', '1½ cucharada de Vinagre de Vino Tinto'],
        instrucciones:
            'Paso 1Coloque el pan en un tazón y vierta 350ml de agua. Deje remojar durante 10 minutos.Paso 2Licúe los ingredientes junto con 350ml de agua y 1 cucharadita de sal.Paso 3Deje enfriar la sopa en el refrigerador durante 1 hora aproximadamente, luego sirva con un chorrito de aceite y un poco de pimienta negra.',
        imagen: 'https://www.themealdb.com/images/media/meals/5jdtie1763289302.jpg',
    },
    {
        id: '52970',
        nombre: 'Pastel de Naranja Tunecino',
        categoria: 'Postre',
        area: 'Túnez',
        ingredientes: [
            '1 Naranja grande',
            '300g de Azúcar Refinada',
            '75ml de Aceite de Oliva',
            '280g de Harina',
            '1 cucharada de Polvo de Hornear',
            '4 Huevos grandes',
            '2 cucharaditas de Extracto de Vainilla',
        ],
        instrucciones:
            'Precaliente el horno a 190 °C / Gas 5. Engrase un molde desmontable redondo de 23 cm.Corte las partes duras de la parte superior e inferior de la naranja. Corte la naranja en rodajas y retire todas las semillas. Haga puré la naranja con su cáscara en un procesador de alimentos. Agregue un tercio del azúcar y el aceite de oliva y continúe mezclando hasta que esté bien combinado.Tamice la harina y el polvo de hornear juntos.Bata los huevos y el azúcar restante con una batidora eléctrica durante al menos cinco minutos hasta que estén muy esponjosos. Incorpore la mitad de la mezcla de harina, luego la naranja y la vainilla, luego incorpore la harina restante. Mezcle bien pero no durante demasiado tiempo.Vierta la mezcla del pastel en el molde preparado y alise. Hornee en el horno precalentado durante 20 minutos. Reduzca la temperatura del horno a 160 °C / Gas 2 y hornee nuevamente durante 30 minutos. Hornee hasta que el pastel esté dorado y un palillo salga limpio. Enfríe en una rejilla.',
        imagen: 'https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg',
    },
    {
        id: '52811',
        nombre: 'Ribollita',
        categoria: 'Vegetariano',
        area: 'Italia',
        ingredientes: [
            '5 cucharadas de Aceite de Oliva',
            '1 Cebolla picada',
            '1 Zanahoria picada',
            '1 tallo de Apio picado',
            '1 cucharada de Ajo picado',
            '2 tazas de Frijoles Cannellini',
            '1 lata de Tomates',
            '4 tazas de Agua',
            '1 ramita fresca de Romero',
            '1 ramita fresca de Tomillo',
            '450g de Col Rizada picada',
            '4 rebanadas gruesas de Pan Integral',
            '1 Cebolla Roja en rodajas finas',
            '½ taza de Parmesano recién rallado',
        ],
        instrucciones:
            'Ponga 2 cucharadas de aceite en una olla grande a fuego medio. Cuando esté caliente, agregue la cebolla, la zanahoria, el apio y el ajo; espolvoree con sal y pimienta y cocine, revolviendo ocasionalmente, hasta que las verduras estén blandas, de 5 a 10 minutos.Caliente el horno a 260 grados. Escurra los frijoles; si están enlatados, enjuáguelos también. Agréguelos a la olla junto con los tomates y sus jugos y el caldo, el romero y el tomillo. Lleve a ebullición, luego reduzca el fuego para que la sopa burbujee constantemente; cubra y cocine, revolviendo una o dos veces para romper los tomates, hasta que los sabores se mezclen, de 15 a 20 minutos.Saque y deseche los tallos de romero y tomillo, si lo desea, y agregue la col rizada. Pruebe y ajuste el condimento. Coloque rebanadas de pan encima del guiso para que cubran la parte superior y se superpongan lo menos posible. Esparza rodajas de cebolla roja por encima, rocíe con las 3 cucharadas de aceite restantes y espolvoree con parmesano.Ponga la olla en el horno y hornee hasta que el pan, las cebollas y el queso estén dorados y crujientes, de 10 a 15 minutos. (Si su olla cabe debajo del asador, también puede dorar la parte superior allí). Divida la sopa y el pan entre 4 tazones y sirva.',
        imagen: 'https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg',
    },
    {
        id: '53205',
        nombre: 'Curry Tailandés de Langostinos',
        categoria: 'Mariscos',
        area: 'Tailandia',
        ingredientes: [
            '1 cucharada de Aceite Vegetal',
            '1 Cebolla picada',
            '1 cucharadita de Jengibre',
            '2 cucharaditas de Pasta de Curry Rojo Tailandés',
            '400g de Tomates Enlatados',
            '50g de Crema de Coco',
            '400g de Langostinos Crudos Congelados',
            'Cilantro Picado',
        ],
        instrucciones:
            'Paso 1Caliente el aceite en una cacerola mediana. Agregue la cebolla y el jengibre, luego cocine durante unos minutos hasta que se ablanden. Agregue la pasta de curry, luego cocine durante 1 minuto más. Vierta los tomates picados y la crema de coco. Lleve a ebullición, luego deje hervir a fuego lento durante 5 minutos, agregando un poco de agua hirviendo si la mezcla se espesa demasiado.Paso 2Agregue los langostinos, luego cocine durante 5-10 minutos más, dependiendo de qué tan grandes sean. Sirva junto con arroz blanco y espolvoree con un poco de cilantro picado, si lo desea.',
        imagen: 'https://www.themealdb.com/images/media/meals/qqlwv91763501559.jpg',
    },
    {
        id: '53320',
        nombre: 'Alfajores de Chocolate',
        categoria: 'Postre',
        area: 'Uruguay',
        ingredientes: [
            '150g de Mantequilla',
            '70g de Azúcar',
            '1 Huevo',
            '25g de Miel',
            '175g de Harina',
            '80g de Maicena',
            '30g de Cacao Sin Azúcar',
            '1 cucharadita de Polvo de Hornear',
            '1 cucharadita de Bicarbonato',
            '400g de Dulce de Leche',
            '500g de Chocolate con Leche',
            '100g de Mantequilla',
            'Ralladura de 1 Naranja',
        ],
        instrucciones:
            'Para las galletas, bata la mantequilla con el azúcar durante unos minutos. Luego agregue el huevo y la miel y mezcle bien. Agregue la harina, la maicena, el cacao, el bicarbonato y el polvo de hornear y mezcle hasta obtener una masa. Envuelva en film transparente y refrigere durante al menos media hora o toda la noche.2Forre dos bandejas para hornear con papel pergamino, precaliente el horno a 200 grados Celsius.3Divida la masa en dos partes, vuelva a poner una parte en el refrigerador antes de usar. Estire la segunda parte a unos 2 milímetros y corte galletas redondas de 5-6 centímetros de diámetro. Esto se puede hacer con un cortador de galletas o un vaso. Debería obtener 30 galletas en total o incluso más, yo obtengo alrededor de 40. Hornee una bandeja a la vez durante unos 8-10 minutos. Deje enfriar las galletas.4Para el relleno, busque dos galletas del mismo tamaño y coloque aproximadamente una cucharadita de dulce de leche en la parte inferior antes de unirlas.5Pique el chocolate semi-amargo y derrita con mantequilla y ralladura de naranja a fuego lento. Sumerja cada galleta sándwich en el chocolate y deje enfriar sobre papel pergamino antes de servir.',
        imagen: 'https://www.themealdb.com/images/media/meals/k9o0xr1764373018.jpg',
    },
    {
        id: '53327',
        nombre: 'Pollo Venezolano con Coco',
        categoria: 'Pollo',
        area: 'Venezuela',
        ingredientes: [
            '2 Pechugas de Pollo',
            '2 Cebollas picadas',
            '1 diente de Ajo pelado y triturado',
            '4 Hojas de Laurel',
            'Pizca de Pimienta Negra',
            'Pizca de Cúrcuma',
            'Pizca de Comino',
            'Pizca de Sal',
            '1 cucharada de Azúcar',
            '3 Tomates',
            '1 cucharada de Pasta de Jengibre',
            '80ml de Aceite de Oliva',
            '1 Lata de Leche de Coco',
            '120ml de Agua',
        ],
        instrucciones:
            'Corte el pollo en trozos del tamaño de un bocado. Pele y corte las cebollas, pique el ajo.Reúna el resto de los ingredientes y estará listo para comenzar a cocinar.Preparar el PlatoCaliente una sartén a fuego medio. Agregue el aceite y cuando esté caliente, saltee la cebolla hasta que esté transparente. Retire de la sartén y transfiera a una licuadora o procesador de alimentos.Agregue los tomates, el ajo, la cúrcuma, el comino, el azúcar, la pasta de jengibre, la leche de coco, el agua y licúe hasta que quede suave.En la misma sartén en la que cocinó la cebolla, agregue el pollo y dore todos los lados. Esto debería tomar unos 3 minutos.Agregue los ingredientes de la licuadora y las hojas de laurel a la sartén, lleve a ebullición y cocine hasta que el pollo esté blanco por dentro y el líquido esté cremoso. (15 a 20 minutos)Retire las hojas de laurel y sirva con arroz blanco.',
        imagen: 'https://www.themealdb.com/images/media/meals/z2sw3o1764378271.jpg',
    },
    {
        id: '53043',
        nombre: 'Fofos de Pescado',
        categoria: 'Mariscos',
        area: 'Portugal',
        ingredientes: [
            '600g de Abadejo',
            '300g de Papas',
            '1 Chile Verde picado',
            '3 cucharadas de Cilantro',
            '1 cucharadita de Semillas de Comino',
            '½ cucharadita de Pimienta',
            '3 dientes de Ajo',
            '2 trozos de Jengibre',
            '2 cucharadas de Harina',
            '3 Huevos',
            '75g de Pan Rallado',
            'Para freír Aceite Vegetal',
        ],
        instrucciones:
            'PASO 1Coloque el pescado en una cacerola con tapa y vierta suficiente agua para cubrirlo. Lleve a ebullición y escalfe suavemente durante 10 minutos a fuego lento con la tapa puesta. Escurra y desmenuze el pescado.PASO 2Coloque el pescado, la papa, el chile verde, el cilantro, el comino, la pimienta negra, el ajo y el jengibre en un tazón grande. Sazone, agregue la harina de arroz, mezcle bien y rompa 1 huevo. Revuelva la mezcla y divida en 15, luego forme pequeños troncos. Rompa los huevos restantes en un tazón y bata ligeramente. Coloque el pan rallado en otro tazón. Sumerja cada fofo en el huevo batido seguido de la mezcla de pan rallado. Refrigere durante 20 minutos.PASO 3Caliente 1 cm de aceite en una sartén grande a fuego medio. Fría los fofos en tandas durante 2 minutos de cada lado, volteando suavemente para obtener un color dorado uniforme en todas partes. Escurra sobre papel de cocina y repita con los fofos restantes.PASO 4Para la ensalada de cebolla, mezcle la cebolla, el cilantro y el jugo de limón con una pizca de sal. Sirva con los fofos y chutney de mango.',
        imagen: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
    },
    {
        id: '53082',
        nombre: 'Fresas Romanoff',
        categoria: 'Postre',
        area: 'Rusia',
        ingredientes: ['950ml de Fresas', '4 cucharadas de Azúcar', '4 cucharadas de Grand Marnier', '240ml de Crema', '60ml de Crema Agria'],
        instrucciones:
            'En un tazón mediano, combine las fresas sin tallo y cortadas en cuartos, 4 cucharadas de azúcar y 4 cucharadas de licor, revuelva para combinar, luego cubra y refrigere al menos 1 hora y hasta 2 horas, revolviendo una o dos veces.Justo antes de servir, en un tazón grande para mezclar, combine 1 taza de crema espesa fría y 1/4 de taza de azúcar en polvo, y bata con una batidora eléctrica hasta que se formen picos rígidos. Usando una espátula, incorpore 1/4 de taza de crema agria hasta que esté bien mezclado.Para servir, revuelva las fresas y luego divida entre 6 vasos o tazones para servir. Puede verter un poco de jarabe sobre las bayas si lo desea. También puede usar este jarabe para empapar un pastel. Coloque la crema sobre las fresas, dividiéndola uniformemente. También puede usar una cuchara para helado con liberación de gatillo para obtener un bonito montículo de crema. Sirva de inmediato o refrigere y disfrute dentro de las 2 horas posteriores al montaje.',
        imagen: 'https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg',
    },
    {
        id: '52841',
        nombre: 'Sopa Cremosa de Tomate',
        categoria: 'Entrada',
        area: 'Reino Unido',
        ingredientes: [
            '3 cucharadas de Aceite de Oliva',
            '2 Cebollas picadas',
            '2 tallos de Apio',
            '300g de Zanahorias',
            '500g de Papas',
            '4 Hojas de Laurel',
            '5 cucharadas de Puré de Tomate',
            '2 cucharadas de Azúcar',
            '2 cucharadas de Vinagre Blanco',
            '1½ kg de Tomates Picados',
            '500g de Passata',
            '3 Cubos de Caldo de Verduras',
            '400ml de Leche Entera',
        ],
        instrucciones:
            'Coloque el aceite, las cebollas, el apio, las zanahorias, las papas y las hojas de laurel en una cacerola grande o dos cacerolas. Fría suavemente hasta que las cebollas se ablanden, aproximadamente 10-15 minutos. Llene la tetera y hiérvala.Agregue el puré de tomate, el azúcar, el vinagre, los tomates picados y la passata, luego desmenuce los cubos de caldo. Agregue 1 litro de agua hirviendo y lleve a ebullición. Cubra y cocine a fuego lento durante 15 minutos hasta que la papa esté tierna, luego retire las hojas de laurel. Haga puré con una licuadora de mano (o vierta en una licuadora en tandas) hasta que quede muy suave. Sazone al gusto y agregue una pizca más de azúcar si es necesario. La sopa ahora se puede enfriar y refrigerar hasta por 2 días, o congelar hasta por 3 meses.Para servir, recaliente la sopa, agregando la leche; trate de no dejarla hervir. Sirva en tazones pequeños con rollos de salchicha con queso.',
        imagen: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg',
    },
    {
        id: '52813',
        nombre: 'Pollo Frito Estilo Kentucky',
        categoria: 'Pollo',
        area: 'Estados Unidos',
        ingredientes: [
            '1 Pollo entero',
            '2 litros de Aceite para freír',
            '1 Clara de Huevo',
            '360g de Harina',
            '1 cucharada de Azúcar Morena',
            '1 cucharada de Sal',
            '1 cucharada de Pimentón',
            '2 cucharaditas de Sal de Cebolla',
            '1 cucharadita de Chile en Polvo',
            '1 cucharadita de Pimienta Negra',
            '½ cucharadita de Sal de Apio',
            '½ cucharadita de Salvia',
            '½ cucharadita de Ajo en Polvo',
            '½ cucharadita de Pimienta de Jamaica',
            '½ cucharadita de Orégano',
            '½ cucharadita de Albahaca',
            '½ cucharadita de Mejorana',
        ],
        instrucciones:
            'Precaliente la freidora a 175°C. Mezcle bien todos los ingredientes de la mezcla de especias.Combine la mezcla de especias con la harina, el azúcar morena y la sal.Sumerja las piezas de pollo en la clara de huevo para cubrirlas ligeramente, luego transfiéralas a la mezcla de harina. Voltee varias veces y asegúrese de que la mezcla de harina esté bien adherida al pollo. Repita con todas las piezas de pollo.Deje reposar las piezas de pollo durante 5 minutos para que la corteza tenga la oportunidad de secarse un poco.Fría el pollo en tandas. Las pechugas y las alas deben tomar 12-14 minutos, y las piernas y los muslos necesitarán unos minutos más. Las piezas de pollo están listas cuando un termómetro de carne insertado en la parte más gruesa marca 75°C.Deje escurrir el pollo sobre algunas toallas de papel cuando salga de la freidora. Sirva caliente.',
        imagen: 'https://www.themealdb.com/images/media/meals/40r49m1763197022.jpg',
    },
    {
        id: '52987',
        nombre: 'Sándwiches de Lasaña',
        categoria: 'Pasta',
        area: 'Estados Unidos',
        ingredientes: [
            '60ml de Crema Agria',
            '2 cucharadas de Cebolla Picada',
            '½ cucharada de Orégano Seco',
            '¼ cucharadita de Sal',
            '8 rebanadas de Pan',
            '8 rebanadas de Tocino',
            '8 rebanadas de Tomate',
            '4 rebanadas de Mozzarella',
            '2½ cucharadas de Mantequilla',
        ],
        instrucciones:
            '1. En un tazón pequeño, combine los primeros cuatro ingredientes; unte sobre cuatro rebanadas de pan. Coloque capas de tocino, tomate y queso; cubra con el pan restante.2. En una sartén grande o plancha, derrita 2 cucharadas de mantequilla. Tueste los sándwiches hasta que estén ligeramente dorados por ambos lados y el queso esté derretido, agregando mantequilla si es necesario.Información Nutricional1 sándwich: 445 calorías, 24g de grasa (12g de grasa saturada), 66mg de colesterol, 1094mg de sodio, 35g de carbohidratos (3g de azúcares, 2g de fibra), 21g de proteína.',
        imagen: 'https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg',
    },
    {
        id: '52939',
        nombre: 'Callaloo Estilo Jamaicano',
        categoria: 'Varios',
        area: 'Jamaica',
        ingredientes: [
            '1 manojo de Col Rizada',
            '2 tiras de Tocino',
            '3 dientes de Ajo Picado',
            '1 Cebolla mediana',
            '½ cucharadita de Pimentón',
            '1 ramita de Tomillo',
            '1 Tomate',
            '1 Pimiento Rojo',
            '4 Plátanos',
            'Chorrito de Aceite Vegetal',
        ],
        instrucciones:
            'Corte las hojas y los tallos blandos de las ramas de col rizada, luego remoje en un tazón con agua fría durante aproximadamente 5-10 minutos o hasta que termine la preparación.Proceda a cortar las cebollas en rodajas, picar el ajo y cortar los tomates en cubitos. ReserveRetire la col rizada del agua y córtela en trozos.Coloque el tocino en una cacerola y cocine hasta que esté crujiente. Luego agregue las cebollas, el ajo, el tomillo, revuelva durante aproximadamente un minuto o másAgregue los tomates; pimiento scotch bonnet, pimentón ahumado. Saltee durante aproximadamente 2-3 minutos más.Finalmente agregue las verduras, sal, mezcle bien y cocine al vapor durante aproximadamente 6-8 minutos o hasta que las hojas estén tiernas. Agregue un poco de agua según sea necesario. Ajuste los condimentos y apague el fuego.Usando un cuchillo afilado, corte ambos extremos del plátano. Esto facilitará agarrar la piel de los plátanos. Haga una línea poco profunda a lo largo de la costura larga del plátano; pele solo tan profundo como la cáscara. Retire la cáscara del plátano tirando hacia atrás.Corte el plátano en rodajas medianas a lo largo y reserve.Cubra una sartén grande con aceite en aerosol. Rocíe la parte superior de los plátanos con una capa generosa de aceite en aerosol y espolvoree con sal y pimienta recién molida.Deje que los plátanos se "frían" a fuego medio, agitando la sartén para redistribuirlos cada pocos minutos.A medida que los plátanos se doren, continúe agregando más aceite en aerosol, sal y pimienta (si es necesario) hasta que hayan alcanzado el color y la textura deseados.Retire y sirva con col rizada',
        imagen: 'https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg',
    },
    {
        id: '53173',
        nombre: 'Gazpacho Rápido',
        categoria: 'Entrada',
        area: 'España',
        ingredientes: ['250g de Passata', '1 Pimiento Rojo picado', '1 Chile Rojo picado', '1 diente de Ajo pelado y triturado', '1 cucharadita de Vinagre de Jerez', 'Jugo de ½ Lima'],
        instrucciones:
            'Paso 1En una licuadora (o con una licuadora de mano), mezcle la passata, el pimiento rojo, el chile, el ajo, el vinagre de jerez y el jugo de lima hasta que quede suave. Sazone al gusto, luego sirva con cubitos de hielo',
        imagen: 'https://www.themealdb.com/images/media/meals/h5qmn31763304965.jpg',
    },
    {
        id: '52932',
        nombre: 'Pudín del Desempleado',
        categoria: 'Postre',
        area: 'Canadá',
        ingredientes: [
            '120ml de Mantequilla',
            '240ml de Azúcar',
            '2 Huevos',
            '1 cucharadita de Extracto de Vainilla',
            '480ml de Harina',
            '1 cucharadita de Polvo de Hornear',
            '300ml de Leche',
            '360ml de Jarabe de Arce',
            '360ml de Azúcar Morena',
            '360ml de Crema',
            '80ml de Mantequilla',
        ],
        instrucciones:
            'En un tazón grande, con una batidora eléctrica, mezcle la mantequilla y el azúcar hasta que la mezcla esté ligera.Agregue los huevos y la vainilla y mezcle.En otro tazón, mezcle la harina y el polvo de hornear.Alterne la mezcla de harina y la leche con la mezcla de mantequilla.Vierta en un molde engrasado de 33 cm por 23 cm.SALSA DE ARCE.En una cacerola grande, lleve a ebullición el jarabe, el azúcar morena, la crema y la mantequilla y revuelva constantemente.Reduzca el fuego y cocine suavemente durante 2 minutos o hasta que la salsa se haya reducido un poco.Vierta la salsa suavemente sobre el pastel.Hornee a 160°C durante unos 35 minutos o hasta que el pastel esté dorado y cuando se inserte un palillo salga limpio.',
        imagen: 'https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg',
    },
    {
        id: '53346',
        nombre: 'Helado de Grape Nut',
        categoria: 'Postre',
        area: 'Jamaica',
        ingredientes: ['480ml de Crema Espesa', '35g de Leche Condensada', '1 cucharadita de Extracto de Vainilla', '240ml de Cereal Grape Nut'],
        instrucciones:
            'En un tazón grande, use una batidora eléctrica para batir la crema espesa fría hasta que se formen picos rígidos. Incorpore suavemente la leche condensada azucarada y el extracto de vainilla hasta que estén bien combinados.Incorpore el cereal y revuelva hasta que esté distribuido uniformemente en toda la mezcla.Vierta la mezcla en un recipiente apto para congelador (como un molde para pan). Coloque film transparente encima del helado para evitar quemaduras por congelación. Cubra el recipiente y congele durante al menos 6 horas o hasta que esté sólido.Una vez congelado, deje que el helado repose a temperatura ambiente durante unos minutos para que se ablande ligeramente antes de servir.',
        imagen: 'https://www.themealdb.com/images/media/meals/1xscby1764790242.jpg',
    },
    {
        id: '53147',
        nombre: 'Arroz con Gambas y Calamar',
        categoria: 'Mariscos',
        area: 'España',
        ingredientes: [
            '24 Gambas Grandes Crudas',
            '2 cucharadas de Aceite de Oliva',
            '1 Cebolla pequeña',
            '1 Hoja de Laurel',
            '1 pizca de Azafrán',
            '450g de Arroz para Paella',
            '2 cucharaditas de Puré de Tomate',
            '200ml de Vino Blanco',
            '650ml de Caldo de Mariscos',
            '3 Calamares Medianos',
        ],
        instrucciones:
            'Paso 1Pele y quite las venas a la mayoría de las gambas (un pescadero debería poder hacer esto por usted), manteniendo algunas enteras para decorar, si lo desea. Caliente el aceite de oliva en una sartén grande o cacerola poco profunda a fuego medio-bajo y fría la cebolla durante 5 minutos hasta que se ablande. Agregue la hoja de laurel, el azafrán, el arroz y el puré de tomate, y cocine durante 1-2 minutos más, revolviendo.Paso 2Vierta el vino y deje burbujear durante 1-2 minutos, luego vierta el caldo de mariscos y 150ml de agua. Cocine durante 5 minutos, luego agregue el calamar, sazone bien y revuelva para combinar. Lleve a ebullición, luego cubra y reduzca el fuego a fuego lento suave. Cocine durante 12 minutos más, agregando un poco más de agua si la mezcla comienza a verse seca.Paso 3Destape la sartén y revuelva las gambas peladas, luego coloque las gambas enteras encima de la mezcla de arroz. Cubra nuevamente y cocine a fuego lento durante 5-6 minutos más hasta que las gambas estén rosadas y cocidas. Deje reposar durante un par de minutos antes de servir desde la sartén.',
        imagen: 'https://www.themealdb.com/images/media/meals/jc6oub1763196663.jpg',
    },
    {
        id: '53310',
        nombre: 'Jalá',
        categoria: 'Acompañamiento',
        area: 'Polonia',
        ingredientes: ['500g de Harina de Pan Fuerte', '70g de Azúcar Refinada', '10g de Levadura', '2 Huevos Batidos', '70ml de Aceite de Girasol', '1 cucharada de Semillas de Amapola'],
        instrucciones:
            'Paso 1Combine la levadura, una pizca de azúcar y un par de cucharadas de agua tibia en un tazón pequeño. Revuelva para disolver la levadura, luego deje reposar durante 10 minutos hasta que esté espumosa.Paso 2Mientras tanto, combine la harina, el azúcar restante y 2 cucharaditas de sal fina en un tazón grande. Haga un pozo en el centro, luego agregue la mitad del huevo batido, la mezcla de levadura y el aceite. Vierta 200ml de agua tibia (debe sentirse ligeramente tibia al tacto) y revuelva con una cuchara, luego mezcle usando una mano, manteniendo la otra limpia mientras junta la masa. Si hay muchos trozos muy secos, agregue gradualmente un poco de agua para juntarla; no quiere que se moje y pegue demasiado. La masa debe estar húmeda, pero no empapada.Paso 3Una vez que la masa se haya juntado, colóquela sobre una superficie ligeramente enharinada. Amase usando ambas manos durante 10 minutos hasta que esté suave y un poco elástica. Si se vuelve muy pegajosa, agregue una cantidad muy pequeña de harina, lo menos posible. Un raspador de masa es útil si la masa se pega a la superficie de trabajo. Estire los lados de la masa hacia abajo y junte para formar una bola. Engrase ligeramente un tazón, luego enrolle ligeramente la bola de masa alrededor del tazón para que esté cubierta con el aceite. Cubra con un paño de cocina limpio y deje en un lugar cálido durante 1 hora, o hasta que la masa haya duplicado su tamaño.Paso 4Forre una bandeja para hornear con papel pergamino. Voltee la masa sobre una superficie de trabajo limpia y divida en tres piezas iguales, pesando para mayor precisión, si lo desea. Enrolle cada pieza en forma de salchicha larga de aproximadamente 25 cm de largo, ahusándolas ligeramente en ambos extremos. Coloque las piezas frente a usted, paralelas entre sí con un par de centímetros entre cada una. Junte las salchichas en el extremo superior, luego tréncelas a lo largo, metiendo los extremos cuando llegue al fondo. Transfiera cuidadosamente el pan a la bandeja para hornear preparada y cubra sin apretar con un paño de cocina limpio. Deje subir hasta que esté hinchado y ondulado, aproximadamente 40 minutos.Paso 5Mientras tanto, caliente el horno a 200C/180C ventilador/gas 6. Cepille suavemente el resto del huevo batido sobre toda la jalá, metiéndolo en todas las grietas, y espolvoree con las semillas de amapola o sésamo, si las usa. Hornee en un estante medio del horno durante 25-30 minutos, hasta que el pan esté dorado por debajo y suene hueco cuando se golpee. Verifique después de unos 15 minutos; si la parte superior del pan ha comenzado a oscurecerse demasiado, cúbralo con papel de aluminio. Deje enfriar en una rejilla, luego sirva.',
        imagen: 'https://www.themealdb.com/images/media/meals/fm01ky1764366365.jpg',
    },
    {
        id: '53099',
        nombre: 'Hamburguesas Australianas',
        categoria: 'Carne de Res',
        area: 'Australia',
        ingredientes: ['500g de Carne Molida Magra', '100g de Remolacha Cocida', '2 Panes Naan pequeños', '50g de Rúcula', '4 cucharadas de Dip de Crema Agria y Cebollino'],
        instrucciones:
            'Paso 1Haga las hamburguesas: Vierta la carne en un tazón y espolvoree 1 cucharadita de sal y una buena molienda de pimienta negra. Trabaje con las manos húmedas para mezclar el condimento. Divida en cuatro con las manos y forme hamburguesas. (Se puede congelar en esta etapa.)Paso 2Organice sus ingredientes: Corte la remolacha en rodajas y divida los panes naan.Paso 3Tueste los naans: Caliente una sartén parrilla o barbacoa. Ase los naans por ambos lados hasta que estén ligeramente tostados y reserve. Agregue las hamburguesas a la parrilla o barbacoa y cocine durante 2-3 minutos, luego voltee y cocine el otro lado durante 2-3 minutos más.Paso 4Arme el plato: Coloque medio naan tostado en cada plato para servir y ponga una pila de rúcula en cada uno. Cubra con una hamburguesa, luego unas rodajas de remolacha y una cucharada de crema agria. Espolvoree con sal y pimienta negra recién molida y sirva inmediatamente con una gran ensalada verde y papas fritas. Una copa de vino tinto tampoco vendría mal.',
        imagen: 'https://www.themealdb.com/images/media/meals/44bzep1761848278.jpg',
    },
    {
        id: '52816',
        nombre: 'Berenjena Asada con Tahini, Piñones y Lentejas',
        categoria: 'Vegetariano',
        area: 'Estados Unidos',
        ingredientes: [
            '2 cucharadas de Aceite de Oliva',
            '2 Zanahorias pequeñas cortadas en trozos',
            '2 tallos pequeños de Apio',
            '1 Cebolla mediana cortada en cubitos finos',
            '6 dientes medianos de Ajo en rodajas',
            '340g de Lentejas Marrones',
            '2 Hojas de Laurel',
            '1 litro de Agua',
            'Pizca de Sal',
            '2 cucharaditas de Vinagre de Sidra de Manzana',
            'Pizca de Pimienta',
            '2 Berenjenas grandes',
            '4 ramitas de Romero',
            '60ml de Piñones',
            '2 cucharadas de Perejil',
        ],
        instrucciones:
            'Para las Lentejas: Ajuste la rejilla del horno a la posición central y precaliente el horno a 230°C para preparar el asado de berenjenas. Mientras tanto, caliente 2 cucharadas de aceite de oliva en una cacerola mediana a fuego medio hasta que brille. Agregue las zanahorias, el apio y la cebolla y cocine, revolviendo, hasta que se ablanden pero no se doren, aproximadamente 4 minutos. Agregue el ajo y cocine, revolviendo, hasta que esté fragante, aproximadamente 30 segundos. Agregue las lentejas, las hojas de laurel, el caldo o agua y una pizca de sal. Lleve a ebullición, cubra con la tapa parcialmente abierta y cocine hasta que las lentejas estén tiernas, aproximadamente 30 minutos. (Agregue agua si las lentejas no están completamente sumergidas en algún momento.) Retire la tapa, agregue el vinagre y reduzca hasta que las lentejas estén húmedas pero no caldosas. Sazone al gusto con sal y pimienta, cubra y mantenga caliente hasta que esté listo para servir.2.Para la Berenjena: Mientras se cocinan las lentejas, corte cada berenjena por la mitad. Marque la pulpa con la punta de un cuchillo mondador en un patrón de cuadrícula a intervalos de 2.5 cm. Transfiera a una bandeja para hornear forrada con papel de aluminio, con el lado cortado hacia arriba, y cepille cada mitad de berenjena con 1 cucharada de aceite, dejando que cada pincelada se absorba completamente antes de cepillar con más. Sazone con sal y pimienta. Coloque una ramita de romero encima de cada una. Transfiera al horno y ase hasta que esté completamente tierna y bien carbonizada, de 25 a 35 minutos. Retire del horno y deseche el romero.3.Para Servir: Caliente 2 cucharadas de aceite de oliva y piñones en una sartén mediana a fuego medio. Cocine, moviendo las nueces con frecuencia, hasta que estén doradas y aromáticas, aproximadamente 4 minutos. Transfiera a un tazón para detener la cocción. Mezcle la mitad del perejil y el romero en las lentejas y transfiera a una fuente para servir. Coloque las mitades de berenjena encima. Unte unas cucharadas de salsa tahini sobre cada mitad de berenjena y espolvoree con piñones. Espolvoree con el perejil y romero restantes, rocíe con aceite de oliva adicional y sirva.',
        imagen: 'https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg',
    },
    {
        id: '53215',
        nombre: 'Shakshouka',
        categoria: 'Varios',
        area: 'Arabia Saudita',
        ingredientes: ['250g de Tomate', '40ml de Aceite de Oliva Virgen Extra', '4 Huevos', '4 Dientes de Ajo en rodajas', 'Al gusto Pimienta Negra', 'Al gusto Sal'],
        instrucciones:
            '1Primero, fría la pimienta negra y el ajo en una sartén seca a fuego medio hasta que esté fragante.2Agregue una buena cantidad de aceite de oliva virgen extra e infusione durante un minuto.3Una vez que el aceite se caliente, agregue los tomates y la sal, y cubra con una tapa. Cocine a fuego lento durante 5 minutos.4Retire la tapa y aplaste los tomates. Reduzca hasta alcanzar la consistencia deseada.5Haga cráteres para los huevos y baje el fuego. Rompa cuidadosamente los huevos en los cráteres, asegurándose de que toque la sartén y no la salsa de tomate.6Cubra los huevos y déjelos durante 5 minutos sin levantar la tapa.7Retire del fuego y deje que el calor residual cocine los huevos al vapor durante 1-2 minutos.8Sirva con pan plano. ¡Disfrute!',
        imagen: 'https://www.themealdb.com/images/media/meals/crd1jz1763592990.jpg',
    },
    {
        id: '52822',
        nombre: 'Salchichas en Masa',
        categoria: 'Cerdo',
        area: 'Reino Unido',
        ingredientes: ['8 Salchichas', '3 cucharadas de Aceite Vegetal', '100g de Harina', '2 Huevos medianos', '1 cucharada de Rábano Picante rallado', '225ml de Leche', '200g de Tomates Cherry'],
        instrucciones:
            'Precaliente el horno a 200°C/ventilador 180°C/gas 6. Fría las salchichas en una sartén antiadherente hasta que estén doradas.Rocíe aceite vegetal en una bandeja para asar de 30cm x 25cm x 6cm de profundidad y caliente en el horno durante 5 minutos.Coloque la harina en un tazón, rompa los huevos medianos, luego agregue el rábano picante rallado. Bata gradualmente la leche semidesnatada. Sazone.Coloque las salchichas en la bandeja para asar caliente y vierta la masa. Cubra con tomates cherry en la rama y cocine durante 30 minutos hasta que esté inflado y dorado.',
        imagen: 'https://www.themealdb.com/images/media/meals/ytuvwr1503070420.jpg',
    },
    {
        id: '53051',
        nombre: 'Nasi lemak',
        categoria: 'Mariscos',
        area: 'Malasia',
        ingredientes: [
            '2 cups Coconut Milk',
            '2 cups Water',
            '1/4 tsp Ginger Paste',
            '1 Ginger',
            '1 Bay Leaf',
            '2 cups Rice',
            '4 Eggs',
            '1 Cucumber',
            '1 cup Peanuts',
            '4 oz Anchovy Fillet',
            '2 tbs Vegetable Oil',
            '1 Onion',
            '3 cloves Garlic',
            '3 Shallots',
            '2 tsp Chilli Powder',
            '4 oz Anchovy Fillet',
            '3 tbs Sugar',
            '1/3 cup Tamarind Paste',
        ],
        instrucciones:
            'In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done. Step 2Place eggs in a saucepan, and cover with cold water. Bring water to a boil, and immediately remove from heat. Cover, and let eggs stand in hot water for 10 to 12 minutes. Remove eggs from hot water, cool, peel and slice in half. Slice cucumber. Step 3Meanwhile, in a large skillet or wok, heat 1 cup vegetable oil over medium-high heat. Stir in peanuts and cook briefly, until lightly browned. Remove peanuts with a slotted spoon and place on paper towels to soak up excess grease. Return skillet to stove. Stir in the contents of one package anchovies; cook briefly, turning, until crisp. Remove with a slotted spoon and place on paper towels. Discard oil. Wipe out skillet. Step 4Heat 2 tablespoons oil in the skillet. Stir in the onion, garlic, and shallots; cook until fragrant, about 1 or 2 minutes. Mix in the chile paste, and cook for 10 minutes, stirring occasionally. If the chile paste is too dry, add a small amount of water. Stir in remaining anchovies; cook for 5 minutes. Stir in salt, sugar, and tamarind juice; simmer until sauce is thick, about 5 minutes. Step 5Serve the onion and garlic sauce over the warm rice, and top with peanuts, fried anchovies, cucumbers, and eggs.',
        imagen: 'https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg',
    },
    {
        id: '52795',
        nombre: 'Pollo Handi',
        categoria: 'Pollo',
        area: 'India',
        ingredientes: [
            '1.2 kg de Pollo',
            '5 Cebollas en rodajas finas',
            '2 Tomates picados finamente',
            '8 dientes de Ajo picados',
            '1 cucharada de Pasta de Jengibre',
            '60ml de Aceite Vegetal',
            '2 cucharaditas de Semillas de Comino',
            '3 cucharaditas de Semillas de Cilantro',
            '1 cucharadita de Cúrcuma en Polvo',
            '1 cucharadita de Chile en Polvo',
            '2 Chiles Verdes',
            '240ml de Yogur',
            '180ml de Crema',
            '3 cucharaditas de Fenogreco Seco',
            '1 cucharadita de Garam Masala',
            'Al gusto Sal',
        ],
        instrucciones:
            'Tome una olla grande o wok, lo suficientemente grande para cocinar todo el pollo, y caliente el aceite en ella. Una vez que el aceite esté caliente, agregue la cebolla en rodajas y fríala hasta que esté dorada. Luego sáquela en un plato y reserve.En la misma olla, agregue el ajo picado y saltee durante un minuto. Luego agregue los tomates picados y cocine hasta que los tomates se ablanden. Esto tomará unos 5 minutos.Luego devuelva la cebolla frita a la olla y revuelva. Agregue la pasta de jengibre y saltee bien.Ahora agregue las semillas de comino, la mitad de las semillas de cilantro y los chiles verdes picados. Déles una rápida revuelta.Luego agregue las especias: cúrcuma en polvo y chile rojo en polvo. Saltee las especias bien durante un par de minutos.Agregue las piezas de pollo al wok, sazone con sal al gusto y cocine el pollo tapado a fuego medio-bajo hasta que el pollo esté casi cocido. Esto tomará unos 15 minutos. Saltear lentamente el pollo mejorará el sabor, así que no acelere este paso poniéndolo a fuego alto.Cuando el aceite se separe de las especias, agregue el yogur batido manteniendo el fuego al mínimo para que el yogur no se corte. Espolvoree las semillas de cilantro restantes y agregue la mitad de las hojas de fenogreco secas. Mezcle bien.Finalmente agregue la crema y dé una mezcla final para combinar todo bien.Espolvoree el kasuri methi restante y el garam masala y sirva el pollo handi caliente con naan o rotis. ¡Disfrute!',
        imagen: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    },
    {
        id: '52770',
        nombre: 'Spaghetti Bolognese',
        categoria: 'Carne de Res',
        area: 'Italia',
        ingredientes: [
            '2 onions',
            '1tbsp olive oil',
            '1 clove garlic',
            '500g lean minced beef',
            '90g mushrooms',
            '1tsp dried oregano',
            '400g can tomatoes',
            '300ml hot beef stock',
            '1tbsp tomato puree',
            '1tbsp worcestershire sauce',
            '350g spaghetti',
            'Topping parmesan',
        ],
        instrucciones:
            'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
        imagen: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    },
    {
        id: '53207',
        nombre: 'Tom kha gai',
        categoria: 'Pollo',
        area: 'Tailandia',
        ingredientes: [
            '800ml Chicken Stock',
            '800g Coconut Milk',
            '2 tablespoons Galangal Paste',
            '2 Lemongrass Stalks',
            '8 Lime Leaves',
            '500g Chicken Thighs',
            '300g Oyster Mushrooms',
            '6 Birds-eye Chillies',
            '1 tablespoon Caster Sugar',
            '5 tablespoons Fish Sauce',
            'Juice of 3 Lime',
            'To serve Coriander Leaves',
            'To serve Rice',
        ],
        instrucciones:
            'step 1Pour the chicken stock and coconut milk into a large saucepan set over a medium heat. Tip in the galangal, lemongrass and lime leaves, and bring to a gentle simmer, around 6-8 mins. Keeping at a gentle simmer, add the chicken. Cook for 8-10 mins until tender and cooked through.step 2Stir in the mushrooms and chillies, and simmer for a further 3-5 mins until everything is cooked through. Sprinkle in the sugar and 3 tbsp each of the fish sauce and lime juice. Taste and add the remaining if required.step 3Remove the galangal, lemongrass and lime leaves before serving using a slotted spoon. Ladle into bowls and serve with coriander leaves sprinkled over and steamed rice on the side. Will keep chilled for up to three days. Leave to cool first.',
        imagen: 'https://www.themealdb.com/images/media/meals/ol2xxt1763582263.jpg',
    },
    {
        id: '52892',
        nombre: 'Tarta de Melaza',
        categoria: 'Postre',
        area: 'Reino Unido',
        ingredientes: ['250g de Harina', '135g de Mantequilla', '400g de Jarabe Dorado', '150g de Pan Rallado', 'Ralladura de 2 Limones', '1 Huevo batido'],
        instrucciones:
            'First make the short crust pastry: measure the flour into a large bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs (alternatively, this can be done in a food processor). Add about three tablespoons of cold water and mix to a firm dough, wrap in cling film and chill in the fridge for about 20 minutes.Preheat the oven to 200C/400F/Gas 6 and put a heavy baking tray in the oven to heat up. Grease a deep 18cm/7in loose-bottomed fluted flan tin with butter.Remove about 150g/5½oz of pastry from the main ball and set aside for the lattice top.Roll the rest of the pastry out thinly on a lightly floured work surface and line the prepared flan tin with the pastry.Prick the base with a fork, to stop the base rising up during baking.Place the reserved pastry for the lattice top on cling film and roll out thinly. Egg wash the pastry and set aside to chill in the fridge (the cling film makes it easier to move about). Do not cut into strips at this stage. Do not egg wash the strips once they are on the tart as it will drip into the treacle mixture.To make the filling, heat the syrup gently in a large pan but do not boil.Once melted, add the breadcrumbs, lemon juice and zest to the syrup. (You can add less lemon if you would prefer less citrus taste.) If the mixture looks runny, add a few more breadcrumbs.Pour the syrup mixture into the lined tin and level the surface.Remove the reserved pastry from the fridge and cut into long strips, 1cm/½in wide. Make sure they are all longer than the edges of the tart tin.Egg wash the edge of the pastry in the tin, and start to make the woven laying lattice pattern over the mixture, leave the strips hanging over the edge of the tin.Once the lattice is in place, use the tin edge to cut off the strips by pressing down with your hands, creating a neat finish.Bake on the pre-heated baking tray in the hot oven for about 10 minutes until the pastry has started to colour, and then reduce the oven temperature to 180C/350F/Gas 4. If at this stage the lattice seems to be getting too dark brown, cover the tart with tin foil.Bake for a further 25-30 minutes until the pastry is golden-brown and the filling set.Remove the tart from the oven and leave to firm up in the tin. Serve warm or cold.',
        imagen: 'https://www.themealdb.com/images/media/meals/wprvrw1511641295.jpg',
    },
    {
        id: '52926',
        nombre: 'Tourtiere',
        categoria: 'Cerdo',
        area: 'Canadá',
        ingredientes: [
            '1 medium Potatoes',
            '1 tsp Sunflower Oil',
            '500g Minced Pork',
            '1 finely chopped Onion',
            '1 finely chopped Garlic Clove',
            '¼ tsp Cinnamon',
            '¼ tsp Allspice',
            '¼ tsp Nutmeg',
            '100ml Vegetable Stock',
            '400g Shortcrust Pastry',
            'To Glaze Egg',
        ],
        instrucciones:
            'Heat oven to 200C/180C fan/gas 6. Boil the potato until tender, drain and mash, then leave to cool. Heat the oil in a non-stick pan, add the mince and onion and quickly fry until browned. Add the garlic, spices, stock, plenty of pepper and a little salt and mix well. Remove from the heat, stir into the potato and leave to cool.Roll out half the pastry and line the base of a 20-23cm pie plate or flan tin. Fill with the pork mixture and brush the edges of the pastry with water. Roll out the remaining dough and cover the pie. Press the edges of the pastry to seal, trimming off the excess. Prick the top of the pastry case to allow steam to escape and glaze the top with the beaten egg.Bake for 30 mins until the pastry is crisp and golden. Serve cut into wedges with a crisp green salad. Leftovers are good cold for lunch the next day, served with a selection of pickles.',
        imagen: 'https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg',
    },
    {
        id: '52769',
        nombre: 'Kapsalon',
        categoria: 'Cordero',
        area: 'Holanda',
        ingredientes: ['250 Grams Fries', '500 Grams Doner Meat', 'Topping Garlic sauce', 'Topping Hotsauce', '1 Bulb Lettuce', '1 Tomato', '3rd Cucumber', '100 Grams Gouda cheese'],
        instrucciones:
            "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.Bake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.Cover the fries with a new layer of meat and spread evenly.Add a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.Chop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.Dived the salad over the dish and Serve with garlicsauce and hot sauce",
        imagen: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
    },
    {
        id: '53119',
        nombre: 'Tall Skoleboller',
        categoria: 'Postre',
        area: 'Noruega',
        ingredientes: [
            '1 cup Milk',
            '3 tsp Instant Yeast',
            '1-⅓ cups Granulated Sugar',
            '1 tsp Cardamom',
            '1 teaspoon Vanilla Extract',
            '2 1/4 cups Flour',
            '5 tblsp Butter',
            '1 1/4 cup Milk',
            '1-⅓ cups Granulated Sugar',
            '3 Egg Yolks',
            '2 tblsp Cornstarch',
            '1 vanilla pod',
            '2 cups Powdered Sugar',
            '3  tablespoons Water',
            '1 cup Shredded Coconut',
        ],
        instrucciones:
            "▢Heat the milk until it's lukewarm. Add the yeast and dissolve.▢Add the sugar, cardamom, vanilla, and about 2/3 of the flour.▢Mix the dough together either by hand or in a mixer with a dough hook, slowly adding the rest of the flour. You might need a bit more or less flour to form dough that isn't too sticky to knead. When the dough forms a nice ball, add the softened butter and continue to knead the dough for about ten minutes.▢Roll the dough into a cylinder and cut into six equal parts. Roll each piece into a round bun and set them in a greased muffin/cake tin. Cover and let rise until doubled in size (about an hour).",
        imagen: 'https://www.themealdb.com/images/media/meals/xihiu41762773169.jpg',
    },
    {
        id: '52856',
        nombre: 'Choc Chip Pecan Pie',
        categoria: 'Postre',
        area: 'Estados Unidos',
        ingredientes: [
            '300g Plain Flour',
            '75g Butter',
            '100g Cream Cheese',
            '1 tbls Icing Sugar',
            '150g Butter',
            '200ml Maple Syrup',
            '250g Light Brown Soft Sugar',
            '100g Dark Brown Soft Sugar',
            '4 Eggs',
            '1 tsp Vanilla Extract',
            '400g Pecan Nuts',
            '200g Dark Chocolate Chips',
        ],
        instrucciones:
            'First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together. Tip onto a work surface and bring together, kneading briefly into a ball. Pat into a disc, wrap in cling film, and chill for at least 20 mins. Heat oven to 200C/180C fan/gas 6.Remove the pastry from the fridge and leave at room temperature for 5 mins to soften. Flour the work surface, then unwrap the pastry and roll to a circle the thickness of a £1 coin. Use the pastry to line a deep, 23cm round fluted tin – mine was about 3cm deep. Press the pastry into the corners and up the sides, making sure there are no gaps. Leave 1cm pastry overhanging (save some of the pastry scraps for later). Line with baking parchment (scrunch it up first to make it more pliable) and fill with baking beans. Blind-bake for 15-20 mins until the sides are set, then remove the parchment and beans and return to the oven for 5 mins until golden brown. Trim the pastry so it’s flush with the top of the tin – a small serrated knife is best for this. If there are any cracks, patch them up with the pastry scraps.Meanwhile, weigh the butter, syrup and sugars into a pan, and add 1 /4 tsp salt. Heat until the butter has melted and the sugar dissolved, stirring until smooth. Remove from the heat and cool for 10 mins. Reduce oven to 160C/140C fan/gas 3.Beat the eggs in a bowl. Add the syrup mixture, vanilla and pecans, and mix until well combined. Pour half the mixture into the tart case, scatter over half the chocolate chips, then cover with the remaining filling and chocolate chips. Bake on the middle shelf for 50-55 mins until set. Remove from the oven and leave to cool, then chill for at least 2 hrs before serving.',
        imagen: 'https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg',
    },
    {
        id: '53160',
        nombre: 'Pisto con huevos',
        categoria: 'Vegetariano',
        area: 'Spanish',
        ingredientes: [
            '2 tblsp Olive Oil',
            '2 Onion',
            '4 Chopped Garlic Clove',
            '5 Mixed peppers',
            '1 teaspoon Oregano',
            'Sprigs of fresh Thyme',
            '4 leaves Bay Leaves',
            '2 chopped Courgettes',
            '1 chopped Aubergine',
            '4 large Tomato',
            '4 large Egg',
            'Handful Parsley',
        ],
        instrucciones:
            'step 1Heat the oil in a large flameproof casserole dish or a cast-iron skillet over a low heat. Add the onions and a sprinkle of salt, cover and cook gently for 15 mins, stirring occasionally. Add the garlic and cook for another 2 mins.step 2Next, throw in the peppers and cook over a medium heat, covered, for about 5 mins, stirring every so often, until the peppers are just tender.step 3Mix in the oregano, thyme, bay leaves, some black pepper and a little salt, if needed. Tip in the courgettes and aubergine, combine thoroughly, and cook over a medium heat, covered, for 10 mins. Stir in the tomatoes, cover and cook for 20 mins, stirring occasionally.step 4Carefully crack the eggs over the pisto – try not to break the yolks. Cook in the sauce on a medium heat for 5-6 mins until the eggs are cooked through but still a little soft, then scatter with parsley before serving',
        imagen: 'https://www.themealdb.com/images/media/meals/0nswfe1763279040.jpg',
    },
    {
        id: '52776',
        nombre: 'Chocolate Gateau',
        categoria: 'Postre',
        area: 'French',
        ingredientes: ['250g Plain chocolate', '175g Butter', '2 tablespoons Milk', '5 Eggs', '175g Granulated Sugar', '125g Flour'],
        instrucciones:
            'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchmentBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)Place the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.Spread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
        imagen: 'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
    },
    {
        id: '52960',
        nombre: 'Ensalada de Salmón y Aguacate',
        categoria: 'Mariscos',
        area: 'Reino Unido',
        ingredientes: [
            '400g de Salmón',
            '3 Aguacates',
            '1 Pepino',
            '400g de Espinacas',
            '4 cucharadas de Menta',
            'ralladura y jugo de 1 Lima',
            '2 cucharaditas de Miel',
            '3 cucharadas de Aceite de Oliva',
        ],
        instrucciones:
            'Sazone el salmón, luego frote con aceite. Mezcle los ingredientes del aderezo. Corte por la mitad, quite el hueso, pele y corte los aguacates en rodajas. Corte el pepino por la mitad y en cuartos a lo largo, luego córtelo en rodajas. Divida la ensalada, el aguacate y el pepino entre cuatro platos, luego rocíe con la mitad del aderezo.Caliente una sartén antiadherente. Agregue el salmón y fría durante 3-4 minutos de cada lado hasta que esté crujiente pero aún húmedo por dentro. Coloque un filete de salmón encima de cada ensalada y rocíe con el aderezo restante. Sirva tibio.',
        imagen: 'https://www.themealdb.com/images/media/meals/1549542994.jpg',
    },
    {
        id: '53232',
        nombre: 'Vietnamese chicken salad',
        categoria: 'Pollo',
        area: 'Vietnamese',
        ingredientes: [
            '140g Rice Noodles',
            '1 Carrots',
            '1/2 Cucumber',
            '2 Chicken Breasts',
            '50g Radish',
            '1/2 Red Onions',
            'Bunch Mint',
            '25g Peanuts',
            '1 chopped Red Chilli',
            'Zest and juice of 1 Lime',
            '1 ½ tbsp Fish Sauce',
            '1 ½ tbsp Soy Sauce',
            '1 ½ tbsp Sesame Seed Oil',
        ],
        instrucciones:
            'step 1To make the dressing, whisk all the ingredients together in a large serving bowl. Cook the noodles following pack instructions, then drain and add to the bowl with the dressing.step 2Peel the carrot into long strips using a vegetable peeler. Do the same for the cucumber, until you reach the seeds (discard them). Add the carrot and cucumber to the noodle mixture along with the shredded chicken, radishes, red onion and mint. Toss well to coat in the dressing, scatter over the peanuts and serve.',
        imagen: 'https://www.themealdb.com/images/media/meals/pk8wtn1763758591.jpg',
    },
    {
        id: '52864',
        nombre: 'Mushroom & Chestnut Rotolo',
        categoria: 'Vegetariano',
        area: 'Reino Unido',
        ingredientes: [
            '30g Mushrooms',
            '240g Chestnuts',
            '3 Challots',
            '3 cloves Garlic',
            '3 sprigs Rosemary',
            '500g Wild Mushrooms',
            '2 tblsp Soy Sauce',
            '125ml White Wine',
            '350g Lasagne Sheets',
            '4 tbsp Breadcrumbs',
            '1/2 handful Sage',
            'to serve Truffle Oil',
        ],
        instrucciones:
            'Soak the dried mushrooms in 350ml boiling water and set aside until needed. Blitz ¾ of the chestnuts with 150ml water until creamy. Roughly chop the remaining chestnuts.Heat 2 tbsp olive oil in a large non-stick frying pan. Fry the shallots with a pinch of salt until softened, then add the garlic, chopped chestnuts and rosemary, and fry for 2 mins more. Add the wild mushrooms, 2 tbsp oil and some seasoning. Cook for 3 mins until they begin to soften. Drain and roughly chop the dried mushrooms (reserve the soaking liquid), then add those too, along with the soy sauce, and fry for 2 mins more.Whisk the wine, reserved mushroom liquid and chestnut cream together to create a sauce. Season, then add half to the mushroom mixture in the pan and cook for 1 min until the sauce becomes glossy. Remove and discard the rosemary sprigs, then set the mixture aside.Heat oven to 180C/160C fan/gas 4. Bring a large pan of salted water to the boil and get a large bowl of ice water ready. Drop the lasagne sheets into the boiling water for 2 mins or until pliable and a little cooked, then immediately plunge them into the cold water. Using your fingers, carefully separate the sheets and transfer to a clean tea towel. Spread a good spoonful of the sauce on the bottom two thirds of each sheet, then, rolling away from yourself, roll up the shorter ends. Cut each roll in half, then position the rolls of pasta cut-side up in a pie dish that you are happy to serve from at the table. If you have any mushroom sauce remaining after you’ve rolled up all the sheets, simply push it into some of the exposed rolls of pasta.Pour the rest of the sauce over the top of the pasta, then bake for 10 mins or until the pasta no longer has any resistance when tested with a skewer.Meanwhile, put the breadcrumbs, the last 2 tbsp olive oil, sage leaves and some seasoning in a bowl, and toss everything together. Scatter the rotolo with the crumbs and sage, then bake for another 10 mins, until the top is golden and the sage leaves are crispy. Leave to cool for 10 mins to allow the pasta to absorb the sauce, then drizzle with a little truffle oil, if you like, before taking your dish to the table.',
        imagen: 'https://www.themealdb.com/images/media/meals/ssyqwr1511451678.jpg',
    },
    {
        id: '53318',
        nombre: 'Torta de fiambre',
        categoria: 'Cerdo',
        area: 'Uruguayan',
        ingredientes: ['150g Cheddar Cheese', '200g Ham', '3 Egg', '100g Vegetable Oil', '240g Milk', '120g All purpose flour', '2 tsp Baking Powder', '1 tsp Salt', 'To taste Dried Oregano'],
        instrucciones:
            'Line the bottom of a springform of 20-2cm (8-9inches) with parchment paper, I usually leave some overhang as the batter is very liquid and may spill a bit. Preheat oven to 220 degrees Celsius.2Grate the cheese and take out the ham.3Mix all remaining ingredients in a large bowl for about one to two minutes.4Pour half the batter into the prepared pan, it is going to be very liquid. Then place ham and cheese on top and pour the remaining batter on top.5Bake for about 20-25 minutes or until top is golden. Wait for a few minutes before releasing from the pan and enjoy either hot or cold with some fresh herbs.',
        imagen: 'https://www.themealdb.com/images/media/meals/okl9cm1764371087.jpg',
    },
    {
        id: '53057',
        nombre: 'Traditional Croatian Goulash',
        categoria: 'Carne de Res',
        area: 'Croatian',
        ingredientes: [
            '500g Beef',
            '2 chopped Onions',
            '2 chopped Carrots',
            '2 cloves Garlic',
            '2 Bay Leaf',
            '200ml Red Wine',
            '2 Litres Water',
            '3 tbs Mustard',
            '1tbsp Salt',
            '1/2 tsp Pepper',
            '1/2 tsp Paprika',
            '2 tbs Vegetable Oil',
        ],
        instrucciones:
            'Clean the meat from the veins if there are some and cut it into smaller pieces, 3 × 3 cm. Marinate the meat in the mustard and spices and let it sit in the refrigerator for one hourHeat one tablespoon of pork fat or vegetable oil in a pot and fry the meat on all sides until it gets browned. Once the meat is cooked, transfer it to a plate and add another tablespoon of fat to the potCut the onions very fine, peel the carrots and shred it using a grater. Cook the onions and carrots over low heat for 15 minutes. You can salt the vegetables a little to make them soften fasterOnce the vegetables have browned and become slightly mushy, add the meat and bay leaves and garlic. Pour over with wine and simmer for 10-15 minutes to allow the alcohol to evaporate. Now is the right time to add 2/3 the amount of liquidCover the pot and cook over low heat for an hour, stirring occasionally. After the first hour, pour over the rest of the water or stock and cook for another 30-45 minutesAllow the stew to cool slightly and serve it with a sprinkle of chopped parsley and few slices of fresh hot pepper if you like to spice it up a bitSlice ​​some fresh bread, season the salad and simply enjoying these wonderful flavors',
        imagen: 'https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg',
    },
    {
        id: '53165',
        nombre: 'Torrijas with sherry',
        categoria: 'Desayuno',
        area: 'Spanish',
        ingredientes: [
            '2 medium Egg',
            '2 tbsp Double Cream',
            '2 tblsp Milk',
            '3 tsp Golden Caster Sugar',
            '3  tablespoons Sweet Sherry',
            '4 thick slices Bread',
            'For frying Olive Oil',
            'To serve Icing Sugar',
            'To serve Creme Fraiche',
        ],
        instrucciones:
            'step 1In a wide, shallow bowl, beat the eggs with the cream, milk, golden caster sugar and sherry. Cut each slice of bread in two and dip them into the egg mix, turning to make sure they get a good coating on either side. Soak bread in egg mixture for 10 mins to absorb the liquid (carefully turn them over from time to time and make sure they don’t get too soggy).step 2Heat 1½ tbsp olive oil in a large frying pan and cook the bread for about 3 mins on each side until dark golden and crisp on the edge. Keep the slices warm in a low oven as you cook the rest.step 3Divide the torrijas between plates and dust with the icing sugar. Serve with crème fraîche or Greek yogurt on the side.',
        imagen: 'https://www.themealdb.com/images/media/meals/f3ee3y1763309332.jpg',
    },
    {
        id: '53191',
        nombre: 'Pad Thai',
        categoria: 'Mariscos',
        area: 'Tailandia',
        ingredientes: [
            '125g Rice Noodles',
            'Juice of 3 Lime',
            '1/2 teaspoon Cayenne Pepper',
            '2 teaspoons Muscovado Sugar',
            '2 tablespoons Fish Sauce',
            '2 tablespoons Vegetable Oil',
            '200g Tiger Prawns',
            '4 finely sliced Spring Onions',
            '140g Bean Sprouts',
            '25g Peanuts',
            'Handful Coriander',
            '2 Lime',
            'To serve sweet chilli sauce',
        ],
        instrucciones:
            'step 1Put the noodles in a large heatproof bowl, pour boiling water over them and leave for 4 minutes, then drain and refresh under cold running water.step 2Put the lime juice, cayenne, sugar and fish sauce in a bowl and mix well. Have all the other ingredients ready by the cooker.step 3Heat the oil and fry the prawns until warmed through. Add the spring onions and noodles and toss around. Tip in the lime juice mixture, then stir in the beansprouts and half the peanuts and coriander. Cook for 1 minute until everything is heated through.step 4Pile into a large dish, scatter with the rest of the peanuts and coriander, and serve with lime wedges and sweet chilli sauce.',
        imagen: 'https://www.themealdb.com/images/media/meals/rg9ze01763479093.jpg',
    },
    {
        id: '52950',
        nombre: 'Carne de Res Szechuan',
        categoria: 'Carne de Res',
        area: 'China',
        ingredientes: [
            '225g de Carne de Res',
            '½ cucharadita de Sal',
            '1 cucharadita de Aceite de Sésamo',
            '1 pizca de Pimienta',
            '1 Clara de Huevo',
            '3 cucharadas de Maicena',
            '4 cucharadas de Aceite',
            '1 cucharadita de Jengibre',
            '1 cucharadita de Ajo',
            '180ml de Cebolla',
            '120ml de Zanahorias',
            '180ml de Pimiento Verde',
            '240ml de Apio',
            '240ml de Champiñones',
            '1 cucharada de Vino de Cocina',
            '240ml de Agua',
            '1 cucharada de Salsa de Ostras',
            '½ cucharadita de Salsa Picante',
            '1 cucharadita de Azúcar',
            '1 cucharada de Salsa de Soja',
        ],
        instrucciones:
            'PASO 1 - MARINAR LA CARNE DE RESEn un tazón, agregue la carne de res, sal, aceite de sésamo, pimienta blanca, clara de huevo, 2 cucharadas de maicena y 1 cucharada de aceite.PASO 2 - SALTEAR Primero cocine la carne de res agregando 2 cucharadas de aceite hasta que la carne esté dorada.Reserve la carne de resEn un wok agregue 1 cucharada de aceite, jengibre picado, ajo picado y saltee durante unos segundos.Luego agregue todas las verduras y luego agregue vino de cocina jerez y 1 taza de agua.Para hacer la salsa agregue salsa de ostras, salsa de pimienta picante y azúcar.agregue la carne de res cocida y 1 cucharada de salsa de sojaPara espesar la salsa, bata 1 cucharada de maicena y 2 cucharadas de agua en un tazón y agregue lentamente a su salteado hasta que tenga el espesor adecuado.',
        imagen: 'https://www.themealdb.com/images/media/meals/1529443236.jpg',
    },
    {
        id: '52861',
        nombre: 'Peanut Butter Cheesecake',
        categoria: 'Postre',
        area: 'Estados Unidos',
        ingredientes: [
            '50g Butter',
            '175g Peanut Cookies',
            '5 Gelatine Leafs',
            '500g Ricotta',
            '175g Peanut Butter',
            '175g Golden Syrup',
            '150ml Milk',
            '275ml Double Cream',
            '2 tblsp Light Brown Soft Sugar',
            'Crushed Peanut Brittle',
        ],
        instrucciones:
            'Oil and line a 20cm round loose- bottomed cake tin with cling film, making it as smooth as possible. Melt the butter in a pan. Crush the biscuits by bashing them in a bag with a rolling pin, then stir them into the butter until very well coated. Press the mixture firmly into the base of the tin and chill.Soak the gelatine in water while you make the filling. Tip the ricotta into a bowl, then beat in the peanut butter and syrup. Ricotta has a slightly grainy texture so blitz until smooth with a stick blender for a smoother texture if you prefer.Take the soaked gelatine from the water and squeeze dry. Put it into a pan with the milk and heat very gently until the gelatine dissolves. Beat into the peanut mixture, then tip onto the biscuit base. Chill until set.To freeze, leave in the tin and as soon as it is solid, cover the surface with cling film, then wrap the tin with cling film and foil.To defrost, thaw in the fridge overnight.To serve, carefully remove from the tin. Whisk the cream with the sugar until it holds its shape, then spread on top of the cheesecake and scatter with the peanut brittle.',
        imagen: 'https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg',
    },
    {
        id: '53081',
        nombre: 'Ensalada de Papa (Ensalada Olivier)',
        categoria: 'Vegetariano',
        area: 'Rusia',
        ingredientes: [
            '4 Papas',
            '3 Zanahorias',
            '1 cucharada de Sal',
            '½ cucharada de Vinagre de Vino Blanco',
            '4 Huevos',
            '200g de Salchichas',
            '110g de Eneldo',
            '1 lata de Guisantes',
            '4 Cebollas',
            '240ml de Mayonesa',
        ],
        instrucciones:
            'Corte las papas y las zanahorias en cubos pequeños uniformes.Colóquelos en una olla grande y llénela con agua.Agregue sal y vinagre. Llévelo a ebullición a fuego medio-alto, luego reduzca el fuego a medio y continúe cocinando hasta que las papas estén cocidas, aproximadamente 15 minutos. Escurra las papas y déjelas enfriar a temperatura ambiente.Mientras tanto, corte la salchicha y los pepinillos en cubos pequeños, y pique las cebollas verdes.Corte los huevos duros en cubos pequeños también.Si usa eneldo fresco, píquelo también.En un tazón grande, combine papas, zanahorias, salchicha, pepinillos, guisantes y cebollas verdes.Agregue mayonesa y eneldo y mezcle hasta que esté bien combinado.Sal y pimienta al gusto. Cubra con una envoltura de plástico y refrigere durante al menos 1 hora antes de servir.',
        imagen: 'https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg',
    },
    {
        id: '52974',
        nombre: 'Keleya Zaara',
        categoria: 'Cordero',
        area: 'Tunisian',
        ingredientes: ['4 tbs Olive Oil', '750g Lamb', '1 1/2 tsp Saffron', '1 Large Chopped Onion', '25 ml Water', '30g Parsley', '1 tbs Butter', '1 Lemon'],
        instrucciones:
            'Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.Uncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.',
        imagen: 'https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg',
    },
    {
        id: '53151',
        nombre: 'Paella',
        categoria: 'Mariscos',
        area: 'Spanish',
        ingredientes: [
            '3 tablespoons Olive Oil',
            '10 Raw tiger prawns',
            'Bunch Parsley',
            '100 ml Dry sherry',
            '500g Mussels',
            'Pinch Saffron',
            '150g Chorizo',
            '1 chopped Onion',
            '3 cloves Garlic',
            '1 medium Squid',
            '2 Tomato',
            '250g Paella Rice',
            '100g Broad Beans',
            '1 Lemon Zest',
        ],
        instrucciones:
            'step 1Heat 1 tbsp of the oil in a wide, shallow pan. Add the prawn heads and parsley stalks and sizzle until the heads turn pink, then mash with a potato masher. Pour over the sherry or wine and 300ml water, season with salt and simmer for 10 mins to make a stock, mashing the prawn heads as they cook.step 2Scatter the mussels into the pan, cover the pan loosely with a lid or tea towel, then put over a high heat for 3-4 mins until the mussels just open. Stir to release the mussel juices, then pour the contents of the pan into a colander set over a large bowl containing the saffron. Let the saffron steep in the stock – you will need 700ml in total, so top up with water if needed and give everything a good stir. Pick the mussels out from the colander, then set aside.step 3Wipe out the pan and add the rest of the olive oil. Sizzle the chorizo until it releases its oil, then add the onion and garlic and cook until softened. Add the squid and turn over until it turns white. Add the tomatoes and cook down for a minute, then pour over most of the stock, give everything a good stir and bring to the boil. Scatter the rice over the stock, stir well once, then boil vigorously for 5 mins. Reduce the heat to the lowest setting and slowly simmer for 10 mins without stirring until the rice has absorbed most of the liquid.step 4Tuck the prawn tails into the rice and simmer for 5 mins, turning them over until cooked through. Stir through the mussels and broad beans or peas. Taste the rice – if it is still a little raw but the pan is dry, add a splash more stock and continue to cook; if it’s too soupy, then increase the heat to cook off the last of the stock.step 5Once the rice is just cooked, turn off the heat and cover with a tea towel for a few minutes. Scatter over the parsley leaves and lemon zest, then season with smoked salt if you like. Stir everything once, then serve straight from the pan, with lemon wedges on the side.',
        imagen: 'https://www.themealdb.com/images/media/meals/9bl20p1763248192.jpg',
    },
    {
        id: '53294',
        nombre: 'Zapiekanki',
        categoria: 'Cerdo',
        area: 'Polish',
        ingredientes: [
            '2 Baguette',
            '1 tablespoon Butter',
            '2 tsp Vegetable Oil',
            '1 chopped Onion',
            '300g Mushrooms',
            '1 clove Garlic',
            '1 tablespoon Mayonnaise',
            '50g Cheddar Cheese',
            '75g Ham',
            '75g Polish Kabanos',
            '50g Mozzarella',
            '2 Dill',
            '1 tablespoon Chives',
            'Drizzle Tomato Ketchup',
        ],
        instrucciones:
            'step 1Heat the oven to 200C/180C fan/gas 6. Bake the baguettes on a baking tray for 8-10 mins, then leave to cool.step 2Heat 2 tsp of the butter and 1 tsp of the oil in a pan over a low heat and cook the chopped onion for 5 mins until soft. Stir in the mushrooms, turn the heat to medium and cook for 5-10 mins more until the veg is soft and the mushroom liquid has evaporated. Stir in the garlic and cook for 1-2 mins until soft. Season, then stir in the mayonnaise and remove from the heat.step 3Halve the baguettes lengthways, then return to the baking tray, cut-side up and spread over the mushroom mixture, then sprinkle over the cheddar, ham, kabanos and mozzarella. Bake for 8-10 mins, or until the cheese has melted and turned golden.step 4Meanwhile, heat the remaining butter and oil in a pan over a medium heat and fry the sliced onions for 5 mins until golden and soft. Remove from the heat and set aside. Once the pizzas are cooked, top with the caramelised onions, dill pickles (if using), the chives and a zig-zag drizzle of ketchup.',
        imagen: 'https://www.themealdb.com/images/media/meals/72lmpt1764122511.jpg',
    },
    {
        id: '52779',
        nombre: 'Tarta de Queso Crema',
        categoria: 'Entrada',
        area: 'Estados Unidos',
        ingredientes: [
            '250g de Harina',
            '125g de Mantequilla',
            '1 Huevo',
            'Pizca de Sal',
            '300g de Queso',
            '100ml de Leche',
            '3 Huevos',
            '100g de Queso Parmesano',
            '350g de Tomates Ciruela',
            '3 cucharadas de Vinagre Blanco',
            '1 cucharada de Miel',
            'Para decorar Albahaca',
        ],
        instrucciones:
            'Masa: haga una masa con 250g de harina (me gusta mezclar diferentes harinas como harina común y harina de espelta integral), 125g de mantequilla, 1 huevo y una pizca de sal, presíónela en un molde para tarta y colóquela en el refrigerador. Relleno: mezcle 300g de queso crema y 100ml de leche hasta que quede suave, agregue 3 huevos, 100g de queso parmesano rallado y sazone con sal, pimienta y nuez moscada. Saque la masa del refrigerador y pinche el fondo con un tenedor. Vierta el relleno y hornee a 175 grados C durante unos 25 minutos. Cubra la tarta con papel de aluminio después de la mitad del tiempo. Mientras tanto, corte en rodajas unos 350g de mini tomates. En una sartén pequeña caliente 3 cucharadas de aceite de oliva, 3 cucharadas de vinagre blanco, 1 cucharada de miel, sal y pimienta y combine bien. Vierta sobre las rodajas de tomate y mezcle bien. Con una cuchara, coloque las rodajas de tomate en la tarta, evitando demasiado líquido en ella. Decore con hojas de albahaca y disfrute',
        imagen: 'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    },
    {
        id: '53319',
        nombre: 'Chivito sandwich',
        categoria: 'Carne de Res',
        area: 'Uruguayan',
        ingredientes: [
            '80g Milk',
            '60g Butter',
            '1 tablespoon Molasses',
            '220g Water',
            '9 Egg',
            '500g Bread Flour',
            '10g Salt',
            '10g Yeast',
            'Splash Egg Wash',
            'Sprinkling Sesame Seed',
            '4 Onion',
            '8 Sirloin steak',
            'To serve Garlic',
            '8 Bacon',
            '8 slices Ham',
            '8 slices Mozzarella',
            '4 Tomato',
            '1/4 Lettuce',
            'To serve Mustard',
            'To serve Chimichurri sauce',
        ],
        instrucciones:
            "For the brioche buns heat the milk with the butter and molasses until the butter has melted. Add the cold water and egg to this mix.2In a large bowl place flour, salt and yeast and mix. Then add the milk and water mix and stir with a wooden spoon until combined. You don't have to knead the dough, it is perfectly fine to do this by hand with a wooden spoon, this doesn't need to be very thorough. Cover with a damp towel and stick in the fridge overnight.3The next morning knead dough on a generously floured surface for a little and cut into eight equal pieces. Shape these into balls and place on a baking sheet lined with parchment paper. Cover again with damp towel and let rise for about an hour or until double in size.4Heat oven to 220 degrees Celsius. Brush the buns with either milk, heavy cream or egg wash and sprinkle with sesame seeds, if desired. Bake for about 15-20min or until golden. Let cool.5For the toppings chop the onions and sauté in a bit of butter, let caramelize, this may take ten to 15 minutes, stir occasionally. Rub the steaks with a bit of garlic and then grill or fry the steaks, the bacon, and eggs with salt and pepper, toast the buns after having cut in half. Spread mustard on one bun half, layer each chivito with steak, a slice of ham, a slice of cheese, one bacon stripe, a tomato slice, and some lettuce. Place fried egg on top and sprinkle generously with chimichurri and some onions right before serving.",
        imagen: 'https://www.themealdb.com/images/media/meals/j80gmw1764372176.jpg',
    },
];

// Buscador de Recetas
const form = document.getElementById('myForm');
const exactSearchCheck = document.getElementById('exactSearchCheck');
let isExactSearch = false;

// Toggle exact search mode
exactSearchCheck.addEventListener('change', function () {
    isExactSearch = exactSearchCheck.checked;
    // Trigger search again with new mode
    form.dispatchEvent(new Event('input'));
});

form.addEventListener('input', function (event) {
    event.preventDefault();
    const datosFormulario = new FormData(form);
    console.log(Object.fromEntries(datosFormulario.entries()));
    const busqueda = datosFormulario.get('search').toLowerCase().trim();

    // Si no hay búsqueda, mostrar las primeras 6 recetas
    if (busqueda === '') {
        renderRecetas(recetas.slice(0, 6));
        return;
    }

    const resultados = recetas.filter((receta) => {
        const nombreMatch = isExactSearch ? receta.nombre.toLowerCase() === busqueda : receta.nombre.toLowerCase().includes(busqueda);

        const categoriaMatch = isExactSearch ? receta.categoria.toLowerCase() === busqueda : receta.categoria.toLowerCase().includes(busqueda);

        const areaMatch = isExactSearch ? receta.area.toLowerCase() === busqueda : receta.area.toLowerCase().includes(busqueda);

        const idMatch = isExactSearch ? receta.id === busqueda : receta.id.includes(busqueda);

        const ingredientesMatch = receta.ingredientes.some((ingrediente) => (isExactSearch ? ingrediente.toLowerCase() === busqueda : ingrediente.toLowerCase().includes(busqueda)));

        return nombreMatch || categoriaMatch || areaMatch || idMatch || ingredientesMatch;
    });

    console.log(resultados);
    renderRecetas(resultados);
});

// Funcion de Renderizado Principal
const recetasContainer = document.getElementById('recetas-container');
const countElement = document.getElementById('count');

const renderRecetas = (recetas) => {
    recetasContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
    countElement.textContent = recetas.length; // Actualizar el contador de recetas

    if (recetas.length === 0) {
        recetasContainer.innerHTML = '<div class="col-12"><p class="text-muted text-center fs-5 mt-4">No se encontraron recetas que coincidan con los filtros.</p></div>';
        return;
    }

    recetas.forEach((receta) => {
        const recetaCard = document.createElement('div');
        recetaCard.classList.add('col-12', 'col-md-6', 'col-lg-4');
        recetaCard.innerHTML = `
            <div class="card h-100">
                <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${receta.nombre}</h5>
                    <p class="card-text"><strong>Categoría:</strong> ${receta.categoria}</p>
                    <p class="card-text"><strong>Área:</strong> ${receta.area}</p>
                    <button class="btn btn-primary mt-auto ver-receta-btn" data-receta-id="${receta.id}">Ver Receta</button>
                </div>
            </div>
        `;
        recetasContainer.appendChild(recetaCard); // Agrega el elemento al final del contenedor
    });

    // Agregar event listeners a todos los botones "Ver Receta"
    document.querySelectorAll('.ver-receta-btn').forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const recetaId = this.getAttribute('data-receta-id'); // Obtener el ID de la receta
            const receta = recetas.find((r) => r.id === recetaId); // Buscar la receta por ID
            mostrarModalReceta(receta);
        });
    });
};

// Función para mostrar el modal con los detalles de la receta
function mostrarModalReceta(receta) {
    // Actualizar el título del modal
    document.getElementById('recetaModalLabel').textContent = receta.nombre;

    // Actualizar la imagen
    const modalImagen = document.getElementById('modal-imagen');
    modalImagen.src = receta.imagen;
    modalImagen.alt = receta.nombre;

    // Actualizar ingredientes
    const modalIngredientes = document.getElementById('modal-ingredientes');
    modalIngredientes.innerHTML = '';
    receta.ingredientes.forEach((ingrediente) => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        modalIngredientes.appendChild(li);
    });

    // Actualizar instrucciones (reemplazar \r\n con saltos de línea)
    const modalInstrucciones = document.getElementById('modal-instrucciones');
    modalInstrucciones.innerHTML = receta.instrucciones.replace(/\\r\\n/g, '<br><br>');

    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('recetaModal'));
    modal.show();
}

// Inicializar la página mostrando las primeras 6 recetas
let numeroRecetasIniciales = 6;
document.addEventListener('DOMContentLoaded', function () {
    renderRecetas(recetas.slice(0, numeroRecetasIniciales));
});
