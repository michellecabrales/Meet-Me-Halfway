import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import background from '../../images/drive.png'
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

    function checkLocations(){
      if (coordinates.lat == null){
        return "Please enter 2 locations."
      }
      if (coordinates.lng == null){
        return "Please enter 2 locations."
      }
      if (coordinates2.lat == null){
        return "Please enter 2 locations."
      }
      if (coordinates2.lng == null){
        return "Please enter 2 locations."
      }
      else {
        return "Please enter 2 locations."
      }
    }

    const [coordinatesMid, setCoordinatesMid] = React.useState({
      lat: null,
      lng: null
    });

    var midLat = 0;
    var midLon = 0;

    function midPoint()
    {
      if(coordinates.lat == null)
        return;
      if(coordinates.lng == null)
        return;
      if(coordinates2.lat == null)
        return;
      if(coordinates2.lng == null)
        return;
   
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
      
      midLon = Math.atan2(y, x);
      let hyp = Math.sqrt((x*x) + (y*y));
      midLat = Math.atan2(z, hyp);

      midLat = midLat * (180 / Math.PI);
      midLon = midLon * (180 / Math.PI);

      alert(midLat + " " + midLon);
    }

    return (
      <div>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {
            ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p>
    
                <input {...getInputProps({ placeholder: "Type address" })} />
    
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


        <PlacesAutocomplete
          value={address2}
          onChange={setAddress2}
          onSelect={handleSelect2}
        >
          {
            ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <p>Latitude: {coordinates2.lat}</p>
                <p>Longitude: {coordinates2.lng}</p>
    
                <input {...getInputProps({ placeholder: "Type address" })} />
    
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
        <button onClick={() => midPoint()}>Click me</button>
      </div>
    )
}