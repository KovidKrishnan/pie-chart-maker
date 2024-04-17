import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "donut",
        },
        dataLabels: {
          enabled: true,
        },
        legend: {
          position: "top",
          offsetY: 0,
          height: 60,
        },
        labels: [], // Initialize labels here
        tooltip: {
          y: {
            formatter: function (value) {
              return value;
            },
          },
        },
      },
    };
  }

  componentDidMount() {
    this.updateLabels();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.updateLabels();
    }
  }

  updateLabels() {
    const { data } = this.props;
    const labels = data.map((item) => item.name);
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        labels: labels,
      },
    }));
  }

  render() {
    const { data } = this.props;

    // Extracting values from the provided data
    let series = data.map((item) => item.value);

    const total = series.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const seriesData = series.map((value) => (value / total) * 360);

    return (
      <div>
        <div>
          <div className="chart-wrap">
            <div id="chart">
              <ReactApexChart
                options={this.state.options}
                series={seriesData}
                type="donut"
                height={700}
                width={380}
                className="d-flex justify-content-center flex-column"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
