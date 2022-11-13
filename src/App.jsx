import AddPostForm from "./features/AddPostForm"
import Counter from "./features/counter/Counter"
import PostList  from "./features/PostList"

function App() {
  return (
    <div className="App">
      <h3>Home Page</h3>
      <AddPostForm />
      <PostList/>
    </div>
  )
}

export default App
