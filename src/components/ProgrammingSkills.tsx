import Chart from 'react-apexcharts'
import { Skill, skills } from '../data/programming-skills';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledDiv = styled('div')`
  margin: 2rem 0;
  width: 80%;
  text-align:center;
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
        enabled: false,
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
        width: 0.5,
        colors: ['#ffffff']
      },
      xaxis: {
        categories: skills.map((skill: Skill) => skill.name),

      },
      yaxis: {
        labels: {
          show: true,
          style: {
            fontSize: '0.8rem'
          }
        }
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
      <Typography variant="h4" sx={{ m: '0 0 2rem 0', wordBreak: 'break-word' }}>
        Programmeringskunskaper
      </Typography>
      <Chart options={state.options} series={state.series} type="bar" width={'100%'} height={600} />
    </StyledDiv>)
}

export default ProgrammingSkills;
