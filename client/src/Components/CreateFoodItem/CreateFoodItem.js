import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowListFoodItem from '../ShowListFoodItem/ShowListFoodItem';

export class CreateFoodItem extends Component {
  state = {
    nameEN: '',
    nameAR: '',
    note: '',
    nutritionalValue: {
      id: 0,
      fat: 0,
      carbohydrates: 0,
      protein: 0,
      calories: 0,
      baseQuantity: 0,
      unit: {
        id: 0,
        codeAR: '',
        codeEN: '',
        gramsRatio: 0,
      },
    },
    types: [{ id: 0, typeEN: '', typeAR: '', typeCategory: 0 }],
    result: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://behealthadmin-001-site1.btempurl.com/api/Item', this.state)
      .then((response) => {
        console.log(response, 'hereee');
      })
      .catch((error) => {
        console.log(error, 'errrorrrrrrrr');
      });
  };

  componentDidMount = () => {
    axios
      .get(
        'http://behealthadmin-001-site1.btempurl.com/api/Configuration/Types',
        this.state
      )
      .then((response) => {
        // console.log(response, 'hereee');
        this.setState({ types: response.data });
        console.log(this.state.types, 'types here');
      })
      .catch((error) => {
        console.log(error, 'errrorrrrrrrr');
      });
  };

  // colauctCloires = () => {
  //   var calories =
  //     this.state.fat * 9 + this.state.carbs * 4 + this.state.protien * 4;
  //   this.setState({ result: calories });
  // };
  render() {
    // const { nameEN, nameAR, note, nutritionalValue, types } = this.state;
    return (
      <div>
        {/* show list item food */}
        <div className='pb-3'>List Food Item</div>

        <div className='container sadow'>
          <ShowListFoodItem />
        </div>
        {/* end show list item food */}
        {/* <!-- Button trigger modal --> */}
        <button
          type='button'
          className='btn btn-primary '
          data-bs-toggle='modal'
          data-bs-target='#staticBackdrop'
        >
          +
        </button>

        {/* <!-- Modal --> */}
        <form onSubmit={this.submitHandler}>
          <div
            className='modal fade'
            id='staticBackdrop'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabIndex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-lg'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='staticBackdropLabel'>
                    Create new item
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body '>
                  <div className='d-flex m-1'>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Name EN'
                      required='true'
                      name='nameEN'
                      value={this.state.nameEN}
                      onChange={this.handleChange}
                    />
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Name AR'
                      required='true'
                      name='nameAR'
                      value={this.state.nameAR}
                      onChange={this.handleChange}
                    />
                    <select
                      class='form-select'
                      aria-label='Default select example'
                      required='true'
                      name='types'
                      value={this.state.types}
                      onChange={this.handleChange}
                    >
                      {this.state.types.map((element, i) => {
                        return <option value={i}>{element.typeEN}</option>;
                      })}
                    </select>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Note'
                      name='note'
                      value={this.state.note}
                      onChange={this.handleChange}
                    />
                  </div>
                  <hr />

                  <div className='d-flex m-1'>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Base quantity'
                      required='true'
                      name='baseQuantity'
                      // value={baseQuantity}
                      onChange={this.handleChange}
                    />

                    <select
                      class='form-select'
                      aria-label='Default select example'
                      required='true'
                    >
                      <option selected>Unit</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Fat'
                      required='true'
                    />
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Carbs'
                      required='true'
                    />
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Protein'
                      required='true'
                      value={this.state.nutritionalValue.protein}
                      onChange={this.handleChange}
                    />
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Calories'
                      required='true'
                      readonly
                      value='200'
                    />
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Cancle
                  </button>
                  <button type='submit' className='btn btn-primary'>
                    Greate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateFoodItem;

// function CreateFoodItem() {

//   axios.post('/http://behealthadmin-001-site1.btempurl.com/api/Item').then(
//     (response) => {
//       console.log(response, 'hhhhhhhhhhhh');
//     },
//     (error) => {
//       console.log(error, 'noooooooo');
//     }
//   );
// const variables = {
//   id: itemId,
//   nameEN: nameEN,
//   nameAR: nameAR,
//   note: note,
//   nutritionalValue: {
//     id: id,
//     fat: fat,
//     carbohydrates: carbohydrates,
//     protein: protein,
//     baseQuantity: baseQuantity,
//     calories: calories,
//   },
// };
//   return (
//     <div>
//       <div>Create Food Item</div>

//       {/* <!-- Button trigger modal --> */}
//       <button
//         type='button'
//         className='btn btn-primary '
//         data-bs-toggle='modal'
//         data-bs-target='#staticBackdrop'
//       >
//         +
//       </button>

//       {/* <!-- Modal --> */}
//       <div
//         className='modal fade'
//         id='staticBackdrop'
//         data-bs-backdrop='static'
//         data-bs-keyboard='false'
//         tabIndex='-1'
//         aria-labelledby='staticBackdropLabel'
//         aria-hidden='true'
//       >
//         <div className='modal-dialog modal-lg'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5 className='modal-title' id='staticBackdropLabel'>
//                 Create new item
//               </h5>
//               <button
//                 type='button'
//                 className='btn-close'
//                 data-bs-dismiss='modal'
//                 aria-label='Close'
//               ></button>
//             </div>
//             <div className='modal-body '>
//               <div className='d-flex m-1'>
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Name EN'
//                   required='true'
//                 />
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Name AR'
//                   required='true'
//                 />
//                 <select
//                   class='form-select'
//                   aria-label='Default select example'
//                   required='true'
//                 >
//                   <option selected>Type</option>
//                   <option value='1'>One</option>
//                   <option value='2'>Two</option>
//                   <option value='3'>Three</option>
//                 </select>
//                 <input class='form-control' type='text' placeholder='Note' />
//               </div>
//               <hr />

//               <div className='d-flex m-1'>
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Base quantity'
//                   required='true'
//                 />

//                 <select
//                   class='form-select'
//                   aria-label='Default select example'
//                   required='true'
//                 >
//                   <option selected>Unit</option>
//                   <option value='1'>One</option>
//                   <option value='2'>Two</option>
//                   <option value='3'>Three</option>
//                 </select>
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Fat'
//                   required='true'
//                 />
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Carbs'
//                   required='true'
//                 />
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Protein'
//                   required='true'
//                 />
//                 <input
//                   class='form-control'
//                   type='text'
//                   placeholder='Calories'
//                   required='true'
//                   readonly
//                   value='200'
//                 />
//               </div>
//             </div>
//             <div className='modal-footer'>
//               <button
//                 type='button'
//                 className='btn btn-secondary'
//                 data-bs-dismiss='modal'
//               >
//                 Cancle
//               </button>
//               <button type='button' className='btn btn-primary'>
//                 Greate
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateFoodItem;
