const data = {
  autos: [
    {
      marca: 'Toyota',
      modelo: ['Toyota Corolla', 'Toyota Camry', 'Toyota RAV4', 'Toyota Prius', 'Toyota Highlander']
    },
    {
      marca: 'Ford',
      modelo: ['Ford F-150', 'Ford Mustang', 'Ford Explorer', 'Ford Escape', 'Ford Focus']
    },
    {
      marca: 'Honda',
      modelo: ['Honda Civic', 'Honda Accord', 'Honda CR-V', 'Honda Pilot', 'Honda Odyssey']
    },
    {
      marca: 'Chevrolet',
      modelo: ['Chevrolet Silverado', 'Chevrolet Equinox', 'Chevrolet Malibu', 'Chevrolet Traverse', 'Chevrolet Suburban']
    },
    {
      marca: 'Volkswagen',
      modelo: ['Volkswagen Golf', 'Volkswagen Jetta', 'Volkswagen Tiguan', 'Volkswagen Passat', 'Volkswagen Atlas']
    },
    {
      marca: 'Nissan',
      modelo: ['Nissan Rogue', 'Nissan Altima', 'Nissan Sentra', 'Nissan Pathfinder', 'Nissan Titan']
    },
    {
      marca: 'Hyundai',
      modelo: ['Hyundai Elantra', 'Hyundai Sonata', 'Hyundai Tucson', 'Hyundai Santa Fe', 'Hyundai Palisade']
    },
    {
      marca: 'Kia',
      modelo: ['Kia Forte', 'Kia Optima', 'Kia Sportage', 'Kia Sorento', 'Kia Telluride']
    },
    {
      marca: 'Subaru',
      modelo: ['Subaru Outback', 'Subaru Forester', 'Subaru Crosstrek', 'Subaru Impreza', 'Subaru Legacy']
    },
    {
      marca: 'Lexus',
      modelo: ['Lexus RX', 'Lexus ES', 'Lexus NX', 'Lexus UX', 'Lexus GX']
    },
    {
      marca: 'Mazda',
      modelo: ['Mazda CX-5', 'Mazda Mazda3', 'Mazda Mazda6', 'Mazda CX-9', 'Mazda MX-5 Miata']
    },
    {
      marca: 'Tesla',
      modelo: ['Tesla Model 3', 'Tesla Model Y', 'Tesla Model S', 'Tesla Model X', 'Tesla Cybertruck']
    },
    {
      marca: 'Volvo',
      modelo: ['Volvo XC90', 'Volvo XC60', 'Volvo XC40', 'Volvo S60', 'Volvo V60']
    },
    {
      marca: 'Jeep',
      modelo: ['Jeep Wrangler', 'Jeep Grand Cherokee', 'Jeep Cherokee', 'Jeep Compass', 'Jeep Renegade']
    },
    {
      marca: 'Ram',
      modelo: ['Ram 1500', 'Ram 2500', 'Ram 3500', 'Ram ProMaster', 'Ram ProMaster City']
    },
    {
      marca: 'Land Rover',
      modelo: ['Land Rover Range Rover', 'Land Rover Discovery', 'Land Rover Defender', 'Land Rover Range Rover Evoque', 'Land Rover Range Rover Sport']
    },
    {
      marca: 'Mitsubishi',
      modelo: ['Mitsubishi Outlander', 'Mitsubishi Eclipse Cross', 'Mitsubishi Mirage', 'Mitsubishi Montero', 'Mitsubishi ASX']
    },
    {
      marca: 'Acura',
      modelo: ['Acura RDX', 'Acura MDX', 'Acura TLX', 'Acura ILX', 'Acura NSX']
    },
    {
      marca: 'Buick',
      modelo: ['Buick Encore', 'Buick Envision', 'Buick Enclave', 'Buick Regal', 'Buick LaCrosse']
    },
    {
      marca: 'Cadillac',
      modelo: ['Cadillac XT5', 'Cadillac XT6', 'Cadillac Escalade', 'Cadillac CT4', 'Cadillac CT5']
    },
    {
      marca: 'Chrysler',
      modelo: ['Chrysler Pacifica', 'Chrysler 300', 'Chrysler Voyager']
    },
    {
      marca: 'Dodge',
      modelo: ['Dodge Charger', 'Dodge Challenger', 'Dodge Durango', 'Dodge Journey', 'Dodge Grand Caravan']
    },
    {
      marca: 'GMC',
      modelo: ['GMC Sierra', 'GMC Yukon', 'GMC Terrain', 'GMC Acadia', 'GMC Canyon']
    },
    {
      marca: 'Infiniti',
      modelo: ['Infiniti Q50', 'Infiniti QX60', 'Infiniti QX80', 'Infiniti Q60', 'Infiniti QX50']
    },
    {
      marca: 'Jaguar',
      modelo: ['Jaguar F-PACE', 'Jaguar E-PACE', 'Jaguar I-PACE', 'Jaguar XF', 'Jaguar XE']
    },
    {
      marca: 'Landrover',
      modelo: ['Landrover Discovery Sport', 'Landrover Range Rover Velar', 'Landrover Range Rover Sport', 'Landrover Range Rover Evoque']
    },
    {
      marca: 'Lincoln',
      modelo: ['Lincoln Navigator', 'Lincoln Aviator', 'Lincoln Corsair', 'Lincoln Nautilus', 'Lincoln Continental']
    },
    {
      marca: 'Maserati',
      modelo: ['Maserati Ghibli', 'Maserati Levante', 'Maserati Quattroporte', 'Maserati GranTurismo', 'Maserati GranCabrio']
    },
    {
      marca: 'Mini',
      modelo: ['Mini Cooper', 'Mini Countryman', 'Mini Clubman', 'Mini Convertible', 'Mini Hardtop']
    },
    {
      marca: 'Renault',
      modelo: ['Renault Kwid', 'Renault Duster', 'Renault Sandero', 'Renault Captur', 'Renault Logan']
    },
    {
      marca: 'Ambacar',
      modelo: ['Ambacar X7', 'Ambacar X5', 'Ambacar X6', 'Ambacar X8', 'Ambacar X9']
    },
    {
      marca: 'Chery',
      modelo: ['Chery Tiggo 3', 'Chery Tiggo 5', 'Chery Tiggo 7', 'Chery Arrizo 5', 'Chery Arrizo 7']
    },
    {
      marca: 'Haval',
      modelo: ['Haval H2', 'Haval H6', 'Haval H9', 'Haval F5', 'Haval F7', 'Great Wall Haval H6']
    },
    {
      marca: 'Jac',
      modelo: ['Jac S2', 'Jac S3', 'Jac S4', 'Jac S5', 'Jac S7']
    },
    {
      marca: 'Jetour',
      modelo: ['Jetour X70', 'Jetour X95', 'Jetour X90', 'Jetour X55', 'Jetour X65']
    },
    {
      marca: 'Changan',
      modelo: ['Changan CS35 Plus', 'Changan CS55 Plus', 'Changan CS75 Plus', 'Changan CS95', 'Changan Alsvin']
    },
    {
      marca: 'Dong Feng',
      modelo: ['Dong Feng Aeolus Yixuan', 'Dong Feng Aeolus Lingzhi', 'Dong Feng Aeolus S50', 'Dong Feng Aeolus AX7', 'Dong Feng Joyear X5']
    },
    { marca: 'Hino',
      modelo: ['Hino 300', 'Hino 500', 'Hino 700'] },
    {
      marca: 'JMC',
      modelo: ['JMC Yuhu', 'JMC Baodian', 'JMC Teshun', 'JMC Vigor', 'JMC Boarding']
    },
    {
      marca: 'Great Wall',
      modelo: ['Great Wall Haval H6', 'Great Wall P-Series Pickup', 'Great Wall Wey VV6', 'Great Wall Coolbear', 'Great Wall Wingle 7']
    },
    {
      marca: 'Terralord',
      modelo: ['Terralord Yusheng 330', 'Terralord Yusheng 350', 'Terralord Yusheng 360', 'Terralord Yusheng E', 'Terralord Yusheng X']
    }
  ],
  vga: [533, 613, 692, 830, 950, 1066, 1185, 1265],
  cuotas: [226, 260.6, 294, 353, 405, 452, 505, 540],
  rango: [13500, 15500, 17500, 21000, 24000, 27000, 300000, 32000]
};

export default data;
