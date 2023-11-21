const Affirmation = ({num}) => {
    
    return (
        <div className='w-full mb-3'>
            <h2>Affirmation {num}</h2>
            <input type="text" 
            placeholder="Tap here to type"> 
            </input>
        </div>
    )
};

export default Affirmation;