// css file import
import '../Components/navBar.css'


const NavBar = ({ handleDelete, selectedCount }) => {

    // ff no files are selected, display the title "Gallery" 
    if (selectedCount === 0) {
        return (
            <div className="navbar">
                <h1>Gallery</h1>
            </div>
        );
    }

    return (
        // if files are selected, display how many files selected and the delete button

        <div className="navbar">
            <div className="navbar-content">
                <label>
                    <input type="checkbox" />
                    {selectedCount > 0 ? `${selectedCount} file${selectedCount > 1 ? 's' : ''} selected` : 'File Selected'}
                </label>

                  {/* Button to delete selected files */}
                <button onClick={handleDelete}>
                    {selectedCount === 1 ? 'Delete File' : 'Delete Files'}
                </button>
            </div>
        </div>
    );
};

export default NavBar;



