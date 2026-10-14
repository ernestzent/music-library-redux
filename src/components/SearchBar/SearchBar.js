import { useState } from 'react';
import { Button, Form, Input } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../../redux/slices/searchSlice';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.search);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            dispatch(fetchSongs(inputValue));
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text" 
                placeholder="Busca un artista (ej. Coldplay)" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Buscando...' : 'Buscar'}
            </Button>
        </Form>
    );
};

export default SearchBar;