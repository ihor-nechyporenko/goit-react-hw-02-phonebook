import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;
