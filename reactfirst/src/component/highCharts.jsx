import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const HighChartsExample=()=>{
    const options={
        title:{
            text:'Daily Active User'
        },
        subtitle:{
            text:'user activity'
        },
        series:[{
            data:[[1,],[5, 2], [6, 3], [8, 2],[10,4]],
            type:'spline',
            color: 'purple',
            name:'Fruits',lineWidth:5
        }],
        xAxis:{
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            plotLines:[{ dashStyle:"Dash",
            color:'grey',
            zIndex:2,
            value:3,
             width:3
            }]
        },
        yAxis:{
            gridLineWidth:1,
            min:0,
            
           
        }
        
       
    }
    return(
        <div>
            <h1>HighCharts Example</h1>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            
            />
        </div>
    )
    
}
export default HighChartsExample;