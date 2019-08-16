/*!
    ChartBox.js
    Copyright (c) 2016 Jan Novak <jan.novak@disneyresearch.com>
    Released under the MIT license

    Permission is hereby granted, free of charge, to any person obtaining a copy of this
    software and associated documentation files (the "Software"), to deal in the Software
    without restriction, including without limitation the rights to use, copy, modify,
    merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be included in all copies
    or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var chartBoxSettings = {
    width: 1152
};

var ChartBox = function(parent, stats) {

    function createBarChart(data, options) {
        var canvas = document.createElement('canvas');
        canvas.className = "chart-canvas";

        canvas.width = chartBoxSettings.width-20;
        canvas.height = 600;

        var ctx = canvas.getContext("2d");
        var myBarChart = new Chart(ctx).Bar(data, options);

        return canvas;
    }

    var selectorGroup = document.createElement("div");
    selectorGroup.className = "selector-group";

    this.selectors = [];
    for (var i = 0; i < stats.length; i++) {
        var selector = document.createElement("div");
        selector.className = "selector selector-primary";
        if (i == 0)
            selector.className += " active";
        selector.appendChild(document.createTextNode(stats[i]['title']));

        selector.addEventListener("click", function(idx, event) {
            this.selectChart(idx);
        }.bind(this, i));

        this.selectors.push(selector);
        selectorGroup.appendChild(selector);
    }

    var h1 = document.createElement("h1");
    h1.className = "title";
    h1.appendChild(document.createTextNode("Charts"));

    var help = document.createElement('div');
    help.appendChild(document.createTextNode("Relative performance, obtained by dividing the reconstruction error by the default path traced rendering error. For each method, we show, from left to right, the improvement at 4, 16, 32, 64 and 128 samples per pixel. For RMSE and 1-SSIM, lower values are better. For PSNR, higher values are better."));
    help.className = "help";

    var box = document.createElement("div");
    box.className = "chart-box";
    box.style.width = chartBoxSettings.width+"px";
    box.appendChild(h1);
    box.appendChild(help);
    box.appendChild(selectorGroup);

    this.charts = [];
    var options = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.1)",
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke : false,
        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing : 10,
        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    }

    for (var i = 0; i < stats.length; ++i) {

        var data = [];
        data['labels'] = stats[i]['labels'].slice(1,stats[i]['labels'].length);
        data['datasets'] = [];

        var brightColor = [155,210,255];
        var darkColor   = [31,141,214];

        for (var j = 0; j < stats[i]['series'].length; ++j) {
            data['datasets'][j] = {}
            values = stats[i]['series'][j]['data'].slice(0);
            for (var k = 0; k < values.length; ++k) {
                values[k] = values[k] / stats[i]['series'][j]['data'][0];
            }

            var alpha = stats[i]['series'].length > 1 ? j / (stats[i]['series'].length-1) : 1;
            var color = [alpha * darkColor[0] + (1-alpha) * brightColor[0],
                         alpha * darkColor[1] + (1-alpha) * brightColor[1],
                         alpha * darkColor[2] + (1-alpha) * brightColor[2]];
            var colorString = "rgba("+Math.round(color[0])+","+Math.round(color[1])+","+Math.round(color[2])+",0.8)";

            data['datasets'][j]['label'] = stats[i]['series'][j]['label'];
            data['datasets'][j]['data'] = values.slice(1,values.length);
            data['datasets'][j]['fillColor'] = colorString;
            data['datasets'][j]['strokeColor'] = colorString;
            data['datasets'][j]['highlightFill'] = colorString;
            data['datasets'][j]['highlightStroke'] = colorString;
        }

        var chart = document.createElement("div");
        chart.appendChild(createBarChart(data, options));
        chart.style.marginLeft = 'auto';
        chart.style.marginRight = 'auto';
        if (i == 0) {
            chart.style.display = 'block';
        } else {
            chart.style.display = 'none';
        }
        this.charts.push(chart);
        box.appendChild(chart);
    }

    parent.appendChild(box);


    ChartBox.prototype.selectChart = function(idx) {

        for (var i = 0; i < this.charts.length; i++) {

            if (i == idx) {
                this.charts[i].style.display = 'block';
                this.selectors[i].className += " active";
            } else {
                this.charts[i].style.display = 'none';
                this.selectors[i].className = this.selectors[i].className.replace( /(?:^|\s)active(?!\S)/g , '');
            }
        }
    }
}
