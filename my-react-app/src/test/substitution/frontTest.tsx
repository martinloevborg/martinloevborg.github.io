/*
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import Barholder from '../components/Barholder.tsx'
      
      const MyComponent: React.FC = () => {
          const [error, setError] = useState<string | null>(null);
          const [firstTrace, setFirstTrace] = useState<any>();
      
          useEffect(() => {
              const fetchData = async () => {
                  try {
                      const response1 = await fetch('http://localhost:80/test123');
                      if (!response1.ok) {
                          throw new Error('Failed to fetch data');
                      }
                      const data1 = await response1.json();
      
                      setFirstTrace({
                          type: 'scatter',
                          mode: 'lines',
                          name: 'AGLBaro for all drones',
                          x: data1.map((item: any) => item._time),
                          y: data1.map((item: any) => item._value),
                          line: { color: 'red' }
                      });
      
                  } catch (error) {
                      console.error('Error fetching data:', error);
                      setError('Failed to fetch data');
                  }
              };
      
              fetchData();
          }, []);
      
          if (error) {
              return <div>
                Error fetching data: {error} 
                <Barholder/>
                </div>;
          }
      
          return (
              <div>
                <div style={{ flexDirection: "row" }}>
                  <div style={{ flexDirection: "column" }}>
                  <div style={{ display: "flex"}}>
                        {firstTrace && (
                            <Plot
                                data={[firstTrace]}
                                layout={{ title: 'Drone heights the past 7 days', width: 1400 }}
                            />
                        )}
                    </div>
                    </div>
                  </div>
                </div>
              
          );
      };
      
      export default MyComponent;
*/









/*
//-------------------------------------------------
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [firstTrace, setFirstTrace] = useState<any>();
    const [timeRange, setTimeRange] = useState('12h'); // State to manage the selected time range

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the backend server
                const response = await fetch(`http://localhost:80/test?timeRange=${timeRange}`);
                //const response = await fetch(`http://localhost:80/test?timeRange=6h`);
                
                //const response = await fetch(`http://localhost:80/test`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Create the trace for Plotly
                const trace = {
                    type: 'scatter',
                    mode: 'lines',
                    name: 'Altitude',
                    x: data.map((item: any) => item._time),
                    y: data.map((item: any) => item._value),
                    line: { color: 'red' }
                };

                // Update the state with the trace data
                setFirstTrace(trace);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        // Fetch data when the component mounts or when the time range changes
        fetchData();
    }, [timeRange]);

    // Define a list of available time range options for the dropdown
    const timeRanges = ['1h', '6h', '12h', '24h'];

    return (
        <div>
            
            <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
            >

                {timeRanges.map((range) => (
                    <option key={range} value={range}>
                        {range}
                    </option>
                ))}
            </select>


            {error && <div>Error fetching data: {error}</div>}

            
            {firstTrace && (
                <Plot
                    data={[firstTrace]}
                    layout={{ title: 'Altitude over Time' }}
                />
            )}
        </div>
    );
};

export default App;*/







/*
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {
    const [timeRange, setTimeRange] = useState('1h');
    const [measurements, setMeasurements] = useState<string[]>([]);
    const [data, setData] = useState<any[]>([]);

    const availableMeasurements = ['measurement1', 'measurement2', 'measurement3']; // Replace with actual measurements

    const fetchData = async () => {
        try {
            // Join the selected measurements with commas and include them in the request
            const measurementsParam = measurements.join(',');

            const response = await fetch(`http://localhost/testid?timeRange=${timeRange}&measurements=${measurementsParam}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const fetchedData = await response.json();

            // Create the trace for Plotly
            const trace = {
                type: 'scatter',
                mode: 'lines',
                name: 'Altitude',
                x: fetchedData.map((item: any) => item._time),
                y: fetchedData.map((item: any) => item._value),
                line: { color: 'red' }
            };
            
            setData([trace]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Fetch data when the time range or measurements change
        fetchData();
    }, [timeRange, measurements]);

    // Function to handle checkbox change
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setMeasurements((prevMeasurements) => {
            if (checked) {
                // Add the measurement to the list
                return [...prevMeasurements, value];
            } else {
                // Remove the measurement from the list
                return prevMeasurements.filter((measurement) => measurement !== value);
            }
        });
    };

    return (
        <div>
            
            <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
            >
                <option value="1h">1 hour</option>
                <option value="6h">6 hours</option>
                <option value="12h">12 hours</option>
                <option value="24h">24 hours</option>
            </select>

            
            <div>
                {availableMeasurements.map((measurement) => (
                    <div key={measurement}>
                        <input
                            type="checkbox"
                            id={measurement}
                            value={measurement}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={measurement}>{measurement}</label>
                    </div>
                ))}
            </div>

           
            {data.length > 0 && (
                <Plot
                    data={data}
                    layout={{ title: 'Altitude over Time' }}
                />
            )}
        </div>
    );
};

export default App;
*/









/*
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [firstTrace, setFirstTrace] = useState<any>();
    const [startTime, setStartTime] = useState('2024-05-09T05:14:43.465Z'); // Default start time
    const [stopTime, setStopTime] = useState('2024-05-09T17:14:43.465Z'); // Default stop time

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Construct the URL with the start and stop times
                const response = await fetch(`http://localhost:80/test?startTime=${startTime}&stopTime=${stopTime}`);
                console.log(`URL requested: http://localhost:80/test?startTime=${startTime}&stopTime=${stopTime}`);
                //const response = await fetch('http://localhost:80/test123');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Create the trace for Plotly
                const trace = {
                    type: 'scatter',
                    mode: 'lines',
                    name: 'Altitude',
                    x: data.map((item: any) => item._time),
                    y: data.map((item: any) => item._value),
                    line: { color: 'red' }
                };

                // Update the state with the trace data
                setFirstTrace(trace);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        // Fetch data when the component mounts or when the start and stop times change
        fetchData();
    }, [startTime, stopTime]);

    return (
        <div>
          
            <div>
                <label>
                    Start Time:
                    <input
                        type="datetime-local"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </label>
                <label>
                    Stop Time:
                    <input
                        type="datetime-local"
                        value={stopTime}
                        onChange={(e) => setStopTime(e.target.value)}
                    />
                </label>
            </div>

          
            {error && <div>Error fetching data: {error}</div>}

           
            {firstTrace && (
                <Plot
                    data={[firstTrace]}
                    layout={{ title: 'Altitude over Time' }}
                />
            )}
        </div>
    );
};

export default App;*/









import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const App: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [firstTrace, setFirstTrace] = useState<any>();
    const [timeRange, setTimeRange] = useState('12h'); // State to manage the selected time range
    const [startTime, setStartTime] = useState<string>(''); // State to manage the start time
    const [stopTime, setStopTime] = useState<string>(''); // State to manage the stop time

    useEffect(() => {
        // Calculate start and stop times based on the selected time range
        const calculateTimeRange = () => {
            const now = new Date(); // Current time

            // Calculate the stop time
            const stopTime = now.toISOString();

            // Calculate the start time based on the selected time range
            let startTime = new Date();
            if (timeRange === '1h') {
                startTime.setHours(now.getHours() - 1);
            } else if (timeRange === '6h') {
                startTime.setHours(now.getHours() - 6);
            } else if (timeRange === '12h') {
                startTime.setHours(now.getHours() - 12);
            } else if (timeRange === '24h') {
                startTime.setHours(now.getHours() - 24);
            }

            setStartTime(startTime.toISOString());
            setStopTime(stopTime);
        };

        // Call the function to calculate times
        calculateTimeRange();

        // Fetch data from the backend server
        const fetchData = async () => {
            try {
                // Use the startTime and stopTime as query parameters
                const response = await fetch(`http://localhost:80/test?startTime=${startTime}&stopTime=${stopTime}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Create the trace for Plotly
                const trace = {
                    type: 'scatter',
                    mode: 'lines',
                    name: 'Altitude',
                    x: data.map((item: any) => item._time),
                    y: data.map((item: any) => item._value),
                    line: { color: 'red' }
                };

                // Update the state with the trace data
                setFirstTrace(trace);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        // Fetch data whenever the time range, start time, or stop time changes
        fetchData();
    }, [timeRange, startTime, stopTime]);

    // Define a list of available time range options for the dropdown
    const timeRanges = ['1h', '6h', '12h', '24h'];

    return (
        <div>
            {/* Dropdown to select the time range */}
            <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
            >
                {/* Render an option for each time range */}
                {timeRanges.map((range) => (
                    <option key={range} value={range}>
                        {range}
                    </option>
                ))}
            </select>

            {/* Display an error message if fetching data fails */}
            {error && <div>Error fetching data: {error}</div>}

            {/* Render the Plotly chart if the trace data is available */}
            {firstTrace && (
                <Plot
                    data={[firstTrace]}
                    layout={{ title: 'Altitude over Time' }}
                />
            )}
        </div>
    );
};

export default App;