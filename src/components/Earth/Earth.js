import './Earth.css';
import React, { Component } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

class Earth extends Component {
  componentDidMount() {

    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);


    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoOrthographic(),
      deltaLatitude: -20,
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      hideCredits: true,
      wheelX: "none",
      wheelY: "none"
    }));


    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      fill: am5.color('#566dff'),
      stroke: am5.color('#000033'),
      cursorOverStyle: 'pointer'
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true,
      cursorOverStyle: 'pointer'

    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      interactive: true,
      fill: am5.color('#91a0ff')
    });







    let backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color('#000033'),
      stroke: am5.color('#000033'),
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });



    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 3,
          fill: am5.color(0xff0000)
        })
      });
    });

    let line1 = pointSeries.pushDataItem({ latitude: 20.5937, longitude: 78.9629 });
    let line2 = pointSeries.pushDataItem({ latitude: 35.8617, longitude: 104.1954 });
    let line3 = pointSeries.pushDataItem({ latitude: 35.9078, longitude: 127.7669 });
    let line4 = pointSeries.pushDataItem({ latitude: 36.2048, longitude: 138.2529 });
    let line5 = pointSeries.pushDataItem({ latitude: 40.4637, longitude: 3.7492 });
    let line6 = pointSeries.pushDataItem({ latitude: 46.2276, longitude: 2.2137 });
    let line7 = pointSeries.pushDataItem({ latitude: 51.1657, longitude: 10.4515 });

    // Create line series
    let lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {})
    );


    lineSeries.pushDataItem({
      pointsToConnect: [line1, line2, line3, line4, line5, line6, line7]
    });

    lineSeries.mapLines.template.setAll({
      stroke: '#46a832'
    })
    

    // Rotate animation
    chart.animate({
      key: "rotationX",
      from: 0,
      to: 360,
      duration: 30000,
      loops: Infinity
    });


    // Make stuff animate on load
    chart.appear(1000, 100);


    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default Earth;