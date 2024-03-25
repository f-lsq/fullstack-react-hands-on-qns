import React, {useState} from 'react'

export default function AirQuality(){

    const [psi, setPsi] = useState(0);
    const [color, setColor] = useState("green")

    const getAirQualityText = () => {
        if (psi > 200) {
          return "hazardous"
        } else if (psi > 150) {
          return "unhealthy"
        } else if (psi > 51) {
          return "moderate"
        } else {
          return "healthy"
        }
      }
    
    const getAirQualityColor = (psiValue) => {
      if (psiValue > 200) {
        return "red";
      } else if (psiValue > 150) {
        return "orange";
      } else if (psiValue > 51) {
        return "yellow";
      } else {
        return "green";
      }
    }

    const handleInputChange = (e) => {
      const newPsi = parseInt(e.target.value);
      setPsi(newPsi);
      const newColor = getAirQualityColor(newPsi);
      setColor(newColor);

    }
    

    return (
      <React.Fragment>
        <div>
            <label>Enter the PSI:</label>
            <input  type="text" 
                    value={psi} 
                    onChange={handleInputChange}
            />
        </div>
        <h1>Air Quality</h1>
        <div id="air-quality" 
             style={{color: color}}
        >
            {getAirQualityText()}
        </div>
      </React.Fragment>
    )
    
}