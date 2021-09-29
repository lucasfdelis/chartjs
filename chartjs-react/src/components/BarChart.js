// import React from 'react'
import useFetch from "react-fetch-hook"
// import axios from "axios"

const BarChart = () => {
    var data = useFetch("http://localhost:3001/produtos");
    var teste = JSON.stringify(data.data.map(function(e) {
            return e.nome;
         }))
    // var barChartData = JSON.parse(teste);
    // var labels = barChartData.map(function(e) {
    //     return e.id;
    //  });
    return <div>{teste}</div>
}

export default BarChart