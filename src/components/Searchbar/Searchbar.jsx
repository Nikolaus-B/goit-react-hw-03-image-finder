import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ submitClick }) => {
  return (
    <Header>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          submitClick(e.target[1].value);
          e.target[1].value = '';
        }}
      >
        <SearchFormButton type="submit"></SearchFormButton>

        <SearchFormInput
          name="input-search-img"
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
