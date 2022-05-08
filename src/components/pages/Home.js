import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import background from '../../images/drive.png'
import Button from '@mui/material/Button'
import { Paper } from '@mui/material';
import MyGoogleMap from '../map/MyGoogleMap';
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function Home() {  
  const themebtn = createTheme({
    palette: {
        primary:{
            main: "#15cdfc",
        } 
    }
  });
    const KEY = 'YOUR_GOOGLE_API_KEY';
    const [place1, setPlace1] = React.useState("");
    const [place2, setPlace2] = React.useState("");
    const [place3, setPlace3] = React.useState("");

    const [place1ID, setPlace1ID] = React.useState("");
    const [place2ID, setPlace2ID] = React.useState("");
    const [place3ID, setPlace3ID] = React.useState("");  
    
    const [place1Vicinity, setPlace1Vicinity] = React.useState("");
    const [place2Vicinity, setPlace2Vicinity] = React.useState("");
    const [place3Vicinity, setPlace3Vicinity] = React.useState("");

    
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
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mLat},${mLon}&key=${KEY}`;

      //fetching information for the mid point
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
          findMidPointLocations();
          findPlaceDetails();
    }
    function findMidPointLocations()//fetching places around the mid point location using api search
    {
      let sb = document.querySelector('#location-type');
      let placeType = sb.value;

      const url2 = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${mLat},${mLon}&rankby=distance&type=${placeType}&key=${KEY}`;
      fetch(url2)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let sum = 0;
        for (let i = 0; i < data.results.length; i++) {
          sum = sum + 1;
          if(i == 0){
            setPlace1(data.results[i].name);
            setPlace1ID(data.results[i].place_id);
          }
          if(i == 1){
            setPlace2(data.results[i].name);
            setPlace2ID(data.results[i].place_id);
          }
          if(i == 2)
          {
            setPlace3(data.results[i].name);
            setPlace3ID(data.results[i].place_id);
          }
        }         
      })
    }
    function findPlaceDetails(){
      let urlplace1 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place1ID}&key=${KEY}`;
          fetch(urlplace1)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setPlace1Vicinity(data.result.formatted_address);
          })

         let urlplace2 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place2ID}&key=${KEY}`;
          fetch(urlplace2)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setPlace2Vicinity(data.result.formatted_address);
          })

          let urlplace3 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place3ID}&key=${KEY}`;
          fetch(urlplace3)
          .then(response => response.json())
          .then(data => {
            console.log(data); 
            setPlace3Vicinity(data.result.formatted_address);       
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
                  <Box p={3}>
                  <h3>Choose a location type:</h3>
                  <select name="location-type" id="location-type">      
                      <option value="restaurant">Restaurant</option>
                      <option value="park">Park</option>                                     
                      <option value="store">Store</option>
                      <option value="atm">ATM</option>  
                      <option value="airport">Airport</option>  
                      <option value="shopping_mall">Shopping Mall</option> 
                      <option value="bar">Bar</option>  
                      <option value="campground">Camping</option>  
                      <option value="library">Library</option>      
                  </select>
                  </Box>
                </Box>
                <Box>
                  <ThemeProvider theme={themebtn}>
                  <Button variant='contained' onClick={() => midPoint()}>Find Halfway</Button>
                  </ThemeProvider>
                </Box>
                <Box p={3}>
                  <p>{midState}</p>
                  <p>{setMidCity}</p>
                  <Box p={3}sx={{backgroundColor: "#ADD8E6"}}>
                    <b>Location 1:</b>
                    <p>{place1}</p>
                    <i>{place1Vicinity}</i>
                  </Box>
                  <br/>
                  <Box p={3}sx={{backgroundColor: "#ADD8E6"}}>
                    <b>Location 2:</b>
                    <p>{place2}</p>
                    <i>{place2Vicinity}</i>
                  </Box>
                  <br/>
                  <Box p={3}sx={{backgroundColor: "#ADD8E6"}}>
                    <b>Location 3:</b>
                    <p>{place3}</p>
                    <i>{place3Vicinity}</i>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>   
        </div>
        <Box sx={{my: 5,mx: 5,width: "70%",flexDirection: 'row'}}>
          <MyGoogleMap />
        </Box>
      </div> 
    )
}