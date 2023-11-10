import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <Header>
      <SearchForm>
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
