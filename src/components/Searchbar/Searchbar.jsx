import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

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
        <SearchFormButton type="submit">
          <AiOutlineSearch size={30} />
        </SearchFormButton>

        <SearchFormInput
          name="input-search-img"
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
