import { useState } from "react";
import { 
    RiPushpinFill, RiPushpinLine, RiBookmarkFill, RiBookmarkLine, 
    RiThumbUpLine, RiThumbUpFill, RiChat4Line, RiShareForwardLine,
    RiVerifiedBadgeFill 
} from "react-icons/ri";

const ForumPost = ({name, championParent = false, role, time, text, votes: initialVotes, replies, bookmarked: initialBookmarked = false, pinned: initialPin = false}) => {
    const [votes, setVotes] = useState(initialVotes);
    const [upvoted, setUpvoted] = useState(false);
    const [bookmarked, setBookmarked] = useState(initialBookmarked);
    const [pinned, setPin] = useState(initialPin);

    const handleUpvote = () => {
        if (upvoted) {
            setVotes(votes - 1);
        } else {
            setVotes(votes + 1);
        }
        setUpvoted(!upvoted);
    };

    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    const handlePin = () => {
        setPin(!pinned);
    };
    
    return (
        <div className='w-full h-auto bg-white rounded-xl p-4 space-y-2.5'>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                    <div className='w-[48px] h-[48px] bg-[#CAE7FC] rounded-full flex justify-center items-center text-xl'>
                        🚀
                    </div> 

                    <div className="flex flex-col">
                        <div className="flex space-x-1">
                            <h4 className="text-[14px]">{name}</h4>
                            {championParent && <RiVerifiedBadgeFill size={20} color="#F8BE1E"/>}
                        </div>
                        <p className="post-info">{role} • {time}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div>
                        {pinned ? <RiPushpinFill size={20} color="#777777"/> 
                        : <RiPushpinLine size={20} color="#777777"/>}
                    </div>
                    <button onClick={handleBookmark}>
                        {bookmarked ? <RiBookmarkFill size={20} color="#777777"/> 
                        : <RiBookmarkLine size={20} color="#777777"/>}
                    </button>
                </div>
            </div>

            <p className="post-text">{text}</p>

            <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                    <div className="flex justify-center items-center space-x-2">
                        <button onClick={handleUpvote}>
                            {upvoted ? <RiThumbUpFill size={16} color="#777777" /> 
                            : <RiThumbUpLine size={16} color="#777777" />}
                        </button>
                        <p className="post-text">{votes} votes</p>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <RiChat4Line size={16} color="#777777"/>
                        <p className="post-text">{replies} replies</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-2">
                    <RiShareForwardLine size={16} color="#777777"/>
                    <p className="post-text">Share</p>
                </div>
            </div>
        </div>
    );
};

export default ForumPost;
