export const Filter = (props) => (
  <form>
    <div>
      filter shown with:
      <input value={props.searchName} onChange={props.handle} />
    </div>
  </form>
);
