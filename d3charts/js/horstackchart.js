votesharedata = [{"party":"Party","votes":"votes","votes%":"votes%","status":"status"},{"party":"CPIM","votes":58,"votes%":41.42857142857143,"status":"lead"},{"party":"INC","votes":22,"votes%":15.714285714285714,"status":"lead"},{"party":"CPI","votes":19,"votes%":13.571428571428571,"status":"lead"},{"party":"IUML","votes":18,"votes%":12.857142857142858,"status":"lead"},{"party":"IND","votes":6,"votes%":4.285714285714286,"status":"lead"},{"party":"Others","votes":17,"votes%":12.142857142857142,"status":"lead"}]


function drawHorizontalStackChart(selection, stackdata, props) {

//     var hordivcont = d3.select(selection)
//         .append("div").attr("class", "bars")
//         .style("display", "flex")
//     var hordivconttxt = d3.select(selection)
//         .append("div").attr("class", "bartexts")
//         .style("display", "flex")
    
//     hordivcont.html(null)

//     stackdata = stackdata.filter(function(obj1){
//         //console.log("test", obj1.party !== "");
//         return obj1.party !== "";
//     })

//    if(props.type === "CurrentLeadCand"){

        

//         var formatDecimal = d3.format(",.2f");
        
//             var colorsAlliance = d3.scaleOrdinal()
//                 .range(['#cc342a', '#1454a2','#1454a2','#cc342a', '#1454a2', '#eaadaa', '#a3bbda', 'grey','lightgrey', "#E9E9E9"])
//                 .domain(['Trump', 'Biden','Clinton', 'Republicans-New', 'Democrats-New', 'Republicans', 'Democrats', 'Others','Others-New', "Undecided"]);

//             hordivcont.selectAll('div.bar')
//                 .data(stackdata).enter().append('div')
//                 .attr("class",function(d,i){
//                     // console.log("bar", d);
//                     return d[props.textLabel] + " bar";
//                 })
//                 .style("box-sizing","border-box")
//                 .transition().duration(1000)
//                 .style("width",function(d,i){
//                         return d[props.numberLabel]+"%";
//                     })
//                 .style("background-color", function(d,i){
//                     // console.log(d.party)
//                    if(d.won === 'lead'){
//                         return  partycolors[partyAbbrList[d[props.textLabel]]];
//                     }else{
//                         return  partycolorsmapwin[partyAbbrList[d[props.textLabel]]];
//                     }
//                 })
//                 .attr("title", function(d){
//                     return d[props.textLabel] +": "+ d[props.displayLabel];
//                 })
//                 .text(function(d){
//                     return d[props.displayLabel];
//                 })
            
//             hordivconttxt.selectAll('div.bartexts')
//                 .data(stackdata).enter().append('div')
//                 .attr("class",function(d,i){
//                     // console.log("bar", d);
//                     return d[props.textLabel] + " bartext";
//                 })
//                 .style("box-sizing","border-box")
//                 .transition().duration(1000)
//                 .style("width",function(d,i){
//                         return d[props.numberLabel]+"%";
//                     })
//                 .text(function(d){
//                     return partyAbbrList[d[props.textLabel]] ;
//                 })

//     }if(props.type === "CurrentLeadCand2"){

        

//         var formatDecimal = d3.format(",.2f");
        
//             var colorsAlliance = d3.scaleOrdinal()
//                 .range(['#cc342a', '#1454a2','#1454a2','#cc342a', '#1454a2', '#eaadaa', '#a3bbda', 'grey','lightgrey', "#E9E9E9"])
//                 .domain(['Trump', 'Biden','Clinton', 'Republicans-New', 'Democrats-New', 'Republicans', 'Democrats', 'Others','Others-New', "Undecided"]);

//             hordivcont.selectAll('div.bar')
//                 .data(stackdata).enter().append('div')
//                 .attr("class",function(d,i){
//                     // console.log("bar", d);
//                     return d[props.textLabel] + " bar";
//                 })
//                 .style("box-sizing","border-box")
//                 .transition().duration(1000)
//                 .style("width",function(d,i){
//                         return d[props.numberLabel]+"%";
//                     })
//                 .style("background-color", function(d,i){
//                     // console.log(d.party)
//                     return  partycolors[partyAbbrList[d[props.textLabel]]];
//                 })
//                 .attr("title", function(d){
//                     return d[props.textLabel] +": "+ d[props.displayLabel];
//                 })
//                 .text(function(d){
//                     return formatDecimal(d[props.displayLabel]);
//                 })
            
//             hordivconttxt.selectAll('div.bartexts')
//                 .data(stackdata).enter().append('div')
//                 .attr("class",function(d,i){
//                     // console.log("bar", d);
//                     return d[props.textLabel] + " bartext";
//                 })
//                 .style("box-sizing","border-box")
//                 .transition().duration(1000)
//                 .style("width",function(d,i){
//                         return d[props.numberLabel]+"%";
//                     })
//                 .text(function(d){
//                     return partyAbbrList[d[props.textLabel]] ;
//                 })

//     }
   

} // end of horstackchart