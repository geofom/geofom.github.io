Highcharts.chart("container",{
    chart:{
        type:"bar"
    },
    title:{
        text: "Mediebruk gjennom årene"
    },
    subtitle:{
        text: "Kilde: <a href='https://www.ssb.no/medie'>SSB Mediebarometer</a>"
    },
    xAxis:{
            categories:["Papiravis", "Fjernsyn", "Bøker", "Internett"],
            title:{
                text:null
            }
    },
    yAxis:{
        min:0,
        title:{
            text:"Gjennomsnittlig mediebruk i minutter per dag",
            align: "high"
        },
        labels:{
            overflow: "justify"
        }
    },
    tooltip:{
        valueSuffix:" minutter"
    },
    plotOptions:{
        bar:{
            dataLabales:{
                enabled:true
            }
        }
    },
    legend:{
        layout:"vertical",
        align:"right",
        verticalAlign:"top",
        x:-40,
        y:80,
        floating:true,
        borderWidth:1,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow:true
    },
    credits:{
        enabled:false
    },
    series:[ 
        {name:"2000",
        data:[34, 138, 12, 18]},
        {name:"2001",
        data:[31, 156, 12, 21]},
        {name:"2002",
        data:[31, 146, 14, 22]},
        {name:"2003",
        data:[32, 141, 12, 30]},
        {name:"2004",
        data:[30, 142, 12, 33]},
        {name:"2005",
        data:[29, 147, 15, 44]},
        {name:"2006",
        data:[29, 148, 14, 53]},
        {name:"2007",
        data:[29, 155, 13, 62]},
        {name:"2008",
        data:[27, 145, 13, 65]},
        {name:"2009",
        data:[25, 148, 15, 73]},
        {name:"2010",
        data:[23, 152, 14, 85]},
        {name:"2011",
        data:[24, 157, 17, 86]},
        {name:"2012",
        data:[21, 131, 17, 94]},
        {name:"2013",
        data:[21, 133, 17, 112]},
        {name:"2014",
        data:[19, 132, 15, 120]},
        {name:"2015",
        data:[16, 107, 16, 127]},
        {name:"2016",
        data:[14, 112, 16, 140]},
        {name:"2017",
        data:[11, 104, 15, 158]},
        {name:"2018",
        data:[11, 98, 14, 167]},
        {name:"2019",
        data:[9, 78, 13, 178]}]
})