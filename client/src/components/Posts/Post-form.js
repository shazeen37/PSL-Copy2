import React, { useState } from 'react';
//import PropTypes from 'props-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <div class='post-form'>
      <div class='bg-primary p'>
        <h3>Upload a Gesture</h3>
      </div>
      <form
        class='form my-1'
        on
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText(' ');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Write short Description of your Gesture'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' class='btn btn-dark my-1' value='Upload Gesture' />
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

//PostForm.PropTypes = { addPost: PropTypes.func.isRequired };

export default connect(null, { addPost })(PostForm);
