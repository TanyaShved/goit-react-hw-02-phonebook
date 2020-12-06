import PropTypes from 'prop-types';

const Filter = ({ title, value, onChange }) => {
  return (
    <div>
      <label>
        {' '}
        {title}
        <input type="text" value={value} onChange={onChange} />
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
