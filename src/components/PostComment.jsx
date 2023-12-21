import React from 'react';
import axios from 'axios';

class PostComment extends React.Component {
    state = {
        comment: '' 
    };

    handleInputChange = (e) => {
        this.setState({ comment: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { bookId } = this.props;
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NWE4NWI1MjViYjAwMThlZDA4OTIiLCJpYXQiOjE3MDMxNzI3NDEsImV4cCI6MTcwNDM4MjM0MX0.MqyGj9rVA73xnyHt6rWKry33R2TRIinH6ycjbB6NUUE'
    
        try {
            const response = await axios.post(`https://striveschool-api.herokuapp.com/api/books/comments/`, {
                comment: this.state.comment,
            }, {
                headers: {
                    "Authorization": `Bearer ${tokenAPI}`
                }
            });
    
            this.setState({ 
                comment: '',
                feedback: 'Commento inviato con successo!'
            });
        } catch (error) {
            this.setState({
                feedback: 'Errore nell\'invio del commento'
            });
            console.error("Errore nell'invio del commento", error);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'contents' }}>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleInputChange}
                    placeholder="Scrivi un commento..."
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className='justify-content-center'>Invia Commento</button>
            </form>
        );
    }
}

export default PostComment;
