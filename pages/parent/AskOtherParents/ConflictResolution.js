import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";
import { 
    RiSearchLine, RiArrowUpDownLine, RiChatNewLine,
    RiVoiceprintLine, RiImageAddLine,
} from "react-icons/ri";

import ParentNavbar from '@/components/parentNavbar';
import ForumPost from '@/components/forumPost';

const posts = [
    { name: "KellyK23", championParent: true, role: "Parent Champion", time: "1 min ago",
    text: "I have two children (8M and 5M) who constantly fight over toys and attention. It’s becoming a daily struggle to keep the peace. What strategies have worked for other parents to manage sibling conflicts?",
    votes: 0, replies: 0,
    recent: true, bookmarked: false, trending: false, recommended: false, pinned: false, },
    { name: "Stevie88", role: "Parent", time: "10 mins ago",
    text: "My 4-year-old daughter has intense temper tantrums whenever we try to leave the park or a playdate. How can we help her manage her emotions and reduce these outbursts?",
    votes: 18, replies: 2,
    recent: true, bookmarked: false, trending: false, recommended: false, pinned: false, },
    { name: "Polly12", role: "Parent", time: "14 mins ago",
    text: "My daughter (9F) becomes very upset when it’s time to turn off the TV or tablet, leading to frequent conflicts. Any advice on setting boundaries and resolving these disputes more peacefully?",
    votes: 32, replies: 5,
    recent: true, bookmarked: true, trending: false, recommended: false, pinned: false, },
    { name: "Joshi09", championParent: true, role: "Parent Champion", time: "2 days ago",
    text: "I recently remarried and my stepdaughter (9F) and son (7M) are having a hard time getting along. They seem to be constantly at odds - especially over shared spaces. How can we help them build a better relationship and resolve conflicts more peacefully?",
    votes: 892, replies: 46,
    recent: false, bookmarked: false, trending: true, recommended: false, pinned: true, },
    { name: "MattyLHP", role: "Parent", time: "2 days ago",
    text: "Our daughter (8F) with ADHD has difficulty resolving conflicts with her peers, leading to frustration and isolation. Any strategies that have worked for other parents in similar situations?",
    votes: 180, replies: 12,
    recent: false, bookmarked: true, trending: true, recommended: false, pinned: false, },
    { name: "Chloe92", championParent: true, role: "Parent Champion", time: "3 days ago",
    text: "My 9-year-old son with ADHD often finds himself in conflicts with classmates. His impulsivity seems to be a major factor. How can we support him in developing better conflict resolution skills?",
    votes: 717, replies: 60,
    recent: false, bookmarked: false, trending: true, recommended: false, pinned: false, },
    { name: "Zara86", role: "Parent", time: "1 week ago",
    text: "I have a child (7M) who often gets into arguments with other kids on the playground. They seems to struggle with sharing and taking turns. Any advice on how to teach him better conflict resolution skills in this setting?",
    votes: 302, replies: 34,
    recent: false, bookmarked: false, trending: true, recommended: false, pinned: false, },
    { name: "Bilkis Miah", role: "Moderator", time: "1 weeks ago",
    text: "Check out this video by the Sesame Workshop channel on Helping Kids Resolve Conflicts: https://www.youtube.com/results?search_query=conflict+resolution+for+kids",
    votes: 103, replies: 15,
    recent: false, bookmarked: false, trending: false, recommended: true, pinned: false, },
    { name: "Bilkis Miah", role: "Moderator", time: "8 weeks ago",
    text: "Hello parent community! Another amazing resource by the Child Mind Institute on Teaching Kids How to Deal With Conflict: https://childmind.org/article/teaching-kids-how-to-deal-with-conflict/",
    votes: 719, replies: 327,
    recent: false, bookmarked: false, trending: false, recommended: true, pinned: true, },
    { name: "Chamari Abeysekera", role: "Moderator", time: "10 weeks ago",
    text: "Hey parent community, what’s your best piece of advice for resolving conflicts? Let’s all learn from each other! :)",
    votes: 812, replies: 1024,
    recent: false, bookmarked: true, trending: false, recommended: true, pinned: true, },
];

export default function ConflictResolution() {
    const [filter, setFilter] = useState('All');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [textareaValue, setTextareaValue] = useState("");
    const [isPlaceholder, setIsPlaceholder] = useState(true);

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#EBF3FA');
    }, []);

    const router = useRouter();

    const navToUnderConst = () => {
        router.push('/parent/UnderConstruction');
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        setTextareaValue('');
        setIsPlaceholder(true);
    };
    const handleOpenPopup = () => {
        setIsPopupVisible(true);
    };
    const handleInputChange = (e) => {
        if (isPlaceholder) {
            setIsPlaceholder(false); 
            setTextareaValue(e.target.value);
        } else {
            setTextareaValue(e.target.value);
        }
    };
    const handlePost = () => {
        const newPost = { name: "Me", role: "Parent", time: "10 seconds ago",
        text: textareaValue,
        votes: 0, replies: 0,
        recent: true, bookmarked: false, trending: false, recommended: false, pinned: false, };
        
        posts.unshift(newPost);
        setIsPopupVisible(false);
        setIsPlaceholder(true);
        setTextareaValue('');
    };
    const isPostButtonDisabled = !textareaValue.trim() || isPlaceholder;

    const filterPosts = (filter) => {
        switch (filter) {
            case 'Recommended':
                return posts.filter(post => post.recommended).reverse();
            case 'Trending':
                return posts.filter(post => post.trending); 
            case 'Most Recent':
                return posts.filter(post => post.recent); 
            case 'Bookmarked':
                return posts.filter(post => post.bookmarked); 
            default:
                return posts;
        }
    };

    return (
        <main
        className="relative flex flex-col space-y-4 bg-gray-blue w-screen pt-4 pb-32"
        > 
            <div className='flex justify-between items-center w-screen px-6 pt-2.5'>
                <button onClick={() => router.back()}>
                    <IoChevronBackOutline size={28} color="#777777"/>
                </button>

                <div className='space-x-2'>
                    <button>
                        <RiArrowUpDownLine size={28} color="#777777" />
                    </button>
                    <button>
                        <RiSearchLine size={28} color="#777777" />
                    </button>
                </div>
            </div>

            <h5 className='w-full sm:w-[490px]'>
                Conflict Resolution
            </h5> 

            <div className='overflow-x-auto flex space-x-2 w-full sm:w-[490px] pb-2'>
                {['All', 'Recommended', 'Trending', 'Most Recent', 'Bookmarked'].map(category => (
                    <button
                        key={category}
                        className={`${filter === category? 'btn-post-pick' : 'btn-not-pick'}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='relative flex flex-col overflow-y-auto w-full sm:w-[490px] h-max space-y-5'>
                {filterPosts(filter).map((post,index) => (
                    <ForumPost 
                        key={post.name + index}
                        name={post.name}
                        championParent={post.championParent}
                        role={post.role}
                        time={post.time}
                        text={post.text}
                        votes={post.votes}
                        replies={post.replies}
                        bookmarked={post.bookmarked}
                        pinned={post.pinned}
                    />
                ))}

                <button className='fixed bottom-[80px] right-[10%] sm:right-[20%] lg:right-[25%] bg-blue p-3 rounded-full'
                onClick={handleOpenPopup}>
                    <RiChatNewLine size={28} color="#FFFFFF" />
                </button>
            </div>
            
            {isPopupVisible && (
                <div className='w-screen fixed inset-0 px-6 flex items-center justify-center bg-black bg-opacity-10 z-10'>
                    <div className='flex flex-col bg-white w-full sm:w-[490px] rounded-xl p-4 space-y-2'>
                        <div className='flex items-start space-x-3'>
                            <div className='min-w-[48px] h-[48px] bg-[#CAE7FC] rounded-full flex justify-center items-center text-xl'>
                                🚀
                            </div> 
                            <textarea 
                                rows="4"
                                cols="30"
                                type="text"
                                placeholder="What's on your mind today?"
                                className="w-[95%] h-[85px] border-none"
                                value={textareaValue}
                                onChange={handleInputChange}
                                required
                                >
                            </textarea>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex space-x-2'>
                                <RiVoiceprintLine size={20} color="#777777" />
                                <RiImageAddLine size={20} color="#777777" />
                                <IoMdLink size={20} color="#777777" />
                            </div>
                            <div className='flex space-x-3'>
                                <button className='font-semibold text-[12px] text-black'
                                onClick={handleClosePopup}>
                                    Cancel
                                </button>
                                <button className={`font-semibold text-[12px] text-white bg-blue rounded-full w-full py-1.5 px-5 ${isPostButtonDisabled && 'opacity-60'}`}
                                onClick={handlePost}
                                disabled={isPostButtonDisabled}>
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ParentNavbar home={true} insights={false}/>
        </main>
    )
}