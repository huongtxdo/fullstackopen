const SearchCountries = (props) => (
    <form>
        <div>
            find countries  
            <input value={props.searchName} onChange={props.handleSearchName}/>
        </div>
    </form>
)

export default SearchCountries