import { FC, useState } from 'react';
import Send from "./Assets/Send.svg";
import User from "./Assets/User.png";
import Bot from "./Assets/Bot.png";
import Loader from "./Assets/Loader.svg";

const App: FC = () => {

    const [input, setInput] = useState<string>("");

    const [posts, setPosts] = useState<string[]>([]);

    return (
        <div className="App">
            <div className="main-container">
                <div className="container">
                    {posts.map((post, index) => {
                        return (
                            <div className="chat">
                                <div className="avatar">
                                    <img src={User} />
                                </div>
                                <div className="post">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Harum quos quisquam quidem repellendus, non magni ut vero dolorum
                                    perspiciatis ea veniam aperiam sunt, voluptatibus quae laudantium iure.
                                    Laborum, consequuntur doloribus?
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="chat bot">
                        <div className="avatar">
                            <img src={Bot} />
                        </div>
                        <div className="post">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum quos quisquam quidem repellendus, non magni ut vero dolorum
                            perspiciatis ea veniam aperiam sunt, voluptatibus quae laudantium iure.
                            Laborum, consequuntur doloribus?
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="input">
                <input
                    type="text"
                    className="client-data"
                    autoFocus
                    placeholder="Ask Anything!"
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="send-btn" >
                    <img src={Send} />
                </div>
            </div>
        </div>
    )
};

export default App;