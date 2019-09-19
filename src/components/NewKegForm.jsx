import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _pintsLeft = 124;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pint: _pintsLeft.value,});
    _name.value = '';
    _brand.value = '';
    _alcoholContent.value = '';
    _pintsLeft.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='brand'
            placeholder='brand'
            ref={(input) => {_brand = input;}}/>
            <input
              type='text'
              id='price'
              placeholder='price'
              ref={(input) => {_price = input;}}/>
              <input
                type='text'
                id='alcoholContent'
                placeholder='alcohol content'
                ref={(input) => {_alcoholContent = input;}}/>
              <button type='submit'>Create</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
