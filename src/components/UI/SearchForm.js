import React, {Component} from 'react';
import Button from './Button';
// 3) also create a new path using the value
//4) Redirect the user -> the history object allows us to move back and forth between past visited URL's
    //this.props.history.push(newPath)
class SearchForm extends Component {
    state = {
        searchInputValue: ''
    }

    //when the X svg is clicked, clear the search input
    clearSearchInput = () => {
        this.setState({searchInputValue: ''});
    }

    updateInputValue = e => {
        this.setState({searchInputValue: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const searchQuery = this.query.value;
        const queryPath = `/${searchQuery}`;
        this.props.getImagesHandler(searchQuery);
        e.currentTarget.reset();
        //redirect the user to the new path
        // this.props.history.push(queryPath);
    }

    render () {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    onChange={this.updateInputValue} 
                    value={this.state.searchInputValue}
                    ref={ (input) => this.query = input}
                    required/>
                <Button 
                    btnType="submit" 
                    styles="search-button">
                        <svg onClick={this.clearSearchInput} fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                </Button>
            </form>
        );
    }
};

export default SearchForm;