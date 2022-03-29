import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import background from '../../images/drive.png'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material';
import MyGoogleMap from '../map/MyGoogleMap';
export default function Home() {  

    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
      lat: null,
      lng: null
    });
  
    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAddress(value);
      setCoordinates(latLng);
    };

    const [address2, setAddress2] = React.useState("");
    const [coordinates2, setCoordinates2] = React.useState({
      lat: null,
      lng: null
    });

    const handleSelect2 = async value2 => {
      const results2 = await geocodeByAddress(value2);
      const latLng2 = await getLatLng(results2[0]);
      setAddress2(value2);
      setCoordinates2(latLng2);
    };
    const [midLat, setMidLat] = React.useState(0);
    const [midLng, setMidLng] = React.useState(0);
    const [midCountry, setMidCountry] = React.useState("");
    const [midState, setMidState] = React.useState("");
    const [midCity, setMidCity] = React.useState("");

    const [coordinatesMid, setCoordinatesMid] = React.useState({
      lat: null,
      lng: null
    });

    let mLat = 0;
    let mLon = 0;
    
    function midPoint()       
    {
      setMidState("");
      setMidCity("");
      setMidCountry("");

      if(coordinates.lat == null){
        alert("Please enter 2 locations.");
        return;
      }
      if(coordinates.lng == null)
      {
        alert("Please enter 2 locations.");
        return;
      }
      if(coordinates2.lat == null){
        alert("Please enter 2 locations.");
        return;
      }
      if(coordinates2.lng == null){
        alert("Please enter 2 locations.");
        return;
      }
   
      let lat = coordinates.lat * (Math.PI / 180);
      let lng = coordinates.lng * (Math.PI / 180);
      let lat2 = coordinates2.lat * (Math.PI / 180);
      let lng2 = coordinates2.lng * (Math.PI / 180);

      let x1 = Math.cos(lat) * Math.cos(lng);
      let y1 = Math.cos(lat) * Math.sin(lng);
      let z1 = Math.sin(lat);

      let x2 = Math.cos(lat2) * Math.cos(lng2);
      let y2 = Math.cos(lat2) * Math.sin(lng2);
      let z2 = Math.sin(lat2);

      let x = (x1 + x2) / 2;
      let y = (y1 + y2) / 2;
      let z = (z1 + z2) / 2;
      
      mLon = Math.atan2(y, x);
      let hyp = Math.sqrt((x*x) + (y*y));
      mLat = Math.atan2(z, hyp);

      mLat = mLat * (180 / Math.PI);
      mLon = mLon * (180 / Math.PI);

      setMidLat(mLat);
      setMidLng(mLon);
      const KEY = 'YOUR_GOOGLE_API_KEY';
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mLat},${mLon}&key=${KEY}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let parts = data.results[0].address_components;
          parts.forEach (part => {
              if(part.types.includes("country")){
                setMidCountry(part.long_name);
              }
              
              if(part.types.includes("locality")){
                setMidCity(part.long_name);
              }
              
              if(part.types.includes("administrative_area_level_1")){
                setMidState(part.long_name);
              }
              
          })
            
        })
    }
    return (
      <div class="main">
      <div>  
        <Box p={5}>
          <Paper>
            <Box p={5}>
              <Box p = {3}>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {
                  ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <h3>Address 1</h3>
                      <div class="address-field">
                        <TextField id="outlined-basic" label="Address 1" variant="outlined" size="small" {...getInputProps({ placeholder: "Type address" })} />
                      </div>
                      <div>
                        {loading ? <div>...loading</div> : null}
          
                        {suggestions.map(suggestion => {
                          const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                          };
                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                }
              </PlacesAutocomplete>
              </Box>
              <Box p={3}>
              <PlacesAutocomplete
                value={address2}
                onChange={setAddress2}
                onSelect={handleSelect2}
              >
                {
                  ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <h3>Address 2</h3>                    
                      <div class="address-field">
                        <TextField id="outlined-basic" label="Address 2" variant="outlined" size="small"{...getInputProps({ placeholder: "Type address" })} />
                      </div>
                      <div>
                        {loading ? <div>...loading</div> : null}
          
                        {suggestions.map(suggestion => {
                          const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                          };
          
                          return (
                            <div {...getSuggestionItemProps(suggestion, { style })}>
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
                }
              </PlacesAutocomplete>
              </Box>
              <Box p={3}>
                <Button variant='contained' onClick={() => midPoint()}>Find Halfway</Button>
              </Box>
              <Box p={3}>
                <p>Latitude: {midLat} Longitude: {midLng} </p>
                <p>{midCountry}</p>
                <p>{midState}</p>
                <p>{midCity}</p>
              </Box>
            </Box>
          </Paper>
        </Box>   
      </div>
      <Box sx={{
        my: 5,
        mx: 5,
        width: "70%",
        flexDirection: 'row'
      }}>
        <MyGoogleMap />
      </Box>
      </div>
    )
}
