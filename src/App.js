import React, {useState} from 'react';
import users from "./likes.json";
import './App.css';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUser1, setSelectedUser1] = useState(null);
    const [selectedUser2, setSelectedUser2] = useState(null);
    const [counter, setCounter] = useState(1);

    const pickRandomUser = () => {
        const randomIndex = Math.floor(Math.random() * users.length);
        if(counter === 1) {
            setSelectedUser(users[randomIndex]);
            setCounter(2);
        } else if(counter === 2){
            setSelectedUser1(users[randomIndex]);
            setCounter(3);
        } else if(counter === 3){
            setSelectedUser2(users[randomIndex]);
            setCounter(0);
        }
    };

    return (
        <div className="container text-center mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram Logo"
                    style={{ width: '50px', marginRight: '10px' }}
                />
                <h1>Instagram Random Like Picker</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <h1>Total Likes: {users.length}</h1>
            </div>

            {/* Scrollable User List */}
            <div
                className="mt-4 mx-auto"
                style={{
                    height: '200px', // Fixed height for scrolling
                    overflowY: 'scroll', // Enables vertical scroll
                    border: '1px solid #ddd',
                    padding: '10px',
                    width: '50%',
                    backgroundColor: '#f9f9f9',
                }}
            >
                {users.map((user, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-between mb-2">
                        <img
                            src={user.avatar}
                            alt={user.username}
                            className="rounded-circle"
                            style={{ width: '40px', height: '40px', marginRight: '10px' }}
                        />
                        <span className="text-end">{user.username}</span>
                    </div>
                ))}
            </div>

            <button onClick={pickRandomUser} className="btn btn-primary btn-lg mt-4">
                Pick Random User
            </button>

            <div className="d-flex mx-auto justify-content-center">
            {selectedUser && (
                <div className="card mt-4 mx-1" style={{ width: '18rem' }}>
                    <img
                        src={selectedUser.avatar}
                        className="card-img-top rounded-circle mx-auto mt-3"
                        alt={selectedUser.username}
                        style={{ width: '150px' }}
                    />
                    {
                        selectedUser.fullname &&
                        <div className="card-body pb-0">
                            <h5 className="card-title">{selectedUser.fullname}</h5>
                        </div>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{selectedUser.username}</h5>
                    </div>
                </div>
            )}
            {selectedUser1 && (
                <div className="card mt-4 mx-1" style={{ width: '18rem' }}>
                    <img
                        src={selectedUser1.avatar}
                        className="card-img-top rounded-circle mx-auto mt-3"
                        alt={selectedUser1.username}
                        style={{ width: '150px' }}
                    />
                    {
                        selectedUser1.fullname &&
                        <div className="card-body pb-0">
                            <h5 className="card-title">{selectedUser1.fullname}</h5>
                        </div>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{selectedUser1.username}</h5>
                    </div>
                </div>
            )}
            {selectedUser2 && (
                <div className="card mt-4 mx-1" style={{ width: '18rem' }}>
                    <img
                        src={selectedUser2.avatar}
                        className="card-img-top rounded-circle mx-auto mt-3"
                        alt={selectedUser2.username}
                        style={{ width: '150px' }}
                    />
                    {
                        selectedUser2.fullname &&
                        <div className="card-body pb-0">
                            <h5 className="card-title">{selectedUser2.fullname}</h5>
                        </div>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{selectedUser2.username}</h5>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default App;
