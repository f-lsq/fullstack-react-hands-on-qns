import React, {useState} from 'react'

export default function Library() {

    const [books, setBooks] = useState(
        [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags':['futuristic', 'classics']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre':'fantasy',
                'tags':['door-stopper', 'trilogy']
            }
        ]
    )

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [tags, setTags] = useState([]);

    const [indexToEdit, setIndexToEdit] = useState(0);
    const [toggleState, setToggleState] = useState(false);

    function toggleDisplay(){
        setToggleState(!toggleState)
    }
    
    const handleCheckboxChange = (e) => {
        const {value, checked} = e.target;
        // value = e.target.value
        // checked = e.target.checked
        if (checked) {
            if(tags.length > 0) {
                setTags([...tags, value]);
            } else {
                setTags([value]);
            }
        } else {
            let tagsArray = tags.filter(
                (tag) => tag !== value //filter out values that are not checked
            )
            setTags(tagsArray);
        }
    }

    const addBook = () => {
        let newBook = {
            'id': books.length + 1,
            'title': title,
            'author': author,
            'genre': genre,
            'tags': tags
        }

        setBooks([...books, newBook])
    }

    const updateBook = () => {
        let updatedBook = {
            'id': books[indexToEdit].id,
            'title': title,
            'author': author,
            'genre': genre,
            'tags': tags
        }

        let left = books.slice(0, indexToEdit);
        let right = books.slice(indexToEdit+1);
        let updatedBooks = [...left, updatedBook, ...right];
        setBooks(updatedBooks);
    }

    const displayEditBook = () => {
        <div>
            
        </div>
        
    }

    const cancelEditBook = () => {

    }

    const displayBooks = () => {
        books.map((book, index)=>{
            <>
                <div style={{border: "1px solid black"}}>
                    <li>Id: {book.id}</li>
                    <li>Title: {book.title}</li>
                    <li>Author: {book.author}</li>
                    <li>Genre: {book.genre}</li>
                    <li>Tags: {book.tags}</li>
                </div>
                <button onClick={()=>{
                    toggleDisplay(); 
                    setIndexToEdit(index); 
                    setTitle(book.title);
                    setAuthor(book.author);
                    setGenre(book.genre);
                    setTags(book.tags);
                    displayEditBook()
                    }}>Edit</button>
            </>
        })
    }

    return <React.Fragment>
        <div class="container">
            <div class="col">
                {displayBooks()}
            </div>

            <div class="col">

            <h3>Add Book</h3>
            <div>
                <label>Title:</label>
                <input type="text" 
                       name="title" 
                       value={title} 
                       onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" value="fantasy" checked={(e) => setGenre(e.target.value)}/><label>Fantasy</label>
                <input type="radio" name="genre" value="science-fiction" checked={(e) => setGenre(e.target.value)}/><label>Fantasy</label>
                <input type="radio" name="genre" value="romance" checked={(e) => setGenre(e.target.value)}/><label>Romance</label>
            </div>
            <div>
                <label>Tags</label>
                <input type="checkbox" name="tags" value="classic" checked={tags.includes('classic')}/><label>Classic</label>
                <input type="checkbox" name="tags" value="doorstopper" checked={tags.includes('doorstopper')}/><label>Doorstopper</label>
                <input type="checkbox" name="tags" value="futuristic" checked={tags.includes('futuristic')}/><label>futuristic</label>
                <input type="checkbox" name="tags" value="trilogy" checked={tags.includes('trilogy')}/><label>trilogy</label>
            </div>
            <button onClick={addBook}>Add Book</button>
            </div>
        </div>
    </React.Fragment>
}
