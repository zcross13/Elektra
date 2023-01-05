require('dotenv').config();
require('./database');
const Tesla = require('../models/tesla');

(async function () {

    await Tesla.deleteMany({});
    const teslas = await Tesla.create([
        {
            model: "Model Y",
            price: "$65,990",
            images: "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=my&options=$APF2,$APBS,$DV4W,$INYPB,$PPSW,$PRMY1,$SC04,$MDLY,$WY19B,$MTY03,$STY5S,$CPF0,$FM3U&crop=1400,850,300,130&",
            year: "2020",
            miles: "43,605",
            fuelEconomy: "127/114 MPGe city/highway",
            color: "Pearl White",
            drivetrain: "Dual Motor All-Wheel Drive",
            vin: "5YJYGDEE1LF006969",
        },
        {
            model: "Model 3",
            price: "$42,000",
            images: "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=m3&options=$APBS,$DV4W,$IN3PB,$PMNG,$PRM31,$SC04,$MDL3,$W38B,$MT303,$CPF0,$FM3U,$RSF1&crop=1400,850,300,130&",
            year: "2019",
            miles: "25,648",
            fuelEconomy: "120/112 MPGe city/highway",
            color: "Midnight Silver",
            drivetrain: "Long Range All-Wheel Drive",
            vin: "5YJ3E1EB7KF386211"
        },
        {
            model: "Model S",
            price: "$107,760",
            images: "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=FRONT34&size=1400&model=ms&options=$MDLS,$MTS13,$PPMR,$WS11,$APBS,$SC04,$CPF1,$ICW00,$ST0Y&crop=1400,850,300,130&",
            year: "2023",
            miles: "411",
            fuelEconomy: "124/155 MPGe city/highway",
            color: "Red Multi-Coat",
            drivetrain: "Dual Motor All-Wheel Drive",
            vin: "no vin number available",
        },
        {
            model: "Model X",
            price: "$124,490",
            images: "https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=FRONT34&size=1400&model=mx&options=$MDLX,$MTX13,$PPSB,$WX00,$APBS,$CC01,$SC04,$CPF0,$ICW00,$ST0Y&crop=1400,850,300,130&",
            year: "2023",
            miles: "less than 50 miles",
            fuelEconomy: "107/97 MPGe city/highway",
            color: "Deep Blue Metallic",
            drivetrain: "Dual Motor All-Wheel Drive",
            vin: "no vin number available",
        },
    ]);

    console.log(teslas)

    process.exit();

})();