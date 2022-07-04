import React, { useState, useRef } from "react";
import './App.css';
import { FaStar } from "react-icons/fa";
import { useForm } from 'react-hook-form';





function App() {
  const formref = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onsubmitit = ele => {
    alert(JSON.stringify(ele))
    formref.current.reset()
  }




  return (
    <main>

      <form ref={formref} onSubmit={handleSubmit(onsubmitit)} id="newon">
        <div style={styles.container}>
          <h2> Submit Comments </h2>
          <hr />
          <h3> Rating :</h3>
          <input type="number" min={1} max={5} {...register('rating', { required: { value: true, message: ' Give your rating' } })} />
          {errors.rating && (<span>{errors.rating.message}</span>)}



          <br />
          <div>
            <lable>NAME:</lable>
          </div>

          <input type="text" placeholder="Username"{...register('userName', { required: { value: true, message: 'Enter a your name' }, minLength: { value: 2, message: 'Name Length should be greater than 2' }, maxLength: { value: 15, message: 'Name Length should be lesser than 15' } })} />
          {errors.userName && (<span>{errors.userName.message}</span>)}
          <br />
          <lable>COMMENTS:</lable>
          <textarea
            placeholder="Comments "
            style={styles.textarea}
            {...register('com', { required: { value: true, message: ' give your feedback comment' } })}
          />

          <button
            style={styles.button}
          >
            Submit
      </button>
          <br />
        </div>
      </form>
    </main>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },

  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 200
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
  }

};




export default App;
