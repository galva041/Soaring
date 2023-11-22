

const Definition = ({word, type, syllables, pronounce, def}) => {
    
    return (
        <div className='z-3 absolute left-6 top-4 sm:top-[205px] bg-white drop-shadow-2xl rounded-2xl px-5 py-3.5'>
            <h1 className="text-center">{word}</h1>
            
            <h2 className="mt-1 mb-1.5">{type} | {syllables} | {pronounce}</h2>

            <h2>
                Definition of {word}
                <ul className="list-decimal ml-8">
                    <li>{def}</li>
                </ul>
            </h2>

            <div class="sm:hidden w-0 h-0 absolute -bottom-6 left-12
                border-l-[15px] border-l-transparent
                border-t-[25px] border-t-white
                border-r-[15px] border-r-transparent">
            </div>

            <div class="hidden sm:block w-0 h-0 absolute -top-6 left-12
                border-l-[15px] border-l-transparent
                border-b-[25px] border-b-white
                border-r-[15px] border-r-transparent">
            </div>
        </div>
    )
};

export default Definition;