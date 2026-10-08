import { useState } from 'react';
import { Button, Form, Input } from './styles';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onSearch(inputValue);
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
            <Button type="submit">Buscar</Button>
        </Form>
    );
};

export default SearchBar;