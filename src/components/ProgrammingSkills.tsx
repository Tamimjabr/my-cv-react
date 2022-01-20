import Chart from 'react-apexcharts'
import { Skill, skills } from '../data/programming-skills';
import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')`
  margin: 2rem 0;
  width: 80%;
`

const ProgrammingSkills = () => {
  const state = {
    series: [{
      data: skills.map(skill => skill.level),
    }],
    options: {
      chart: {
        width: '100%'
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors: skills.map(skill => skill.color),
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff']
        },
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 50,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#000000']
      },
      xaxis: {
        categories: skills.map((skill: Skill) => skill.name),
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
        text: 'Programming Skills',
        // align: 'center',
        floating: true
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
    },
  }
  return (
    <StyledDiv>
      <Chart options={state.options} series={state.series} type="bar" width={'100%'} height={600} />
    </StyledDiv>)
}

export default ProgrammingSkills;
