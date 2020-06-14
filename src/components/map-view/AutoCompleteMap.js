import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
// import 'react-google-places-autocomplete/dist/index.min.css';
 
const AutoCompleteComponent = () => (
  <div>
    <GooglePlacesAutocomplete
    onSelect={({ description }) => (
      this.setState({ address: description })
    )}
    renderInput={(props) => (
        <div className="custom-wrapper">
          <input
            // Custom properties
            {...props}
          />
        </div>
    )}
    />
  </div>
);
 
export default AutoCompleteComponent;