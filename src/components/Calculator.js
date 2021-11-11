import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

function Op({ operation, cb }) {
  return (
    <button type="button" className="operation" onClick={cb}>
      {operation}
    </button>
  );
}

function Number({ num, cb }) {
  const style = {};
  if (num === '0') {
    style['grid-column'] = 'span 2';
  }

  return (
    <button type="button" style={style} className="number" onClick={cb}>
      {num}
    </button>
  );
}

Number.propTypes = {
  num: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

Op.propTypes = {
  operation: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });
  const numberSectionButtons = [];
  ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach((el) => {
    numberSectionButtons.push(<Number
      num={`${el}`}
      cb={() => {
        setState((old) => calculate(old, `${el}`));
      }}
    />);
  });

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h1 className="fw-bold fs-1 orange mt-5 text-decoration-underline">Lets do some math!!</h1>
      <div className="calculator mt-5 border border-5 border-light shadow-lg">
        <input className="quote" placeholder="0" value={state.next ? state.next : state.total} readOnly />
        <div className="buttons">
          <div className="number-section">
            {numberSectionButtons}
          </div>
          <div className="operation-section">
            <Op operation="÷" cb={() => setState((old) => ({ ...old, ...calculate(old, '÷') }))} />
            <Op operation="x" cb={() => setState((old) => ({ ...old, ...calculate(old, 'x') }))} />
            <Op operation="-" cb={() => setState((old) => ({ ...old, ...calculate(old, '-') }))} />
            <Op operation="+" cb={() => setState((old) => ({ ...old, ...calculate(old, '+') }))} />
            <Op operation="=" cb={() => setState((old) => ({ ...old, ...calculate(old, '=') }))} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
