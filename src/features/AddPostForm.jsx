import { useState } from 'react';


const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    console.log(content ,title)
    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title</label>
                <input type='text'
                    id='postTitle' name='postTitle'
                    value={title} onChange={onTitleChange}
                />
                
                <br />
                <br />
               
                <label htmlFor='contentTitle'>Post Content</label>
                <input type='text' id='contentTitle' name='contentTitle' 
                        value={content} onChange={onContentChange}
                />
            </form>

        </section>
    );
}

export default AddPostForm;
