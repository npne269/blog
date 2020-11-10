import React, { useState } from 'react';
import './AddBlog.css';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@material-ui/core';
import imgphp from '../postAcceptor.php';

function AddBlog() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    
    const handletagsChange = (e) => {
        setTags(e.target.value);
    }
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleEditorChange = (content) => {
        setContent(content)
    }
    const submitBlog = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(tags);
        console.log(content);
        setTitle('');
        setContent('');
    }

    return (
        <div className="addBlog">
            <h1>Add Blog</h1>
            <form className="addBlog__form" onSubmit={submitBlog}>
                <label htmlFor="title">Title:</label><br />
                <input value={title} onChange={handleTitleChange} className="addBlog__input" type="text" id="title" placeholder="Blog Header Here" required />
                <br />
                <label htmlFor="tags">Categories:</label><br />
                <select value={tags} onChange={handletagsChange} className="addBlog__input" id="tags" name="tags">
                    <option value="politics">Politics</option>
                    <option value="sports">Sports</option>
                    <option value="food">Food</option>
                    <option value="tech">Tech</option>
                </select>
                <Editor
                    apiKey='wtoda244ejw7txflkripi4z857niz7t7tsgt2fvgsp1ogf02'
                    initialValue="<p>Design your blog here.</p>"
                    init={{
                        height: 600,
                        skin: 'bootstrap',
                        menubar: false,
                        images_upload_url: `../postAcceptor.php`,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic underline anchor |forecolor backcolor| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image media link| help'
                    }}
                    onEditorChange={handleEditorChange}
                />
                <Button className="addBlog__submit" type="submit">Save</Button>
            </form>
        </div>
    )
}

export default AddBlog
