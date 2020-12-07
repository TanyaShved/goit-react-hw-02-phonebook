import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
  return (
    <div>
      <label className={s.textInput}>
        {title}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={s.formInput}
        />
      </label>
    </div>
  );
};

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default Filter;
